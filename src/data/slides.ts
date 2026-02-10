export interface SlideStructure {
  name: string;
  description: string;
  color: string;
}

export interface HistologySlide {
  id: number;
  tissue: string;
  stain: string;
  description: string;
  structures: SlideStructure[];
  clinicalNote: string;
}

export const slides: HistologySlide[] = [
  {
    id: 1,
    tissue: "Epitélio Pseudoestratificado — Traqueia",
    stain: "H&E",
    description: "Corte transversal da traqueia mostrando o epitélio respiratório com células caliciformes, lâmina própria e cartilagem hialina.",
    structures: [
      { name: "Células ciliadas", description: "Células cilíndricas com cílios apicais que movimentam o muco em direção à faringe", color: "hsl(var(--primary))" },
      { name: "Células caliciformes", description: "Células secretoras de muco (glicoproteínas), aparecem claras na H&E", color: "hsl(var(--badge-nature))" },
      { name: "Membrana basal", description: "Camada acelular entre o epitélio e a lâmina própria, PAS-positiva", color: "hsl(var(--badge-nejm))" },
      { name: "Lâmina própria", description: "Tecido conjuntivo frouxo rico em vasos e glândulas seromucosas", color: "hsl(var(--badge-cell))" },
      { name: "Cartilagem hialina", description: "Anéis em C que mantêm a traqueia aberta; condrócitos em lacunas", color: "hsl(var(--badge-science))" },
    ],
    clinicalNote: "Na asma, há hiperplasia das células caliciformes e espessamento da membrana basal. No tabagismo crônico, pode ocorrer metaplasia escamosa do epitélio respiratório.",
  },
  {
    id: 2,
    tissue: "Epitélio Estratificado Pavimentoso — Esôfago",
    stain: "H&E",
    description: "Corte do esôfago mostrando epitélio estratificado pavimentoso não-queratinizado protegendo contra abrasão mecânica do bolo alimentar.",
    structures: [
      { name: "Camada basal", description: "Células cuboides/cilíndricas com alta atividade mitótica (renovação epitelial)", color: "hsl(var(--primary))" },
      { name: "Camada espinhosa", description: "Células poligonais unidas por desmossomos, progressivamente achatadas", color: "hsl(var(--badge-nature))" },
      { name: "Camada superficial", description: "Células pavimentosas nucleadas (não-queratinizado), descamam para a luz", color: "hsl(var(--badge-cell))" },
      { name: "Lâmina própria", description: "Conjuntivo frouxo com papilas que aumentam a adesão epitélio-conjuntivo", color: "hsl(var(--badge-nejm))" },
      { name: "Muscular da mucosa", description: "Fina camada de músculo liso que separa mucosa de submucosa", color: "hsl(var(--badge-science))" },
    ],
    clinicalNote: "No esôfago de Barrett, o epitélio escamoso é substituído por epitélio colunar intestinal (metaplasia), aumentando o risco de adenocarcinoma esofágico.",
  },
  {
    id: 3,
    tissue: "Tecido Conjuntivo Frouxo — Mesentério",
    stain: "H&E",
    description: "Espalhado de mesentério mostrando os componentes do tecido conjuntivo frouxo em uma preparação total.",
    structures: [
      { name: "Fibras colágenas", description: "Feixes espessos ondulados, coram em rosa pela eosina, colágeno tipo I", color: "hsl(var(--badge-nejm))" },
      { name: "Fibras elásticas", description: "Finas, ramificadas, refringentes; melhor visualizadas com Verhoeff ou orceína", color: "hsl(var(--badge-science))" },
      { name: "Fibroblastos", description: "Células fusiformes com núcleo ovoide claro, principal célula do TC", color: "hsl(var(--primary))" },
      { name: "Mastócitos", description: "Células ovoides com grânulos metacromáticos (histamina, heparina)", color: "hsl(var(--badge-nature))" },
      { name: "Macrófagos", description: "Células com núcleo reniforme e citoplasma irregular, fagocíticas", color: "hsl(var(--badge-cell))" },
    ],
    clinicalNote: "Na inflamação aguda, mastócitos degranulam liberando histamina, causando vasodilatação e aumento de permeabilidade. No edema, a substância fundamental acumula líquido intersticial.",
  },
  {
    id: 4,
    tissue: "Cartilagem Hialina — Traqueia",
    stain: "H&E",
    description: "Detalhe dos anéis cartilaginosos traqueais mostrando a organização da cartilagem hialina com pericôndrio.",
    structures: [
      { name: "Pericôndrio", description: "Tecido conjuntivo denso que reveste a cartilagem; camada fibrosa (externa) e condrogênica (interna)", color: "hsl(var(--primary))" },
      { name: "Condrócitos", description: "Células em lacunas na matriz; grupos isógenos representam divisões de um condroblasto", color: "hsl(var(--badge-nature))" },
      { name: "Matriz territorial", description: "Matriz basófila ao redor das lacunas, rica em proteoglicanos (agrecano)", color: "hsl(var(--badge-cell))" },
      { name: "Matriz interterritorial", description: "Matriz entre os territórios, menos basófila, rica em colágeno tipo II", color: "hsl(var(--badge-nejm))" },
    ],
    clinicalNote: "A cartilagem hialina é avascular, nutrida por difusão. Na osteoartrite, a degeneração da cartilagem articular expõe o osso subcondral, causando dor e limitação funcional.",
  },
  {
    id: 5,
    tissue: "Tecido Ósseo Compacto — Diáfise",
    stain: "Desgaste (preparação por desgaste)",
    description: "Corte por desgaste de osso compacto mostrando os sistemas de Havers e lamelas.",
    structures: [
      { name: "Ósteon (Sistema de Havers)", description: "Unidade funcional: lamelas concêntricas ao redor do canal de Havers central", color: "hsl(var(--primary))" },
      { name: "Canal de Havers", description: "Canal central contendo vasos sanguíneos e nervos que nutrem os osteócitos", color: "hsl(var(--badge-nejm))" },
      { name: "Lacunas e canalículos", description: "Lacunas contêm osteócitos; canalículos são prolongamentos que conectam lacunas adjacentes", color: "hsl(var(--badge-nature))" },
      { name: "Canais de Volkmann", description: "Canais transversais/oblíquos que conectam canais de Havers entre si e com o periósteo", color: "hsl(var(--badge-cell))" },
      { name: "Lamelas intersticiais", description: "Remanescentes de ósteons remodelados entre os ósteons atuais", color: "hsl(var(--badge-science))" },
    ],
    clinicalNote: "Na osteoporose, a remodelação óssea favorece a reabsorção, reduzindo densidade mineral e aumentando risco de fraturas. A biópsia óssea avalia a dinâmica de formação/reabsorção.",
  },
  {
    id: 6,
    tissue: "Músculo Esquelético — Corte longitudinal",
    stain: "H&E",
    description: "Fibras musculares estriadas em corte longitudinal mostrando estriações transversais e núcleos periféricos.",
    structures: [
      { name: "Fibra muscular", description: "Célula cilíndrica multinucleada, pode ter centímetros de comprimento", color: "hsl(var(--primary))" },
      { name: "Estriações transversais", description: "Bandas A (escuras, miosina) e I (claras, actina) refletem organização dos sarcômeros", color: "hsl(var(--badge-nature))" },
      { name: "Núcleos periféricos", description: "Múltiplos núcleos achatados na periferia da fibra, sob o sarcolema", color: "hsl(var(--badge-cell))" },
      { name: "Endomísio", description: "Conjuntivo frouxo delicado que envolve cada fibra individualmente, contém capilares", color: "hsl(var(--badge-nejm))" },
      { name: "Perimísio", description: "Conjuntivo que agrupa fibras em fascículos, contém vasos e nervos maiores", color: "hsl(var(--badge-science))" },
    ],
    clinicalNote: "Nas distrofias musculares (ex: Duchenne), a ausência de distrofina leva à degeneração progressiva das fibras, com necrose, regeneração e substituição por tecido fibroadiposo.",
  },
  {
    id: 7,
    tissue: "Músculo Cardíaco",
    stain: "H&E",
    description: "Corte longitudinal do miocárdio mostrando células ramificadas com núcleos centrais e discos intercalares.",
    structures: [
      { name: "Cardiomiócitos", description: "Células ramificadas com 1-2 núcleos centrais, estriações transversais", color: "hsl(var(--primary))" },
      { name: "Discos intercalares", description: "Junções especializadas entre células: gap junctions + desmossomos + fáscia aderente", color: "hsl(var(--badge-nejm))" },
      { name: "Núcleo central", description: "Oval, eucromático, geralmente único (diferente do esquelético multinucleado)", color: "hsl(var(--badge-nature))" },
      { name: "Capilares", description: "Rede capilar densa entre as fibras — o coração é altamente vascularizado", color: "hsl(var(--badge-cell))" },
    ],
    clinicalNote: "No infarto do miocárdio, a isquemia causa necrose de coagulação dos cardiomiócitos. A área infartada é substituída por cicatriz fibrosa, pois o músculo cardíaco tem capacidade regenerativa muito limitada.",
  },
  {
    id: 8,
    tissue: "Nervo Periférico — Corte transversal",
    stain: "H&E e Azul de toluidina",
    description: "Corte transversal de nervo periférico mostrando fascículos de axônios mielinizados envolvidos por tecido conjuntivo.",
    structures: [
      { name: "Fibras nervosas mielinizadas", description: "Axônios envoltos por bainha de mielina (aparece como anel claro ao redor do axônio)", color: "hsl(var(--primary))" },
      { name: "Endoneuro", description: "Conjuntivo frouxo delicado entre as fibras nervosas individuais", color: "hsl(var(--badge-nature))" },
      { name: "Perineuro", description: "Bainha de células perineurais (epitélio-like) que envolve cada fascículo — barreira hematonervosa", color: "hsl(var(--badge-cell))" },
      { name: "Epineuro", description: "Conjuntivo denso que envolve o nervo como um todo, contém vasa nervorum", color: "hsl(var(--badge-nejm))" },
    ],
    clinicalNote: "Na síndrome de Guillain-Barré, a desmielinização inflamatória dos nervos periféricos causa fraqueza ascendente. Na neuropatia diabética, há degeneração axonal e desmielinização segmentar.",
  },
  {
    id: 9,
    tissue: "Sangue — Esfregaço",
    stain: "May-Grünwald-Giemsa",
    description: "Esfregaço sanguíneo mostrando os elementos figurados do sangue periférico.",
    structures: [
      { name: "Eritrócitos", description: "Discos bicôncavos anucleados (7-8 μm), acidófilos, repletos de hemoglobina", color: "hsl(var(--badge-nejm))" },
      { name: "Neutrófilo", description: "Núcleo multilobulado (3-5 lobos), grânulos finos neutrofílicos, 12-15 μm", color: "hsl(var(--primary))" },
      { name: "Linfócito", description: "Núcleo arredondado denso, escasso citoplasma basófilo, 7-10 μm", color: "hsl(var(--badge-nature))" },
      { name: "Monócito", description: "Maior leucócito (15-20 μm), núcleo reniforme/lobulado, citoplasma azul-acinzentado", color: "hsl(var(--badge-cell))" },
      { name: "Plaquetas", description: "Fragmentos citoplasmáticos (2-4 μm) dos megacariócitos, formam agrupamentos", color: "hsl(var(--badge-science))" },
    ],
    clinicalNote: "O hemograma com análise morfológica do esfregaço é fundamental para diagnosticar anemias (forma dos eritrócitos), leucemias (células blásticas) e plaquetopatias.",
  },
  {
    id: 10,
    tissue: "Intestino Delgado — Jejuno",
    stain: "H&E",
    description: "Corte mostrando as vilosidades intestinais e criptas de Lieberkühn, com destaque para enterócitos e células caliciformes.",
    structures: [
      { name: "Vilosidades intestinais", description: "Projeções digitiformes da mucosa cobertas por epitélio absortivo, aumentam superfície", color: "hsl(var(--primary))" },
      { name: "Enterócitos", description: "Células cilíndricas com borda em escova (microvilosidades), núcleo basal", color: "hsl(var(--badge-nature))" },
      { name: "Células caliciformes", description: "Intercaladas entre enterócitos, secretam muco, aparecem claras (negativas)", color: "hsl(var(--badge-cell))" },
      { name: "Criptas de Lieberkühn", description: "Glândulas tubulares na base com células-tronco, de Paneth e enteroendócrinas", color: "hsl(var(--badge-nejm))" },
      { name: "Lâmina própria", description: "TC frouxo do eixo da vilosidade com capilares, linfáticos (quilífero central) e células imunes", color: "hsl(var(--badge-science))" },
    ],
    clinicalNote: "Na doença celíaca, o glúten causa atrofia vilositária e linfocitose intraepitelial. Na doença de Crohn, granulomas não-caseosos podem ser encontrados em qualquer camada da parede intestinal.",
  },
  {
    id: 11,
    tissue: "Fígado",
    stain: "H&E",
    description: "Parênquima hepático mostrando os lóbulos hepáticos com trabéculas de hepatócitos e espaços porta.",
    structures: [
      { name: "Hepatócitos", description: "Células poligonais grandes com núcleo central, citoplasma eosinofílico granular, organizados em trabéculas", color: "hsl(var(--primary))" },
      { name: "Sinusoides hepáticos", description: "Capilares fenestrados entre as trabéculas, contêm células de Kupffer (macrófagos)", color: "hsl(var(--badge-nature))" },
      { name: "Veia central (centrolobular)", description: "Veia no centro do lóbulo hepático, drena para veias hepáticas", color: "hsl(var(--badge-nejm))" },
      { name: "Espaço porta (tríade portal)", description: "Contém ramo da artéria hepática, veia porta e ducto biliar", color: "hsl(var(--badge-cell))" },
      { name: "Espaço de Disse", description: "Espaço entre hepatócitos e sinusoides onde residem células estreladas (de Ito)", color: "hsl(var(--badge-science))" },
    ],
    clinicalNote: "Na esteatose hepática, vacúolos lipídicos acumulam-se nos hepatócitos. Na cirrose, fibrose difusa com nódulos regenerativos distorce a arquitetura lobular.",
  },
  {
    id: 12,
    tissue: "Rim — Córtex",
    stain: "H&E e PAS",
    description: "Córtex renal mostrando glomérulos, túbulos contorcidos proximais e distais.",
    structures: [
      { name: "Glomérulo", description: "Enovelado de capilares fenestrados envoltos pela cápsula de Bowman; espaço urinário visível", color: "hsl(var(--primary))" },
      { name: "Túbulo contorcido proximal", description: "Epitélio cúbico com borda em escova (PAS+), citoplasma eosinofílico, luz estreita", color: "hsl(var(--badge-nature))" },
      { name: "Túbulo contorcido distal", description: "Epitélio cúbico sem borda em escova, citoplasma mais claro, luz mais ampla", color: "hsl(var(--badge-cell))" },
      { name: "Cápsula de Bowman", description: "Folheto parietal (epitélio simples pavimentoso) e visceral (podócitos)", color: "hsl(var(--badge-nejm))" },
      { name: "Aparelho justaglomerular", description: "Mácula densa + células justaglomerulares (granulares) — regulação da PA via renina", color: "hsl(var(--badge-science))" },
    ],
    clinicalNote: "A coloração PAS destaca as membranas basais glomerulares e tubulares, sendo essencial para diagnóstico de glomerulopatias como nefropatia diabética (espessamento da MB).",
  },
  {
    id: 13,
    tissue: "Pele Espessa — Planta do pé",
    stain: "H&E",
    description: "Corte de pele espessa mostrando todas as camadas da epiderme e a derme subjacente.",
    structures: [
      { name: "Estrato córneo", description: "Camada espessa de células mortas queratinizadas (corneócitos), sem núcleo", color: "hsl(var(--primary))" },
      { name: "Estrato granuloso", description: "2-5 camadas com grânulos de querato-hialina basófilos", color: "hsl(var(--badge-nature))" },
      { name: "Estrato espinhoso", description: "Células poligonais unidas por desmossomos (aspecto espinhoso é artefato de fixação)", color: "hsl(var(--badge-cell))" },
      { name: "Estrato basal", description: "Camada única de células cuboides/cilíndricas germinativas + melanócitos", color: "hsl(var(--badge-nejm))" },
      { name: "Derme papilar", description: "Conjuntivo frouxo com papilas que interdigitam com cristas epidérmicas", color: "hsl(var(--badge-science))" },
    ],
    clinicalNote: "No carcinoma espinocelular, células do estrato espinhoso proliferam de forma atípica, podendo invadir a derme. Na psoríase, há hiperproliferação dos queratinócitos com paraqueratose.",
  },
  {
    id: 14,
    tissue: "Tireoide",
    stain: "H&E",
    description: "Parênquima tireoidiano mostrando folículos de diversos tamanhos preenchidos por coloide.",
    structures: [
      { name: "Folículo tireoidiano", description: "Unidade funcional: epitélio cúbico simples delimitando cavidade com coloide", color: "hsl(var(--primary))" },
      { name: "Coloide", description: "Material eosinofílico homogêneo (tireoglobulina iodada) armazenado no lúmen folicular", color: "hsl(var(--badge-science))" },
      { name: "Células foliculares", description: "Epitélio cúbico (hipofunção → achatado; hiperfunção → cilíndrico). Produzem T3 e T4", color: "hsl(var(--badge-nature))" },
      { name: "Células parafoliculares (C)", description: "Entre os folículos ou no epitélio folicular, maiores e mais claras, produzem calcitonina", color: "hsl(var(--badge-cell))" },
    ],
    clinicalNote: "Na doença de Graves, o epitélio folicular torna-se cilíndrico alto com coloide escasso e vacuolizado (reabsorção ativa). No hipotireoidismo, folículos grandes com coloide abundante e epitélio achatado.",
  },
  {
    id: 15,
    tissue: "Linfonodo",
    stain: "H&E",
    description: "Corte mostrando a organização cortical e medular do linfonodo com folículos linfoides.",
    structures: [
      { name: "Cápsula e seio subcapsular", description: "Cápsula conjuntiva densa; seio subcapsular recebe linfa dos vasos aferentes", color: "hsl(var(--primary))" },
      { name: "Folículo linfoide (córtex)", description: "Folículos primários (repouso) e secundários (com centro germinativo ativo — linfócitos B)", color: "hsl(var(--badge-nature))" },
      { name: "Paracórtex", description: "Zona T-dependente entre folículos e medula, rica em linfócitos T e vênulas de endotélio alto (HEV)", color: "hsl(var(--badge-cell))" },
      { name: "Cordões medulares", description: "Cordões celulares na medula com plasmócitos, macrófagos e linfócitos", color: "hsl(var(--badge-nejm))" },
      { name: "Seios medulares", description: "Canais que convergem para o vaso linfático eferente no hilo", color: "hsl(var(--badge-science))" },
    ],
    clinicalNote: "Na linfadenite reativa, folículos com centros germinativos proeminentes indicam resposta humoral ativa. No linfoma, a arquitetura normal é destruída por proliferação neoplásica monoclonal.",
  },
];
