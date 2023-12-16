import { useRouter } from "next/router";

import { LocaleISO } from "lib/languages";

export const useTranslation = () => {
  const { locale: localeIso } = useRouter();

  const t = (key: string, variables?: { [key: string]: string }) => {
    try {
      const translation = translations[key][localeIso as LocaleISO];
      if (!variables) {
        return translation;
      }
      return translation.replace(/{([^{}]+)}/g, (_, k) => variables[k] || "");
    } catch (err) {
      throw Error(`Translation '${key}' for locale '${localeIso}' not found.`);
    }
  };
  return {
    t
  };
};

interface Translations {
  [key: string]: {
    [key in LocaleISO]: string;
  };
}

export const translations: Translations = {
  "global.signupReal": { de: "Konto eröffnen", en: "Open account", fr: "Ouvrir un compte" },
  "global.testAccountSignUp": {
    de: "Testkonto eröffnen",
    en: "Open test account",
    fr: "Ouvrir un compte de test"
  },
  "global.createPortfolio": {
    de: "Portfolio eröffnen",
    en: "Create portfolio",
    fr: "Créer un portefeuille"
  },
  "global.samplePortfolio": {
    de: "Musterportfolio ansehen",
    en: "See sample portfolio",
    fr: "Voir le portefeuille exemple"
  },
  "global.readMore": {
    de: "Mehr lesen",
    en: "Read more",
    fr: "Lire plus"
  },
  "global.learnMore": {
    de: "Mehr erfahren",
    en: "Learn more",
    fr: "Plus d'informations"
  },
  "navigation.home": { de: "Home", en: "Home", fr: "Accueil" },
  "navigation.backToOverview": {
    de: "Zurück zur Übersicht",
    en: "Back to overview",
    fr: "Retour à l'aperçu"
  },
  "press.title": {
    de: "Medienmitteilungen",
    en: "Press releases",
    fr: "Communiqués de presse"
  },
  "press.resources": {
    de: "Ressourcen",
    en: "Resources",
    fr: "Ressources"
  },
  "press.media": {
    de: "Pressestimmen",
    en: "Press Coverage",
    fr: "Couverture de presse"
  },
  "why-true-wealth.minimum_investment": {
    de: "Mindestanlage",
    en: "Minimum investment",
    fr: "Minimum à investir"
  },
  "why-true-wealth.costs": {
    de: "Kosten",
    en: "Costs",
    fr: "Coûts"
  },
  "why-true-wealth.convenience": {
    de: "Einfachheit",
    en: "Convenience",
    fr: "Commodité"
  },
  "why-true-wealth.withdrawals": {
    de: "Geld abheben",
    en: "Withdrawals",
    fr: "Retraits d'argent"
  },
  "why-true-wealth.potential_returns": {
    de: "Globale Renditechancen",
    en: "Potential global returns",
    fr: "Rendement global potentiel"
  },
  "why-true-wealth.free_sample_portfolio": {
    de: "Testen Sie True Wealth mit einem kostenlosen Musterportfolio",
    en: "Try True Wealth with a free sample portfolio",
    fr: "Testez True Wealth avec un portefeuille test gratuit"
  },
  "why-true-wealth.other_options": {
    de: "Mit anderen Optionen vergleichen",
    en: "Compare to other options",
    fr: "Comparer avec d'autres options"
  },
  "why-true-wealth.collapse": {
    de: "Zusammenklappen",
    en: "Collapse",
    fr: "Collapse"
  },
  "howItWorks.testAccount": {
    de: "Starten Sie jetzt mit einem kostenlosen Testkonto",
    en: "Start with a free test account now",
    fr: "Commencer compte test"
  },
  "pages.knowledge.portfolioValue": {
    de: "Portfoliowert in CHF",
    en: "Portfolio value in CHF",
    fr: "Valeur portefeuille CHF"
  },
  "pages.knowledge.managementFee": {
    de: "Verwaltungsgebühr p.a.",
    en: "Management fee p.a.",
    fr: "Frais de gestion p.a."
  },
  "cookie.consent.message": {
    de: "True Wealth verwendet zur Optimierung des digitalen Angebots Cookies. Wenn Sie damit einverstanden sind, setzen Sie den Besuch der Seite fort.",
    en: "True Wealth uses Cookies to optimise our online services. By continuing to use the site you accept that we use cookies.",
    fr: "True Wealth utilise des cookies pour optimiser ses services en ligne. En continuant à utiliser le site, vous acceptez que nous utilisions des cookies."
  },
  "cookie.consent.dismiss": {
    de: "OK",
    en: "OK",
    fr: "OK"
  },
  "cookie.consent.linkText": {
    de: "Datenschutzerklärung",
    en: "Data Protection Declaration",
    fr: "Déclaration de protection des données"
  },
  "noTranslation.title": {
    de: "Der angeforderte Inhalt ist noch nicht in Ihrer Sprache verfügbar",
    en: "The requested content is not yet available in your language",
    fr: "Le contenu demandé n'est pas encore disponible dans votre langue."
  },
  "noTranslation.content": {
    de: "Wir entschuldigen uns für die Unannehmlichkeiten und hoffen, den gewünschten Inhalt bald zur Verfügung stellen zu können.",
    en: "We apologize for the inconvenience and hope to make the requested content available soon.",
    fr: "Nous vous prions de bien vouloir nous excuser pour ce désagrément et espérons que le contenu demandé sera bientôt disponible."
  },
  "noTranslation.backLink": {
    de: "Zurück zur vorherigen Seite",
    en: "Back to previous page",
    fr: "Retour à la page précédente"
  },
  "jobs.openPositions": {
    de: "Offene Stellen",
    en: "Open positions",
    fr: "Positions ouvertes"
  },
  "blog.filters.all": {
    de: "Alle",
    en: "All",
    fr: "Tous"
  },
  "blog.title": {
    de: "Blog und Video Podcast",
    en: "Blog and video podcast",
    fr: "Blog et podcast vidéo"
  },
  "blog.noArticles": {
    de: "Wir haben derzeit keine Beiträge in dieser Sprache.",
    en: "We currently have no posts in this language.",
    fr: "Nous n'avons actuellement pas encore d'articles dans cette langue."
  },
  "blog.aboutAuthor": {
    de: "Über den Autor",
    en: "About the author",
    fr: "A propos de l'auteur"
  },
  "blog.readyToInvest": {
    de: "Bereit zu investieren?",
    en: "Ready to invest?",
    fr: "Prêt à investir?"
  },
  "blog.loadMore": {
    de: "Mehr laden",
    en: "Load more",
    fr: "Chargez plus"
  },
  "global.watchNow": {
    de: "Jetzt schauen",
    en: "Watch now",
    fr: "Voir maintenant"
  },
  "blog.disclaimer": {
    de: "Disclaimer: Wir haben für den Inhalt dieses Artikels grosse Sorgfalt angewendet. Trotzdem können wir Fehler nicht ausschliessen. Die Gültigkeit des Inhalts beschränkt sich auf den Zeitpunkt der Veröffentlichung.",
    en: "Disclaimer: We have taken great care with the content of this article. Nevertheless, we cannot exclude the possibility of errors. The validity of the content is limited to the time of publication.",
    fr: "Clause de non-responsabilité: Nous avons apporté le plus grand soin au contenu de cet article. Néanmoins, nous ne pouvons exclure la possibilité d'erreurs. La validité du contenu est limitée au moment de la publication."
  },
  "blog.guest": {
    de: "Zu Gast: ",
    en: "Guest: ",
    fr: "Invité: "
  },
  "blog.guests": {
    de: "Gäste: ",
    en: "Guests: ",
    fr: "Invités: "
  },
  "homepage.teaser.title": {
    de: "Vermögensverwaltung kann so einfach sein",
    en: "Wealth management. As simple as it gets.",
    fr: "La gestion de fortune peut être aussi simple que ça"
  },
  "homepage.teaser.intro": {
    de: "Sie bestimmen die Leitplanken und behalten jederzeit die Kontrolle über Ihre Anlagestrategie. Wir sorgen für die Umsetzung: Transparent, diversifiziert, automatisiert. Das macht unsere Vermögensverwaltung effektiver als je zuvor.",
    en: "You set the direction and keep full control over your investment strategy. Let us do the work: Always diversified, highly automated and thus much more efficient than investing has ever been.",
    fr: "Vous définissez la direction à suivre et gardez le contrôle total de votre stratégie d'investissement. Laissez-nous faire le travail: Toujours diversifié, hautement automatisé et donc beaucoup plus efficace que ne l'a jamais été l'investissement."
  },
  "homepage.teaser.yourInvestment": {
    de: "Ihre Anlagesumme",
    en: "Your investment amount",
    fr: "Montant de votre investissement"
  },
  "homepage.teaser.yourInvestment.tooltip": {
    de: "True Wealth bietet professionelle Vermögensverwaltung bereits ab CHF {minimumInvestment} an.",
    en: "At True Wealth, professional wealth management starts at just CHF {minimumInvestment}.",
    fr: "Chez True Wealth, la gestion professionnelle de fortune commence à seulement CHF {minimumInvestment}."
  },
  "homepage.teaser.yourRiskTolerance": {
    de: "Ihre Risikotoleranz",
    en: "Your risk tolerance",
    fr: "Votre tolérance au risque"
  },
  "homepage.teaser.yourRiskTolerance.tooltip": {
    de: "Nutzen Sie den Regler, um die Risikotoleranz anzupassen und sehen Sie, wie sich die Anlageklassen verändern.",
    en: "Use the slider to adjust your risk tolerance and watch each asset class change accordingly.",
    fr: "Utilisez le curseur pour ajuster votre tolérance au risque et regardez chaque classe d'actifs évoluer en conséquence."
  },
  "homepage.teaser.fees": {
    de: "Jährliche Gebühr:",
    en: "Yearly fee:",
    fr: "Frais annuels:"
  },
  "homepage.teaser.fees.tooltip": {
    de: "Die Verwaltungsgebühr beträgt jährlich {value} (inkl. MwSt.) der Anlagesumme (Berechnung anhand des durchschnittlichen täglichen Vermögens am Ende des Tages). Sie enthält die Handelskommissionen (Courtagen, Brokerage).",
    en: "Our yearly wealth management fee is {value} (incl. VAT) per year (calculation based on the average daily assets at the end of the day). It includes trading commissions (brokerage).",
    fr: "Nos frais annuels de gestion de fortune s'élèvent à {value} (TVA comprise) par an (calcul basé sur la moyenne des actifs quotidiens en fin de journée). Ils comprennent les commissions de négociation (courtage)."
  },
  "homepage.teaser.costs": {
    de: "pro Quartal:",
    en: "per quarter:",
    fr: "par trimestre:"
  },
  "homepage.teaser.ter": {
    de: "Produktkosten (Ø TER):",
    en: "Product Costs (Ø TER):",
    fr: "Coûts du produit (Ø TER):"
  },
  "homepage.teaser.ter.tooltip": {
    de: "Die Total Expense Ratio (TER) zeigt die Kosten der Anlageprodukte, die wir für Sie auswählen. Die Produktkosten gehen direkt an die Produkt­hersteller (Fondsgesellschaft) und werden in der Gesamtkosten-Übersicht separat ausgewiesen.",
    en: "The total expense ratio (TER) shows the cost of the investment products we select for you. The product costs are charged by the product suppliers (investment fund company) and are shown separately in the cost overview.",
    fr: "Le ratio des frais totaux (TER) indique le coût des produits d'investissement que nous sélectionnons pour vous. Les coûts des produits sont facturés par les preststaires des produits (société de fonds de placement) et sont indiqués séparément dans l'aperçu des coûts."
  },
  "homepage.teaser.strategy": {
    de: "Anlagestrategie",
    en: "Investment Strategy",
    fr: "Stratégie d'investissement"
  },
  "homepage.teaser.sampleStrategy": {
    de: "Musterstrategie für Investoren mit {tolerance} Risikotoleranz.",
    en: "Sample strategy for investors with {tolerance} risk tolerance.",
    fr: "Exemple de stratégie pour les investisseurs ayant une tolérance {tolerance} au risque."
  },
  "homepage.teaser.assetClass": {
    de: "Anlageklasse",
    en: "Asset Class",
    fr: "Classe d'actifs"
  },
  "homepage.teaser.allocation": {
    de: "Gewichtung",
    en: "Allocation",
    fr: "Allocation"
  },
  "homepage.teaser.total": {
    de: "Total",
    en: "Total",
    fr: "Total"
  },
  "homepage.teaser.propose": {
    de: "Probieren Sie es aus.",
    en: "Give it a try.",
    fr: "Essayez-le."
  },
  "homepage.teaser.risk.low": {
    de: "niedriger",
    en: "lower",
    fr: "inférieure"
  },
  "homepage.teaser.risk.moderate": {
    de: "mittlerer",
    en: "moderate",
    fr: "modérée"
  },
  "homepage.teaser.risk.high": {
    de: "hoher",
    en: "higher",
    fr: "plus haute"
  },
  "homepage.teaser.risk.low.label": {
    de: "Konservativ (Niedriges Risiko)",
    en: "Conservative (Low risk)",
    fr: "Conservateur (risque faible)"
  },
  "homepage.teaser.risk.moderate.label": {
    de: "Ausgewogen (Mittleres Risiko)",
    en: "Balanced (moderate risk)",
    fr: "Équilibré (risque modéré)"
  },
  "homepage.teaser.risk.high.label": {
    de: "Gewinnorientiert (Höheres Risiko)",
    en: "Aggressive (higher risk)",
    fr: "Agressif (risque plus élevé)"
  },
  "homepage.childPortfolio.title": {
    de: "Das neue Kinderportfolio",
    en: "The new child portfolio",
    fr: "Le nouveau portefeuille des enfants"
  },
  "homepage.childPortfolio.intro": {
    de: "Eine Investition in die Zukunft. Unser ETF-Kinderportfolio bietet alles, was auch Erwachsene zu schätzen wissen. Frühes Investieren zahlt sich aus!",
    en: "An investment in the future. Our ETF child portfolio offers everything that adults also appreciate. Investing early pays off!",
    fr: "Un investissement dans l'avenir. Notre portefeuille ETF pour enfants offre tout ce que les adultes apprécient également. Investir tôt est payant !"
  },
  "homepage.childPortfolio.first": {
    de: "Eine Investition in die Zukunft",
    en: "Invest for the future",
    fr: "Investir pour l'avenir"
  },
  "homepage.childPortfolio.second": {
    de: "Im Namen des Kindes",
    en: "In the name of the child",
    fr: "Au nom de l'enfant"
  },
  "homepage.childPortfolio.third": {
    de: "Ein Vorsprung fürs Leben",
    en: "A head start for life",
    fr: "Avance pour la vie"
  },
  "homepage.childPortfolio.readMore": {
    de: "Mehr zum Kinderportfolio",
    en: "More about the child portfolio",
    fr: "En savoir plus"
  },
  "homepage.s3a.title": {
    de: "Die neue komfortable Säule 3a",
    en: "The new convenient Pillar 3a",
    fr: "Le nouveau Pilier 3a confortable"
  },
  "homepage.s3a.intro": {
    de: "In der dritten Säule anlegen, das lohnt sich. Jahr für Jahr können Sie so Steuern sparen, ganz gleich bei welchem Anbieter. Wir sagen: Das ist gut. Aber wir finden auch: Das geht noch viel besser.",
    en: "Investing in the third pillar is simply a must. It saves you taxes year after year, no matter which provider you choose. We say: that's great. But it could be so much better!",
    fr: "Investir dans le troisème pilier en vaut largement la peine. Année après année, vous pouvez économiser des impôts, quel que soit le prestataire. Nous disons: C'est bien. Mais nous pensons aussi: On peut faire beaucoup mieux."
  },
  "homepage.s3a.saveTaxes": {
    de: "Steuern sparen, automatisch",
    en: "Save taxes, automatically",
    fr: "Économiser en impôts, automatiquement"
  },
  "homepage.s3a.interestOnCash": {
    de: "Zins auf Cash",
    en: "Interest on cash",
    fr: "Intérêt sur le cash"
  },
  "homepage.s3a.managementFees": {
    de: "Verwaltungsgebühr",
    en: "Management fees",
    fr: "Frais de gestion"
  },
  "homepage.s3a.readMore": {
    de: "Mehr zur Säule 3a",
    en: "More about Pillar 3a",
    fr: "Plus d'infos sur le Pilier 3a"
  },
  "readyToInvest.title": {
    de: "Bereit zu investieren?",
    en: "Ready to invest?",
    fr: "Prêt à investir?"
  },
  "readyToInvest.createPortfolioNow": {
    de: "Erstellen Sie jetzt Ihr Portfolio. Ab CHF 8'500 Ersteinzahlung.",
    en: "Create your portfolio now. Starting from CHF 8’500 initial deposit.",
    fr: "Créez votre portefeuille maintenant. A partir de 8’500 CHF."
  },
  "readyToInvest.content": {
    de: "Sie wissen nicht, wo Sie anfangen sollen? Eröffnen Sie jetzt ein Testkonto und wandeln Sie es später in ein echtes Konto um.",
    en: "Not sure how to start? Open a test account and upgrade to a full account later.",
    fr: "Vous ne savez pas par où commencer? Ouvrez un compte test maintenant et convertissez-le en compte réel plus tard."
  },
  "faq.search.noResults": {
    de: "Keine Resultate",
    en: "No results",
    fr: "Pas de résultats"
  },
  "faq.search.placeholder": {
    de: "Suche...",
    en: "Search...",
    fr: "Recherche..."
  },
  "faq.contact.question": {
    de: "Keine passende Antwort gefunden?",
    en: "Can’t find what you’re looking for?",
    fr: "Vous n'avez pas trouvé la bonne réponse?"
  },
  "faq.contact.button": {
    de: "Kontaktieren Sie uns",
    en: "Contact us",
    fr: "Contactez-nous"
  },
  "faq.detail.moreQuestions": {
    de: "Weitere Fragen in ",
    en: "More questions in ",
    fr: "Plus de questions en "
  },
  "childPortfolio.performance.savingsAccount": {
    de: "Sparkonto, 1.5% Zins",
    en: "Savings account, 1.5% interest",
    fr: "Compte d'épargne, 1.5% d'intérêt"
  },
  "childPortfolio.performance.invested": {
    de: "100% Aktien, 5% Rendite",
    en: "100% equities, 5% return",
    fr: "100% actions, 5% de rendement"
  },
  "childPortfolio.share.email": {
    de: "Per E-Mail senden",
    en: "Send with E-Mail",
    fr: "Envoyer par E-Mail"
  },
  "childPortfolio.share.whatsapp": {
    de: "Per WhatsApp senden",
    en: "Send with WhatsApp",
    fr: "Envoyer par WhatsApp"
  },
  "childPortfolio.share.facebook": {
    de: "Auf Facebook teilen",
    en: "Share on Facebook",
    fr: "Partager sur Facebook"
  },
  "childPortfolio.share.twitter": {
    de: "Auf Twitter teilen",
    en: "Share on Twitter",
    fr: "Partager sur Twitter"
  },
  "childPortfolio.share.linkedIn": {
    de: "Auf LinkedIn teilen",
    en: "Share on LinkedIn",
    fr: "Partager sur LinkedIn"
  },
  "childPortfolio.share.mail.subject": {
    de: "Kinderportfolio von True Wealth",
    en: "Child portfolio of TrueWealth",
    fr: "Portefeuille pour enfants de True Wealth"
  },
  "childPortfolio.share.mail.body": {
    de: "Hallo\n\nich möchte dich herzlich dazu einladen, mehr über das ETF-basierte Kinderportfolio von True Wealth zu erfahren.\n\nTrue Wealth bietet die Möglichkeit, ein Kinderportfolio einzurichten. Damit kann die finanzielle Zukunft der Kinder langfristig gesichert werden.\n\nMit dem Kinderportfolio kann das Vermögen des Kindes sinnvoll angelegt werden und langfristig von einem soliden Anlagehorizont profitieren. Und das Beste daran: Das Konto gehört tatsächlich deinem Kind, und wenn es 18 Jahre alt wird, wird das Kinderportfolio automatisch in ein normales Erwachsenenportfolio umgewandelt.\n\nWenn du mehr darüber erfahren möchtest, klicke hier: {url}\n\nLiebe Grüsse",
    en: "Hello\n\nI would like to invite you to learn more about True Wealth's ETF-based child portfolio.\n\nTrue Wealth offers the opportunity to set up a child portfolio. This can be used to secure the financial future of the children in the long term.\n\nWith the child portfolio, the child's assets can be invested wisely and benefit from a solid investment horizon over the long term. Best of all, the account actually belongs to your child, and when he or she turns 18, the child's portfolio is automatically converted into a normal adult portfolio.\n\nClick here to learn more: {url}\n\nKind regards",
    fr: "Bonjour\n\nJ'aimerais vous inviter à en savoir plus sur le portefeuille enfant de True Wealth basé sur les ETF.\n\nTrue Wealth offre la possibilité de constituer un portefeuille pour enfants. Celui-ci peut être utilisé pour assurer l'avenir financier des enfants à long terme.\n\nGrâce au portefeuille enfant, les avoirs de l'enfant peuvent être investis judicieusement et bénéficier d'un horizon d'investissement solide à long terme. Mieux encore, le compte appartient réellement à votre enfant et, lorsqu'il atteint l'âge de 18 ans, le portefeuille enfant est automatiquement converti en un portefeuille adulte normal.\n\nSi vous souhaitez en savoir plus, cliquez ici: {url}\n\nSalutations"
  },
  "childPortfolio.performance.expectedReturnTooltip": {
    de: "Das ist die langfristig angenommen Portfoliorendite für ein risikobehaftetes Portfolio. Anlagerenditen werden je nach Marktumfeld sehr unterschiedlich ausfallen und können in einer widrigen Marktphase auch negativ sein (Verlust des eingesetzten Kapitals).",
    en: "This is our expected value in the long run for a risk bearing portfolio. Investment returns will vary significantly in different markets and can be negative in adverse market phases (loss of capital).",
    fr: "Il s'agit de notre valeur attendue à long terme pour un portefeuille à risque. Les rendements des investissements varient considérablement selon les marchés et peuvent être négatifs dans des phases de marché défavorables (perte de capital)."
  },
  "pillar3aTaxSavingCalculator.form.showAdvanced": {
    de: "Erweiterte Optionen",
    en: "Advanced options",
    fr: "Options avancées"
  },
  "pillar3aTaxSavingCalculator.form.hideAdvanced": {
    de: "Erweiterte Optionen ausblenden",
    en: "Hide Advanced options",
    fr: "Cachez les options avancées"
  },
  "pillar3aTaxSavingCalculator.form.ageInput": {
    de: "Mein Alter",
    en: "My age",
    fr: "Mon âge"
  },
  "pillar3aTaxSavingCalculator.form.ageInputSuffix": {
    de: "Jahre",
    en: "years",
    fr: "ans"
  },
  "pillar3aTaxSavingCalculator.form.municipalityInput": {
    de: "Wohnort",
    en: "Residence",
    fr: "Domicile"
  },
  "pillar3aTaxSavingCalculator.form.genderInput": {
    de: "Geschlecht",
    en: "Gender",
    fr: "Sexe"
  },
  "pillar3aTaxSavingCalculator.form.gender.MALE": {
    de: "Mann",
    en: "Male",
    fr: "Homme"
  },
  "pillar3aTaxSavingCalculator.form.gender.FEMALE": {
    de: "Frau",
    en: "Female",
    fr: "Femme"
  },
  "pillar3aTaxSavingCalculator.form.civilStatusInput": {
    de: "Zivilstand",
    en: "Civil status",
    fr: "État civil"
  },
  "pillar3aTaxSavingCalculator.form.civilStatus.SINGLE": {
    de: "Alleinstehend",
    en: "Single",
    fr: "Célibataire"
  },
  "pillar3aTaxSavingCalculator.form.civilStatus.MARRIED": {
    de: "Verheiratet",
    en: "Married",
    fr: "Marié"
  },
  "pillar3aTaxSavingCalculator.form.religionInput": {
    de: "Konfession",
    en: "Religion",
    fr: "Confession"
  },
  "pillar3aTaxSavingCalculator.form.religion.ROMAN_CATHOLIC": {
    de: "Römisch-katholisch",
    en: "Roman catholic",
    fr: "Catholique romain"
  },
  "pillar3aTaxSavingCalculator.form.religion.PROTESTANT": {
    de: "Reformiert",
    en: "Protestant",
    fr: "Protestant"
  },
  "pillar3aTaxSavingCalculator.form.religion.CHRISTIAN_CATHOLIC": {
    de: "Christkatholisch",
    en: "Christian catholic",
    fr: "Chrétien catholique"
  },
  "pillar3aTaxSavingCalculator.form.religion.OTHER_NONE": {
    de: "Keine bzw. andere",
    en: "Other or none",
    fr: "Autre ou aucun"
  },
  "pillar3aTaxSavingCalculator.form.childrenInput": {
    de: "Kinder",
    en: "Children",
    fr: "Enfants"
  },
  "pillar3aTaxSavingCalculator.form.children.WITH": {
    de: "Ja",
    en: "With",
    fr: "Avec"
  },
  "pillar3aTaxSavingCalculator.form.children.WITHOUT": {
    de: "Nein",
    en: "Without",
    fr: "Sans"
  },
  "pillar3aTaxSavingCalculator.form.current3aAssetsInput": {
    de: "Derzeitiges 3a Guthaben",
    en: "Current 3a assets",
    fr: "Actifs courants 3a"
  },
  "pillar3aTaxSavingCalculator.form.taxableIncomeInput": {
    de: "Steuerbares Einkommen",
    en: "Taxable annual income",
    fr: "Revenu annuel imposable"
  },
  "pillar3aTaxSavingCalculator.form.pillar3aContributionInput": {
    de: "Jährlicher 3a-Beitrag",
    en: "Yearly 3a contribution",
    fr: "Contribution 3a annuelle"
  },
  "pillar3aTaxSavingCalculator.form.missedYearsInput": {
    de: "So häufig vergesse ich, in die Säule 3a einzuzahlen:",
    en: "I tend to forget to pay into pillar 3a:",
    fr: "C'est dire si j'oublie souvent de cotiser au pilier 3a:"
  },
  "pillar3aTaxSavingCalculator.form.missedYears.0": {
    de: "Nie",
    en: "Never",
    fr: "Jamais"
  },
  "pillar3aTaxSavingCalculator.form.missedYears.1": {
    de: "Jedes Jahr",
    en: "Every year",
    fr: "Chaque année"
  },
  "pillar3aTaxSavingCalculator.form.missedYears.2": {
    de: "Alle zwei Jahre",
    en: "Every two years",
    fr: "Tous les deux ans"
  },
  "pillar3aTaxSavingCalculator.form.missedYears.3": {
    de: "Alle drei Jahre",
    en: "Every three years",
    fr: "Tous les trois ans"
  },
  "pillar3aTaxSavingCalculator.form.missedYears.4": {
    de: "Alle vier Jahre",
    en: "Every four years",
    fr: "Tous les quatre ans"
  },
  "pillar3aTaxSavingCalculator.form.missedYears.5": {
    de: "Alle fünf Jahre",
    en: "Every five years",
    fr: "Tous les cinq ans"
  },
  "pillar3aTaxSavingCalculator.form.validation.NUMBER_REQUIRED": {
    de: "Angabe benötigt",
    en: "Number required",
    fr: "Nombre requis"
  },
  "pillar3aTaxSavingCalculator.form.validation.TOO_LOW": {
    de: "Mindestens",
    en: "At least",
    fr: "Au moins"
  },
  "pillar3aTaxSavingCalculator.form.validation.TOO_BIG": {
    de: "Höchstens",
    en: "At most",
    fr: "Au maximum"
  },
  "pillar3aTaxSavingCalculator.chart.trueWealthLabel": {
    de: "True Wealth\nSäule 3a",
    en: "True Wealth\nPillar 3a",
    fr: "True Wealth\nPilier 3a"
  },
  "pillar3aTaxSavingCalculator.chart.traditionalLabel": {
    de: "Normale\nSäule 3a",
    en: "Standard\nPillar 3a",
    fr: "Pillar 3a\nOrdinaire"
  },
  "pillar3aTaxSavingCalculator.chart.generalSavings": {
    de: "3a Steuervorteil ",
    en: "3a tax benefit",
    fr: "3a avantage fiscal "
  },
  "pillar3aTaxSavingCalculator.chart.staggeredPayoutSavings": {
    de: "Gestaffelte Auszahlungen",
    en: "Staggered payouts",
    fr: "Retraits échelonnés"
  },
  "pillar3aTaxSavingCalculator.chart.automaticDepositSavings": {
    de: "Auffüllautomatik",
    en: "Automatic deposits",
    fr: "Versements automatiques"
  },
  "pillar3aTaxSavingCalculator.chart.errorHeader": {
    de: "Hoppla... Etwas ist schief gelaufen.",
    en: "Oops... Something went wrong.",
    fr: "Oups... Quelque chose a mal tourné."
  },
  "pillar3aTaxSavingCalculator.chart.errorText": {
    de: "Bitte versuchen Sie es später noch einmal.",
    en: "Please try again later.",
    fr: "Veuillez réessayer plus tard."
  },
  "pillar3aTaxSavingCalculator.chart.explanation.title": {
    de: "Lesehilfe",
    en: "Reading guide",
    fr: "Interprétation"
  },
  "pillar3aTaxSavingCalculator.chart.explanation.content": {
    de: "Der generelle 3a Steuervorteil beträgt rund {generalSavings}. Die True Wealth Auffüllautomatik verhindert vergessene Einzahlungsjahre und trägt ca. weitere {automaticDepositSavings} bei. Die automatische Nutzung mehrerer 3a Konti und gestaffelter Auszahlungen kann den Auszahlungssteuersatz reduzieren, was einen zusätzlichen Steuervorteil von etwa {staggeredPayoutSavings} bringt.",
    en: "The general 3a tax advantage amounts to around {generalSavings}. The True Wealth automatic replenishment prevents forgotten deposit years and contributes about another {automaticDepositSavings}. The automatic use of multiple 3a accounts and staggered payouts can reduce the payout tax rate, which brings an additional tax advantage of around {staggeredPayoutSavings}.",
    fr: "L'avantage fiscal général 3a s'élève à environ {generalSavings}. Le système de remplissage automatique de True Wealth évite l’oubli de versements annuels et contribue à environ {automaticDepositSavings} supplémentaires. L'utilisation automatique de plusieurs comptes 3a et de versements échelonnés peut réduire le taux d'imposition des versements, contribuant à un avantage fiscal supplémentaire d'environ {staggeredPayoutSavings}."
  },
  "inputDropdownList.emptyFilter": {
    de: "Keine Ergebnisse",
    en: "No results",
    fr: "Pas de résultats"
  },
  "help.center.label": {
    de: "Helpcenter",
    en: "Help Center",
    fr: "Helpcenter"
  },
  "s3a.competitor": {
    de: "Mitbewerber",
    en: "Competitors",
    fr: "Concurrence"
  },
  "pricing.fees.title": {
    de: "True Wealth Gebühren",
    en: "True Wealth fees",
    fr: "Frais de True Wealth"
  },
  "pricing.fees.perAnnum": {
    de: "pro Jahr",
    en: "per year",
    fr: "par an"
  },
  "pricing.fees.plannedUntied": {
    de: "Freies Vermögen",
    en: "Untied assets",
    fr: "Actifs non liés"
  },
  "pricing.fees.plannedS3a": {
    de: "Säule 3a",
    en: "Pillar 3a",
    fr: "Pilier 3a"
  },
  "pricing.fees.childPortfolio": {
    de: "Kinderportfolio",
    en: "Child portfolio",
    fr: "Portefeuille d'enfant"
  },
  "pricing.fees.table.trueWealth": {
    de: "True Wealth Gebühren",
    en: "True Wealth fees",
    fr: "Coûts True Wealth"
  },
  "pricing.fees.table.trueWealth.tooltip": {
    de: "0% Verwaltungsgebühr auf Guthaben der Säule 3a. Zusätzlich wird der Bargeldanteil der Säule 3a mit 1.40% verzinst.",
    en: "0% management fee on Pillar 3a assets. In addition, 1.40% interest is paid on 3a cash holdings.",
    fr: "0% de frais de gestion sur les actifs du pilier 3a. En outre, un intérêt de 1.40% est payé sur les liquidités du pilier 3a."
  },
  "pricing.fees.table.ter": {
    de: "Ø Produktkosten (ØTER)",
    en: "Ø product costs (ØTER)",
    fr: "Ø coûts des produits (ØTER)"
  },
  "pricing.fees.table.ter.perYear": {
    de: "pro Jahr",
    en: "per year",
    fr: "par an"
  },
  "pricing.fees.detail": {
    de: "Preise im Detail",
    en: "See pricing in detail",
    fr: "Voir les prix en détail"
  },
  "pricing.fees.degressive.below": {
    de: "unter {value}",
    en: "below {value}",
    fr: "moins de {value}"
  },
  "pricing.fees.degressive.from": {
    de: "ab {value}",
    en: "from {value}",
    fr: "dès {value}"
  },
  "pricing.comparison.tabs.untied": {
    de: "Freies Vermögen",
    en: "Free Assets",
    fr: "Avoirs libres"
  },
  "pricing.comparison.tabs.childPortfolio": {
    de: "Kinderportfolio",
    en: "Child portfolio",
    fr: "Portefeuille d'enfant"
  },
  "pricing.comparison.tabs.s3a": {
    de: "Säule 3a",
    en: "Pillar 3a",
    fr: "Pilier 3a"
  },
  "error.404.title": {
    de: "Hoppla...",
    en: "Oops...",
    fr: "Oups..."
  },
  "error.404.description": {
    de: "Die von Ihnen angeforderte Seite existiert leider nicht.",
    en: "The page you requested does not exist.",
    fr: "La page que vous avez demandée n'existe pas."
  },
  "error.500.title": {
    de: "Hoppla...",
    en: "Oops...",
    fr: "Oups..."
  },
  "error.500.description": {
    de: "Leider ging etwas schief beim Verarbeiten Ihrer Anfrage. Wir bitten um Entschuldigung.",
    en: "Unfortunately, something went wrong while processing your request. We apologize for any inconvenience.",
    fr: "Malheureusement, un problème est survenu lors du traitement de votre demande. Nous nous excusons pour tout désagrément."
  },
  "error.500.backToHomepage": {
    de: "Zurück zur Startseite",
    en: "Back to homepage",
    fr: "Retour à la page d'accueil"
  }
};
