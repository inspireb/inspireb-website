/**
 * =============================================================================
 *  InspireB — Réception du formulaire de contact
 * -----------------------------------------------------------------------------
 *  Ce fichier ne fonctionne QUE sur Cloudflare Pages. Sur GitHub Pages, il est
 *  simplement ignoré (c'est pour ça que FORMULAIRE_ACTIF est à false dans
 *  src/pages/contact.astro tant que la migration n'est pas faite).
 *
 *  COMMENT ÇA MARCHE
 *  Le formulaire envoie les données ici, en POST sur /api/contact.
 *  Cette fonction les vérifie, puis te les envoie par e-mail via la liaison
 *  "EMAIL" déclarée dans wrangler.toml (Cloudflare Email Service).
 *
 *  L'envoi vers une adresse de destination vérifiée dans Email Routing est
 *  gratuit et ne compte dans aucun quota.
 *
 *  ⚠️ AVANT LA MISE EN SERVICE
 *   • DESTINATAIRE doit être vérifiée dans Cloudflare → Email Routing
 *   • EXPEDITEUR doit être une adresse de ton domaine inspireb.fr
 * =============================================================================
 */

const DESTINATAIRE = "inspirebettyn@gmail.com";
const EXPEDITEUR = "contact@inspireb.fr";
const NOM_EXPEDITEUR = "Site InspireB";

/** Neutralise le HTML pour éviter toute injection dans l'e-mail reçu. */
function propre(valeur, longueurMax = 4000) {
  return String(valeur ?? "")
    .slice(0, longueurMax)
    .replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c]));
}

function reponseJson(objet, code = 200) {
  return new Response(JSON.stringify(objet), {
    status: code,
    headers: { "Content-Type": "application/json" },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let donnees;
  try {
    donnees = await request.json();
  } catch {
    return reponseJson({ success: false, erreur: "Requête invalide." }, 400);
  }

  // --- Piège à robots : ce champ est invisible, seuls les spams le remplissent
  if (donnees.site) {
    // On répond "succès" pour ne pas renseigner le robot sur le filtrage.
    return reponseJson({ success: true });
  }

  // --- Vérifications minimales
  const nom = propre(donnees.nom, 80).trim();
  const email = propre(donnees.email, 120).trim();
  const message = propre(donnees.message, 4000).trim();

  if (!nom || !email || !message) {
    return reponseJson({ success: false, erreur: "Champs obligatoires manquants." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return reponseJson({ success: false, erreur: "Adresse e-mail invalide." }, 400);
  }
  if (donnees.consentement !== "on" && donnees.consentement !== true) {
    return reponseJson({ success: false, erreur: "Consentement requis." }, 400);
  }

  const telephone = propre(donnees.telephone, 30).trim() || "non renseigné";
  const demande = propre(donnees.demande, 120).trim() || "non précisé";

  const sujet = `[inspireb.fr] ${demande} — ${nom}`;

  const texte = [
    `Nouveau message depuis inspireb.fr`,
    ``,
    `Prénom      : ${nom}`,
    `E-mail      : ${email}`,
    `Téléphone   : ${telephone}`,
    `Concerne    : ${demande}`,
    ``,
    `Message :`,
    message,
  ].join("\n");

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;color:#3D3D3D;line-height:1.6">
      <h2 style="color:#5a9480;margin:0 0 16px">Nouveau message depuis inspireb.fr</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-size:14px">
        <tr><td style="color:#888">Prénom</td><td><strong>${nom}</strong></td></tr>
        <tr><td style="color:#888">E-mail</td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="color:#888">Téléphone</td><td>${telephone}</td></tr>
        <tr><td style="color:#888">Concerne</td><td>${demande}</td></tr>
      </table>
      <div style="margin-top:20px;padding:16px;background:#f6f6e9;border-radius:8px;font-size:14px;white-space:pre-wrap">${message}</div>
    </div>`;

  try {
    await env.EMAIL.send({
      to: DESTINATAIRE,
      from: EXPEDITEUR,
      name: NOM_EXPEDITEUR,
      replyTo: email, // tu réponds directement à la personne depuis ta boîte
      subject: sujet,
      text: texte,
      html,
    });
    return reponseJson({ success: true });
  } catch (erreur) {
    console.error("Envoi impossible :", erreur);
    return reponseJson({ success: false, erreur: "Envoi impossible." }, 500);
  }
}

/** Toute autre méthode que POST est refusée. */
export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Méthode non autorisée", { status: 405 });
  }
  return onRequestPost(context);
}
