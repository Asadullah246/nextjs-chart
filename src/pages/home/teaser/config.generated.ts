export const generated = {
  minimumInvestmentAmount: 8500,
  assetClasses: [
    {
      id: "cash",
      label: { de: "Cash", en: "Cash", fr: "Cash" },
      tooltip: {
        de: "Cash umfasst die Bankkonten bei Ihrer kontoführenden Bank und ist nicht in Wertschriften investiert.",
        en: "Cash includes bank accounts at your custodian bank. Cash is not invested in securities.",
        fr: "Cash (liquidités) comprend les comptes bancaires auprès de votre banque dépositaire. Les liquidités ne sont pas investies dans des titres."
      },
      teaserWeights: [
        0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01,
        0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01,
        0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01,
        0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01,
        0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01,
        0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01
      ],
      color: "#787878"
    },
    {
      id: "bonds",
      label: { de: "Obligationen", en: "Bonds", fr: "Obligations" },
      tooltip: {
        de: "Obligationen, auch Anleihen genannt, sind Schuldverschreibungen, welche als Wertpapiere gehandelt werden. Die Schuldner sind staatliche Organe, Unternehmen und andere Institutionen.",
        en: "Bonds, also labelled fixed income, are debt securities of governments, municipalities, corporates or other institutions.",
        fr: "Les obligations, également appelées titres à revenu fixe, sont des titres de créance émis par des gouvernements, des municipalités, des entreprises ou d'autres institutions."
      },
      teaserWeights: [
        0.836313, 0.803908, 0.788479, 0.773968, 0.760315, 0.710332, 0.698394, 0.680733, 0.668476,
        0.659366, 0.647107, 0.635026, 0.624146, 0.613027, 0.601924, 0.588105, 0.577071, 0.566153,
        0.555344, 0.544639, 0.542562, 0.533334, 0.523874, 0.51439, 0.504551, 0.494675, 0.484719,
        0.47474, 0.464797, 0.454858, 0.455179, 0.447649, 0.440283, 0.433192, 0.422678, 0.414795,
        0.40695, 0.39278, 0.387312, 0.38191, 0.364237, 0.358413, 0.322167, 0.308015, 0.307164,
        0.30528, 0.301726, 0.296606, 0.289901, 0.283056, 0.274454, 0.265787, 0.243371, 0.23903,
        0.234631, 0.229496, 0.218677, 0.213996, 0.207881, 0.200095, 0.191971, 0.182009, 0.171068,
        0.159695, 0.148285, 0.131072, 0.123318, 0.107785, 0.091782, 0.075926, 0.059377, 0.042167,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
      ],
      color: "#00a8df"
    },
    {
      id: "real_estate",
      label: {
        de: "Immobilienaktien",
        en: "Real Estate Investment Trusts",
        fr: "Fonds immobiliers"
      },
      tooltip: {
        de: "Anlagen in Unternehmen, die Immobilienprojekte entwickeln oder bewirtschaften (REIT oder Real Estate Investment Trusts). Mit dieser Anlageklasse partizipiert man indirekt, aber sehr liquide an den Erträgen und der Preisentwicklung von Immobilien.",
        en: "Investments in corporates who develop or operate real estate projects, aka REITs. This asset class allows to participate indirectly, but in a liquid way, in the earnings and price appreciation of real properties.",
        fr: "Investissements dans des entreprises qui développent ou exploitent des projets immobiliers, appelés REIT (Real Estate Invesmtent Trust). Cette classe d'actifs permet de participer indirectement, mais de manière liquide, aux bénéfices et à l'appréciation du prix des biens immobiliers."
      },
      teaserWeights: [
        0.065826, 0.06742, 0.069792, 0.071791, 0.073502, 0.073262, 0.074217, 0.074343, 0.074855,
        0.07453, 0.074838, 0.075022, 0.073757, 0.073514, 0.073207, 0.072461, 0.07195, 0.071357,
        0.070682, 0.069931, 0.067811, 0.066771, 0.065733, 0.06466, 0.063629, 0.062551, 0.061428,
        0.060248, 0.059005, 0.057709, 0.055187, 0.053183, 0.05108, 0.048937, 0.053012, 0.052228,
        0.051399, 0.051067, 0.049932, 0.048758, 0.04844, 0.046982, 0.043541, 0.0423, 0.039778,
        0.036773, 0.031185, 0.032027, 0.031978, 0.031856, 0.037908, 0.039439, 0.041658, 0.042793,
        0.043822, 0.044687, 0.045869, 0.046588, 0.047346, 0.048134, 0.048789, 0.049363, 0.049954,
        0.050443, 0.050739, 0.051165, 0.050684, 0.050597, 0.050274, 0.046614, 0.048851, 0.050564,
        0.053382, 0.058544, 0.070559, 0.090065, 0.108295, 0.125547, 0.142673, 0.164747, 0.191143,
        0.216359
      ],
      color: "#9dd600"
    },
    {
      id: "commodities",
      label: { de: "Rohstoffe", en: "Natural Resources", fr: "Ressources naturelles" },
      tooltip: {
        de: "Rohstoffanlagen umfassen Sachgüter wie Öl, Gas und Industriemetalle sowie Grundnahrungsmittel oder Edelmetalle. Rohstoffe bieten einen gewissen Schutz vor unerwarteter Inflation.",
        en: "Natural Resources, or commodities, include oil, gas, industrial metals as well as staple food or precious metals. Natural resources may provide some degree of protection against unanticipated inflation.",
        fr: "Les ressources naturelles, ou matières premières, comprennent le pétrole, le gaz, les métaux industriels ainsi que les aliments de base ou les métaux précieux. Les ressources naturelles peuvent offrir un certain degré de protection contre une inflation imprévue."
      },
      teaserWeights: [
        0.0, 0.0, 0.0, 0.0, 0.0, 0.039363, 0.040511, 0.041267, 0.042294, 0.042949, 0.044034,
        0.045104, 0.045355, 0.04631, 0.047266, 0.047976, 0.048879, 0.049767, 0.05064, 0.0515,
        0.051367, 0.052059, 0.052753, 0.053455, 0.054251, 0.055049, 0.05585, 0.056644, 0.057419,
        0.058198, 0.057798, 0.058205, 0.058552, 0.058857, 0.058621, 0.058699, 0.058752, 0.059412,
        0.059176, 0.058915, 0.059776, 0.059391, 0.059771, 0.05998, 0.058893, 0.057809, 0.057053,
        0.055252, 0.053251, 0.051235, 0.048889, 0.0467, 0.045249, 0.04266, 0.040094, 0.03744,
        0.034748, 0.031756, 0.028658, 0.025406, 0.022104, 0.018521, 0.014561, 0.010426, 0.006258,
        0.002068, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
      ],
      color: "#ffea00"
    },
    {
      id: "equities",
      label: { de: "Aktien", en: "Equities", fr: "Actions" },
      tooltip: {
        de: "Aktien sind Sachanlagen und bieten eine Beteiligung an Unternehmen. Sie versprechen langfristig höhere Renditen, sind jedoch auch höheren Wertschwankungen unterworfen als andere Anlageklassen.",
        en: "Equities are real investments and offer to participate in the prosperity of corporations. They promise higher returns in the long term, but are subject to higher value fluctuations than other asset classes.",
        fr: "Les actions sont des investissements réels et permettent de participer à la prospérité des entreprises. Elles promettent des rendements plus élevés à long terme, mais sont soumises à des fluctuations de valeur plus importantes que les autres catégories d'actifs."
      },
      teaserWeights: [
        0.087861, 0.118672, 0.131729, 0.144242, 0.156182, 0.167043, 0.176879, 0.193657, 0.204374,
        0.213155, 0.224021, 0.234848, 0.246742, 0.25715, 0.267603, 0.281458, 0.2921, 0.302723,
        0.313334, 0.32393, 0.328259, 0.337836, 0.34764, 0.357495, 0.367569, 0.377725, 0.388003,
        0.398369, 0.40878, 0.419235, 0.421837, 0.430963, 0.440085, 0.449013, 0.455688, 0.464279,
        0.4729, 0.486741, 0.493579, 0.500417, 0.517547, 0.525214, 0.564521, 0.579705, 0.584165,
        0.590138, 0.600035, 0.606115, 0.61487, 0.623853, 0.628749, 0.638074, 0.659723, 0.665517,
        0.671454, 0.678377, 0.690706, 0.69766, 0.706115, 0.716365, 0.727136, 0.740107, 0.754417,
        0.769436, 0.784719, 0.805695, 0.815998, 0.831618, 0.847943, 0.86746, 0.881773, 0.897268,
        0.936618, 0.931456, 0.919441, 0.899935, 0.881705, 0.864453, 0.847327, 0.825253, 0.798857,
        0.773641
      ],
      color: "#dd8217"
    }
  ],
  costs: [
    0.001872, 0.00186, 0.001867, 0.001873, 0.001878, 0.001873, 0.001874, 0.00187, 0.001868,
    0.001867, 0.001865, 0.001862, 0.001845, 0.001838, 0.00183, 0.001821, 0.001813, 0.001805,
    0.001796, 0.001786, 0.001781, 0.001771, 0.001762, 0.001753, 0.001744, 0.001735, 0.001726,
    0.001716, 0.001706, 0.001695, 0.001698, 0.001687, 0.001674, 0.001661, 0.001662, 0.001651,
    0.00164, 0.001631, 0.001619, 0.001607, 0.001596, 0.001581, 0.001523, 0.001507, 0.001488,
    0.001465, 0.001427, 0.00143, 0.00143, 0.001429, 0.001445, 0.001448, 0.001446, 0.001451,
    0.001455, 0.001458, 0.001462, 0.001463, 0.001464, 0.001466, 0.001467, 0.001467, 0.001464,
    0.00146, 0.001454, 0.001452, 0.001442, 0.001427, 0.00141, 0.001384, 0.001374, 0.001362,
    0.001326, 0.001348, 0.001381, 0.001434, 0.001481, 0.001525, 0.001567, 0.00163, 0.001707, 0.00178
  ],
  risks: [
    0.139923, 0.159343, 0.169014, 0.17861, 0.188018, 0.204891, 0.213396, 0.227338, 0.236743,
    0.247251, 0.256766, 0.266357, 0.278464, 0.288021, 0.297624, 0.309989, 0.319844, 0.329731,
    0.339651, 0.349606, 0.361007, 0.371014, 0.381108, 0.391211, 0.401216, 0.411283, 0.421447,
    0.431698, 0.442027, 0.452432, 0.462601, 0.472598, 0.482591, 0.492455, 0.504729, 0.515299,
    0.525901, 0.542477, 0.551015, 0.559526, 0.580236, 0.589264, 0.628695, 0.645068, 0.650157,
    0.65653, 0.66598, 0.671552, 0.678532, 0.685592, 0.695008, 0.703616, 0.720513, 0.726689,
    0.732811, 0.739373, 0.750422, 0.75635, 0.763337, 0.771591, 0.780072, 0.790025, 0.80001,
    0.810015, 0.820011, 0.834136, 0.840248, 0.850014, 0.860009, 0.870275, 0.880016, 0.890002,
    0.912989, 0.923962, 0.930003, 0.940001, 0.950002, 0.960001, 0.970321, 0.980003, 0.990001,
    1.000001
  ],
  fee: [
    { nav: 0, fee: 0.005 },
    { nav: 500000, fee: 0.0049 },
    { nav: 530000, fee: 0.0048 },
    { nav: 560000, fee: 0.0047 },
    { nav: 600000, fee: 0.0046 },
    { nav: 650000, fee: 0.0045 },
    { nav: 700000, fee: 0.0044 },
    { nav: 750000, fee: 0.0043 },
    { nav: 810000, fee: 0.0042 },
    { nav: 880000, fee: 0.0041 },
    { nav: 960000, fee: 0.004 },
    { nav: 1000000, fee: 0.0039 },
    { nav: 1100000, fee: 0.0038 },
    { nav: 1200000, fee: 0.0037 },
    { nav: 1400000, fee: 0.0036 },
    { nav: 1500000, fee: 0.0035 },
    { nav: 1700000, fee: 0.0034 },
    { nav: 2000000, fee: 0.0033 },
    { nav: 2200000, fee: 0.0032 },
    { nav: 2600000, fee: 0.0031 },
    { nav: 3000000, fee: 0.003 },
    { nav: 3500000, fee: 0.0029 },
    { nav: 4200000, fee: 0.0028 },
    { nav: 5100000, fee: 0.0027 },
    { nav: 6300000, fee: 0.0026 },
    { nav: 8000000, fee: 0.0025 }
  ]
};
