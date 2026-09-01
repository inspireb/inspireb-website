// =============================================================================
//  InspireB — CONTENU des pages détaillées par prestation
// -----------------------------------------------------------------------------
//  👉 Ce fichier contient UNIQUEMENT le texte des pages /soins/xxx/.
//     Les TARIFS restent dans services.js : ils sont récupérés automatiquement
//     grâce au champ "serviceId" ci-dessous. Tu n'as donc jamais à saisir
//     un prix deux fois.
//
//  COMMENT AJOUTER UNE PAGE (ex : Soins Duo) :
//    1. Copie un bloc entier ci-dessous.
//    2. Change "slug" (l'adresse de la page) et "serviceId" (l'id dans services.js).
//    3. Réécris les textes. La page est créée toute seule au prochain déploiement.
//
//  LES IMAGES : "heroImage" = la grande image de bandeau en haut de page.
//     "image" = celle qui illustre le texte plus bas. Garde-les DIFFÉRENTES,
//     sinon la page donne l'impression de se répéter.
//
//  RÈGLE D'OR SEO : chaque page doit avoir un contenu VRAIMENT différent.
//  Ne recopie jamais un paragraphe d'une page sur une autre.
//
//  RÈGLE D'OR JURIDIQUE : on ne promet jamais de soigner, guérir, traiter
//  ni soulager une pathologie. On parle de détente, de confort, d'équilibre.
// =============================================================================

// -----------------------------------------------------------------------------
//  Bloc "Venir me voir" — commun à toutes les pages, mais chaque page
//  l'introduit avec sa propre phrase (voir "accesIntro").
// -----------------------------------------------------------------------------
export const acces = [
  {
    ville: "Granville",
    duree: "15 min",
    route: "par la D973, en longeant la baie",
    texte: `Depuis le centre de Granville, prenez la D973 direction Avranches. La route longe la baie, traverse Saint-Pair-sur-Mer et Jullouville, puis file à travers le bocage jusqu'à Sartilly. Comptez un quart d'heure, un peu plus l'été quand la côte se remplit.`,
  },
  {
    ville: "Avranches",
    duree: "15 min",
    route: "par la D973, sans traverser de centre-ville",
    texte: `Depuis Avranches, la D973 vous amène directement à Sartilly-Baie-Bocage en une quinzaine de minutes, sans traverser le moindre centre-ville encombré. C'est souvent le trajet le plus simple de la journée.`,
  },
];

export const communes = [
  "Saint-Pair-sur-Mer",
  "Jullouville",
  "La Haye-Pesnel",
  "Donville-les-Bains",
  "Bréville-sur-Mer",
  "Genêts",
];

// -----------------------------------------------------------------------------
//  Les pages
// -----------------------------------------------------------------------------
export const soinsPages = [
  // ===========================================================================
  //  1. RÉFLEXOLOGIE PLANTAIRE
  // ===========================================================================
  {
    slug: "reflexologie-plantaire",
    serviceId: "reflexologie",
    image: "/images/prestations/reflexologie.webp",
    imageAlt: "Betty en séance de réflexologie plantaire dans son cabinet à Sartilly-Baie-Bocage",
    heroImage: "/images/soins/reflexologie.webp",

    seoTitle: "Réflexologie plantaire près de Granville | InspireB",
    seoDescription: `Réflexologie plantaire à 15 min de Granville et d'Avranches. Un temps de détente sur-mesure, sans protocole figé. À partir de 65 €.`,

    eyebrow: "Réflexologie plantaire",
    h1: "Réflexologie plantaire",
    h1Suite: "à l'écoute de ce que dit votre corps",
    chapo: `Des pressions douces sur les pieds, à votre rythme, sans protocole figé — parce que vous n'avez pas les mêmes besoins d'une semaine à l'autre. Une heure où vous n'avez rien à gérer.`,

    accesIntro: `La réflexologie demande de repartir doucement. Autant que le trajet soit court.`,

    sections: [
      {
        eyebrow: "Le soin",
        titre: "Ce qu'est la réflexologie plantaire",
        paragraphes: [
          `Le pied concentre un grand nombre de terminaisons nerveuses. La réflexologie plantaire consiste à y exercer des pressions précises, zone par zone, selon une cartographie qui met chaque région du pied en relation avec une partie du corps.`,
          `Concrètement, vous êtes installée confortablement, habillée, seuls les pieds découverts. Je travaille lentement. Certaines zones réagissent plus que d'autres, et c'est souvent là que la séance devient intéressante — on prend le temps d'y revenir.`,
          `Chez InspireB, il n'y a pas de séance type. J'écoute ce que vous me dites en arrivant et j'adapte. C'est aussi pour ça que la réflexologie s'associe si bien à un soin du visage : c'est mon association préférée, et c'est devenue Le Soin InspireB.`,
        ],
      },
    ],


    pourQui: [
      "Vous avez besoin de relâcher la pression sans avoir à parler beaucoup",
      "Vous avez les jambes lourdes en fin de journée",
      "Vous dormez mal depuis quelque temps",
      "Vous n'aimez pas l'idée d'un massage du corps mais voulez un vrai temps de détente",
      "Vous êtes debout toute la journée pour votre travail",
    ],

    faq: [
      {
        q: "Combien de temps faut-il pour venir de Granville ?",
        r: "Environ 15 minutes par la D973 depuis le centre de Granville. Le stationnement est gratuit et se fait devant le cabinet, sans avoir à chercher de place.",
      },
      {
        q: "Combien de temps dure une séance de réflexologie plantaire ?",
        r: "Le soin dure 45 minutes, et il faut compter environ une heure sur place avec l'accueil et les conseils. La formule « Souffle de légèreté », qui ajoute un travail sur les jambes, dure une heure.",
      },
      {
        q: "Est-ce que la réflexologie plantaire fait mal ?",
        r: "Non. Les pressions sont dosées avec vous tout au long de la séance. Certaines zones peuvent être plus sensibles que d'autres, et vous pouvez me le dire à tout moment pour que j'allège.",
      },
      {
        q: "Faut-il prévoir quelque chose de particulier avant de venir ?",
        r: "Rien de spécial. Vous restez habillée, seuls les pieds sont découverts. Prévoyez simplement de ne pas repartir en courant : on repart souvent plus détendue qu'on ne l'imaginait.",
      },
      {
        q: "Puis-je venir avec mon bébé ?",
        r: "Oui, les bébés sont les bienvenus pendant les soins. Dites-le moi au moment de la réservation pour que je prévoie l'espace nécessaire.",
      },
    ],

    disclaimer: `La réflexologie plantaire est une technique de bien-être et de relaxation. Elle ne constitue ni un diagnostic, ni un traitement médical, et ne remplace pas l'avis de votre médecin.`,
  },

  // ===========================================================================
  //  2. SOIN VISAGE
  // ===========================================================================
  {
    slug: "soin-visage",
    serviceId: "visage",
    image: "/images/prestations/visage.webp",
    imageAlt: "Masque appliqué lors d'un soin du visage personnalisé chez InspireB",
    heroImage: "/images/soins/visage.webp",

    seoTitle: "Soin du visage près d'Avranches et Granville | InspireB",
    seoDescription: `Soin du visage sur-mesure à Sartilly-Baie-Bocage, entre Avranches et Granville. Technologies et gestes manuels adaptés à votre peau du jour. À partir de 55 €.`,

    eyebrow: "Soin visage · Sur-mesure",
    h1: "Soin du visage",
    h1Suite: "adapté à votre peau du jour",
    chapo: `Votre peau ne dit pas la même chose en janvier et en juin, avant un déménagement ou après une bonne nuit. Je la lis à chaque séance, et je construis le soin à partir de là.`,

    accesIntro: `Un soin du visage se termine sans maquillage. Autant que la route du retour soit courte.`,

    sections: [
      {
        eyebrow: "Ma façon de faire",
        titre: "Ni protocole, ni carte imposée",
        paragraphes: [
          `Tout commence par un vrai temps d'observation : on regarde votre peau ensemble, on parle de votre routine et de votre quotidien. Je compose ensuite le soin avec ce dont elle a besoin ce jour-là.`,
          `J'associe technologies de pointe et manœuvres manuelles. Les appareils apportent une précision que les mains n'ont pas ; les mains apportent une écoute que les appareils n'auront jamais. Les deux se complètent, à condition de savoir quand utiliser l'un plutôt que l'autre.`,
          `Et parce que je suis aussi naturopathe, je ne m'arrête pas à l'épiderme. Le stress, le sommeil, l'alimentation, la saison : tout se lit sur la peau. Vous repartez avec un soin, mais aussi avec deux ou trois pistes concrètes pour la suite.`,
        ],
      },
      {
        eyebrow: "Mon soin fétiche",
        titre: "Le Soin InspireB : visage et réflexologie",
        image: "/images/le-soin-inspireb.webp",
        imageAlt: "Logo du Soin InspireB, alliance du soin visage et de la réflexologie plantaire",
        imageFit: "contain",
        paragraphes: [
          `C'est celui dont je suis la plus fière. Une heure quinze où le soin du visage se prolonge par un travail de réflexologie plantaire — l'éclat par le haut, le relâchement par le bas.`,
          `L'effet est difficile à décrire tant qu'on ne l'a pas vécu : le visage se détend d'une façon qu'aucun soin seul ne produit. C'est le soin que je recommande quand vous venez pour la première fois et que vous hésitez.`,
        ],
      },
    ],


    pourQui: [
      "Vous ne savez plus quoi mettre sur votre visage et vous vous y perdez",
      "Votre peau a changé et vos habitudes ne suivent plus",
      "Vous voulez un soin qui vous détende autant qu'il vous fasse du bien",
      "Vous cherchez un vrai conseil, pas une vente de produits",
      "Vous avez un événement et voulez une belle peau sans effet « sortie d'institut »",
    ],

    faq: [
      {
        q: "Quel soin choisir si c'est ma première fois ?",
        r: "Le Soin InspireB, qui associe visage et réflexologie plantaire, est celui que je recommande le plus souvent pour une première séance. Si vous préférez commencer plus court, la « Parenthèse éclat » de 30 minutes est une bonne porte d'entrée.",
      },
      {
        q: "Peut-on se maquiller après le soin ?",
        r: "Pour une bonne efficacité du soin et une meilleure tenue du maquillage, il est préférable de laisser reposer votre peau quelques heures.",
      },
      {
        q: "Est-ce que vous vendez des produits ?",
        r: "Je vous conseille des produits que j'utilise et en lesquels je crois, mais rien ne vous est jamais imposé. Et je vous donne volontiers quelques conseils de routine à la fin du soin, sans que cela vous coûte quoi que ce soit de plus.",
      },
      {
        q: "À quelle fréquence revenir ?",
        r: "Cela dépend entièrement de votre peau et de vos objectifs. Certaines clientes viennent une fois par saison, d'autres tous les mois. Nous en parlons ensemble à la fin de la séance, sans engagement.",
      },
      {
        q: "Le soin convient-il aux peaux sensibles ?",
        r: "Oui, c'est précisément l'intérêt d'un soin construit sur mesure : j'adapte les produits et l'intensité. Signalez-moi vos réactions passées au moment de la réservation.",
      },
    ],

    disclaimer: `Les soins du visage proposés sont des soins esthétiques et de bien-être. Ils ne constituent ni un diagnostic, ni un traitement dermatologique, et ne remplacent pas l'avis de votre médecin ou de votre dermatologue.`,
  },

  // ===========================================================================
  //  3. MASSAGE BIEN-ÊTRE
  // ===========================================================================
  {
    slug: "massage-bien-etre",
    serviceId: "massages",
    image: "/images/prestations/massage.webp",
    imageAlt: "Betty pratiquant un massage bien-être dans son cabinet",
    heroImage: "/images/soins/massage.webp",

    seoTitle: "Massage bien-être près de Granville | InspireB",
    seoDescription: `Massage bien-être intuitif à Sartilly-Baie-Bocage, à 15 min de Granville et d'Avranches. Sans protocole : je m'adapte à vous. À partir de 45 €.`,

    eyebrow: "Massage bien-être",
    h1: "Massage bien-être",
    h1Suite: "jamais deux fois le même",
    chapo: `Pas de séquence apprise par cœur, pas de minutage. Je pose les mains, j'écoute ce que votre corps me dit, et j'adapte. C'est ce qui fait qu'aucun de mes massages ne ressemble au précédent.`,

    accesIntro: `Après un massage, on n'a envie ni de conduire longtemps ni de chercher une place.`,

    sections: [
      {
        eyebrow: "Ma façon de faire",
        titre: "Intuitif, vraiment",
        paragraphes: [
          `« Massage intuitif » est devenu un mot un peu galvaudé. Chez moi, cela veut dire quelque chose de précis : je n'arrive pas avec un enchaînement prédéfini. Je commence, je sens où le corps résiste, où il s'abandonne, et je construis la séance à partir de là.`,
          `Certaines fois, cela veut dire passer vingt minutes sur des épaules qui ne veulent pas lâcher. D'autres fois, rester en surface parce que ce jour-là, c'est ce dont vous avez besoin. Vous n'avez rien à décider : c'est mon travail de le lire.`,
          `Trois durées existent pour que vous puissiez choisir votre temps, pas votre technique. Trente minutes pour souffler, quarante-cinq pour vraiment décrocher, une heure pour ne plus penser à rien.`,
        ],
      },
    ],


    pourQui: [
      "Vous avez le dos et les épaules noués depuis des semaines",
      "Vous n'avez pas pris un vrai moment pour vous depuis longtemps",
      "Vous avez déjà testé des massages « à la carte » et trouvé ça mécanique",
      "Vous êtes de passage dans la baie et cherchez une vraie parenthèse",
      "Vous voulez offrir un moment plutôt qu'un objet",
    ],

    faq: [
      {
        q: "Quelle durée choisir ?",
        r: "Trente minutes suffisent pour relâcher une zone précise. Pour une vraie détente générale, prenez plutôt 45 minutes ou une heure : c'est souvent au bout de vingt minutes que le corps commence réellement à lâcher.",
      },
      {
        q: "Faut-il se déshabiller entièrement ?",
        r: "Non. Vous gardez vos sous-vêtements et restez couverte par un drap pendant toute la séance, seule la zone travaillée étant découverte. Votre confort passe avant tout.",
      },
      {
        q: "Est-ce que c'est un massage thérapeutique ?",
        r: "Non, il s'agit d'un massage de bien-être et de relaxation. Je ne pose aucun diagnostic et ne traite aucune pathologie. Pour une problématique médicale, adressez-vous à votre médecin ou à un kinésithérapeute.",
      },
      {
        q: "Puis-je offrir un massage ?",
        r: "Oui, la carte cadeau InspireB est personnalisable et valable un an. Vous pouvez l'offrir pour une prestation précise ou pour un montant, à votre convenance.",
      },
      {
        q: "Peut-on venir à deux ?",
        r: "Oui, avec Séréni'Baie, le soin duo que je propose avec une autre praticienne bien-être. Deux paires de mains, deux énergies, une même expérience partagée.",
      },
    ],

    disclaimer: `Les massages proposés sont des massages de bien-être et de relaxation, sans finalité thérapeutique. Ils ne constituent ni un diagnostic, ni un traitement médical, et ne remplacent pas l'avis de votre médecin.`,
  },

  // ===========================================================================
  //  4. NATUROPATHIE
  // ===========================================================================
  {
    slug: "naturopathie",
    serviceId: "naturopathie",
    image: "/images/prestations/naturopathie.webp",
    imageAlt: "Betty lors d'un bilan de naturopathie chez InspireB",
    heroImage: "/images/soins/naturopathie.webp",

    seoTitle: "Naturopathe près d'Avranches et Granville | InspireB",
    seoDescription: `Conseils en naturopathie à Sartilly-Baie-Bocage, entre Avranches et Granville. Hygiène de vie, alimentation, mesure du taux d'antioxydants. Proposé à prix libre.`,

    eyebrow: "Naturopathie · Prix libre",
    h1: "Naturopathie",
    h1Suite: "reprendre la main sur son quotidien",
    chapo: `La naturopathie réunit plusieurs moyens naturels qui aident le corps à fonctionner de manière équilibrée. Concrètement : une heure pour regarder votre hygiène de vie telle qu'elle est vraiment — pas telle qu'elle devrait être — et repartir avec trois ou quatre changements que vous pourrez tenir.`,

    accesIntro: `Un bilan de naturopathie dure une heure. Autant ne pas ajouter une heure de route.`,

    sections: [
      {
        eyebrow: "Le bilan",
        titre: "La naturopathie, c'est quoi ?",
        paragraphes: [
          `C'est une méthode qui réunit plusieurs moyens naturels — l'alimentation, le sommeil, l'activité, la gestion du stress — pour aider le corps à fonctionner de manière équilibrée. Ce n'est ni une médecine, ni une liste d'interdits : c'est un travail sur le terrain.`,
          `Concrètement, on parle de votre quotidien tel qu'il est. Votre façon de manger, vos nuits, votre niveau de stress, votre rythme. Sans jugement, et sans la liste d'interdits que beaucoup redoutent avant de venir.`,
          `Le bilan inclut une mesure de votre taux d'antioxydants avec le Prism IO : un scan du bout du doigt, indolore, qui donne un indicateur chiffré. Ce n'est pas un examen médical, mais un repère concret qui m'aide à orienter mes conseils et vous donne un point de départ mesurable.`,
          `Vous repartez avec des recommandations personnalisées. Pas quinze — trois ou quatre, hiérarchisées, adaptées à votre vie réelle. Et je ne remplace jamais votre médecin : j'interviens à côté, sur ce qui relève de vos habitudes de vie.`,
        ],
      },
      {
        eyebrow: "Le tarif",
        titre: "Pourquoi le prix libre",
        image: "/images/prestations/naturopathie-outils.webp",
        imageAlt: "Plantes, huiles et infusions utilisées en naturopathie",
        paragraphes: [
          `La naturopathie n'est pas remboursée, et je sais que ça freine beaucoup de personnes. Je propose donc cette prestation à prix libre : vous donnez ce qui vous semble juste, et ce que vous pouvez.`,
          `Ce n'est pas une opération de communication. C'est simplement que je préfère accompagner quelqu'un qui en a besoin plutôt que de le voir renoncer pour une question de budget.`,
        ],
      },
    ],


    pourQui: [
      "Vous vous sentez fatiguée sans raison identifiée",
      "Vous voulez revoir votre alimentation sans tomber dans un régime",
      "Vous avez lu beaucoup de choses contradictoires et ne savez plus quoi croire",
      "Vous traversez un changement de rythme : reprise, déménagement, nouvelle saison de vie",
      "Vous voulez un accompagnement global plutôt qu'une réponse à un symptôme isolé",
    ],

    faq: [
      {
        q: "La naturopathie, c'est quoi exactement ?",
        r: "C'est une méthode qui réunit plusieurs moyens naturels — alimentation, sommeil, activité, gestion du stress — pour aider le corps à fonctionner de manière équilibrée. On travaille sur vos habitudes de vie, pas sur des symptômes isolés.",
      },
      {
        q: "La naturopathie remplace-t-elle un médecin ?",
        r: "Non, jamais. Je ne pose aucun diagnostic, ne prescris aucun médicament et ne demande jamais d'interrompre un traitement en cours. La naturopathie est un accompagnement d'hygiène de vie, complémentaire du suivi médical.",
      },
      {
        q: "Qu'est-ce que la mesure Prism IO ?",
        r: "C'est un scan indolore, réalisé au bout du doigt, qui donne un indicateur de votre taux d'antioxydants. Ce n'est pas un examen médical, mais un repère concret qui m'aide à orienter mes recommandations et vous donne un point de comparaison dans le temps.",
      },
      {
        q: "Comment fonctionne le prix libre ?",
        r: "Vous réglez sur place le montant qui vous semble juste, sans montant minimum ni suggéré. Espèces, carte bancaire, chèque et virement sont acceptés.",
      },
      {
        q: "Peut-on associer naturopathie et soin bien-être ?",
        r: "Oui, et c'est même tout le principe d'InspireB. Beaucoup de clientes commencent par un soin, puis prolongent avec un bilan de naturopathie quand elles veulent aller plus loin.",
      },
    ],

    disclaimer: `La naturopathie est une approche d'hygiène et d'équilibre de vie. Elle ne constitue ni un diagnostic, ni un traitement médical, et ne se substitue en aucun cas à un avis, un suivi ou un traitement médical. N'interrompez jamais un traitement en cours sans l'accord de votre médecin.`,
  },

  // ===========================================================================
  //  5. CARTE CADEAU  (URL volontairement generique : pas de ville)
  // ===========================================================================
  {
    slug: "carte-cadeau",
    serviceId: "carte-cadeaux",
    image: "/images/soins/carte-cadeaux.webp",
    imageAlt: "Carte cadeau InspireB, personnalisable, valable un an",
    heroImage: "/images/hero-apropos.webp",
    masquerAcces: true,

    seoTitle: "Carte cadeau bien-\u00eatre & beaut\u00e9 | InspireB",
    seoDescription: `Offrez une carte cadeau InspireB : massage, soin du visage, r\u00e9flexologie ou naturopathie. Personnalisable, valable un an, remise en main propre ou par e-mail.`,

    eyebrow: "Carte cadeau \u00b7 Valable un an",
    h1: "Offrir un moment",
    h1Suite: "plut\u00f4t qu'un objet",
    chapo: `Un soin, une parenth\u00e8se, un vrai temps pour soi. La carte cadeau InspireB se personnalise selon vos envies et votre budget \u2014 et celle qui la re\u00e7oit choisit ensuite ce qui lui fait le plus envie.`,

    sections: [
      {
        eyebrow: "Comment \u00e7a marche",
        titre: "Simple, et sans mauvaise surprise",
        paragraphes: [
          `Vous choisissez soit une prestation pr\u00e9cise, soit un montant libre. Je pr\u00e9pare la carte \u00e0 votre nom et \u00e0 celui de la personne \u00e0 qui vous l'offrez, avec un mot si vous le souhaitez.`,
          `Elle est valable un an \u00e0 compter de la date d'achat. Si la personne pr\u00e9f\u00e8re finalement un autre soin que celui pr\u00e9vu, aucun probl\u00e8me : le montant reste acquis et s'ajuste.`,
          `R\u00e9cup\u00e9ration au cabinet \u00e0 Sartilly-Baie-Bocage, ou envoi par e-mail si vous \u00eates press\u00e9e ou loin. Espèces, carte bancaire, ch\u00e8que et virement sont accept\u00e9s.`,
        ],
      },
      {
        eyebrow: "Quoi offrir",
        titre: "Ce qui fait le plus plaisir",
        image: "/images/le-soin-inspireb.webp",
        imageAlt: "Logo du Soin InspireB, le soin le plus offert en carte cadeau",
        imageFit: "contain",
        paragraphes: [
          `Pour une premi\u00e8re fois, Le Soin InspireB \u2014 visage et r\u00e9flexologie plantaire r\u00e9unis \u2014 est celui qui marque le plus. C'est une vraie d\u00e9couverte, pas un soin standard.`,
          `Pour une jeune maman, l'id\u00e9e qu'elle puisse venir avec son b\u00e9b\u00e9 change tout : c'est souvent ce qui lui permet enfin de dire oui.`,
          `Et si vous h\u00e9sitez, choisissez un montant. Elle composera son moment elle-m\u00eame, et c'est tr\u00e8s bien ainsi.`,
        ],
      },
    ],

    etapesTitre: "Comment l'offrir",
    etapes: [
      { titre: "Vous me contactez", texte: "Par t\u00e9l\u00e9phone, par e-mail ou directement au cabinet. Dites-moi pour qui, et pour quelle occasion." },
      { titre: "On choisit ensemble", texte: "Une prestation pr\u00e9cise ou un montant libre, selon ce que vous pr\u00e9f\u00e9rez." },
      { titre: "Je pr\u00e9pare la carte", texte: "\u00c0 son nom, avec votre mot si vous en souhaitez un. Remise en main propre ou envoi par e-mail." },
      { titre: "Elle r\u00e9serve quand elle veut", texte: "En ligne ou par t\u00e9l\u00e9phone, dans l'ann\u00e9e qui suit. Aucune d\u00e9marche compliqu\u00e9e." },
    ],

    pourQui: [
      "Vous voulez offrir autre chose qu'un objet de plus",
      "Vous ne connaissez pas ses go\u00fbts en mati\u00e8re de soins",
      "C'est pour une jeune maman qui ne prend jamais de temps pour elle",
      "Vous vous y prenez au dernier moment et avez besoin d'un envoi rapide",
      "Vous voulez offrir \u00e0 plusieurs, en participant chacun au montant",
    ],

    faq: [
      { q: "Combien de temps la carte cadeau est-elle valable ?",
        r: "Un an \u00e0 compter de la date d'achat. La date figure sur la carte, et je peux vous la rappeler si vous l'avez \u00e9gar\u00e9e." },
      { q: "Peut-on choisir un montant plut\u00f4t qu'un soin ?",
        r: "Oui, tout \u00e0 fait. Le montant est libre et s'utilise sur la prestation de son choix. S'il reste un solde, il est conserv\u00e9 jusqu'\u00e0 la fin de validit\u00e9." },
      { q: "Comment la recevoir rapidement ?",
        r: "Je peux vous l'envoyer par e-mail le jour m\u00eame, pr\u00eate \u00e0 imprimer ou \u00e0 transf\u00e9rer. Contactez-moi par t\u00e9l\u00e9phone ou WhatsApp, c'est le plus rapide." },
      { q: "Que se passe-t-il si elle pr\u00e9f\u00e8re un autre soin ?",
        r: "Aucun souci, la carte s'ajuste. Si le nouveau soin co\u00fbte plus cher, elle compl\u00e8te la diff\u00e9rence sur place." },
    ],

    disclaimer: `Les cartes cadeaux sont valables un an \u00e0 compter de leur date d'\u00e9mission, ne sont ni remboursables ni \u00e9changeables contre esp\u00e8ces, conform\u00e9ment aux conditions g\u00e9n\u00e9rales de vente.`,
  },
];
