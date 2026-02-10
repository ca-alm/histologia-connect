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
    title: "Nódulo Tireoidiano",
    category: "Sistema Endócrino",
    scenario: "Paciente feminina, 42 anos, apresenta nódulo palpável em lobo direito da tireoide. USG mostra nódulo sólido hipoecogênico de 2,3 cm com microcalcificações. Realizada punção aspirativa por agulha fina (PAAF).",
    histologicalFindings: "A citologia mostra células epiteliais foliculares com núcleos aumentados, claros (aspecto em 'vidro fosco'), fendas nucleares (grooves) e pseudo-inclusões nucleares intranucleares.",
    questions: [
      {
        question: "Qual o diagnóstico histopatológico mais provável?",
        options: ["Bócio coloide", "Carcinoma papilífero da tireoide", "Adenoma folicular", "Tireoidite de Hashimoto"],
        correctIndex: 1,
        explanation: "As características nucleares descritas (núcleos claros em 'vidro fosco', fendas e pseudo-inclusões) são patognomônicas do carcinoma papilífero, a neoplasia maligna mais comum da tireoide.",
      },
      {
        question: "Qual coloração especial pode auxiliar na confirmação?",
        options: ["PAS", "Imuno-histoquímica para tireoglobulina e TTF-1", "Tricrômico de Masson", "Azul de toluidina"],
        correctIndex: 1,
        explanation: "A IHQ para tireoglobulina confirma origem folicular e TTF-1 (thyroid transcription factor-1) é marcador de diferenciação tireoidiana, auxiliando no diagnóstico diferencial.",
      },
    ],
    keyPoints: [
      "O carcinoma papilífero é definido pelas características nucleares, não pela arquitetura papilar",
      "Microcalcificações (corpos psamomatosos) são calcificações concêntricas frequentes neste tumor",
      "Disseminação principal por via linfática para linfonodos cervicais",
    ],
  },
  {
    id: 2,
    title: "Biópsia Renal em Síndrome Nefrótica",
    category: "Sistema Urinário",
    scenario: "Criança de 5 anos apresenta edema generalizado, proteinúria maciça (>3,5g/dia), hipoalbuminemia e hiperlipidemia. Realizada biópsia renal após falha de resposta inicial à corticoterapia.",
    histologicalFindings: "Microscopia óptica com glomérulos de aspecto normal. Imunofluorescência negativa. Microscopia eletrônica revela apagamento difuso (fusão) dos pedicelos dos podócitos.",
    questions: [
      {
        question: "Qual a glomerulopatia mais provável?",
        options: ["Glomerulonefrite membranosa", "Doença de lesões mínimas", "Glomeruloesclerose segmentar e focal", "Nefropatia por IgA"],
        correctIndex: 1,
        explanation: "A doença de lesões mínimas é a causa mais comum de síndrome nefrótica em crianças. É caracterizada por glomérulos normais à microscopia óptica e apagamento dos pedicelos à ME.",
      },
    ],
    keyPoints: [
      "A fusão dos pedicelos dos podócitos compromete a barreira de filtração glomerular, causando proteinúria",
      "Excelente resposta a corticoides na maioria dos casos pediátricos",
      "A microscopia eletrônica é essencial para o diagnóstico — a óptica é insuficiente",
    ],
  },
  {
    id: 3,
    title: "Lesão Hepática Crônica",
    category: "Sistema Digestório",
    scenario: "Homem de 55 anos, etilista crônico, apresenta ascite, icterícia e esplenomegalia. Biópsia hepática realizada por via transjugular.",
    histologicalFindings: "Arquitetura lobular distorcida por septos fibrosos que delimitam nódulos regenerativos. Presença de infiltrado inflamatório portal e periportal. Coloração tricrômico de Masson evidencia intensa fibrose em ponte.",
    questions: [
      {
        question: "Qual o diagnóstico histopatológico?",
        options: ["Esteatose hepática", "Hepatite crônica ativa", "Cirrose hepática", "Carcinoma hepatocelular"],
        correctIndex: 2,
        explanation: "A cirrose é definida pela presença de fibrose difusa com formação de nódulos regenerativos que distorcem a arquitetura lobular normal do fígado.",
      },
      {
        question: "Qual célula hepática é a principal produtora de colágeno na fibrose?",
        options: ["Hepatócito", "Célula de Kupffer", "Célula estrelada hepática (de Ito)", "Colangiócito"],
        correctIndex: 2,
        explanation: "As células estreladas hepáticas (de Ito), normalmente quiescentes e armazenadoras de vitamina A, ativam-se em miofibroblastos produtores de colágeno na fibrose hepática.",
      },
    ],
    keyPoints: [
      "O tricrômico de Masson cora colágeno em azul, sendo essencial para avaliar grau de fibrose",
      "A cirrose é irreversível e representa o estágio final de diversas hepatopatias crônicas",
      "A distorção vascular causa hipertensão portal, responsável por ascite, varizes e esplenomegalia",
    ],
  },
  {
    id: 4,
    title: "Lesão Cutânea Pigmentada",
    category: "Pele e Anexos",
    scenario: "Paciente masculino, 68 anos, com lesão pigmentada assimétrica, bordas irregulares, coloração heterogênea e diâmetro de 1,5 cm no dorso. Realizada biópsia excisional.",
    histologicalFindings: "Proliferação de melanócitos atípicos na junção dermoepidérmica e na derme, com mitoses atípicas, pleomorfismo nuclear e invasão da derme reticular (Breslow 2,1 mm). Imuno-histoquímica: S-100 (+), HMB-45 (+), Melan-A (+).",
    questions: [
      {
        question: "Qual o diagnóstico?",
        options: ["Nevo melanocítico composto", "Melanoma maligno", "Carcinoma basocelular", "Queratose seborreica"],
        correctIndex: 1,
        explanation: "A proliferação de melanócitos atípicos com invasão dérmica, pleomorfismo e positividade para marcadores melanocíticos (S-100, HMB-45, Melan-A) define o melanoma maligno.",
      },
    ],
    keyPoints: [
      "O índice de Breslow (espessura em mm) é o principal fator prognóstico do melanoma",
      "A regra ABCDE auxilia na suspeita clínica: Assimetria, Bordas irregulares, Cor heterogênea, Diâmetro >6mm, Evolução",
      "IHQ com S-100, HMB-45 e Melan-A confirma diferenciação melanocítica",
    ],
  },
  {
    id: 5,
    title: "Doença Celíaca",
    category: "Sistema Digestório",
    scenario: "Mulher de 32 anos com diarreia crônica, perda ponderal e anemia ferropriva. Anticorpos anti-transglutaminase IgA elevados. Realizada endoscopia digestiva alta com biópsia duodenal.",
    histologicalFindings: "Atrofia vilositária subtotal, hiperplasia de criptas e intenso infiltrado linfocitário intraepitelial (>40 linfócitos/100 enterócitos). Classificação Marsh 3b.",
    questions: [
      {
        question: "Qual alteração histológica é mais característica da doença celíaca?",
        options: [
          "Granulomas epitelioides",
          "Atrofia vilositária com linfocitose intraepitelial",
          "Metaplasia intestinal",
          "Ulceração transmural",
        ],
        correctIndex: 1,
        explanation: "A atrofia das vilosidades intestinais associada ao aumento de linfócitos intraepiteliais e hiperplasia críptica são achados clássicos da doença celíaca, uma enteropatia imunomediada pelo glúten.",
      },
    ],
    keyPoints: [
      "A classificação de Marsh gradua a gravidade: Marsh 1 (linfocitose) → Marsh 3c (atrofia total)",
      "A destruição das vilosidades reduz a superfície absortiva, causando má absorção",
      "Dieta livre de glúten leva à recuperação da arquitetura vilositária em semanas a meses",
    ],
  },
  {
    id: 6,
    title: "Pneumonia Intersticial",
    category: "Sistema Respiratório",
    scenario: "Paciente de 60 anos, dispneia progressiva há 3 anos, tosse seca e crepitações bibasais. TC de tórax com padrão de faveolamento periférico. Biópsia pulmonar cirúrgica realizada.",
    histologicalFindings: "Fibrose intersticial heterogênea com alternância de áreas de pulmão normal, inflamação e fibrose densa. Focos fibroblásticos na transição entre tecido normal e fibrótico. Faveolamento com espaços císticos revestidos por epitélio bronquiolar metaplásico.",
    questions: [
      {
        question: "Qual o padrão histopatológico descrito?",
        options: [
          "Pneumonia em organização",
          "Pneumonia intersticial usual (UIP)",
          "Pneumonia intersticial não-específica (NSIP)",
          "Dano alveolar difuso",
        ],
        correctIndex: 1,
        explanation: "O padrão UIP é caracterizado pela heterogeneidade temporal e espacial da fibrose, com focos fibroblásticos e faveolamento, sendo o substrato histológico da fibrose pulmonar idiopática.",
      },
    ],
    keyPoints: [
      "Os focos fibroblásticos representam áreas de fibrose ativa e recente",
      "A heterogeneidade (áreas normais alternando com fibróticas) é fundamental para o diagnóstico",
      "O padrão UIP em biópsia, associado ao contexto clínico-radiológico, confirma fibrose pulmonar idiopática",
    ],
  },
];
