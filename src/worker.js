/**
 * =============================================================================
 *  InspireB — Worker Cloudflare
 * -----------------------------------------------------------------------------
 *  Ce fichier est le point d'entrée du site sur Cloudflare.
 *
 *  Il fait deux choses :
 *   1. il répond aux envois du formulaire de contact (POST sur /api/contact)
 *   2. il laisse Cloudflare servir toutes les autres URL depuis le dossier
 *      "dist" généré par `npm run build`
 *
 *  ⚠️ Tu n'as normalement jamais à modifier ce fichier, SAUF les trois
 *     constantes ci-dessous si ton adresse e-mail change.
 *
 *  ⚠️ AVANT QUE LE FORMULAIRE FONCTIONNE
 *   • DESTINATAIRE doit être vérifiée dans Cloudflare → Email → Email Routing
 *   • EXPEDITEUR doit être une adresse de ton domaine inspireb.fr
 *   • la liaison "EMAIL" doit exister (déclarée dans wrangler.toml)
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

/** Traite un envoi du formulaire de contact. */
async function traiterContact(request, env) {
  let donnees;
  try {
    donnees = await request.json();
  } catch {
    return reponseJson({ success: false, erreur: "Requête invalide." }, 400);
  }

  // Piège à robots : ce champ est invisible, seuls les spams le remplissent.
  // On répond "succès" pour ne pas renseigner le robot sur le filtrage.
  if (donnees.site) return reponseJson({ success: true });

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

  const texte = [
    "Nouveau message depuis inspireb.fr",
    "",
    `Prénom      : ${nom}`,
    `E-mail      : ${email}`,
    `Téléphone   : ${telephone}`,
    `Concerne    : ${demande}`,
    "",
    "Message :",
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

  if (!env.EMAIL) {
    console.error("Liaison EMAIL absente : vérifier wrangler.toml et Email Routing.");
    return reponseJson({ success: false, erreur: "Service d'envoi indisponible." }, 500);
  }

  try {
    await env.EMAIL.send({
      to: DESTINATAIRE,
      from: { email: EXPEDITEUR, name: NOM_EXPEDITEUR },
      replyTo: email, // tu réponds directement à la personne depuis ta boîte
      subject: `[inspireb.fr] ${demande} — ${nom}`,
      text: texte,
      html,
    });
    return reponseJson({ success: true });
  } catch (erreur) {
    console.error("Envoi impossible :", erreur);
    return reponseJson({ success: false, erreur: "Envoi impossible." }, 500);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response("Méthode non autorisée", { status: 405 });
      }
      return traiterContact(request, env);
    }

    // Toutes les autres URL : pages du site, images, CSS…
    return env.ASSETS.fetch(request);
  },
};
