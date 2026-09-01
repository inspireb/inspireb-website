// =============================================================================
//  InspireB — ATELIERS & ÉVÉNEMENTS
// -----------------------------------------------------------------------------
//  👉 Le SEUL fichier à modifier pour tes ateliers.
//
//  Il alimente automatiquement :
//    • la page /ateliers/
//    • la bannière d'annonce en haut du site
//    • le schema.org "Event" (Google affiche les dates, les IA les citent)
//
//  ⚠️ IMPORTANT : les ateliers passés disparaissent TOUT SEULS de la page
//     et de la bannière. Tu n'as rien à supprimer. Garde-les, ils servent
//     de preuve d'activité et alimenteront la section "ateliers passés".
//
//  LES FLYERS : depose tes images dans public/images/ateliers/ puis indique
//     le chemin dans "flyer". Laisse la ligne vide ("") si tu n'as pas d'image :
//     la mise en page s'adapte toute seule.
//
//  FORMAT DES DATES : "AAAA-MM-JJTHH:MM" (année-mois-jour T heure:minute)
//     Exemple : le 12 septembre 2026 à 10h  →  "2026-09-12T10:00"
// =============================================================================

export const ateliers = [
  {
    id: "sophro-naturo-stress",
    flyer: "/images/ateliers/sophro-naturo.webp",
    flyerAlt: "Flyer des ateliers Sophro-Naturo a Jullouville en septembre",
    titre: "Des clés pour être plus serein au quotidien",
    serie: "Atelier Sophro-Naturo",
    avec: "Avec Stéphanie, sophrologue — Bulle de Phénix",

    debut: "2026-09-12T10:00",
    fin: "2026-09-12T12:15",

    lieu: "Base nautique de Jullouville — 8 Milles Nautic",
    adresse: "5 avenue de la Tanguière",
    ville: "Jullouville",
    codePostal: "50610",

    prix: 40,
    prixTexte: "40 € l'atelier",
    lienReservation: "https://tidycal.com/stephaniedolpierre/atelier-sophro-naturo-base-nautique-8-milles-nautic-jullouville",

    noteReservation: `Réservation sur l'agenda de Stéphanie — pensez à sélectionner la date du 12 septembre.`,
    accroche: `Comment mieux comprendre son stress et, surtout, comment l'apaiser ?`,
    description: [
      `Au programme : échanges, respirations guidées et outils concrets à utiliser facilement dans votre quotidien — à la maison, au travail, ou dans les moments où la pression monte.`,
      `Un atelier pour repartir avec une véritable petite boîte à outils anti-stress, simple et réaliste.`,
    ],
  },

  {
    id: "atelier-parents",
    flyer: "/images/ateliers/atelier-parents.webp",
    flyerAlt: "Flyer de l'atelier parents : une pause pour soi, a Sartilly",
    titre: "Une pause pour soi",
    serie: "Atelier parents",
    avec: "En partenariat avec l'association Amstramgram",

    debut: "2026-09-18T10:00",
    fin: "2026-09-18T12:00",

    lieu: "Espace des Parents d'Amstramgram",
    adresse: "7 allée du Parc",
    ville: "Sartilly-Baie-Bocage",
    codePostal: "50530",

    prix: 0,
    prixTexte: "Gratuit — places limitées",
    lienReservation: "https://www.helloasso.com/associations/amstramgram/evenements/atelier-parents-une-pause-pour-soi-auto-massage-et-reflexologie",

    noteReservation: `Inscription gratuite sur HelloAsso, auprès de l'association Amstramgram.`,
    accroche: `Et si vous faisiez simplement… une pause ?`,
    description: [
      `Une matinée pour découvrir l'auto-massage et la réflexologie plantaire, et repartir avec des gestes simples à refaire chez vous.`,
      `Les bébés et les enfants peuvent être accueillis sur place, dans un cadre adapté et chaleureux : vous participez à l'atelier tout en gardant votre enfant près de vous.`,
    ],
    note: `Pensez à préciser lors de votre réservation si vous venez avec un bébé ou un enfant. Inscription auprès de l'association Amstramgram.`,
  },

  {
    id: "sophro-naturo-sommeil",
    flyer: "/images/ateliers/sophro-naturo.webp",
    flyerAlt: "Flyer des ateliers Sophro-Naturo a Jullouville en septembre",
    titre: "Des clés pour un sommeil plus apaisé",
    serie: "Atelier Sophro-Naturo",
    avec: "Avec Stéphanie, sophrologue — Bulle de Phénix",

    debut: "2026-09-26T10:00",
    fin: "2026-09-26T12:15",

    lieu: "Base nautique de Jullouville — 8 Milles Nautic",
    adresse: "5 avenue de la Tanguière",
    ville: "Jullouville",
    codePostal: "50610",

    prix: 40,
    prixTexte: "40 € l'atelier",
    lienReservation: "https://tidycal.com/stephaniedolpierre/atelier-sophro-naturo-base-nautique-8-milles-nautic-jullouville",

    noteReservation: `Réservation sur l'agenda de Stéphanie — pensez à sélectionner la date du 26 septembre.`,
    accroche: `Quand le stress nous suit jusque sous la couette, difficile de vraiment déconnecter…`,
    description: [
      `Cet atelier vous permettra de mieux comprendre ce qui peut perturber vos nuits, et de découvrir des pistes simples pour apaiser le mental, relâcher la pression et favoriser un endormissement plus serein.`,
      `Des outils à mettre en pratique dès le soir même.`,
    ],
  },
];

// -----------------------------------------------------------------------------
//  Fonctions utilitaires — ne pas modifier
// -----------------------------------------------------------------------------

/** Les ateliers encore à venir, du plus proche au plus lointain. */
export function ateliersAVenir() {
  const maintenant = new Date();
  return ateliers
    .filter((a) => new Date(a.fin) >= maintenant)
    .sort((a, b) => new Date(a.debut) - new Date(b.debut));
}

/** Les ateliers déjà passés, du plus récent au plus ancien. */
export function ateliersPasses() {
  const maintenant = new Date();
  return ateliers
    .filter((a) => new Date(a.fin) < maintenant)
    .sort((a, b) => new Date(b.debut) - new Date(a.debut));
}

/**
 * Regroupe les ateliers par mois : [{ cle, titre, ateliers }, ...]
 * Le titre du mois ("Septembre 2026") est genere tout seul — tu n'as rien
 * a ecrire quand tu ajoutes un atelier en octobre ou en novembre.
 */
export function ateliersParMois(liste) {
  const groupes = [];
  for (const a of liste) {
    const d = new Date(a.debut);
    const cle = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    let g = groupes.find((x) => x.cle === cle);
    if (!g) {
      const titre = d.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
      groupes.push((g = { cle, titre: titre.charAt(0).toUpperCase() + titre.slice(1), ateliers: [] }));
    }
    g.ateliers.push(a);
  }
  return groupes;
}

/** "Samedi 12 septembre 2026" */
export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** "10h" ou "10h30" */
export function formatHeure(iso) {
  const d = new Date(iso);
  const h = d.getHours();
  const m = d.getMinutes();
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, "0")}`;
}
