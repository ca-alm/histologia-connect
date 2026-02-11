export interface ClinicalCase {
  id: number;
  title: string;
  category: string;
  scenario: string;
  histologicalFindings: string;
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  keyPoints: string[];
}

export const clinicalCases: ClinicalCase[] = [
  {
    id: 1,
    title: "Nódulo Tireoidiano — Carcinoma Papilífero",
    category: "Sistema Endócrino",
    scenario: "Paciente feminina, 42 anos, apresenta nódulo palpável em lobo direito da tireoide. USG mostra nódulo sólido hipoecogênico de 2,3 cm com microcalcificações. Realizada punção aspirativa por agulha fina (PAAF).",
    histologicalFindings: "A citologia mostra células epiteliais foliculares com núcleos aumentados, claros (aspecto em 'vidro fosco'), fendas nucleares (grooves) e pseudo-inclusões nucleares intranucleares.",
    questions: [
      { question: "Qual o diagnóstico histopatológico mais provável?", options: ["Bócio coloide", "Carcinoma papilífero da tireoide", "Adenoma folicular", "Tireoidite de Hashimoto"], correctIndex: 1, explanation: "As características nucleares (núcleos claros em 'vidro fosco', fendas e pseudo-inclusões) são patognomônicas do carcinoma papilífero, neoplasia maligna mais comum da tireoide." },
      { question: "Qual coloração especial pode auxiliar na confirmação?", options: ["PAS", "Imuno-histoquímica para tireoglobulina e TTF-1", "Tricrômico de Masson", "Azul de toluidina"], correctIndex: 1, explanation: "IHQ para tireoglobulina confirma origem folicular e TTF-1 é marcador de diferenciação tireoidiana." },
    ],
    keyPoints: ["O carcinoma papilífero é definido pelas características nucleares, não pela arquitetura papilar", "Microcalcificações (corpos psamomatosos) são calcificações concêntricas frequentes", "Disseminação principal por via linfática para linfonodos cervicais", "É o carcinoma tireoidiano mais comum (80%) e de melhor prognóstico"],
  },
  {
    id: 2,
    title: "Biópsia Renal em Síndrome Nefrótica",
    category: "Sistema Urinário",
    scenario: "Criança de 5 anos apresenta edema generalizado, proteinúria maciça (>3,5g/dia), hipoalbuminemia e hiperlipidemia. Realizada biópsia renal após falha de resposta inicial à corticoterapia.",
    histologicalFindings: "Microscopia óptica com glomérulos de aspecto normal. Imunofluorescência negativa. Microscopia eletrônica revela apagamento difuso (fusão) dos pedicelos dos podócitos.",
    questions: [
      { question: "Qual a glomerulopatia mais provável?", options: ["Glomerulonefrite membranosa", "Doença de lesões mínimas", "Glomeruloesclerose segmentar e focal", "Nefropatia por IgA"], correctIndex: 1, explanation: "A doença de lesões mínimas é a causa mais comum de síndrome nefrótica em crianças. Glomérulos normais à MO e apagamento dos pedicelos à ME." },
      { question: "Por que a microscopia eletrônica é essencial neste caso?", options: ["Para ver bactérias", "Porque a MO é completamente normal — só a ME mostra a fusão dos pedicelos", "Para medir o tamanho dos glomérulos", "Para ver depósitos de IgA"], correctIndex: 1, explanation: "A doença de lesões mínimas não apresenta alterações à microscopia óptica. A fusão dos pedicelos dos podócitos é visível apenas à ME." },
    ],
    keyPoints: ["A fusão dos pedicelos compromete a barreira de filtração, causando proteinúria seletiva", "Excelente resposta a corticoides na maioria dos casos pediátricos", "A microscopia eletrônica é essencial — a MO é insuficiente para o diagnóstico", "A nefrina (proteína das fendas de filtração) é funcionalmente comprometida"],
  },
  {
    id: 3,
    title: "Lesão Hepática Crônica — Cirrose",
    category: "Sistema Digestório",
    scenario: "Homem de 55 anos, etilista crônico, apresenta ascite, icterícia e esplenomegalia. Biópsia hepática realizada por via transjugular.",
    histologicalFindings: "Arquitetura lobular distorcida por septos fibrosos que delimitam nódulos regenerativos. Infiltrado inflamatório portal e periportal. Tricrômico de Masson evidencia intensa fibrose em ponte.",
    questions: [
      { question: "Qual o diagnóstico histopatológico?", options: ["Esteatose hepática", "Hepatite crônica ativa", "Cirrose hepática", "Carcinoma hepatocelular"], correctIndex: 2, explanation: "A cirrose é definida pela fibrose difusa com nódulos regenerativos que distorcem a arquitetura lobular." },
      { question: "Qual célula hepática é a principal produtora de colágeno na fibrose?", options: ["Hepatócito", "Célula de Kupffer", "Célula estrelada hepática (de Ito)", "Colangiócito"], correctIndex: 2, explanation: "As células estreladas (de Ito) ativam-se em miofibroblastos produtores de colágeno na fibrose hepática." },
    ],
    keyPoints: ["O tricrômico de Masson cora colágeno em azul — essencial para avaliar fibrose", "A cirrose é irreversível e o estágio final de hepatopatias crônicas", "A distorção vascular causa hipertensão portal (ascite, varizes, esplenomegalia)", "Risco aumentado de carcinoma hepatocelular no fígado cirrótico"],
  },
  {
    id: 4,
    title: "Melanoma Maligno Cutâneo",
    category: "Pele e Anexos",
    scenario: "Paciente masculino, 68 anos, com lesão pigmentada assimétrica, bordas irregulares, coloração heterogênea e diâmetro de 1,5 cm no dorso. Realizada biópsia excisional.",
    histologicalFindings: "Proliferação de melanócitos atípicos na junção dermoepidérmica e na derme, com mitoses atípicas, pleomorfismo nuclear e invasão da derme reticular (Breslow 2,1 mm). IHQ: S-100 (+), HMB-45 (+), Melan-A (+).",
    questions: [
      { question: "Qual o diagnóstico?", options: ["Nevo melanocítico composto", "Melanoma maligno", "Carcinoma basocelular", "Queratose seborreica"], correctIndex: 1, explanation: "Proliferação de melanócitos atípicos com invasão dérmica, pleomorfismo e positividade para marcadores melanocíticos define melanoma maligno." },
      { question: "Qual o principal fator prognóstico?", options: ["Localização anatômica", "Índice de Breslow (espessura em mm)", "Idade do paciente", "Cor da lesão"], correctIndex: 1, explanation: "O índice de Breslow (espessura máxima em mm) é o principal fator prognóstico do melanoma. Breslow >1mm indica biópsia do linfonodo sentinela." },
    ],
    keyPoints: ["Regra ABCDE: Assimetria, Bordas irregulares, Cor heterogênea, Diâmetro >6mm, Evolução", "IHQ com S-100, HMB-45 e Melan-A confirma diferenciação melanocítica", "O índice de Breslow determina o estadiamento e conduta cirúrgica", "Disseminação por via linfática e hematogênica"],
  },
  {
    id: 5,
    title: "Doença Celíaca — Enteropatia Glúten-sensível",
    category: "Sistema Digestório",
    scenario: "Mulher de 32 anos com diarreia crônica, perda ponderal e anemia ferropriva. Anti-transglutaminase IgA elevados. EDA com biópsia duodenal.",
    histologicalFindings: "Atrofia vilositária subtotal, hiperplasia de criptas e intenso infiltrado linfocitário intraepitelial (>40 linfócitos/100 enterócitos). Classificação Marsh 3b.",
    questions: [
      { question: "Qual alteração é mais característica?", options: ["Granulomas epitelioides", "Atrofia vilositária com linfocitose intraepitelial", "Metaplasia intestinal", "Ulceração transmural"], correctIndex: 1, explanation: "A atrofia das vilosidades associada a linfócitos intraepiteliais e hiperplasia críptica são achados clássicos da doença celíaca." },
      { question: "Qual a classificação histológica utilizada?", options: ["TNM", "Classificação de Marsh", "Classificação de Gleason", "Ann Arbor"], correctIndex: 1, explanation: "A classificação de Marsh gradua a gravidade: Marsh 1 (linfocitose isolada) → Marsh 3c (atrofia vilositária total com hiperplasia críptica)." },
    ],
    keyPoints: ["A destruição das vilosidades reduz a superfície absortiva (má absorção)", "Classificação de Marsh: 1 (linfocitose) → 3c (atrofia total)", "Dieta livre de glúten leva à recuperação da arquitetura vilositária", "Anticorpos anti-transglutaminase tecidual IgA são o melhor marcador sorológico"],
  },
  {
    id: 6,
    title: "Fibrose Pulmonar Idiopática — Padrão UIP",
    category: "Sistema Respiratório",
    scenario: "Paciente de 60 anos, dispneia progressiva há 3 anos, tosse seca e crepitações bibasais. TC com faveolamento periférico. Biópsia pulmonar cirúrgica.",
    histologicalFindings: "Fibrose intersticial heterogênea com alternância de áreas normais, inflamação e fibrose densa. Focos fibroblásticos na transição. Faveolamento com espaços císticos revestidos por epitélio bronquiolar metaplásico.",
    questions: [
      { question: "Qual o padrão histopatológico?", options: ["Pneumonia em organização", "Pneumonia intersticial usual (UIP)", "NSIP", "Dano alveolar difuso"], correctIndex: 1, explanation: "O padrão UIP é caracterizado pela heterogeneidade temporal e espacial da fibrose, com focos fibroblásticos e faveolamento." },
    ],
    keyPoints: ["Focos fibroblásticos representam fibrose ativa e recente", "Heterogeneidade espacial e temporal é fundamental para o diagnóstico", "UIP + clínica + TC compatível = fibrose pulmonar idiopática", "Prognóstico reservado — pirfenidona e nintedanib retardam progressão"],
  },
  {
    id: 7,
    title: "Infarto Agudo do Miocárdio",
    category: "Sistema Cardiovascular",
    scenario: "Homem de 62 anos, hipertenso e diabético, apresenta dor torácica intensa há 6 horas, com supradesnivelamento do segmento ST em parede anterior. Cineangiocoronariografia mostra oclusão da artéria descendente anterior. Realizada angioplastia primária. Fragmento miocárdico obtido durante cirurgia de revascularização 3 dias após.",
    histologicalFindings: "Necrose de coagulação dos cardiomiócitos com citoplasma hipereosinofílico, perda de estriações e núcleos picnóticos/cariorréxicos. Intenso infiltrado neutrofílico no interstício. Edema intersticial e hemorragia.",
    questions: [
      { question: "Qual tipo de necrose ocorre no infarto do miocárdio?", options: ["Necrose caseosa", "Necrose de coagulação", "Necrose liquefativa", "Necrose gordurosa"], correctIndex: 1, explanation: "O infarto do miocárdio causa necrose de coagulação (desnaturação proteica com manutenção da arquitetura 'fantasma'), exceto no SNC onde ocorre necrose liquefativa." },
      { question: "Em que momento os neutrófilos são mais proeminentes no tecido infartado?", options: ["Primeiras 4 horas", "12-72 horas (1-3 dias)", "7-10 dias", "Após 2 semanas"], correctIndex: 1, explanation: "O infiltrado neutrofílico é mais intenso entre 1-3 dias após o infarto, durante a fase inflamatória aguda. Após 7-10 dias, macrófagos predominam (fase de organização)." },
    ],
    keyPoints: ["A necrose de coagulação preserva a arquitetura tecidual 'fantasma' por dias", "Cronologia: necrose → neutrófilos (1-3d) → macrófagos (3-7d) → granulação (1-3sem) → cicatriz (>6sem)", "O músculo cardíaco tem regeneração muito limitada — cicatriz fibrosa", "A troponina é o biomarcador mais sensível e específico de necrose miocárdica"],
  },
  {
    id: 8,
    title: "Gastrite Crônica por H. pylori",
    category: "Sistema Digestório",
    scenario: "Homem de 48 anos com epigastralgia pós-prandial há 6 meses e teste respiratório positivo para H. pylori. EDA mostra hiperemia e erosões no antro gástrico. Realizada biópsia.",
    histologicalFindings: "Infiltrado inflamatório crônico (linfócitos e plasmócitos) na lâmina própria com atividade (neutrófilos no epitélio e nas glândulas). Folículos linfoides reativos na lâmina própria. Bactérias curvas na superfície do muco (confirmadas por coloração de Giemsa).",
    questions: [
      { question: "Qual achado histológico sugere infecção ativa por H. pylori?", options: ["Metaplasia intestinal", "Folículos linfoides e neutrófilos na mucosa (atividade)", "Atrofia glandular", "Displasia epitelial"], correctIndex: 1, explanation: "A presença de folículos linfoides reativos (tecido MALT) e neutrófilos infiltrando o epitélio (gastrite ativa) são altamente sugestivos de infecção por H. pylori." },
    ],
    keyPoints: ["H. pylori causa gastrite crônica ativa com formação de tecido MALT", "Pode progredir para atrofia → metaplasia intestinal → displasia → adenocarcinoma gástrico (cascata de Correa)", "O linfoma MALT gástrico é diretamente associado à infecção por H. pylori", "Erradicação com terapia tripla pode até regredir linfoma MALT de baixo grau"],
  },
  {
    id: 9,
    title: "Carcinoma Basocelular",
    category: "Pele e Anexos",
    scenario: "Mulher de 72 anos com lesão nodular perolada de 8 mm na asa nasal, com telangiectasias e bordas elevadas, presente há 1 ano. Realizada biópsia excisional.",
    histologicalFindings: "Ninhos e cordões de células basaloides com paliçada periférica (células dispostas em arranjo paralelo na periferia dos ninhos). Retração do estroma ao redor dos ninhos tumorais (artefato de fendas). Estroma fibromixoide.",
    questions: [
      { question: "Qual o diagnóstico?", options: ["Carcinoma espinocelular", "Carcinoma basocelular", "Melanoma", "Queratose actínica"], correctIndex: 1, explanation: "O carcinoma basocelular (CBC) é o tumor maligno cutâneo mais comum. Características: ninhos de células basaloides com paliçada periférica e retração estromal." },
      { question: "Qual o comportamento biológico deste tumor?", options: ["Metástases frequentes", "Localmente invasivo mas metástases são raríssimas", "Sempre benigno", "Disseminação hematogênica precoce"], correctIndex: 1, explanation: "O CBC é localmente invasivo e destrutivo, mas metástases são extremamente raras (<0,1%). A excisão cirúrgica com margens adequadas é curativa na maioria dos casos." },
    ],
    keyPoints: ["CBC é o tumor maligno mais comum em humanos", "Relacionado à exposição UV crônica — mais comum em áreas fotoexpostas", "Paliçada periférica e retração estromal são achados histológicos clássicos", "Via de sinalização Hedgehog mutada em muitos CBCs — alvo do vismodegib"],
  },
  {
    id: 10,
    title: "Glomerulonefrite Membranosa",
    category: "Sistema Urinário",
    scenario: "Homem de 50 anos com síndrome nefrótica: edema em membros inferiores, proteinúria de 8g/dia e hipoalbuminemia. Anti-PLA2R positivo. Biópsia renal realizada.",
    histologicalFindings: "Espessamento difuso da membrana basal glomerular sem hipercelularidade. Coloração de prata (Jones) revela 'spikes' (espículas) na membrana basal. IF mostra depósito granular de IgG e C3 ao longo das alças capilares. ME: depósitos subepiteliais eletrodensos.",
    questions: [
      { question: "Onde estão localizados os depósitos imunes?", options: ["Subendotelial", "Subepitelial (entre podócitos e MB)", "Mesangial", "Intramembranoso"], correctIndex: 1, explanation: "Na glomerulonefrite membranosa, os depósitos imunes são subepiteliais (entre os podócitos e a membrana basal), formando as espículas ('spikes') características na prata." },
    ],
    keyPoints: ["Causa mais comum de síndrome nefrótica em adultos", "Anticorpo anti-PLA2R é biomarcador específico (70-80% dos casos primários)", "Spikes na prata de Jones = depósitos subepiteliais com reação da MB", "Evolução variável: 1/3 remissão, 1/3 estável, 1/3 progressão para IRC"],
  },
  {
    id: 11,
    title: "Doença de Crohn — Ileíte Terminal",
    category: "Sistema Digestório",
    scenario: "Jovem de 22 anos com dor no quadrante inferior direito, diarreia não-sanguinolenta, febre e perda de peso há 3 meses. Colonoscopia mostra úlceras aftosas e aspecto em 'pedra de calçamento' no íleo terminal. Biópsia realizada.",
    histologicalFindings: "Inflamação transmural com granulomas epitelioides não-caseosos na submucosa. Agregados linfoides na parede intestinal. Fissuras profundas na mucosa. Distorção das criptas.",
    questions: [
      { question: "Qual achado diferencia a doença de Crohn da retocolite ulcerativa?", options: ["Inflamação da mucosa", "Granulomas não-caseosos e inflamação transmural", "Abscessos crípticos", "Pseudopólipos"], correctIndex: 1, explanation: "Os granulomas epitelioides não-caseosos e a inflamação transmural são característicos da doença de Crohn. A RCU é limitada à mucosa e não forma granulomas." },
    ],
    keyPoints: ["Inflamação transmural (todas as camadas) × RCU (apenas mucosa)", "Granulomas não-caseosos em 50-60% dos casos — quando presentes, são muito sugestivos", "Distribuição saltatória ('skip lesions') — áreas doentes alternando com normais", "Complicações: fístulas, estenoses e abscessos (pela inflamação transmural)"],
  },
  {
    id: 12,
    title: "Asma Brônquica — Remodelamento das Vias Aéreas",
    category: "Sistema Respiratório",
    scenario: "Mulher de 35 anos, asmática desde a infância, com dispneia e sibilância persistentes apesar do tratamento. Broncoscopia com biópsia endobrônquica realizada para avaliar remodelamento brônquico.",
    histologicalFindings: "Espessamento da membrana basal subepitelial. Hiperplasia de células caliciformes. Hipertrofia do músculo liso brônquico. Infiltrado eosinofílico na lâmina própria. Descamação epitelial focal.",
    questions: [
      { question: "Qual célula inflamatória é mais característica da asma?", options: ["Neutrófilos", "Eosinófilos", "Linfócitos T CD8", "Macrófagos"], correctIndex: 1, explanation: "A asma é uma doença inflamatória mediada por linfócitos Th2, com recrutamento de eosinófilos como célula efetora principal, liberando proteínas catiônicas que lesam o epitélio." },
    ],
    keyPoints: ["Espessamento da membrana basal subepitelial é achado precoce do remodelamento", "Hiperplasia de células caliciformes → hipersecreção de muco (rolhas mucosas)", "Hipertrofia do músculo liso → broncoconstrição e hiper-reatividade brônquica", "Cristais de Charcot-Leyden (de eosinófilos) e espirais de Curschmann podem ser vistos no escarro"],
  },
  {
    id: 13,
    title: "Hiperplasia Prostática Benigna",
    category: "Sistema Reprodutor",
    scenario: "Homem de 68 anos com sintomas urinários obstrutivos (jato fraco, noctúria, hesitação) e próstata aumentada ao toque retal. PSA: 4,2 ng/mL. RTU (ressecção transuretral) de próstata realizada.",
    histologicalFindings: "Hiperplasia glandular e estromal com formação de nódulos. Glândulas de tamanhos variados com projeções papilares intraluminais. Estroma fibromuscular expandido entre os nódulos glandulares. Secreção eosinofílica no lúmen (corpora amylacea).",
    questions: [
      { question: "Qual componente está hiperplasiado na HPB?", options: ["Apenas glândulas", "Apenas estroma", "Ambos: glandular e estromal (fibromuscular)", "Epitélio uretral"], correctIndex: 2, explanation: "A HPB envolve hiperplasia tanto do componente glandular quanto do estromal (fibromuscular), sob influência de DHT (dihidrotestosterona), formando nódulos na zona de transição da próstata." },
    ],
    keyPoints: ["HPB ocorre na zona de transição (periuretral) — diferente do carcinoma (zona periférica)", "Regulada por DHT via 5α-redutase — alvo de finasterida/dutasterida", "Não é lesão pré-neoplásica — HPB e carcinoma são independentes", "Corpora amylacea são concreções eosinofílicas laminadas benignas no lúmen glandular"],
  },
  {
    id: 14,
    title: "Tireoidite de Hashimoto",
    category: "Sistema Endócrino",
    scenario: "Mulher de 38 anos com fadiga, ganho de peso e bócio difuso indolor. TSH elevado, T4L baixo. Anti-TPO e anti-tireoglobulina positivos em altos títulos. Biópsia por PAAF.",
    histologicalFindings: "Intenso infiltrado linfocitário com formação de folículos linfoides com centros germinativos. Destruição dos folículos tireoidianos. Células foliculares com metaplasia oxifílica (células de Hürthle/Askanazy): citoplasma eosinofílico granular abundante, ricas em mitocôndrias.",
    questions: [
      { question: "Qual o significado da metaplasia oxifílica (células de Hürthle)?", options: ["Indica malignidade", "É resposta adaptativa ao dano folicular crônico (acúmulo de mitocôndrias)", "Indica hiperfunção tireoidiana", "É precursora de carcinoma papilífero"], correctIndex: 1, explanation: "As células de Hürthle (oxifílicas/oncocíticas) representam metaplasia dos tireócitos em resposta ao dano crônico. Possuem citoplasma repleto de mitocôndrias (aspecto granular eosinofílico)." },
    ],
    keyPoints: ["Causa mais comum de hipotireoidismo em áreas iodo-suficientes", "Doença autoimune com anticorpos anti-TPO e anti-tireoglobulina", "Histologia: infiltrado linfoide com centros germinativos + células de Hürthle", "Risco discretamente aumentado de linfoma MALT da tireoide"],
  },
  {
    id: 15,
    title: "Distrofia Muscular de Duchenne",
    category: "Tecido Muscular",
    scenario: "Menino de 5 anos com fraqueza muscular proximal progressiva, sinal de Gowers positivo, pseudo-hipertrofia de panturrilhas e CPK sérica muito elevada (>10.000 U/L). Biópsia muscular do quadríceps realizada.",
    histologicalFindings: "Variação no diâmetro das fibras musculares com fibras hipertróficas e atróficas. Necrose de fibras com fagocitose por macrófagos. Fibras em regeneração (basófilas, núcleos centrais). Substituição progressiva por tecido fibroadiposo. IHQ: ausência completa de distrofina no sarcolema.",
    questions: [
      { question: "Qual proteína está ausente na distrofia de Duchenne?", options: ["Miosina", "Actina", "Distrofina", "Troponina"], correctIndex: 2, explanation: "A distrofia de Duchenne é causada por mutação no gene DMD (Xp21) com ausência completa de distrofina, proteína que ancora o citoesqueleto à matriz extracelular via complexo distroglicano." },
    ],
    keyPoints: ["Herança recessiva ligada ao X — afeta quase exclusivamente meninos", "Distrofina ausente (Duchenne) vs. reduzida/alterada (Becker)", "Ciclos de necrose-regeneração levam à exaustão das células satélites", "CPK sérica muito elevada pela liberação contínua de enzimas das fibras lesadas"],
  },
];
