export interface Question {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const questions: Question[] = [
  // Tecido Epitelial
  {
    id: 1,
    topic: "Tecido Epitelial",
    question: "Qual tipo de epitélio reveste a traqueia?",
    options: [
      "Epitélio simples pavimentoso",
      "Epitélio pseudoestratificado cilíndrico ciliado",
      "Epitélio estratificado pavimentoso queratinizado",
      "Epitélio de transição",
    ],
    correctIndex: 1,
    explanation: "A traqueia é revestida por epitélio pseudoestratificado cilíndrico ciliado com células caliciformes, fundamental para a defesa mucociliar das vias aéreas.",
  },
  {
    id: 2,
    topic: "Tecido Epitelial",
    question: "Qual epitélio reveste os alvéolos pulmonares?",
    options: [
      "Epitélio simples pavimentoso",
      "Epitélio simples cúbico",
      "Epitélio pseudoestratificado",
      "Epitélio estratificado pavimentoso",
    ],
    correctIndex: 0,
    explanation: "Os alvéolos são revestidos por epitélio simples pavimentoso (pneumócitos tipo I), extremamente delgado para facilitar as trocas gasosas.",
  },
  {
    id: 3,
    topic: "Tecido Epitelial",
    question: "O epitélio de transição (urotélio) é encontrado em qual estrutura?",
    options: [
      "Esôfago",
      "Bexiga urinária",
      "Intestino delgado",
      "Pele",
    ],
    correctIndex: 1,
    explanation: "O urotélio reveste a bexiga urinária e vias urinárias, possuindo células em guarda-chuva que permitem distensão sem comprometer a barreira.",
  },
  {
    id: 4,
    topic: "Tecido Epitelial",
    question: "Qual especialização apical aumenta a superfície de absorção no intestino delgado?",
    options: [
      "Cílios",
      "Estereocílios",
      "Microvilosidades",
      "Flagelos",
    ],
    correctIndex: 2,
    explanation: "As microvilosidades formam a borda em escova do intestino delgado, aumentando enormemente a superfície de absorção dos enterócitos.",
  },
  // Tecido Conjuntivo
  {
    id: 5,
    topic: "Tecido Conjuntivo",
    question: "Qual é a principal célula residente do tecido conjuntivo propriamente dito?",
    options: ["Macrófago", "Mastócito", "Fibroblasto", "Plasmócito"],
    correctIndex: 2,
    explanation: "O fibroblasto é a célula mais abundante do tecido conjuntivo propriamente dito, responsável pela síntese de fibras colágenas, elásticas e da substância fundamental amorfa.",
  },
  {
    id: 6,
    topic: "Tecido Conjuntivo",
    question: "Qual tipo de colágeno é o mais abundante no corpo humano?",
    options: ["Tipo II", "Tipo I", "Tipo III", "Tipo IV"],
    correctIndex: 1,
    explanation: "O colágeno tipo I é o mais abundante, encontrado na derme, tendões, ossos e fáscias. Forma fibras espessas com grande resistência à tração.",
  },
  {
    id: 7,
    topic: "Tecido Conjuntivo",
    question: "Os mastócitos são conhecidos por liberar qual mediador inflamatório?",
    options: ["Colágeno", "Histamina", "Elastina", "Fibronectina"],
    correctIndex: 1,
    explanation: "Os mastócitos contêm grânulos ricos em histamina, heparina e proteases. A degranulação é mediada por IgE e é central nas reações alérgicas e inflamação aguda.",
  },
  // Tecido Muscular
  {
    id: 8,
    topic: "Tecido Muscular",
    question: "Qual característica diferencia o músculo cardíaco do esquelético?",
    options: [
      "Presença de estriações transversais",
      "Discos intercalares e ramificações celulares",
      "Multinucleação das fibras",
      "Ausência de mitocôndrias",
    ],
    correctIndex: 1,
    explanation: "O músculo cardíaco possui discos intercalares (junções especializadas) e células ramificadas com núcleo central, diferenciando-o do esquelético.",
  },
  {
    id: 9,
    topic: "Tecido Muscular",
    question: "Qual proteína contrátil possui atividade ATPásica no sarcômero?",
    options: ["Actina", "Tropomiosina", "Miosina", "Troponina"],
    correctIndex: 2,
    explanation: "A miosina (filamento espesso) possui cabeças globulares com atividade ATPásica, gerando força para o deslizamento dos filamentos de actina durante a contração.",
  },
  {
    id: 10,
    topic: "Tecido Muscular",
    question: "O músculo liso está presente em qual das seguintes estruturas?",
    options: [
      "Língua",
      "Parede do intestino",
      "Diafragma",
      "Músculos intercostais",
    ],
    correctIndex: 1,
    explanation: "O músculo liso forma as camadas musculares da parede do intestino (circular interna e longitudinal externa), responsáveis pelos movimentos peristálticos.",
  },
  // Tecido Nervoso
  {
    id: 11,
    topic: "Tecido Nervoso",
    question: "Qual célula da glia é responsável pela formação da bainha de mielina no SNC?",
    options: [
      "Células de Schwann",
      "Oligodendrócitos",
      "Astrócitos",
      "Microglia",
    ],
    correctIndex: 1,
    explanation: "No SNC, os oligodendrócitos formam a bainha de mielina, enquanto no SNP essa função é exercida pelas células de Schwann.",
  },
  {
    id: 12,
    topic: "Tecido Nervoso",
    question: "Qual célula glial atua como macrófago residente do SNC?",
    options: ["Astrócito", "Oligodendrócito", "Microglia", "Célula ependimária"],
    correctIndex: 2,
    explanation: "A microglia é derivada de monócitos e representa o sistema de defesa imunológica do SNC, fagocitando debris e participando de processos neuroinflamatórios.",
  },
  {
    id: 13,
    topic: "Tecido Nervoso",
    question: "Os nodos de Ranvier são responsáveis por qual fenômeno?",
    options: [
      "Produção de neurotransmissores",
      "Condução saltatória do impulso nervoso",
      "Síntese de mielina",
      "Formação de sinapses",
    ],
    correctIndex: 1,
    explanation: "Os nodos de Ranvier são interrupções na bainha de mielina onde se concentram canais iônicos, permitindo a condução saltatória rápida do potencial de ação.",
  },
  // Tecido Ósseo
  {
    id: 14,
    topic: "Tecido Ósseo",
    question: "Quais são as células responsáveis pela reabsorção óssea?",
    options: ["Osteoblastos", "Osteócitos", "Osteoclastos", "Condroblastos"],
    correctIndex: 2,
    explanation: "Os osteoclastos são células gigantes multinucleadas derivadas de monócitos que promovem a reabsorção óssea através da liberação de enzimas lisossomais e ácidos.",
  },
  {
    id: 15,
    topic: "Tecido Ósseo",
    question: "Qual estrutura constitui a unidade funcional do osso compacto?",
    options: ["Trabécula", "Ósteon (Sistema de Havers)", "Periósteo", "Endósteo"],
    correctIndex: 1,
    explanation: "O ósteon é formado por lamelas concêntricas ao redor de um canal central (de Havers) contendo vasos sanguíneos e nervos.",
  },
  // Tecido Cartilaginoso
  {
    id: 16,
    topic: "Tecido Cartilaginoso",
    question: "Qual tipo de cartilagem é encontrado na orelha externa?",
    options: ["Hialina", "Elástica", "Fibrosa", "Calcificada"],
    correctIndex: 1,
    explanation: "A cartilagem elástica possui fibras elásticas abundantes na matriz, conferindo flexibilidade à orelha externa (pavilhão auricular) e à epiglote.",
  },
  {
    id: 17,
    topic: "Tecido Cartilaginoso",
    question: "A cartilagem hialina é encontrada em todas as seguintes estruturas EXCETO:",
    options: [
      "Anéis traqueais",
      "Superfícies articulares",
      "Discos intervertebrais",
      "Septo nasal",
    ],
    correctIndex: 2,
    explanation: "Os discos intervertebrais contêm fibrocartilagem (cartilagem fibrosa), que possui feixes de colágeno tipo I denso para resistir a forças compressivas.",
  },
  // Sangue e Hematopoiese
  {
    id: 18,
    topic: "Sangue e Hematopoiese",
    question: "Qual leucócito é o mais abundante no sangue periférico?",
    options: ["Linfócito", "Monócito", "Neutrófilo", "Eosinófilo"],
    correctIndex: 2,
    explanation: "Os neutrófilos representam 60-70% dos leucócitos circulantes e são a primeira linha de defesa na imunidade inata, atuando por fagocitose.",
  },
  {
    id: 19,
    topic: "Sangue e Hematopoiese",
    question: "Qual célula sanguínea é anucleada e tem forma de disco bicôncavo?",
    options: ["Plaqueta", "Eritrócito", "Monócito", "Basófilo"],
    correctIndex: 1,
    explanation: "Os eritrócitos maduros são anucleados e possuem forma bicôncava, maximizando a área de superfície para trocas gasosas e facilitando a passagem por capilares.",
  },
  // Sistema Cardiovascular
  {
    id: 20,
    topic: "Sistema Cardiovascular",
    question: "Qual camada da parede arterial contém músculo liso e fibras elásticas?",
    options: ["Túnica íntima", "Túnica média", "Túnica adventícia", "Endotélio"],
    correctIndex: 1,
    explanation: "A túnica média é composta por camadas de músculo liso e fibras elásticas, sendo responsável pela regulação do calibre vascular e da pressão arterial.",
  },
  {
    id: 21,
    topic: "Sistema Cardiovascular",
    question: "O endotélio é classificado como qual tipo de tecido?",
    options: [
      "Tecido conjuntivo",
      "Epitélio simples pavimentoso",
      "Tecido muscular liso",
      "Mesotélio",
    ],
    correctIndex: 1,
    explanation: "O endotélio é um epitélio simples pavimentoso de origem mesodérmica que reveste a superfície interna dos vasos sanguíneos e linfáticos.",
  },
  // Sistema Digestório
  {
    id: 22,
    topic: "Sistema Digestório",
    question: "Quais células do estômago produzem ácido clorídrico (HCl)?",
    options: [
      "Células mucosas",
      "Células parietais (oxínticas)",
      "Células principais (zimogênicas)",
      "Células G",
    ],
    correctIndex: 1,
    explanation: "As células parietais localizam-se no corpo e fundo gástrico e produzem HCl (via bomba H+/K+ ATPase) e fator intrínseco, essencial para absorção de vitamina B12.",
  },
  {
    id: 23,
    topic: "Sistema Digestório",
    question: "As células de Paneth são encontradas em qual região do intestino?",
    options: [
      "Vilosidades intestinais",
      "Fundo das criptas de Lieberkühn",
      "Placas de Peyer",
      "Submucosa duodenal",
    ],
    correctIndex: 1,
    explanation: "As células de Paneth localizam-se no fundo das criptas intestinais e secretam defensinas e lisozima, contribuindo para a imunidade inata da mucosa intestinal.",
  },
  // Sistema Respiratório
  {
    id: 24,
    topic: "Sistema Respiratório",
    question: "Os pneumócitos tipo II são responsáveis pela produção de:",
    options: [
      "Muco",
      "Surfactante pulmonar",
      "Ácido clorídrico",
      "Imunoglobulina A",
    ],
    correctIndex: 1,
    explanation: "Os pneumócitos tipo II são células cúbicas que sintetizam e secretam surfactante pulmonar, reduzindo a tensão superficial alveolar e prevenindo o colapso alveolar.",
  },
  // Sistema Urinário
  {
    id: 25,
    topic: "Sistema Urinário",
    question: "Qual segmento do néfron é impermeável à água?",
    options: [
      "Túbulo contorcido proximal",
      "Ramo ascendente espesso da alça de Henle",
      "Ducto coletor",
      "Cápsula de Bowman",
    ],
    correctIndex: 1,
    explanation: "O ramo ascendente espesso da alça de Henle é impermeável à água mas transporta ativamente íons, sendo crucial para o mecanismo de concentração urinária.",
  },
  // Pele e Anexos
  {
    id: 26,
    topic: "Pele e Anexos",
    question: "A camada mais superficial da epiderme é o estrato:",
    options: ["Basal", "Espinhoso", "Granuloso", "Córneo"],
    correctIndex: 3,
    explanation: "O estrato córneo é a camada mais externa da epiderme, formada por células mortas queratinizadas (corneócitos) que constituem a principal barreira contra o meio externo.",
  },
  {
    id: 27,
    topic: "Pele e Anexos",
    question: "Os melanócitos estão localizados em qual camada da epiderme?",
    options: ["Estrato córneo", "Estrato granuloso", "Estrato basal", "Estrato lúcido"],
    correctIndex: 2,
    explanation: "Os melanócitos localizam-se no estrato basal e produzem melanina, transferida aos queratinócitos vizinhos via melanossomas, protegendo o DNA contra radiação UV.",
  },
  // Introdução à Histologia / Microscopia
  {
    id: 28,
    topic: "Microscopia",
    question: "Qual corante cora ácidos nucleicos em azul/roxo nas colorações de rotina?",
    options: ["Eosina", "Hematoxilina", "PAS", "Tricrômico de Masson"],
    correctIndex: 1,
    explanation: "A hematoxilina é um corante básico que se liga a estruturas ácidas (basófilas) como DNA e RNA, corando núcleos em azul/roxo na coloração H&E.",
  },
  {
    id: 29,
    topic: "Microscopia",
    question: "A fixação em formalina 10% preserva tecidos através de qual mecanismo?",
    options: [
      "Desnaturação térmica",
      "Ligações cruzadas entre proteínas",
      "Desidratação celular",
      "Congelamento molecular",
    ],
    correctIndex: 1,
    explanation: "O formaldeído forma pontes metilênicas (ligações cruzadas) entre grupos amino de proteínas, preservando a arquitetura tecidual para análise microscópica.",
  },
  {
    id: 30,
    topic: "Microscopia",
    question: "Qual técnica microscópica utiliza anticorpos para detectar proteínas específicas em tecidos?",
    options: [
      "Microscopia eletrônica",
      "Imuno-histoquímica",
      "Coloração de Gram",
      "Microscopia de campo escuro",
    ],
    correctIndex: 1,
    explanation: "A imuno-histoquímica utiliza anticorpos conjugados a marcadores (cromógenos ou fluoróforos) para localizar antígenos específicos em cortes histológicos.",
  },
  // Sistema Endócrino
  {
    id: 31,
    topic: "Sistema Endócrino",
    question: "As células foliculares da tireoide produzem qual hormônio?",
    options: ["Calcitonina", "T3 e T4", "Paratormônio", "Cortisol"],
    correctIndex: 1,
    explanation: "As células foliculares sintetizam T3 e T4 a partir da iodação da tireoglobulina armazenada no coloide folicular. A calcitonina é produzida pelas células parafoliculares (C).",
  },
  // Sistema Linfático
  {
    id: 32,
    topic: "Sistema Linfático",
    question: "Os centros germinativos dos linfonodos estão associados à proliferação de:",
    options: ["Linfócitos T", "Linfócitos B", "Macrófagos", "Células dendríticas"],
    correctIndex: 1,
    explanation: "Os centros germinativos são sítios de proliferação e maturação de linfócitos B, onde ocorrem hipermutação somática e seleção clonal durante a resposta imune humoral.",
  },
];
