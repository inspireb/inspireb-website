// =============================================================================
//  InspireB — SOURCE UNIQUE de tes prestations & tarifs
// -----------------------------------------------------------------------------
//  👉 C'est le SEUL fichier à modifier quand tu changes un prix ou une presta.
//
//  Il alimente automatiquement :
//    • la page Soins & Tarifs  (toutes les prestations détaillées)
//    • la page d'accueil       (les cartes "Soins & Accompagnements")
//    • le schema.org           (le référencement Google / les IA)
//
//  COMMENT METTRE À JOUR (≈ 2 min) quand tu modifies un tarif dans Setmore :
//    1. Trouve la catégorie concernée ci-dessous.
//    2. Change le "prix" de la prestation dans "items".
//    3. Si c'est le tarif d'ENTRÉE de la catégorie (le moins cher),
//       ajuste aussi "apercu" (prix affiché sur l'accueil)
//       et "schemaPrice" (prix lu par Google) — ils sont juste au-dessus de "items".
//
//  Rappel sur "prix" :
//    • un nombre (ex: 75) s'affiche "75 €"
//    • un texte (ex: "Prix libre", "Sur devis") s'affiche tel quel
// =============================================================================

export const services = [
  {
    id: "massages",
    categorie: "Massages Bien-être",
    icon: "ph:hand-heart-fill",
    image: "/images/soins/massage.webp",
    intro: `Un massage intuitif, sans protocole : je m'adapte à vous, à votre énergie et à vos besoins du moment, pour une parenthèse vraiment sur-mesure.`,
    descCourt: `Un massage intuitif et sans protocole, adapté à votre énergie du moment pour une parenthèse sur-mesure.`,
    apercu: "À partir de 45 €",
    schemaPrice: 45,
    items: [
      { nom: `"Souffle de détente" — 30 min`, duree: "≈ 45 min sur place", prix: 45, lienSetmore: "https://inspireb.setmore.com/book?step=additional-products&products=c202a9d1-7f9f-40fb-9445-750c26a4956a&type=service&staff=e8b06f3f-112d-4a8d-9a69-10cd03710ece&staffSelected=false" },
      { nom: `"Évasion Bien-être" — 45 min`, duree: "≈ 1h sur place", prix: 60, lienSetmore: "https://inspireb.setmore.com/book?step=additional-products&products=9ee447e0-a6de-4826-b1bb-b5050d517fea&type=service&staff=e8b06f3f-112d-4a8d-9a69-10cd03710ece&staffSelected=false" },
      { nom: `"Moment cocooning" — 1h`, duree: "≈ 1h15 sur place", prix: 75, lienSetmore: "https://inspireb.setmore.com/book?step=additional-products&products=3e307236-dfe3-42ca-87d0-7778862dad68&type=service&staff=e8b06f3f-112d-4a8d-9a69-10cd03710ece&staffSelected=false" },
    ],
  },
  {
    id: "visage",
    categorie: "Soin Visage",
    icon: "ph:flower-lotus-fill",
    image: "/images/soins/visage.webp",
    intro: `J'aime combiner technologies de pointe et manœuvres manuelles, en fonction de ce que votre peau me dit ce jour-là. Mon soin fétiche ? Visage et réflexologie plantaire réunis dans une même séance — parce que pour moi, l'éclat du visage et l'équilibre intérieur sont profondément liés.`,
    descCourt: `Technologies de pointe et gestes manuels selon ce que votre peau exprime ce jour-là. Mon soin fétiche : visage + réflexologie.`,
    apercu: "À partir de 55 €",
    schemaPrice: 55,
    items: [
      { nom: `"Parenthèse éclat" — 30 min`, duree: "≈ 45 min sur place", prix: 55, lienSetmore: "https://inspireb.setmore.com/book?step=additional-products&products=96b39c07-4888-4c45-bf84-77b69dd6b040&type=service&staff=e8b06f3f-112d-4a8d-9a69-10cd03710ece&staffSelected=false" },
      { nom: `"Lumière" — 1h`, duree: "≈ 1h15 sur place", prix: 85, lienSetmore: "https://inspireb.setmore.com/book?step=additional-products&products=a71727ed-86e0-40bf-a94d-4310b045aac1&type=service&staff=e8b06f3f-112d-4a8d-9a69-10cd03710ece&staffSelected=false" },
      { nom: `"Reflets d'âge" — anti-âge, 1h15`, duree: "≈ 1h30 sur place", prix: 96, lienSetmore: "https://inspireb.setmore.com/book?step=additional-products&products=995ab706-0d0a-4ca5-b730-84ad90fe37a9&type=service&staff=e8b06f3f-112d-4a8d-9a69-10cd03710ece&staffSelected=false" },
      { nom: `Le Soin InspireB — visage + réflexologie, 1h15`, duree: "≈ 1h30-1h45 sur place", prix: 98, lienSetmore: "https://inspireb.setmore.com/book?step=additional-products&products=f96268b8-d326-4405-bdc2-a320590b122f%7Cb3d91728-bc33-44b4-9cf3-99124442e43d&type=service&staff=e8b06f3f-112d-4a8d-9a69-10cd03710ece&staffSelected=false" },
    ],
  },
  {
    id: "reflexologie",
    categorie: "Réflexologie plantaire",
    icon: "ph:footprints-fill",
    image: "/images/soins/reflexologie.webp",
    intro: `La réflexologie plantaire stimule des points du pied en lien avec les organes du corps, pour favoriser détente et équilibre. Une séance toujours adaptée à votre état du moment, pour un accompagnement sur-mesure.`,
    descCourt: `Des pressions ciblées sur les pieds, en lien avec les organes du corps, pour favoriser détente et équilibre profond.`,
    apercu: "À partir de 65 €",
    schemaPrice: 65,
    items: [
      { nom: `Réflexologie plantaire — 45 min`, duree: "≈ 45 min-1h sur place", prix: 65, lienSetmore: "https://inspireb.setmore.com/book?step=additional-products&products=1d4fcfc5-11a0-43bf-af72-612a305efd26&type=service&staff=e8b06f3f-112d-4a8d-9a69-10cd03710ece&staffSelected=false" },
      { nom: `"Souffle de légèreté" — jambes + réflexologie, 1h`, duree: "≈ 1h-1h15 sur place", prix: 80, lienSetmore: "https://inspireb.setmore.com/book?step=additional-products&products=a06453f8-015b-485e-93e4-b0a35896f5dc&type=service&staff=e8b06f3f-112d-4a8d-9a69-10cd03710ece&staffSelected=false" },
      { nom: `Le Soin InspireB — visage + réflexologie, 1h15`, duree: "≈ 1h30-1h45 sur place", prix: 98, lienSetmore: "https://inspireb.setmore.com/book?step=additional-products&products=f96268b8-d326-4405-bdc2-a320590b122f%7C5cf7d58a-f1d0-451a-b853-7420801f8bf3&type=service&staff=e8b06f3f-112d-4a8d-9a69-10cd03710ece&staffSelected=false" },
    ],
  },
  {
    id: "naturopathie",
    categorie: "Naturopathie",
    icon: "ph:plant-fill",
    image: "/images/soins/naturopathie.webp",
    intro: `La naturopathie réunit plusieurs moyens naturels — alimentation, sommeil, activité, gestion du stress — qui aident le corps à fonctionner de manière équilibrée. Le bilan inclut une mesure de votre taux d'antioxydants (Prism IO), pour orienter mes recommandations avec une donnée concrète. Proposé à prix libre, pour que l'argent ne soit jamais un frein.`,
    descCourt: `Plusieurs moyens naturels qui aident le corps à fonctionner de manière équilibrée, avec une mesure de votre taux d'antioxydants. À prix libre.`,
    apercu: "Prix libre",
    schemaPrice: 0, // 0 = "Prix libre" pour Google
    items: [
      { nom: `Conseils en Naturopathie — 1h`, duree: "À régler sur place", prix: "Prix libre", lienSetmore: "https://inspireb.setmore.com/book?step=additional-products&products=d203b7df-4a1e-460a-83fe-e240e145d0af&type=service&staff=e8b06f3f-112d-4a8d-9a69-10cd03710ece&staffSelected=false" },
    ],
  },
  {
    id: "conseil-beaute",
    categorie: "Conseil Beauté",
    icon: "ph:sparkle-fill",
    image: "/images/soins/conseil-beaute.webp",
    intro: `Vous avez une problématique de peau (visage ou corps) et ne savez pas par où commencer ? Ensemble, nous identifions vos besoins et je vous aide à construire une routine adaptée — à votre problématique, votre budget et le temps que vous pouvez y consacrer.`,
    descCourt: `Une problématique de peau ? Ensemble, on construit une routine adaptée à vos besoins, votre budget et votre temps.`,
    apercu: "Prix libre",
    // pas de schemaPrice → cette catégorie n'apparaît pas dans le schema.org
    items: [
      { nom: `Mon moment beauté sur mesure — 45 min`, duree: "À régler sur place", prix: "Prix libre", lienSetmore: "https://inspireb.setmore.com/book?step=additional-products&products=c3befc1f-462a-4e62-81fd-44b149d16247&type=service&staff=e8b06f3f-112d-4a8d-9a69-10cd03710ece&staffSelected=false" },
    ],
  },
  {
    id: "accompagnements",
    categorie: "Accompagnements",
    icon: "ph:compass-fill",
    image: "/images/soins/accompagnements.webp",
    intro: `Des accompagnements sur plusieurs séances seront bientôt disponibles… un peu de patience 🙂`,
    descCourt: `Des suivis sur plusieurs séances arrivent bientôt… un peu de patience 🙂`,
    apercu: "Disponible prochainement",
    items: [
      { nom: `Suivi personnalisé sur plusieurs séances`, duree: "Bientôt disponible", prix: "Disponible prochainement" },
    ],
  },
  {
    id: "duo",
    categorie: "Soins Duo",
    icon: "ph:users-fill",
    image: "/images/soins/duo.webp",
    intro: `Séréni'Baie, c'est l'union de deux praticiennes bien-être, deux énergies, deux paires de mains, réunies autour des mêmes valeurs pour vous offrir une expérience unique et enveloppante.`,
    descCourt: `Séréni'Baie : deux praticiennes, deux énergies, une même expérience enveloppante à vivre ensemble.`,
    apercu: "À partir de 110 €",
    schemaPrice: 110,
    items: [
      { nom: `Séréni'Baie — soin duo (2 personnes)`, duree: "Sur réservation", prix: "À partir de 110 €" },
      { nom: `Séréni'Baie — soin à 4 mains`, duree: "Sur réservation", prix: 150 },
    ],
    // "note" s'affiche sous le tableau des tarifs, sur /soins/ comme sur la
    // page dédiée. Utile quand une prestation ne se réserve pas en ligne.
    note: `Séréni'Baie se réserve directement auprès de moi : nous sommes deux praticiennes, il faut accorder nos agendas. Écrivez-moi ou appelez le 06 46 71 20 96, je vous propose une date rapidement.`,
  },
  {
    id: "instant-cocon",
    categorie: "Instant Cocon",
    icon: "ph:heart-fill",
    image: "/images/soins/ateliers.webp",
    intro: `Le cabinet rien que pour vous et vos proches, le temps d'un moment à plusieurs. Une formule que je suis en train d'imaginer — si l'idée vous tente, dites-le moi, vos envies m'aideront à la construire.`,
    descCourt: `Un moment à plusieurs, au cabinet. Formule en cours de préparation.`,
    apercu: "Bientôt disponible",
    items: [
      { nom: `Instant Cocon — moment à plusieurs`, duree: "En préparation", prix: "Bientôt disponible" },
    ],
  },
  {
    id: "carte-cadeaux",
    categorie: "Carte Cadeaux",
    icon: "ph:gift-fill",
    image: "/images/soins/carte-cadeaux.webp",
    intro: `Pour faire plaisir à un proche, offrez une carte cadeau InspireB : un soin, un moment de détente, une attention qui vient du cœur. Personnalisable selon vos envies.`,
    descCourt: `Offrez un soin InspireB : un moment de détente personnalisable, une attention qui vient du cœur.`,
    apercu: "Contactez-moi pour en savoir plus",
    items: [
      { nom: `Carte cadeau personnalisée`, duree: "À définir ensemble", prix: "Me Contacter" },
    ],
  },
];
