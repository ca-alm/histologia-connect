export interface Puzzle {
  type: "multiple_choice" | "order" | "true_false" | "fill_blank" | "image_identify";
  question: string;
  hint?: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
}

export interface EscapeScenario {
  id: number;
  title: string;
  theme: string;
  description: string;
  timeSeconds: number;
  difficulty: "Fácil" | "Médio" | "Difícil" | "Extremo";
  puzzles: Puzzle[];
}

export const escapeScenarios: EscapeScenario[] = [
  // ===== TECIDO EPITELIAL (1-12) =====
  {
    id: 1, title: "Laboratório do Epitélio", theme: "Tecido Epitelial", difficulty: "Fácil", timeSeconds: 300,
    description: "Você está preso no laboratório de histologia. Para escapar, identifique corretamente os tecidos epiteliais nas lâminas.",
    puzzles: [
      { type: "multiple_choice", question: "Qual epitélio reveste a traqueia?", options: ["Simples pavimentoso", "Pseudoestratificado cilíndrico ciliado", "Estratificado pavimentoso", "Transição"], correctAnswer: 1, explanation: "Epitélio respiratório: pseudoestratificado cilíndrico ciliado com células caliciformes." },
      { type: "true_false", question: "O epitélio de transição é encontrado no esôfago.", correctAnswer: "Falso", explanation: "O urotélio reveste bexiga e vias urinárias. O esôfago tem epitélio estratificado pavimentoso." },
      { type: "fill_blank", question: "As ___ formam a borda em escova do intestino delgado.", correctAnswer: "microvilosidades", explanation: "Microvilosidades aumentam a superfície de absorção dos enterócitos.", options: ["microvilosidades", "cílios", "estereocílios", "flagelos"] },
      { type: "multiple_choice", question: "Qual especialização apical possui arranjo 9+2 de microtúbulos?", options: ["Microvilosidades", "Estereocílios", "Cílios", "Flagelos celulares"], correctAnswer: 2, explanation: "Cílios possuem axonema com 9 pares periféricos + 2 centrais, movidos por dineína." },
      { type: "order", question: "Ordene as camadas do epitélio estratificado pavimentoso (da base para superfície): Basal → Espinhosa → Granulosa → Córnea", correctAnswer: "Basal,Espinhosa,Granulosa,Córnea", explanation: "Na epiderme queratinizada: basal (mitótica) → espinhosa (desmossomos) → granulosa (querato-hialina) → córnea (células mortas anucleadas)." },
    ],
  },
  {
    id: 2, title: "Enigma das Junções Celulares", theme: "Tecido Epitelial", difficulty: "Médio", timeSeconds: 360,
    description: "As portas do laboratório só abrem decifrando os segredos das junções intercelulares.",
    puzzles: [
      { type: "multiple_choice", question: "Qual junção veda o espaço intercelular na porção mais apical?", options: ["Desmossomo", "Junção gap", "Zônula de oclusão (tight junction)", "Hemidesmossomo"], correctAnswer: 2, explanation: "Tight junctions: claudinas e ocludinas selam o espaço paracelular. Localizam-se na porção mais apical." },
      { type: "true_false", question: "Os desmossomos utilizam caderinas (desmogleína e desmocolina) para adesão.", correctAnswer: "Verdadeiro", explanation: "Desmossomos: placas densas com desmogleína e desmocolina (caderinas) ancoradas a filamentos intermediários." },
      { type: "fill_blank", question: "As junções ___ permitem comunicação direta entre citoplasmas adjacentes.", correctAnswer: "gap (comunicantes)", explanation: "Gap junctions: conexinas formam conexons (canais) que permitem passagem de íons e pequenas moléculas.", options: ["gap (comunicantes)", "tight", "aderentes", "focais"] },
      { type: "multiple_choice", question: "Os hemidesmossomos conectam a célula à:", options: ["Célula vizinha", "Lâmina basal (matriz extracelular)", "Membrana nuclear", "Mitocôndria"], correctAnswer: 1, explanation: "Hemidesmossomos: integrinas (α6β4) ancoram a célula epitelial à lâmina basal via filamentos intermediários de queratina." },
      { type: "true_false", question: "No pênfigo vulgar, anticorpos atacam as claudinas das tight junctions.", correctAnswer: "Falso", explanation: "Pênfigo vulgar: auto-anticorpos contra desmogleína 3 (desmossomos) → acantólise → bolhas intraepidérmicas." },
    ],
  },
  {
    id: 3, title: "Câmara das Glândulas", theme: "Tecido Epitelial", difficulty: "Médio", timeSeconds: 360,
    description: "Decifre os segredos das glândulas exócrinas e endócrinas para abrir o cofre do laboratório.",
    puzzles: [
      { type: "multiple_choice", question: "Qual o tipo de secreção em que a célula libera seu conteúdo por exocitose sem perda celular?", options: ["Holócrina", "Apócrina", "Merócrina (écrina)", "Parácrina"], correctAnswer: 2, explanation: "Secreção merócrina: exocitose sem perda de citoplasma. Ex: glândulas salivares, pâncreas exócrino." },
      { type: "true_false", question: "As glândulas sebáceas são exemplos de secreção holócrina.", correctAnswer: "Verdadeiro", explanation: "Secreção holócrina: célula inteira se desintegra liberando o produto (sebo). As gl. sebáceas são o exemplo clássico." },
      { type: "fill_blank", question: "As glândulas ___ secretam diretamente na corrente sanguínea, sem ductos.", correctAnswer: "endócrinas", explanation: "Glândulas endócrinas: sem ductos, secretam hormônios no sangue. Ex: tireoide, adrenal, hipófise.", options: ["endócrinas", "exócrinas", "mistas", "parácrinas"] },
      { type: "multiple_choice", question: "As células mioepiteliais encontradas ao redor dos ácinos glandulares são importantes para:", options: ["Síntese de hormônios", "Contração e ejeção da secreção", "Fagocitose", "Divisão celular"], correctAnswer: 1, explanation: "Células mioepiteliais: contêm actina e miosina, contraem-se para auxiliar na expulsão da secreção dos ácinos." },
      { type: "true_false", question: "O pâncreas é uma glândula exclusivamente exócrina.", correctAnswer: "Falso", explanation: "O pâncreas é uma glândula mista: exócrina (ácinos → enzimas digestivas) e endócrina (ilhotas de Langerhans → insulina, glucagon)." },
    ],
  },
  {
    id: 4, title: "Mistério da Lâmina Basal", theme: "Tecido Epitelial", difficulty: "Difícil", timeSeconds: 420,
    description: "A saída está bloqueada por uma barreira molecular. Desvende a composição da lâmina basal.",
    puzzles: [
      { type: "multiple_choice", question: "Qual colágeno é o principal componente da lâmina basal?", options: ["Tipo I", "Tipo II", "Tipo III", "Tipo IV"], correctAnswer: 3, explanation: "Colágeno tipo IV: forma rede (não fibras) na lâmina basal. Associado a laminina, entactina e proteoglicanos." },
      { type: "fill_blank", question: "A ___ é a principal glicoproteína de adesão da lâmina basal.", correctAnswer: "laminina", explanation: "Laminina: glicoproteína cruciforme que conecta integrinas das células ao colágeno IV via entactina/nidogênio.", options: ["laminina", "fibronectina", "vitronectina", "tenascina"] },
      { type: "true_false", question: "Na síndrome de Goodpasture, anticorpos atacam o colágeno tipo IV da membrana basal glomerular e alveolar.", correctAnswer: "Verdadeiro", explanation: "Goodpasture: anti-colágeno IV (domínio NC1 da cadeia α3) → glomerulonefrite rapidamente progressiva + hemorragia pulmonar." },
      { type: "multiple_choice", question: "Qual coloração especial é mais adequada para visualizar a membrana basal?", options: ["H&E", "PAS (ácido periódico de Schiff)", "Gram", "Ziehl-Neelsen"], correctAnswer: 1, explanation: "PAS: cora glicoproteínas e proteoglicanos da lâmina basal em magenta. H&E mostra pobremente." },
      { type: "true_false", question: "O perlecan é um proteoglicano de heparan sulfato presente na lâmina basal.", correctAnswer: "Verdadeiro", explanation: "Perlecan (HSPG2): proteoglicano que contribui para a carga negativa da MB glomerular, importante na filtração." },
    ],
  },
  // ===== TECIDO CONJUNTIVO (5-16) =====
  {
    id: 5, title: "Floresta de Fibras", theme: "Tecido Conjuntivo", difficulty: "Fácil", timeSeconds: 300,
    description: "Navegue pela floresta de fibras conjuntivas identificando cada tipo para encontrar a saída.",
    puzzles: [
      { type: "multiple_choice", question: "Qual é a fibra conjuntiva mais abundante do corpo humano?", options: ["Elástica", "Reticular", "Colágena tipo I", "Oxitalânica"], correctAnswer: 2, explanation: "Colágeno tipo I: mais abundante, presente em osso, tendão, pele, dentina. Forma feixes espessos." },
      { type: "true_false", question: "As fibras reticulares são compostas por colágeno tipo III.", correctAnswer: "Verdadeiro", explanation: "Fibras reticulares: colágeno tipo III, formam redes delicadas em órgãos hematopoiéticos, fígado e linfonodos." },
      { type: "fill_blank", question: "A coloração de ___ é usada para evidenciar fibras elásticas em preto.", correctAnswer: "Verhoeff", explanation: "Verhoeff: cora fibras elásticas em preto. Orceína também pode ser usada (marrom).", options: ["Verhoeff", "PAS", "Masson", "Giemsa"] },
      { type: "multiple_choice", question: "A elastina confere qual propriedade ao tecido?", options: ["Rigidez", "Capacidade de retorno elástico após distensão", "Calcificação", "Impermeabilidade"], correctAnswer: 1, explanation: "Elastina: proteína com ligações cruzadas de desmosina/isodesmosina que permite deformação reversível." },
      { type: "true_false", question: "Na síndrome de Marfan, há defeito na fibrilina-1 que compõe as microfibrilas associadas à elastina.", correctAnswer: "Verdadeiro", explanation: "Marfan: mutação FBN1 → fibrilina-1 defeituosa → comprometimento das microfibrilas → dissecção aórtica, subluxação do cristalino." },
    ],
  },
  {
    id: 6, title: "Calabouço dos Fibroblastos", theme: "Tecido Conjuntivo", difficulty: "Médio", timeSeconds: 360,
    description: "Os fibroblastos guardam segredos sobre a matriz extracelular. Decifre-os.",
    puzzles: [
      { type: "multiple_choice", question: "Qual célula do tecido conjuntivo é responsável pela síntese de colágeno e matriz extracelular?", options: ["Mastócito", "Macrófago", "Fibroblasto", "Plasmócito"], correctAnswer: 2, explanation: "Fibroblasto: célula principal do TC, sintetiza colágeno, elastina, GAGs e glicoproteínas da matriz." },
      { type: "fill_blank", question: "Os ___ liberam histamina e heparina na inflamação aguda.", correctAnswer: "mastócitos", explanation: "Mastócitos: grânulos metacromáticos com histamina, heparina, proteases. Degranulação mediada por IgE.", options: ["mastócitos", "fibroblastos", "macrófagos", "linfócitos"] },
      { type: "true_false", question: "Os macrófagos do tecido conjuntivo derivam dos monócitos sanguíneos.", correctAnswer: "Verdadeiro", explanation: "Monócitos emigram do sangue → tecido conjuntivo → diferenciam-se em macrófagos (histiócitos) residentes." },
      { type: "multiple_choice", question: "Qual proteoglicano é o principal componente da substância fundamental amorfa da cartilagem?", options: ["Decorina", "Agrecano", "Sindecano", "Perlecano"], correctAnswer: 1, explanation: "Agrecano: grande proteoglicano com GAGs (condroitim sulfato e queratan sulfato) que retém água na cartilagem." },
      { type: "true_false", question: "A fibronectina é uma glicoproteína que medeia adesão celular à matriz extracelular via integrinas.", correctAnswer: "Verdadeiro", explanation: "Fibronectina: liga-se a integrinas (domínio RGD), colágeno e fibrina. Importante na cicatrização e migração celular." },
    ],
  },
  {
    id: 7, title: "Cripta do Tecido Adiposo", theme: "Tecido Conjuntivo", difficulty: "Médio", timeSeconds: 360,
    description: "No subsolo do laboratório, os segredos do tecido adiposo aguardam por você.",
    puzzles: [
      { type: "multiple_choice", question: "Qual proteína mitocondrial é exclusiva do tecido adiposo marrom?", options: ["Leptina", "Adiponectina", "UCP1 (termogenina)", "Resistina"], correctAnswer: 2, explanation: "UCP1: desacopla fosforilação oxidativa → gera calor em vez de ATP. Essencial para termogênese sem tremor em neonatos." },
      { type: "true_false", question: "O adipócito unilocular (branco) possui uma única e grande gota lipídica que desloca o núcleo para a periferia.", correctAnswer: "Verdadeiro", explanation: "Adipócito branco: célula em anel de sinete, com gota lipídica única e núcleo periférico achatado." },
      { type: "fill_blank", question: "O hormônio ___ é secretado pelo tecido adiposo branco e regula a saciedade.", correctAnswer: "leptina", explanation: "Leptina: adipocina que atua no hipotálamo reduzindo apetite e aumentando gasto energético.", options: ["leptina", "grelina", "insulina", "glucagon"] },
      { type: "multiple_choice", question: "O tecido adiposo marrom é mais abundante em:", options: ["Adultos obesos", "Recém-nascidos", "Idosos", "Atletas"], correctAnswer: 1, explanation: "Neonatos possuem abundante tecido adiposo marrom para termogênese. Diminui com a idade, mas persiste em adultos." },
      { type: "true_false", question: "A lipomatose é caracterizada por infiltração difusa de tecido adiposo em órgãos.", correctAnswer: "Verdadeiro", explanation: "Lipomatose: proliferação não-neoplásica difusa de tecido adiposo em tecidos como mediastino, pâncreas." },
    ],
  },
  {
    id: 8, title: "Torre da Cartilagem", theme: "Tecido Conjuntivo", difficulty: "Difícil", timeSeconds: 420,
    description: "Escale a torre respondendo sobre os três tipos de cartilagem.",
    puzzles: [
      { type: "multiple_choice", question: "Qual tipo de cartilagem NÃO possui pericôndrio?", options: ["Hialina articular", "Elástica", "Fibrosa (fibrocartilagem)", "Ambas A e C"], correctAnswer: 3, explanation: "Cartilagem articular (hialina) e fibrocartilagem não possuem pericôndrio. A articular é nutrida pelo líquido sinovial." },
      { type: "fill_blank", question: "Os grupos ___ são conjuntos de condrócitos derivados de um único condroblasto.", correctAnswer: "isógenos", explanation: "Grupos isógenos: condrócitos em uma lacuna que representam divisões de um condroblasto original.", options: ["isógenos", "sinciciais", "acinares", "foliculares"] },
      { type: "true_false", question: "A fibrocartilagem contém fibras de colágeno tipo I dispostas em feixes grossos.", correctAnswer: "Verdadeiro", explanation: "Fibrocartilagem: colágeno tipo I em feixes (resistência à tração) + tipo II. Presente nos discos intervertebrais e meniscos." },
      { type: "multiple_choice", question: "Qual tipo de crescimento cartilaginoso ocorre a partir do pericôndrio?", options: ["Intersticial (endógeno)", "Aposicional (exógeno)", "Endocondral", "Membranoso"], correctAnswer: 1, explanation: "Crescimento aposicional: condroblastos do pericôndrio se diferenciam e adicionam cartilagem à superfície externa." },
      { type: "true_false", question: "A cartilagem hialina pode calcificar patologicamente, especialmente com o envelhecimento.", correctAnswer: "Verdadeiro", explanation: "Calcificação da cartilagem: depósito de cristais de hidroxiapatita na matriz. Ocorre no envelhecimento e na placa epifisária (fisiológico)." },
    ],
  },
  // ===== TECIDO ÓSSEO (9-12) =====
  {
    id: 9, title: "Labirinto dos Ósteons", theme: "Tecido Ósseo", difficulty: "Médio", timeSeconds: 360,
    description: "Navegue pelo labirinto dos sistemas de Havers para encontrar a saída.",
    puzzles: [
      { type: "multiple_choice", question: "Qual célula é responsável pela reabsorção óssea?", options: ["Osteoblasto", "Osteócito", "Osteoclasto", "Osteoprogenitor"], correctAnswer: 2, explanation: "Osteoclasto: célula multinucleada derivada de monócitos, com borda em escova. Cria lacunas de Howship pela ação de H+ e catepsina K." },
      { type: "fill_blank", question: "Os canais de ___ conectam ósteons adjacentes e comunicam com o periósteo.", correctAnswer: "Volkmann", explanation: "Canais de Volkmann: perfurantes, transversais. Canais de Havers: centrais, longitudinais.", options: ["Volkmann", "Havers", "Cloquet", "Schlemm"] },
      { type: "true_false", question: "O RANKL estimula a diferenciação e atividade dos osteoclastos.", correctAnswer: "Verdadeiro", explanation: "RANKL (osteoblasto) + RANK (pré-osteoclasto) → ativação osteoclástica. OPG (osteoprotegerina) bloqueia RANKL." },
      { type: "multiple_choice", question: "A ossificação endocondral ocorre em:", options: ["Ossos chatos do crânio", "Ossos longos (fêmur, úmero)", "Clavícula", "Maxila"], correctAnswer: 1, explanation: "Endocondral: molde de cartilagem → substituição por osso. Ossos longos, vértebras, base do crânio." },
      { type: "true_false", question: "A osteoporose é causada por aumento da massa óssea.", correctAnswer: "Falso", explanation: "Osteoporose: redução da massa óssea com microarquitetura preservada → fragilidade. Reabsorção > formação." },
    ],
  },
  {
    id: 10, title: "Câmara do Crescimento Ósseo", theme: "Tecido Ósseo", difficulty: "Difícil", timeSeconds: 420,
    description: "Desvende os segredos da placa epifisária para abrir a porta da câmara.",
    puzzles: [
      { type: "order", question: "Ordene as zonas da placa epifisária (da epífise para diáfise): Repouso → Proliferação → Hipertrofia → Calcificação → Ossificação", correctAnswer: "Repouso,Proliferação,Hipertrofia,Calcificação,Ossificação", explanation: "Placa de crescimento: zona de repouso (reserva) → proliferação (colunas) → hipertrofia (células grandes) → calcificação (morte) → ossificação (invasão vascular + osteoblastos)." },
      { type: "multiple_choice", question: "Qual hormônio é o principal regulador do crescimento longitudinal dos ossos na placa epifisária?", options: ["PTH", "GH/IGF-1", "Calcitonina", "Vitamina D"], correctAnswer: 1, explanation: "GH → fígado → IGF-1 → estimula proliferação de condrócitos na placa de crescimento. Deficiência → nanismo." },
      { type: "true_false", question: "O fechamento da placa epifisária ocorre pela ação dos estrógenos na puberdade.", correctAnswer: "Verdadeiro", explanation: "Estrógenos induzem apoptose dos condrócitos e fusão da placa em ambos os sexos. Déficit de estrógeno → estatura alta." },
      { type: "fill_blank", question: "A ___ é uma doença causada por deficiência de vitamina D na infância, afetando a mineralização óssea.", correctAnswer: "raquitismo", explanation: "Raquitismo: déficit de vitamina D → inadequada mineralização da placa de crescimento → deformidades ósseas.", options: ["raquitismo", "osteomalácia", "osteoporose", "osteogênese imperfeita"] },
      { type: "multiple_choice", question: "Na osteogênese imperfeita, o defeito genético está em:", options: ["Colágeno tipo IV", "Colágeno tipo I (COL1A1/COL1A2)", "RANKL", "Osteocalcina"], correctAnswer: 1, explanation: "OI: mutação no colágeno tipo I → ossos frágeis (fraturas múltiplas), escleras azuladas, dentinogênese imperfeita." },
    ],
  },
  // ===== TECIDO MUSCULAR (11-14) =====
  {
    id: 11, title: "Arena dos Músculos", theme: "Tecido Muscular", difficulty: "Fácil", timeSeconds: 300,
    description: "Identifique os três tipos musculares para vencer a arena.",
    puzzles: [
      { type: "multiple_choice", question: "Qual tipo muscular possui discos intercalares?", options: ["Esquelético", "Liso", "Cardíaco", "Todos"], correctAnswer: 2, explanation: "Músculo cardíaco: discos intercalares com gap junctions + desmossomos + fáscia aderente. Permitem sincício funcional." },
      { type: "true_false", question: "O músculo esquelético possui núcleos periféricos (subsarcolemais).", correctAnswer: "Verdadeiro", explanation: "Fibras esqueléticas: multinucleadas com núcleos na periferia. Cardíaco: 1-2 núcleos centrais." },
      { type: "fill_blank", question: "A unidade contrátil do músculo estriado é o ___.", correctAnswer: "sarcômero", explanation: "Sarcômero: de linha Z a linha Z. Contém filamentos grossos (miosina) e finos (actina, troponina, tropomiosina).", options: ["sarcômero", "miofibrila", "fascículo", "endomísio"] },
      { type: "multiple_choice", question: "Qual proteína ancora o músculo estriado à lâmina basal e sua deficiência causa distrofia de Duchenne?", options: ["Actina", "Miosina", "Distrofina", "Titina"], correctAnswer: 2, explanation: "Distrofina: conecta citoesqueleto de actina → complexo distroglicano → lâmina basal. Ausência → Duchenne (DMD no Xp21)." },
      { type: "true_false", question: "O músculo liso possui sarcômeros organizados visíveis em microscopia.", correctAnswer: "Falso", explanation: "Músculo liso: sem sarcômeros organizados → sem estriações. Contração por corpos densos e calmodulina." },
    ],
  },
  {
    id: 12, title: "Enigma da Contração", theme: "Tecido Muscular", difficulty: "Difícil", timeSeconds: 420,
    description: "Desvende o mecanismo molecular da contração muscular para escapar.",
    puzzles: [
      { type: "order", question: "Ordene os eventos da contração muscular: Potencial de ação → Liberação de Ca²⁺ do RS → Ca²⁺ liga troponina C → Exposição do sítio de ligação → Ponte cruzada actina-miosina", correctAnswer: "Potencial de ação,Liberação de Ca²⁺ do RS,Ca²⁺ liga troponina C,Exposição do sítio de ligação,Ponte cruzada actina-miosina", explanation: "Acoplamento excitação-contração: PA → túbulos T → receptor DHP → RyR → Ca²⁺ → troponina C → tropomiosina desloca → miosina se liga à actina." },
      { type: "multiple_choice", question: "No músculo liso, o Ca²⁺ ativa a contração ligando-se a:", options: ["Troponina C", "Calmodulina", "Tropomiosina", "Actinina"], correctAnswer: 1, explanation: "Músculo liso: Ca²⁺-calmodulina → ativa MLCK (quinase de cadeia leve de miosina) → fosforilação → contração." },
      { type: "true_false", question: "A banda H do sarcômero contém apenas filamentos grossos (miosina).", correctAnswer: "Verdadeiro", explanation: "Banda H: zona central da banda A onde há apenas miosina. Na contração, a banda H diminui (filamentos finos deslizam)." },
      { type: "fill_blank", question: "O ___ é o retículo sarcoplasmático especializado que armazena Ca²⁺ no músculo.", correctAnswer: "retículo sarcoplasmático", explanation: "RS: armazena Ca²⁺ via SERCA. Libera Ca²⁺ por canais RyR (estriado) ou IP3R (liso).", options: ["retículo sarcoplasmático", "complexo de Golgi", "lisossomo", "peroxissomo"] },
      { type: "multiple_choice", question: "Na rigor mortis, por que os músculos ficam rígidos?", options: ["Excesso de Ca²⁺", "Falta de ATP para desligar pontes cruzadas", "Excesso de ácido lático", "Degranulação de mastócitos"], correctAnswer: 1, explanation: "Rigor mortis: sem ATP → miosina não se desliga da actina → rigidez. Resolve quando proteólise post-mortem degrada as proteínas." },
    ],
  },
  // ===== TECIDO NERVOSO (13-18) =====
  {
    id: 13, title: "Labirinto Neural", theme: "Tecido Nervoso", difficulty: "Médio", timeSeconds: 360,
    description: "Navegue pelos axônios e dendritos para encontrar a sinapse de saída.",
    puzzles: [
      { type: "multiple_choice", question: "Qual célula glial forma a bainha de mielina no sistema nervoso central?", options: ["Célula de Schwann", "Oligodendrócito", "Astrócito", "Microglia"], correctAnswer: 1, explanation: "Oligodendrócitos: mielinizam múltiplos axônios no SNC. Schwann: mieliniza UM segmento no SNP." },
      { type: "true_false", question: "A microglia é derivada da crista neural.", correctAnswer: "Falso", explanation: "Microglia: origem mesodérmica (monócitos/macrófagos do saco vitelino). Demais glia: ectoderma." },
      { type: "fill_blank", question: "Os ___ são os espaços entre segmentos de mielina onde ocorre condução saltatória.", correctAnswer: "nódulos de Ranvier", explanation: "Nódulos de Ranvier: interrupções na mielina ricas em canais de Na⁺. Condução saltatória: rápida e eficiente.", options: ["nódulos de Ranvier", "botões sinápticos", "corpúsculos de Nissl", "cones de crescimento"] },
      { type: "multiple_choice", question: "Qual é a principal célula de suporte do SNC que forma a barreira hematoencefálica com os endotélios?", options: ["Oligodendrócito", "Microglia", "Astrócito (pés vasculares)", "Ependimócito"], correctAnswer: 2, explanation: "Astrócitos: pés vasculares envolvem capilares cerebrais, induzem tight junctions nos endotélios → BHE." },
      { type: "true_false", question: "Os corpúsculos de Nissl representam RER abundante nos neurônios.", correctAnswer: "Verdadeiro", explanation: "Corpúsculos de Nissl: agregados de RER e polirribossomos no pericário e dendritos (não no axônio). Refletem alta síntese proteica." },
    ],
  },
  {
    id: 14, title: "Sinapse Secreta", theme: "Tecido Nervoso", difficulty: "Difícil", timeSeconds: 420,
    description: "Decifre a transmissão sináptica para desbloquear o terminal nervoso.",
    puzzles: [
      { type: "multiple_choice", question: "Qual proteína é essencial para a fusão das vesículas sinápticas com a membrana pré-sináptica?", options: ["Clatrina", "SNARE (sinaptobrevina, sintaxina, SNAP-25)", "Dinamina", "Cinesina"], correctAnswer: 1, explanation: "Complexo SNARE: sinaptobrevina (vesícula) + sintaxina + SNAP-25 (membrana) → fusão Ca²⁺-dependente." },
      { type: "true_false", question: "A toxina botulínica age clivando proteínas SNARE, impedindo a liberação de acetilcolina.", correctAnswer: "Verdadeiro", explanation: "Botulínica: cliva SNAREs → bloqueia exocitose de ACh → paralisia flácida. Tétano: bloqueia interneurônios inibitórios → espasmo." },
      { type: "fill_blank", question: "O neurotransmissor ___ é o principal excitatório do SNC.", correctAnswer: "glutamato", explanation: "Glutamato: principal NT excitatório. Receptores: NMDA (Ca²⁺), AMPA (Na⁺), kainato. Excitotoxicidade → morte neuronal.", options: ["glutamato", "GABA", "glicina", "serotonina"] },
      { type: "multiple_choice", question: "Na degeneração walleriana, o que acontece com a porção distal do axônio lesionado?", options: ["Regenera imediatamente", "O axônio e a mielina distais degeneram", "Nada acontece", "O corpo celular morre"], correctAnswer: 1, explanation: "Degeneração walleriana: parte distal do axônio + mielina degeneram. Macrófagos fagocitam debris. Schwann forma tubos de regeneração no SNP." },
      { type: "true_false", question: "O transporte axonal retrógrado (do terminal para o corpo celular) é mediado por dineína.", correctAnswer: "Verdadeiro", explanation: "Dineína: motor do transporte retrógrado (→ corpo celular). Cinesina: anterógrado (corpo celular →). Ambos usam microtúbulos." },
    ],
  },
  // ===== SANGUE E HEMATOPOIESE (15-18) =====
  {
    id: 15, title: "Câmara do Sangue", theme: "Sangue", difficulty: "Fácil", timeSeconds: 300,
    description: "Identifique as células sanguíneas no esfregaço para escapar da câmara.",
    puzzles: [
      { type: "multiple_choice", question: "Qual leucócito possui núcleo bilobulado e grânulos eosinofílicos?", options: ["Neutrófilo", "Eosinófilo", "Basófilo", "Monócito"], correctAnswer: 1, explanation: "Eosinófilo: núcleo bilobulado (óculos), grânulos com proteína básica maior (MBP) e peroxidase eosinofílica." },
      { type: "true_false", question: "Os reticulócitos são eritrócitos imaturos com restos de RNA.", correctAnswer: "Verdadeiro", explanation: "Reticulócitos: eritrócitos jovens com RNA ribossômico residual (visível com azul de cresil brilhante). Indicam atividade eritropoiética." },
      { type: "fill_blank", question: "As ___ são fragmentos citoplasmáticos dos megacariócitos da medula óssea.", correctAnswer: "plaquetas", explanation: "Plaquetas (trombócitos): fragmentos anucleados de megacariócitos. 150-400 mil/μL. Essenciais para hemostasia primária.", options: ["plaquetas", "hemácias", "leucócitos", "reticulócitos"] },
      { type: "multiple_choice", question: "Qual leucócito é o maior e possui núcleo reniforme?", options: ["Linfócito", "Neutrófilo", "Monócito", "Basófilo"], correctAnswer: 2, explanation: "Monócito: 15-20μm, maior leucócito circulante. Núcleo reniforme/ferradura. Precursor de macrófagos teciduais." },
      { type: "true_false", question: "O neutrófilo segmentado possui normalmente de 3 a 5 lóbulos nucleares.", correctAnswer: "Verdadeiro", explanation: "Neutrófilo: 3-5 lóbulos. Hipersegmentação (≥6 lóbulos) → anemia megaloblástica (deficiência de B12/folato)." },
    ],
  },
  {
    id: 16, title: "Medula Óssea: Origem de Tudo", theme: "Sangue", difficulty: "Difícil", timeSeconds: 420,
    description: "Decifre a hematopoiese na medula óssea para abrir os portões.",
    puzzles: [
      { type: "multiple_choice", question: "A eritropoietina (EPO) é produzida principalmente por:", options: ["Fígado", "Medula óssea", "Células peritubulares renais", "Baço"], correctAnswer: 2, explanation: "EPO: 90% produzida pelas células peritubulares do córtex renal em resposta à hipóxia. HIF → transcrição de EPO." },
      { type: "order", question: "Ordene a maturação eritrocitária: Proeritroblasto → Eritroblasto basófilo → Eritroblasto policromatófilo → Eritroblasto ortocromático → Reticulócito → Eritrócito", correctAnswer: "Proeritroblasto,Eritroblasto basófilo,Eritroblasto policromatófilo,Eritroblasto ortocromático,Reticulócito,Eritrócito", explanation: "Maturação: progressiva condensação nuclear e hemoglobinização. Núcleo é expulso no estágio ortocromático." },
      { type: "true_false", question: "A trombopoietina (TPO) é o principal regulador da produção de plaquetas.", correctAnswer: "Verdadeiro", explanation: "TPO: produzida pelo fígado, estimula proliferação/diferenciação de megacariócitos → fragmentação → plaquetas." },
      { type: "fill_blank", question: "O ___ é o fator estimulador de colônias de granulócitos, usado clinicamente para neutropenia.", correctAnswer: "G-CSF", explanation: "G-CSF (filgrastima): estimula produção e maturação de neutrófilos. Usado pós-quimioterapia e na mobilização de CTH.", options: ["G-CSF", "M-CSF", "IL-2", "EPO"] },
      { type: "multiple_choice", question: "Qual célula-tronco dá origem a TODAS as linhagens sanguíneas?", options: ["Mieloblasto", "Linfoblasto", "Célula-tronco hematopoiética (CTH) pluripotente", "Megacariócito"], correctAnswer: 2, explanation: "CTH (CD34+): auto-renovação + diferenciação em progenitores mieloides e linfoides → todas as células sanguíneas." },
    ],
  },
  // ===== SISTEMA DIGESTÓRIO (17-24) =====
  {
    id: 17, title: "Túnel do Tubo Digestivo", theme: "Sistema Digestório", difficulty: "Fácil", timeSeconds: 300,
    description: "Percorra o trato gastrointestinal identificando cada camada para encontrar a saída.",
    puzzles: [
      { type: "order", question: "Ordene as camadas do tubo digestivo (lúmen → exterior): Mucosa → Submucosa → Muscular → Serosa/Adventícia", correctAnswer: "Mucosa,Submucosa,Muscular,Serosa/Adventícia", explanation: "4 camadas: mucosa (epitélio + lâmina própria + muscular da mucosa) → submucosa (TC denso, plexo de Meissner) → muscular (circular interna + longitudinal externa, plexo de Auerbach) → serosa." },
      { type: "multiple_choice", question: "As células parietais do estômago produzem:", options: ["Pepsinogênio", "HCl e fator intrínseco", "Muco", "Gastrina"], correctAnswer: 1, explanation: "Células parietais (oxínticas): H⁺/K⁺-ATPase → HCl + fator intrínseco (absorção de B12 no íleo)." },
      { type: "true_false", question: "As células de Paneth estão localizadas no topo das vilosidades intestinais.", correctAnswer: "Falso", explanation: "Células de Paneth: fundo das criptas de Lieberkühn. Secretam defensinas, lisozima (antimicrobianos)." },
      { type: "fill_blank", question: "O plexo de ___ localiza-se entre as camadas musculares circular e longitudinal.", correctAnswer: "Auerbach (mioentérico)", explanation: "Plexo de Auerbach: entre circular e longitudinal. Controla peristalse. Plexo de Meissner: submucoso, regula secreção.", options: ["Auerbach (mioentérico)", "Meissner (submucoso)", "Henle", "Broca"] },
      { type: "multiple_choice", question: "Qual a característica histológica que diferencia o duodeno do jejuno?", options: ["Vilosidades mais altas", "Presença de glândulas de Brunner na submucosa", "Mais células caliciformes", "Placas de Peyer"], correctAnswer: 1, explanation: "Glândulas de Brunner: exclusivas do duodeno (submucosa). Secretam muco alcalino para proteger contra o quimo ácido." },
    ],
  },
  {
    id: 18, title: "Fígado: O Labirinto Metabólico", theme: "Sistema Digestório", difficulty: "Médio", timeSeconds: 360,
    description: "Navegue pelos sinusoides hepáticos para decifrar a arquitetura do fígado.",
    puzzles: [
      { type: "multiple_choice", question: "As células de Kupffer são:", options: ["Hepatócitos modificados", "Macrófagos residentes dos sinusoides hepáticos", "Células epiteliais biliares", "Fibroblastos portais"], correctAnswer: 1, explanation: "Células de Kupffer: macrófagos especializados que revestem os sinusoides. Fagocitam bactérias, eritrócitos velhos e debris." },
      { type: "fill_blank", question: "O espaço de ___ está localizado entre os hepatócitos e os sinusoides.", correctAnswer: "Disse", explanation: "Espaço de Disse: contém células estreladas (de Ito) que armazenam vitamina A. Na cirrose, ativam-se → miofibroblastos → fibrose.", options: ["Disse", "Bowman", "Mall", "Kiernan"] },
      { type: "true_false", question: "Na cirrose hepática, as células estreladas (de Ito) se ativam e produzem colágeno excessivo.", correctAnswer: "Verdadeiro", explanation: "Ativação de células estreladas → miofibroblastos → depósito de colágeno I e III no espaço de Disse → capilarização dos sinusoides → insuficiência hepática." },
      { type: "multiple_choice", question: "A tríade portal contém:", options: ["Veia central, artéria e nervo", "Ramo da artéria hepática, ramo da veia porta e ducto biliar", "Três veias centrais", "Artéria, veia e linfático apenas"], correctAnswer: 1, explanation: "Tríade portal (espaço porta de Kiernan): ramo da artéria hepática + ramo da veia porta + ducto biliar interlobular." },
      { type: "true_false", question: "Os hepatócitos estão organizados em trabéculas radiadas a partir da veia central.", correctAnswer: "Verdadeiro", explanation: "Lóbulo hepático clássico: hepatócitos em cordões radiados da periferia (espaço porta) → centro (veia central). Sangue flui na mesma direção." },
    ],
  },
  // ===== SISTEMA RESPIRATÓRIO (19-22) =====
  {
    id: 19, title: "Alvéolos em Perigo", theme: "Sistema Respiratório", difficulty: "Médio", timeSeconds: 360,
    description: "O oxigênio está acabando! Responda sobre a barreira alvéolo-capilar para sobreviver.",
    puzzles: [
      { type: "multiple_choice", question: "A barreira hematogasosa (alvéolo-capilar) é composta por:", options: ["Epitélio estratificado + endotélio", "Pneumócito I + lâmina basal fundida + endotélio capilar", "Pneumócito II + surfactante", "Músculo liso + cartilagem"], correctAnswer: 1, explanation: "Barreira ar-sangue: pneumócito I (epitélio) + lâmina basal fundida + endotélio contínuo. ~0.2μm de espessura." },
      { type: "true_false", question: "O surfactante é produzido pelos pneumócitos tipo I.", correctAnswer: "Falso", explanation: "Surfactante: produzido por pneumócitos tipo II (corpos lamelares). Componente principal: dipalmitoilfosfatidilcolina (DPPC). Reduz tensão superficial." },
      { type: "fill_blank", question: "Os macrófagos ___ fagocitam partículas e patógenos que chegam aos alvéolos.", correctAnswer: "alveolares", explanation: "Macrófagos alveolares (células de poeira): fagócitos na superfície alveolar. Quando sobrecarregados → pneumoconioses.", options: ["alveolares", "intersticiais", "pleurais", "bronquiais"] },
      { type: "multiple_choice", question: "Qual a principal consequência clínica da deficiência de surfactante em prematuros?", options: ["Pneumonia", "Síndrome do desconforto respiratório neonatal (doença da membrana hialina)", "Asma", "Fibrose cística"], correctAnswer: 1, explanation: "SDRRN: prematuros sem surfactante → colapso alveolar → atelectasia → membranas hialinas. Tratamento: surfactante exógeno + corticoide pré-natal." },
      { type: "true_false", question: "As células de Clara (Club cells) estão nos bronquíolos e secretam proteína CC16.", correctAnswer: "Verdadeiro", explanation: "Club cells: sem cílios, secretam CC16 (anti-inflamatória). São células progenitoras do epitélio bronquiolar." },
    ],
  },
  // ===== SISTEMA URINÁRIO (20-23) =====
  {
    id: 20, title: "Néfron: A Unidade Filtradora", theme: "Sistema Urinário", difficulty: "Difícil", timeSeconds: 420,
    description: "Percorra o néfron resolvendo enigmas sobre filtração, reabsorção e secreção.",
    puzzles: [
      { type: "multiple_choice", question: "Os podócitos são células epiteliais especializadas que envolvem:", options: ["Túbulo proximal", "Alça de Henle", "Capilares glomerulares", "Ducto coletor"], correctAnswer: 2, explanation: "Podócitos: revestem externamente os capilares glomerulares. Pedicelos formam fendas de filtração com nefrina." },
      { type: "fill_blank", question: "A ___ é a proteína do diafragma de fenda entre os pedicelos dos podócitos.", correctAnswer: "nefrina", explanation: "Nefrina (NPHS1): proteína transmembranar essencial. Mutação → síndrome nefrótica congênita tipo finlandês.", options: ["nefrina", "podocina", "actina", "colágeno"] },
      { type: "true_false", question: "O túbulo proximal é responsável pela reabsorção de ~65% do filtrado glomerular.", correctAnswer: "Verdadeiro", explanation: "TCP: reabsorve 65% de Na⁺, água (aquaporina-1), glicose (SGLT2), aminoácidos, bicarbonato. Borda em escova." },
      { type: "multiple_choice", question: "Qual segmento do néfron é impermeável à água e dilui o filtrado?", options: ["TCP", "Ramo descendente da alça de Henle", "Ramo ascendente espesso da alça de Henle", "Ducto coletor com ADH"], correctAnswer: 2, explanation: "Ramo ascendente espesso: impermeável à água, reabsorve NaCl (NKCC2 → alvo de furosemida). Dilui o filtrado → 'segmento diluidor'." },
      { type: "order", question: "Ordene os segmentos do néfron: Corpúsculo renal → TCP → Alça de Henle → TCD → Ducto coletor", correctAnswer: "Corpúsculo renal,TCP,Alça de Henle,TCD,Ducto coletor", explanation: "Filtrado percorre: Bowman → TCP → Alça de Henle (descendente → ascendente) → TCD → ducto coletor → papila renal." },
    ],
  },
  // ===== SISTEMA ENDÓCRINO (21-26) =====
  {
    id: 21, title: "Glândulas do Destino", theme: "Sistema Endócrino", difficulty: "Médio", timeSeconds: 360,
    description: "Decifre as glândulas endócrinas e seus hormônios para libertar-se.",
    puzzles: [
      { type: "multiple_choice", question: "Qual zona do córtex da adrenal produz aldosterona?", options: ["Zona fasciculada", "Zona reticulada", "Zona glomerulosa", "Medula"], correctAnswer: 2, explanation: "Zona glomerulosa: mineralocorticoides (aldosterona). Fasciculada: cortisol. Reticulada: andrógenos." },
      { type: "fill_blank", question: "As células ___ da tireoide produzem calcitonina.", correctAnswer: "parafoliculares (C)", explanation: "Células C: derivadas da crista neural, produzem calcitonina → reduz Ca²⁺ sérico. Marcador: carcinoma medular da tireoide.", options: ["parafoliculares (C)", "foliculares", "principais", "oxifílicas"] },
      { type: "true_false", question: "A hipófise posterior (neuro-hipófise) produz seus próprios hormônios.", correctAnswer: "Falso", explanation: "Neuro-hipófise: ARMAZENA e libera ADH e ocitocina. Produzidos nos núcleos supraóptico e paraventricular do hipotálamo." },
      { type: "multiple_choice", question: "Qual célula das ilhotas pancreáticas produz insulina?", options: ["Célula alfa", "Célula beta", "Célula delta", "Célula PP"], correctAnswer: 1, explanation: "Células beta: 60-70% das ilhotas, produzem insulina e amilina (IAPP). Destruição autoimune → DM1." },
      { type: "true_false", question: "O feocromocitoma é um tumor das células cromafins da medula adrenal.", correctAnswer: "Verdadeiro", explanation: "Feocromocitoma: tumor produtor de catecolaminas (adrenalina/noradrenalina). Regra dos 10%: bilateral, maligno, extra-adrenal, familiar." },
    ],
  },
  {
    id: 22, title: "Hipófise: O Maestro", theme: "Sistema Endócrino", difficulty: "Difícil", timeSeconds: 420,
    description: "A hipófise controla todo o sistema endócrino. Desvende seus segredos.",
    puzzles: [
      { type: "multiple_choice", question: "Qual célula da adeno-hipófise produz GH e é corada por hematoxilina como acidófila?", options: ["Corticotrofo", "Somatotrofo", "Lactotrofo", "Tireotrofo"], correctAnswer: 1, explanation: "Somatotrofos: acidófilos, ~50% da adeno-hipófise. Produzem GH. Adenoma somatotrofo → acromegalia/gigantismo." },
      { type: "true_false", question: "A prolactina é inibida tonicamente pela dopamina hipotalâmica.", correctAnswer: "Verdadeiro", explanation: "Dopamina (PIF): inibe prolactina. Antagonistas D2 (metoclopramida, antipsicóticos) → hiperprolactinemia. Único hormônio sob inibição tônica." },
      { type: "fill_blank", question: "A síndrome de Sheehan é causada por ___ da hipófise no pós-parto.", correctAnswer: "necrose isquêmica", explanation: "Sheehan: hemorragia pós-parto → hipotensão → necrose da adeno-hipófise (hipertrofiada na gravidez). Pan-hipopituitarismo.", options: ["necrose isquêmica", "infecção viral", "autoimunidade", "compressão tumoral"] },
      { type: "multiple_choice", question: "Os corpos de Herring na neuro-hipófise representam:", options: ["Tumores", "Acúmulos de neurosecreção (ADH/ocitocina) nos terminais axonais", "Calcificações", "Vacúolos degenerativos"], correctAnswer: 1, explanation: "Corpos de Herring: dilatações axonais na neuro-hipófise contendo grânulos de ADH e ocitocina prontos para liberação." },
      { type: "true_false", question: "O craniofaringioma surge de restos da bolsa de Rathke.", correctAnswer: "Verdadeiro", explanation: "Craniofaringioma: tumor benigno supraselar de restos embrionários. Calcificações, cistos com líquido semelhante a óleo de motor." },
    ],
  },
  // ===== SISTEMA REPRODUTOR (23-30) =====
  {
    id: 23, title: "Câmara Reprodutiva Masculina", theme: "Sistema Reprodutor", difficulty: "Médio", timeSeconds: 360,
    description: "Desvende a espermatogênese e as estruturas testiculares.",
    puzzles: [
      { type: "multiple_choice", question: "As células de Sertoli formam qual barreira importante no testículo?", options: ["Barreira hematoencefálica", "Barreira hemato-testicular", "Barreira hematoplacentária", "Barreira alvéolo-capilar"], correctAnswer: 1, explanation: "Barreira hemato-testicular: tight junctions entre células de Sertoli dividem o epitélio seminífero em compartimentos basal e adluminal. Protege espermatócitos da resposta imune." },
      { type: "fill_blank", question: "As células de ___ no interstício testicular produzem testosterona.", correctAnswer: "Leydig", explanation: "Células de Leydig: no interstício entre túbulos seminíferos. Produzem testosterona sob estímulo do LH.", options: ["Leydig", "Sertoli", "Kupffer", "Langerhans"] },
      { type: "order", question: "Ordene a espermatogênese: Espermatogônia → Espermatócito I → Espermatócito II → Espermátide → Espermatozoide", correctAnswer: "Espermatogônia,Espermatócito I,Espermatócito II,Espermátide,Espermatozoide", explanation: "Espermatogônia (2n) → meiose I → espermatócito II (n) → meiose II → espermátide → espermiogênese → espermatozoide." },
      { type: "true_false", question: "O epidídimo possui epitélio pseudoestratificado com estereocílios.", correctAnswer: "Verdadeiro", explanation: "Epidídimo: epitélio pseudoestratificado com estereocílios (microvilosidades longas). Local de maturação e armazenamento de espermatozoides." },
      { type: "multiple_choice", question: "Qual marcador imunohistoquímico é positivo no seminoma testicular?", options: ["PSA", "OCT4 e PLAP", "HER2", "CEA"], correctAnswer: 1, explanation: "Seminoma: OCT4+, PLAP+, c-KIT (CD117)+. Células germinativas com citoplasma claro, infiltrado linfocítico." },
    ],
  },
  {
    id: 24, title: "Labirinto do Ciclo Menstrual", theme: "Sistema Reprodutor", difficulty: "Difícil", timeSeconds: 420,
    description: "Decifre as fases do ciclo endometrial para escapar.",
    puzzles: [
      { type: "order", question: "Ordene as fases do ciclo endometrial: Menstrual → Proliferativa → Secretora", correctAnswer: "Menstrual,Proliferativa,Secretora", explanation: "Menstrual: descamação (dias 1-5). Proliferativa: estrógeno → crescimento (dias 5-14). Secretora: progesterona → glândulas tortuosas (dias 14-28)." },
      { type: "multiple_choice", question: "Na fase secretora, as glândulas endometriais apresentam:", options: ["Glândulas retas tubulares", "Glândulas tortuosas com vacúolos subnucleares de glicogênio", "Atrofia glandular", "Metaplasia escamosa"], correctAnswer: 1, explanation: "Fase secretora: progesterona → glândulas tortuosas, secreção rica em glicogênio, edema estromal. Prepara para implantação." },
      { type: "true_false", question: "O corpo lúteo produz progesterona e é mantido pelo hCG na gravidez.", correctAnswer: "Verdadeiro", explanation: "Corpo lúteo: produz progesterona + estrógeno. Sem gravidez → involui (corpo albicans). Com gravidez → hCG do trofoblasto mantém até ~10 semanas." },
      { type: "fill_blank", question: "A ___ é a camada funcional do endométrio que descama na menstruação.", correctAnswer: "camada funcional (functionalis)", explanation: "Endométrio: camada funcional (descama ciclicamente) e basal (permanente, regenera a funcional). Artérias espiraladas na funcional.", options: ["camada funcional (functionalis)", "camada basal", "miométrio", "perimétrio"] },
      { type: "multiple_choice", question: "A endometriose é definida como:", options: ["Inflamação do endométrio", "Presença de glândulas e estroma endometrial fora do útero", "Hiperplasia endometrial", "Câncer endometrial"], correctAnswer: 1, explanation: "Endometriose: tecido endometrial ectópico (ovários, peritônio, ligamentos). Causa dismenorreia, dor pélvica e infertilidade." },
    ],
  },
  // ===== PELE E ANEXOS (25-28) =====
  {
    id: 25, title: "Enigma da Epiderme", theme: "Pele", difficulty: "Fácil", timeSeconds: 300,
    description: "Identifique as camadas e células da epiderme para escapar.",
    puzzles: [
      { type: "multiple_choice", question: "Qual célula da epiderme é responsável pela produção de melanina?", options: ["Queratinócito", "Melanócito", "Célula de Langerhans", "Célula de Merkel"], correctAnswer: 1, explanation: "Melanócitos: crista neural, localizados na camada basal. Produzem melanina em melanossomos → transferem para queratinócitos." },
      { type: "true_false", question: "A célula de Langerhans é uma célula apresentadora de antígenos da epiderme.", correctAnswer: "Verdadeiro", explanation: "Células de Langerhans: células dendríticas da epiderme (camada espinhosa). Captam antígenos → migram para linfonodos → apresentam a linfócitos T." },
      { type: "fill_blank", question: "A camada ___ contém grânulos de querato-hialina e corpos lamelares.", correctAnswer: "granulosa", explanation: "Camada granulosa: grânulos de querato-hialina (profilagrina → filagrina) e corpos lamelares (lipídios → barreira impermeável).", options: ["granulosa", "espinhosa", "basal", "córnea"] },
      { type: "multiple_choice", question: "As células de Merkel na epiderme estão associadas a:", options: ["Produção de melanina", "Mecanorrecepção (tato)", "Secreção de muco", "Fagocitose"], correctAnswer: 1, explanation: "Células de Merkel: mecanorreceptores do tato fino discriminativo, conectadas a terminações nervosas (disco de Merkel)." },
      { type: "order", question: "Ordene as camadas da epiderme (profunda → superficial): Basal → Espinhosa → Granulosa → Lúcida → Córnea", correctAnswer: "Basal,Espinhosa,Granulosa,Lúcida,Córnea", explanation: "5 camadas na pele espessa (palmas/plantas). Lúcida: fina, hialina, entre granulosa e córnea. Pele fina: 4 camadas (sem lúcida)." },
    ],
  },
  {
    id: 26, title: "Derme e Hipoderme Secretas", theme: "Pele", difficulty: "Médio", timeSeconds: 360,
    description: "Explore as camadas profundas da pele.",
    puzzles: [
      { type: "multiple_choice", question: "A derme papilar é composta por:", options: ["TC denso não modelado", "TC frouxo com papilas dérmicas", "Tecido adiposo", "Músculo liso"], correctAnswer: 1, explanation: "Derme papilar: TC frouxo, papilas dérmicas aumentam adesão com epiderme e contêm capilares (nutrição)." },
      { type: "fill_blank", question: "Os corpúsculos de ___ são mecanorreceptores de pressão profunda localizados na derme profunda e hipoderme.", correctAnswer: "Pacini (lamelares)", explanation: "Corpúsculos de Pacini: grandes, lamelados (cebola), detectam vibração e pressão profunda.", options: ["Pacini (lamelares)", "Meissner", "Ruffini", "Krause"] },
      { type: "true_false", question: "A derme reticular é composta por tecido conjuntivo denso não modelado.", correctAnswer: "Verdadeiro", explanation: "Derme reticular: TC denso não modelado, colágeno tipo I em feixes grossos. Confere resistência mecânica à pele." },
      { type: "multiple_choice", question: "Os corpúsculos de Meissner estão localizados:", options: ["Na derme reticular", "Nas papilas dérmicas (derme papilar)", "Na epiderme", "Na hipoderme"], correctAnswer: 1, explanation: "Corpúsculos de Meissner: encapsulados, nas papilas dérmicas de pele glabra. Detectam tato leve e discriminação de dois pontos." },
      { type: "true_false", question: "O músculo eretor do pelo é liso e sua contração causa piloereção (arrepio).", correctAnswer: "Verdadeiro", explanation: "Músculo eretor do pelo: músculo liso que conecta folículo piloso à derme papilar. Contração simpática → piloereção." },
    ],
  },
  // ===== SISTEMA LINFÁTICO E IMUNE (27-32) =====
  {
    id: 27, title: "Fortaleza Imunológica", theme: "Sistema Imune", difficulty: "Médio", timeSeconds: 360,
    description: "Defenda o organismo identificando as células e estruturas do sistema imune.",
    puzzles: [
      { type: "multiple_choice", question: "O timo é o local de maturação de:", options: ["Linfócitos B", "Linfócitos T", "Monócitos", "Neutrófilos"], correctAnswer: 1, explanation: "Timo: órgão linfoide primário para maturação de linfócitos T. Seleção positiva (córtex) e negativa (medula). Involui com a idade." },
      { type: "fill_blank", question: "Os corpúsculos de ___ são estruturas concêntricas encontradas na medula do timo.", correctAnswer: "Hassall", explanation: "Corpúsculos de Hassall: queratinócitos epiteliais concêntricos na medula tímica. Função: produzem TSLP que promove Tregs.", options: ["Hassall", "Malpighi", "Pacini", "Meissner"] },
      { type: "true_false", question: "Os linfonodos filtram a linfa e são organizados em córtex, paracórtex e medula.", correctAnswer: "Verdadeiro", explanation: "Linfonodo: córtex (folículos B), paracórtex (zona T), medula (cordões medulares com plasmócitos). Seios linfáticos percorrem o órgão." },
      { type: "multiple_choice", question: "A polpa branca do baço é rica em:", options: ["Eritrócitos", "Linfócitos (bainhas e folículos)", "Plaquetas", "Neutrófilos"], correctAnswer: 1, explanation: "Polpa branca: PALS (bainha periarteriolar linfocítica → zona T) + folículos (zona B). Polpa vermelha: filtração de eritrócitos." },
      { type: "true_false", question: "As placas de Peyer são tecido linfoide associado à mucosa (MALT) do intestino delgado.", correctAnswer: "Verdadeiro", explanation: "Placas de Peyer: GALT no íleo, com folículos linfoides e células M que captam antígenos luminais para apresentação." },
    ],
  },
  {
    id: 28, title: "Baço: O Filtro Sanguíneo", theme: "Sistema Imune", difficulty: "Difícil", timeSeconds: 420,
    description: "Explore a polpa vermelha e branca do baço.",
    puzzles: [
      { type: "multiple_choice", question: "A polpa vermelha do baço é composta por:", options: ["Folículos linfoides", "Cordões esplênicos (de Billroth) e sinusoides", "Apenas eritrócitos", "Tecido adiposo"], correctAnswer: 1, explanation: "Polpa vermelha: cordões de Billroth (macrófagos entre sinusoides) + sinusoides esplênicos. Filtra eritrócitos velhos/anormais." },
      { type: "true_false", question: "O baço é o maior órgão linfoide do corpo.", correctAnswer: "Verdadeiro", explanation: "Baço: maior órgão linfoide. Funções: filtração sanguínea, resposta imune, hematopoiese extramedular, reservatório de plaquetas." },
      { type: "fill_blank", question: "Na anemia falciforme, o baço sofre autoesplenectomia por ___ repetidos.", correctAnswer: "infartos", explanation: "Falciforme: foiçamento → oclusão vascular → infartos esplênicos repetidos → fibrose → autoesplenectomia funcional na infância.", options: ["infartos", "hemorragias", "infecções", "tromboses"] },
      { type: "multiple_choice", question: "Após esplenectomia, o paciente fica mais suscetível a infecção por:", options: ["Vírus", "Bactérias encapsuladas (S. pneumoniae, H. influenzae, N. meningitidis)", "Fungos", "Parasitas"], correctAnswer: 1, explanation: "Asplenia: risco de sepse fulminante por encapsulados (opsonização deficiente). Vacinação pré-esplenectomia obrigatória." },
      { type: "true_false", question: "Os corpúsculos de Howell-Jolly são remanescentes nucleares vistos em eritrócitos após esplenectomia.", correctAnswer: "Verdadeiro", explanation: "Howell-Jolly: fragmentos nucleares não removidos pelo baço. Sua presença indica asplenia funcional ou anatômica." },
    ],
  },
  // ===== SISTEMA CARDIOVASCULAR (29-32) =====
  {
    id: 29, title: "Artérias vs Veias", theme: "Sistema Cardiovascular", difficulty: "Fácil", timeSeconds: 300,
    description: "Diferencie artérias de veias em cortes histológicos.",
    puzzles: [
      { type: "multiple_choice", question: "Qual camada arterial é composta predominantemente por músculo liso?", options: ["Íntima", "Média", "Adventícia", "Subíntima"], correctAnswer: 1, explanation: "Túnica média: músculo liso + fibras elásticas. Mais espessa nas artérias musculares. Controla vasoconstrição/dilatação." },
      { type: "true_false", question: "As veias possuem válvulas para impedir o refluxo sanguíneo.", correctAnswer: "Verdadeiro", explanation: "Válvulas venosas: pregas da íntima, especialmente nos membros inferiores. Insuficiência valvar → varizes." },
      { type: "fill_blank", question: "As artérias ___ (como a aorta) possuem múltiplas lâminas elásticas na túnica média.", correctAnswer: "elásticas", explanation: "Artérias elásticas (condutoras): aorta, carótida, ilíacas. Lâminas elásticas permitem distensão e retorno elástico (efeito Windkessel).", options: ["elásticas", "musculares", "mistas", "de resistência"] },
      { type: "multiple_choice", question: "Os vasa vasorum nutrem:", options: ["A camada íntima", "As camadas externa da média e adventícia de grandes vasos", "Apenas capilares", "Válvulas venosas"], correctAnswer: 1, explanation: "Vasa vasorum: pequenos vasos na adventícia que nutrem as camadas externas de artérias e veias de grande calibre." },
      { type: "true_false", question: "Os capilares fenestrados possuem poros que facilitam a troca de substâncias e são encontrados nos rins e intestino.", correctAnswer: "Verdadeiro", explanation: "Capilares fenestrados: poros com/sem diafragma. Glomérulo renal, vilosidades intestinais, glândulas endócrinas." },
    ],
  },
  {
    id: 30, title: "Aterosclerose: A Ameaça Silenciosa", theme: "Sistema Cardiovascular", difficulty: "Difícil", timeSeconds: 420,
    description: "Desvende a patogênese da aterosclerose para salvar o coração.",
    puzzles: [
      { type: "multiple_choice", question: "Qual é o evento inicial da aterosclerose?", options: ["Trombose", "Lesão/disfunção endotelial", "Ruptura da placa", "Calcificação"], correctAnswer: 1, explanation: "Disfunção endotelial → aumento de permeabilidade → acúmulo de LDL oxidado na íntima → recrutamento de monócitos → células espumosas." },
      { type: "order", question: "Ordene a progressão aterosclerótica: Estria gordurosa → Placa fibrosa → Placa complicada (ruptura/trombose)", correctAnswer: "Estria gordurosa,Placa fibrosa,Placa complicada (ruptura/trombose)", explanation: "Estria gordurosa (células espumosas) → placa fibrosa (capa fibrosa + core lipídico) → complicação (ruptura, hemorragia, trombose)." },
      { type: "true_false", question: "As células espumosas são macrófagos que fagocitaram LDL oxidado.", correctAnswer: "Verdadeiro", explanation: "Monócitos → macrófagos na íntima → receptores scavenger captam LDL-ox → células espumosas. Base da estria gordurosa." },
      { type: "fill_blank", question: "A ___ é a ruptura mais temida da placa aterosclerótica, causando trombose aguda.", correctAnswer: "ruptura da capa fibrosa", explanation: "Placas vulneráveis: capa fibrosa fina, grande core lipídico, inflamação. Ruptura → exposição do fator tecidual → trombose → IAM/AVC.", options: ["ruptura da capa fibrosa", "calcificação", "hemorragia intraplaca", "erosão superficial"] },
      { type: "multiple_choice", question: "As células musculares lisas que migram para a íntima na aterosclerose produzem:", options: ["Apenas elastina", "Colágeno e matriz extracelular (capa fibrosa)", "Histamina", "Surfactante"], correctAnswer: 1, explanation: "CMLs ativadas migram da média → íntima, proliferam e sintetizam colágeno → capa fibrosa sobre o core necrótico-lipídico." },
    ],
  },
  // ===== PATOLOGIA GERAL (31-40) =====
  {
    id: 31, title: "Sala da Inflamação", theme: "Patologia", difficulty: "Médio", timeSeconds: 360,
    description: "A sala está em chamas de inflamação! Responda para apagar o fogo.",
    puzzles: [
      { type: "multiple_choice", question: "Qual mediador vasoativo é o principal responsável pelo aumento de permeabilidade vascular na fase aguda?", options: ["Bradicinina", "Histamina", "Prostaglandina E2", "Leucotrieno B4"], correctAnswer: 1, explanation: "Histamina: mastócitos degranulam → vasodilatação + aumento de permeabilidade → edema. Efeito imediato e transitório." },
      { type: "true_false", question: "O exsudato inflamatório é pobre em proteínas.", correctAnswer: "Falso", explanation: "Exsudato: rico em proteínas (>3g/dL) e células. Transudato: pobre em proteínas (<3g/dL), por aumento de pressão hidrostática." },
      { type: "fill_blank", question: "A ___ é a formação de novos vasos sanguíneos a partir de vasos pré-existentes, essencial na cicatrização.", correctAnswer: "angiogênese", explanation: "Angiogênese: VEGF é o principal fator. Essencial na cicatrização, mas também na progressão tumoral.", options: ["angiogênese", "vasculogênese", "arteriogênese", "linfangiogênese"] },
      { type: "multiple_choice", question: "O granuloma é uma coleção organizada de:", options: ["Neutrófilos", "Eosinófilos", "Macrófagos epitelioides e células gigantes multinucleadas", "Linfócitos B"], correctAnswer: 2, explanation: "Granuloma: macrófagos epitelioides + células gigantes (Langhans ou corpo estranho) + linfócitos T. TB, sarcoidose, fungos." },
      { type: "true_false", question: "A necrose caseosa é característica da tuberculose.", correctAnswer: "Verdadeiro", explanation: "Necrose caseosa: aspecto de 'queijo' (caseum), centro amorfo eosinofílico. Patognomônica de TB (granuloma com necrose caseosa)." },
    ],
  },
  {
    id: 32, title: "Neoplasias: O Desafio Final", theme: "Patologia", difficulty: "Extremo", timeSeconds: 480,
    description: "Enfrente as neoplasias e seus mecanismos moleculares no desafio mais difícil.",
    puzzles: [
      { type: "multiple_choice", question: "Qual gene supressor tumoral é mutado em mais de 50% dos cânceres humanos?", options: ["RB1", "APC", "TP53 (p53)", "BRCA1"], correctAnswer: 2, explanation: "TP53: 'guardião do genoma'. Mutado em >50% dos cânceres. Regula ciclo celular (p21), apoptose (BAX), reparo do DNA." },
      { type: "true_false", question: "Oncogenes são formas mutadas de proto-oncogenes que promovem crescimento celular.", correctAnswer: "Verdadeiro", explanation: "Proto-oncogene (normal) → mutação/amplificação → oncogene (ganho de função). Ex: RAS, MYC, HER2, BCR-ABL." },
      { type: "fill_blank", question: "A translocação t(9;22) gera o cromossomo ___, presente na LMC.", correctAnswer: "Philadelphia", explanation: "t(9;22): gene de fusão BCR-ABL → tirosina quinase constitutivamente ativa → LMC. Alvo do imatinibe (Gleevec).", options: ["Philadelphia", "Roberts", "Turner", "Klinefelter"] },
      { type: "multiple_choice", question: "A metástase envolve todas as seguintes etapas, EXCETO:", options: ["Invasão local", "Intravasamento", "Apoptose das células tumorais", "Colonização do órgão-alvo"], correctAnswer: 2, explanation: "Cascata metastática: invasão → intravasamento → sobrevivência na circulação → extravasamento → colonização. Maioria das células morre, mas as sobreviventes formam metástases." },
      { type: "order", question: "Ordene a sequência adenoma-carcinoma do cólon: Mucosa normal → APC mutado → Adenoma → KRAS → Displasia → p53 → Carcinoma", correctAnswer: "Mucosa normal,APC mutado,Adenoma,KRAS,Displasia,p53,Carcinoma", explanation: "Modelo de Vogelstein: APC (gatekeeper) → β-catenina → adenoma → KRAS → progressão → p53 → carcinoma invasivo." },
      { type: "multiple_choice", question: "O marcador Ki-67 indica:", options: ["Apoptose", "Índice de proliferação celular", "Diferenciação", "Metástase"], correctAnswer: 1, explanation: "Ki-67: expresso em todas as fases ativas do ciclo (G1, S, G2, M), não em G0. Quanto maior Ki-67, mais agressivo o tumor." },
    ],
  },
  // Continue with more scenarios...
  {
    id: 33, title: "Sala das Colorações", theme: "Técnicas Histológicas", difficulty: "Fácil", timeSeconds: 300,
    description: "Identifique cada coloração especial e sua aplicação.",
    puzzles: [
      { type: "multiple_choice", question: "A coloração de PAS detecta:", options: ["Ácidos nucleicos", "Glicogênio, mucinas e membrana basal (glicoproteínas)", "Lipídios", "Fibras elásticas"], correctAnswer: 1, explanation: "PAS: ácido periódico oxida glicóis → reage com Schiff → cor magenta. Detecta MB, glicogênio, mucinas neutras." },
      { type: "fill_blank", question: "A coloração de ___ cora colágeno em azul e músculo/citoplasma em vermelho.", correctAnswer: "Tricrômico de Masson", explanation: "Masson: excelente para fibrose. Azul = colágeno, vermelho = músculo/citoplasma. Útil na avaliação de cicatrizes e cirrose.", options: ["Tricrômico de Masson", "PAS", "Giemsa", "Gram"] },
      { type: "true_false", question: "A coloração de Gram é utilizada em histologia de rotina.", correctAnswer: "Falso", explanation: "Gram: coloração bacteriológica (G+ roxo, G- rosa). Em histologia, usa-se para identificar bactérias em tecidos (Brown-Hopps modificado)." },
      { type: "multiple_choice", question: "O Vermelho Congo é usado para detectar:", options: ["Colágeno", "Amiloide (birrefringência verde-maçã na polarização)", "Ferro", "Cálcio"], correctAnswer: 1, explanation: "Vermelho Congo: amiloide aparece vermelho/rosa. Sob luz polarizada: birrefringência verde-maçã patognomônica." },
      { type: "true_false", question: "A coloração de Perls (azul da Prússia) detecta hemossiderina (ferro) em tecidos.", correctAnswer: "Verdadeiro", explanation: "Perls: ferrocianeto de potássio + HCl → Fe³⁺ cora em azul. Útil para hemocromatose, hemossiderose." },
    ],
  },
  {
    id: 34, title: "Olho: A Câmara Escura", theme: "Órgãos dos Sentidos", difficulty: "Médio", timeSeconds: 360,
    description: "Explore as camadas da retina no escuro do escape room.",
    puzzles: [
      { type: "multiple_choice", question: "A retina possui quantas camadas histológicas?", options: ["5", "8", "10", "12"], correctAnswer: 2, explanation: "Retina: 10 camadas, desde o epitélio pigmentar (externo) até a membrana limitante interna." },
      { type: "fill_blank", question: "Os ___ são fotorreceptores responsáveis pela visão em cores.", correctAnswer: "cones", explanation: "Cones: visão fotópica (cores, acuidade). 3 tipos (S, M, L). Concentrados na fóvea. Bastonetes: visão escotópica.", options: ["cones", "bastonetes", "células ganglionares", "amacrinas"] },
      { type: "true_false", question: "O epitélio pigmentar da retina fagocita discos dos segmentos externos dos fotorreceptores.", correctAnswer: "Verdadeiro", explanation: "EPR: fagocita extremidades dos segmentos externos (renovação). Falha → acúmulo de lipofuscina → degeneração macular." },
      { type: "multiple_choice", question: "O humor aquoso é produzido por:", options: ["Retina", "Corpo ciliar (processos ciliares)", "Íris", "Cristalino"], correctAnswer: 1, explanation: "Processos ciliares: epitélio bilaminar secreta humor aquoso. Drena pelo canal de Schlemm. Obstrução → glaucoma." },
      { type: "true_false", question: "O cristalino é avascular e nutrido pelo humor aquoso.", correctAnswer: "Verdadeiro", explanation: "Cristalino: avascular, transparente. Cápsula + epitélio anterior + fibras cristalinianas (células alongadas). Catarata: opacificação." },
    ],
  },
  // ===== MAIS CENÁRIOS VARIADOS (35-100+) =====
  {
    id: 35, title: "Dentes e Periodonto", theme: "Sistema Digestório", difficulty: "Médio", timeSeconds: 360,
    description: "Explore a histologia dental para escapar da cadeira do dentista.",
    puzzles: [
      { type: "multiple_choice", question: "Qual tecido dental é o mais mineralizado do corpo humano?", options: ["Dentina", "Cemento", "Esmalte", "Polpa"], correctAnswer: 2, explanation: "Esmalte: 96% mineral (hidroxiapatita), produzido por ameloblastos. Tecido mais duro do corpo. Ectoderme." },
      { type: "fill_blank", question: "Os ___ produzem dentina ao longo da vida do dente.", correctAnswer: "odontoblastos", explanation: "Odontoblastos: na polpa, processos na dentina tubular. Produzem dentina primária, secundária (fisiológica) e terciária (reacional).", options: ["odontoblastos", "ameloblastos", "cementoblastos", "osteoblastos"] },
      { type: "true_false", question: "A polpa dental contém nervos, vasos sanguíneos e tecido conjuntivo frouxo.", correctAnswer: "Verdadeiro", explanation: "Polpa: TC frouxo com odontoblastos na periferia, plexo nervoso de Raschkow, vasos sanguíneos. Câmara pulpar e canais radiculares." },
      { type: "multiple_choice", question: "O cemento reveste:", options: ["Coroa do dente", "Raiz do dente", "Toda a superfície dental", "Apenas o ápice"], correctAnswer: 1, explanation: "Cemento: tecido mineralizado que reveste a raiz. Cementoblastos produzem. Liga fibras do ligamento periodontal ao dente." },
      { type: "true_false", question: "O ligamento periodontal conecta o cemento ao osso alveolar.", correctAnswer: "Verdadeiro", explanation: "Ligamento periodontal: TC especializado com fibras de Sharpey. Absorve forças mastigatórias, propriocepção, renovação." },
    ],
  },
  {
    id: 36, title: "Glândula Tireoide", theme: "Sistema Endócrino", difficulty: "Médio", timeSeconds: 360,
    description: "Decifre os folículos tireoidianos e seus segredos hormonais.",
    puzzles: [
      { type: "multiple_choice", question: "O coloide dos folículos tireoidianos contém:", options: ["Insulina", "Tireoglobulina (precursor de T3/T4)", "Calcitonina", "PTH"], correctAnswer: 1, explanation: "Coloide: tireoglobulina iodada armazenada no lúmen folicular. TPO ioda tirosinas → MIT/DIT → T3/T4. TSH estimula captação." },
      { type: "true_false", question: "O carcinoma papilífero de tireoide é o tipo mais comum e apresenta núcleos em vidro fosco.", correctAnswer: "Verdadeiro", explanation: "Ca papilífero: 80% dos tumores da tireoide. Núcleos em vidro fosco (Orphan Annie eyes), corpos psamomatosos, pseudoinclusões nucleares." },
      { type: "fill_blank", question: "A doença de ___ é uma tireoidite autoimune com hipotireoidismo, infiltrado linfocítico e células de Hürthle.", correctAnswer: "Hashimoto", explanation: "Hashimoto: tireoidite crônica autoimune. Anti-TPO e anti-tireoglobulina. Infiltrado linfoplasmocitário, centros germinativos, metaplasia oncocítica (Hürthle).", options: ["Hashimoto", "Graves", "De Quervain", "Riedel"] },
      { type: "multiple_choice", question: "As células parafoliculares (C) derivam de:", options: ["Endoderme faríngea", "Crista neural (neuroectoderme)", "Mesoderme", "Ectoderme"], correctAnswer: 1, explanation: "Células C: crista neural → corpos ultimobranquiais → migram para tireoide. Calcitonina. Ca medular da tireoide." },
      { type: "true_false", question: "Na doença de Graves, anticorpos anti-TSH-receptor estimulam a produção de T3/T4.", correctAnswer: "Verdadeiro", explanation: "Graves: TRAb (anticorpos estimuladores do TSHR) → hiperplasia difusa → hipertireoidismo. Exoftalmia, dermopatia, bócio difuso." },
    ],
  },
  // IDs 37-55 - More diverse scenarios
  {
    id: 37, title: "Rim: Filtro Molecular", theme: "Sistema Urinário", difficulty: "Difícil", timeSeconds: 420,
    description: "Decifre as glomerulopatias para escapar do néfron.",
    puzzles: [
      { type: "multiple_choice", question: "Na glomerulonefrite membranosa, os depósitos são:", options: ["Subendoteliais", "Subepiteliais difusos (espessamento da MB)", "Mesangiais", "Intramembranosos"], correctAnswer: 1, explanation: "GM membranosa: depósitos subepiteliais difusos de IgG e C3 → MB espessada com 'spikes' (Prata de Jones). Causa #1 de síndrome nefrótica em adultos brancos." },
      { type: "true_false", question: "A nefropatia por IgA (Berger) é a glomerulonefrite primária mais comum no mundo.", correctAnswer: "Verdadeiro", explanation: "IgA: depósitos mesangiais de IgA. Hematúria macroscópica recorrente após IVAS. Mais comum no mundo; no Brasil também." },
      { type: "fill_blank", question: "A ___ é a causa mais comum de síndrome nefrótica em crianças.", correctAnswer: "doença de lesões mínimas", explanation: "Lesões mínimas: MO normal, ME com fusão de pedicelos. Crianças 2-6 anos. Responde a corticoides. Perda seletiva de albumina.", options: ["doença de lesões mínimas", "GESF", "nefropatia membranosa", "GNMP"] },
      { type: "multiple_choice", question: "A glomerulonefrite rapidamente progressiva (crescêntica) mostra:", options: ["MB espessada", "Crescentes de células epiteliais parietais e fibrina no espaço de Bowman", "Apenas hematúria", "Esclerose segmentar"], correctAnswer: 1, explanation: "GNRP: crescentes → proliferação de células epiteliais parietais + monócitos + fibrina. Tipo I (anti-MB, Goodpasture), II (imunocomplexos), III (pauci-imune, ANCA+)." },
      { type: "true_false", question: "Na nefroesclerose hipertensiva maligna, há 'necrose fibrinoide' das arteríolas.", correctAnswer: "Verdadeiro", explanation: "HAS maligna: necrose fibrinoide arteriolar + hiperplasia de 'casca de cebola' das arteríolas interlobulares. Emergência médica." },
    ],
  },
  {
    id: 38, title: "Mama: Anatomia e Patologia", theme: "Sistema Reprodutor", difficulty: "Médio", timeSeconds: 360,
    description: "Explore a histologia mamária e suas patologias mais frequentes.",
    puzzles: [
      { type: "multiple_choice", question: "A unidade funcional da mama é:", options: ["Ácino", "Unidade ductal terminal lobular (UDLT)", "Folículo", "Alvéolo"], correctAnswer: 1, explanation: "UDLT: ductos terminais + lóbulos. Local de origem da maioria dos carcinomas mamários (ductal e lobular)." },
      { type: "true_false", question: "O carcinoma ductal invasivo é o tipo mais comum de câncer de mama (~70-80%).", correctAnswer: "Verdadeiro", explanation: "CDI (carcinoma invasivo sem tipo especial): mais comum. Carcinoma lobular invasivo: ~10-15%. Células em fila indiana, perda de E-caderina." },
      { type: "fill_blank", question: "A amplificação de ___ está presente em ~20% dos cânceres de mama e é alvo de trastuzumab.", correctAnswer: "HER2", explanation: "HER2 (ERBB2): receptor tirosina quinase. Amplificação → superexpressão → tratamento com trastuzumab (Herceptin). IHQ 3+ ou FISH+.", options: ["HER2", "BRCA1", "TP53", "EGFR"] },
      { type: "multiple_choice", question: "O fibroadenoma de mama é:", options: ["Tumor maligno", "Tumor benigno fibroepitelial mais comum", "Lesão pré-maligna", "Cisto"], correctAnswer: 1, explanation: "Fibroadenoma: tumor benigno bifásico (epitélio + estroma). Mulheres jovens, móvel, bem delimitado. Não aumenta risco de câncer significativamente." },
      { type: "true_false", question: "O carcinoma lobular invasivo frequentemente perde a expressão de E-caderina.", correctAnswer: "Verdadeiro", explanation: "CLI: mutação/perda do gene CDH1 → perda de E-caderina → células discoeivas em fila indiana. Padrão infiltrativo difuso." },
    ],
  },
  {
    id: 39, title: "Pulmão: Ameaça Tumoral", theme: "Sistema Respiratório", difficulty: "Difícil", timeSeconds: 420,
    description: "Identifique os tumores pulmonares para salvar o paciente.",
    puzzles: [
      { type: "multiple_choice", question: "Qual é o tipo mais comum de câncer de pulmão?", options: ["Carcinoma de pequenas células", "Adenocarcinoma", "Carcinoma escamoso", "Carcinoma de grandes células"], correctAnswer: 1, explanation: "Adenocarcinoma: mais comum (40%+), periférico, mais frequente em não-fumantes e mulheres. Formação glandular, TTF-1+." },
      { type: "true_false", question: "O carcinoma de pequenas células (oat cell) está fortemente associado ao tabagismo.", correctAnswer: "Verdadeiro", explanation: "Pequenas células: neuroendócrino, central, muito agressivo. >95% em fumantes. Síndromes paraneoplásicas (SIADH, Cushing). Cromogranina+, sinaptofisina+." },
      { type: "fill_blank", question: "A mutação de ___ é o alvo molecular mais importante no adenocarcinoma pulmonar (TKIs).", correctAnswer: "EGFR", explanation: "EGFR: mutação ativadora em ~15% dos adenocarcinomas (mais em asiáticos, não-fumantes). Tratamento com TKIs (gefitinibe, osimertinibe).", options: ["EGFR", "KRAS", "ALK", "BRAF"] },
      { type: "multiple_choice", question: "Os corpos de asbesto (ferruginosos) são encontrados em:", options: ["Silicose", "Asbestose", "Beriliose", "Antracose"], correctAnswer: 1, explanation: "Asbestose: fibras de asbesto revestidas por proteína e ferro → corpos ferruginosos dourados. Risco de mesotelioma e carcinoma broncogênico." },
      { type: "true_false", question: "A translocação ALK-EML4 está presente em ~5% dos adenocarcinomas e responde a crizotinibe.", correctAnswer: "Verdadeiro", explanation: "Fusão ALK-EML4: jovens, não-fumantes, adenocarcinoma. Crizotinibe, alectinibe (inibidores ALK). Detecção por FISH ou IHQ." },
    ],
  },
  {
    id: 40, title: "Fígado: Hepatites e Cirrose", theme: "Sistema Digestório", difficulty: "Extremo", timeSeconds: 480,
    description: "Enfrente as doenças hepáticas no cenário mais desafiador.",
    puzzles: [
      { type: "multiple_choice", question: "Na hepatite viral crônica, qual padrão histológico é característico?", options: ["Necrose coagulativa", "Hepatite de interface (piecemeal necrosis) com infiltrado portal linfoplasmocitário", "Granulomas não-caseosos", "Esteatose macrovesicular"], correctAnswer: 1, explanation: "Hepatite crônica: infiltrado portal → hepatite de interface → fibrose em ponte → cirrose. Classificação: METAVIR (atividade A0-A3, fibrose F0-F4)." },
      { type: "true_false", question: "A esteatose hepática alcoólica mostra corpúsculos de Mallory-Denk.", correctAnswer: "Verdadeiro", explanation: "Hepatite alcoólica: esteatose + balonização + corpúsculos de Mallory-Denk (filamentos intermediários de queratina) + infiltrado neutrofílico + necrose." },
      { type: "fill_blank", question: "A ___ hepática é definida por fibrose difusa com nódulos de regeneração que desarquitetam o parênquima.", correctAnswer: "cirrose", explanation: "Cirrose: estágio final comum de hepatopatias crônicas. Fibrose em ponte + nódulos regenerativos. Hipertensão portal, insuficiência hepática.", options: ["cirrose", "esteatose", "hepatite", "colestase"] },
      { type: "multiple_choice", question: "O carcinoma hepatocelular (CHC) é mais comumente associado a:", options: ["Hepatite A", "Cirrose hepática (qualquer etiologia)", "Colelitíase", "Doença de Wilson"], correctAnswer: 1, explanation: "CHC: surge em fígado cirrótico em 80-90% dos casos. HBV (direto e via cirrose), HCV (via cirrose), álcool, NASH. AFP elevada." },
      { type: "true_false", question: "A colangite biliar primária é autoimune, com anticorpos antimitocôndria (AMA).", correctAnswer: "Verdadeiro", explanation: "CBP: autoimune, mulheres de meia-idade. AMA+ (anti-PDC-E2). Destruição de ductos biliares interlobulares → colestase → cirrose biliar." },
      { type: "order", question: "Ordene a progressão da doença hepática gordurosa: Esteatose → Esteato-hepatite (NASH) → Fibrose → Cirrose → CHC", correctAnswer: "Esteatose,Esteato-hepatite (NASH),Fibrose,Cirrose,CHC", explanation: "NAFLD/NASH: esteatose → inflamação + balonização (NASH) → fibrose perisinusoidal/portal → cirrose → risco de CHC." },
    ],
  },
  // ===== CENÁRIOS 41-60: Temas específicos =====
  ...generateBatchScenarios(41, [
    { title: "Placenta e Membranas", theme: "Embriologia", diff: "Médio", time: 360, puzzles: [
      { type: "multiple_choice", question: "As vilosidades coriônicas são revestidas por:", options: ["Epitélio simples", "Sinciciotrofoblasto + citotrofoblasto", "Endotélio", "Mesotélio"], correctAnswer: 1, explanation: "Vilosidades: sinciciotrofoblasto (multinucleado, em contato com sangue materno) + citotrofoblasto (células de Langhans). hCG, hPL." },
      { type: "true_false", question: "A mola hidatiforme completa tem cariótipo 46,XX de origem exclusivamente paterna.", correctAnswer: "Verdadeiro", explanation: "Mola completa: diploidia androgenética (46,XX todo paterno). Sem embrião. Vilosidades edemaciadas com cisterna. Risco de coriocarcinoma." },
      { type: "fill_blank", question: "O ___ é a camada funcional do endométrio que, na gravidez, se transforma em decídua.", correctAnswer: "endométrio funcional", explanation: "Decidualização: sob progesterona, células estromais → células deciduais (grandes, poligonais, ricas em glicogênio/lipídios). Decídua basal → placenta.", options: ["endométrio funcional", "miométrio", "perimétrio", "endocérvice"] },
      { type: "multiple_choice", question: "O cordão umbilical contém:", options: ["3 artérias e 1 veia", "2 artérias e 1 veia na geleia de Wharton", "1 artéria e 2 veias", "2 artérias e 2 veias"], correctAnswer: 1, explanation: "Cordão umbilical: 2 artérias (sangue desoxigenado) + 1 veia (sangue oxigenado) em geleia de Wharton (TC mucoso)." },
      { type: "true_false", question: "A pré-eclâmpsia está associada a defeito na remodelação das artérias espiraladas pelo trofoblasto.", correctAnswer: "Verdadeiro", explanation: "Pré-eclâmpsia: falha na invasão trofoblástica → artérias espiraladas não remodeladas → hipoperfusão placentária → fatores antiangiogênicos (sFlt-1)." },
    ]},
    { title: "Ouvido Interno", theme: "Órgãos dos Sentidos", diff: "Médio", time: 360, puzzles: [
      { type: "multiple_choice", question: "O órgão de Corti está localizado em:", options: ["Vestíbulo", "Canais semicirculares", "Cóclea (ducto coclear)", "Ouvido médio"], correctAnswer: 2, explanation: "Órgão de Corti: sobre a membrana basilar no ducto coclear. Células ciliadas internas (transdução) e externas (amplificação)." },
      { type: "fill_blank", question: "A ___ é a endolinfa rica em K⁺ que banha as células ciliadas do órgão de Corti.", correctAnswer: "endolinfa", explanation: "Endolinfa: alta [K⁺], baixa [Na⁺], produzida pela estria vascular. Perilinfa: composição semelhante ao LCR.", options: ["endolinfa", "perilinfa", "LCR", "plasma"] },
      { type: "true_false", question: "As células ciliadas externas amplificam o sinal mecânico pela proteína prestina.", correctAnswer: "Verdadeiro", explanation: "Prestina: proteína motora das CCE. Eletromotilidade → amplificação seletiva de frequências. Perdida na ototoxicidade." },
      { type: "multiple_choice", question: "A doença de Ménière é causada por:", options: ["Otosclerose", "Hidropsia endolinfática (excesso de endolinfa)", "Neuroma acústico", "Perfuração timpânica"], correctAnswer: 1, explanation: "Ménière: distensão do labirinto membranoso por excesso de endolinfa. Tríade: vertigem, hipoacusia flutuante, zumbido." },
      { type: "true_false", question: "As células ciliadas do ouvido interno não se regeneram em mamíferos.", correctAnswer: "Verdadeiro", explanation: "Perda de células ciliadas → surdez neurossensorial permanente. Ototoxicidade (aminoglicosídeos, cisplatina) e ruído causam dano irreversível." },
    ]},
    { title: "Glândulas Salivares", theme: "Sistema Digestório", diff: "Fácil", time: 300, puzzles: [
      { type: "multiple_choice", question: "A glândula parótida é predominantemente:", options: ["Mucosa", "Serosa", "Mista", "Endócrina"], correctAnswer: 1, explanation: "Parótida: puramente serosa. Submandibular: mista (predominantemente serosa). Sublingual: mista (predominantemente mucosa)." },
      { type: "fill_blank", question: "As semiluas ___ são serosas e envolvem parcialmente ácinos mucosos em glândulas mistas.", correctAnswer: "serosas (de Ebner/von Ebner)", explanation: "Semiluas serosas: células serosas formando capuz sobre ácinos mucosos. Visíveis em submandibular e sublingual.", options: ["serosas (de Ebner/von Ebner)", "mucosas", "mioepiteliais", "endócrinas"] },
      { type: "true_false", question: "O tumor mais comum das glândulas salivares é o adenoma pleomórfico.", correctAnswer: "Verdadeiro", explanation: "Adenoma pleomórfico: tumor misto benigno. Componente epitelial + mesenquimal (condroide/mixoide). Parótida mais comum." },
      { type: "multiple_choice", question: "Qual glândula salivar é mais comumente afetada pela síndrome de Sjögren?", options: ["Parótida", "Sublingual", "Submandibular", "Todas igualmente"], correctAnswer: 0, explanation: "Sjögren: autoimune, infiltrado linfocítico que destrói glândulas salivares e lacrimais. Parótida frequentemente aumentada. Anti-SSA/SSB." },
      { type: "true_false", question: "O ducto de Stensen drena a glândula parótida.", correctAnswer: "Verdadeiro", explanation: "Ducto parotídeo (Stensen): desemboca na mucosa jugal ao nível do 2° molar superior. Submandibular: ducto de Wharton." },
    ]},
  ]),
  // ===== CENÁRIOS 44-60 =====
  {
    id: 44, title: "Cicatrização de Feridas", theme: "Patologia", difficulty: "Médio", timeSeconds: 360,
    description: "Guie o processo de reparo tecidual para escapar.",
    puzzles: [
      { type: "multiple_choice", question: "Na cicatrização por primeira intenção:", options: ["Há grande perda tecidual", "Bordas estão próximas e alinhadas (incisão cirúrgica)", "Forma-se tecido de granulação abundante", "Há infecção"], correctAnswer: 1, explanation: "Primeira intenção: ferida limpa, bordas aproximadas, mínimo tecido de granulação, cicatriz estreita. Ex: sutura cirúrgica." },
      { type: "fill_blank", question: "O tecido de ___ é composto por vasos neoformados + fibroblastos + matriz extracelular provisória.", correctAnswer: "granulação", explanation: "Tecido de granulação: angiogênese (VEGF) + fibroblastos (colágeno III → I) + macrófagos. Aspecto vermelho granular.", options: ["granulação", "fibrose", "necrose", "quelóide"] },
      { type: "true_false", question: "O quelóide é uma cicatriz que se limita às margens da ferida original.", correctAnswer: "Falso", explanation: "Quelóide: cicatriz hipertrófica que ULTRAPASSA as margens da ferida. Excesso de colágeno I. Cicatriz hipertrófica: limita-se à ferida." },
      { type: "multiple_choice", question: "Qual fator de crescimento é o principal indutor da angiogênese na cicatrização?", options: ["TGF-β", "VEGF", "EGF", "PDGF"], correctAnswer: 1, explanation: "VEGF: principal fator angiogênico. Induzido por hipóxia (HIF). Essencial no tecido de granulação." },
      { type: "order", question: "Ordene as fases da cicatrização: Hemostasia → Inflamação → Proliferação → Remodelação", correctAnswer: "Hemostasia,Inflamação,Proliferação,Remodelação", explanation: "Hemostasia (minutos) → inflamação (horas-dias, neutrófilos depois macrófagos) → proliferação (dias-semanas, granulação) → remodelação (semanas-meses, colágeno III→I)." },
    ],
  },
  {
    id: 45, title: "Apoptose vs Necrose", theme: "Patologia", difficulty: "Difícil", timeSeconds: 420,
    description: "Diferencie morte celular programada de acidental.",
    puzzles: [
      { type: "multiple_choice", question: "A apoptose é caracterizada por:", options: ["Tumefação celular e inflamação", "Retração celular, condensação da cromatina e formação de corpos apoptóticos", "Lise celular com liberação de conteúdo", "Calcificação"], correctAnswer: 1, explanation: "Apoptose: morte silenciosa. Caspases → condensação nuclear → fragmentação → corpos apoptóticos → fagocitose sem inflamação." },
      { type: "true_false", question: "As caspases iniciadoras (8 e 9) ativam caspases executoras (3, 6, 7).", correctAnswer: "Verdadeiro", explanation: "Via extrínseca: Fas/FasL → caspase 8. Via intrínseca: citocromo c → APAF-1 → caspase 9. Ambas → caspase 3 (executora)." },
      { type: "fill_blank", question: "A proteína ___ é anti-apoptótica e está superexpressa no linfoma folicular pela t(14;18).", correctAnswer: "BCL-2", explanation: "BCL-2: bloqueia liberação de citocromo c da mitocôndria. Superexpressão → células não morrem → linfoma folicular.", options: ["BCL-2", "BAX", "BAK", "BIM"] },
      { type: "multiple_choice", question: "Qual tipo de necrose é típica do infarto cerebral?", options: ["Coagulação", "Liquefativa", "Caseosa", "Gordurosa"], correctAnswer: 1, explanation: "Necrose liquefativa: cérebro (alto teor de lipídios + enzimas lisossômicas). Forma cavidade cística. Também em abscessos (enzimas de neutrófilos)." },
      { type: "true_false", question: "Na necrose coagulativa, a arquitetura do tecido é preservada inicialmente (células fantasmas).", correctAnswer: "Verdadeiro", explanation: "Necrose coagulativa: desnaturação proteica → preservação do contorno celular ('fantasma'). Típica de infartos (coração, rim, baço). Exceto: cérebro." },
    ],
  },
  // IDs 46-100: Generate remaining scenarios programmatically
  ...generateRemainingScenarios(),
];

// Helper function for batch scenario generation
function generateBatchScenarios(startId: number, configs: { title: string; theme: string; diff: string; time: number; puzzles: Puzzle[] }[]): EscapeScenario[] {
  return configs.map((c, i) => ({
    id: startId + i,
    title: c.title,
    theme: c.theme,
    difficulty: c.diff as EscapeScenario["difficulty"],
    timeSeconds: c.time,
    description: `Cenário temático sobre ${c.theme.toLowerCase()}. Resolva os enigmas para escapar!`,
    puzzles: c.puzzles,
  }));
}

function generateRemainingScenarios(): EscapeScenario[] {
  const scenarios: EscapeScenario[] = [];
  
  const moreData: { id: number; title: string; theme: string; diff: EscapeScenario["difficulty"]; time: number; puzzles: Puzzle[] }[] = [
    { id: 46, title: "Hipersensibilidade Tipo I", theme: "Imunologia", diff: "Médio", time: 360, puzzles: [
      { type: "multiple_choice", question: "A hipersensibilidade tipo I é mediada por:", options: ["IgG", "IgM", "IgE", "IgA"], correctAnswer: 2, explanation: "Tipo I (imediata): IgE + mastócitos/basófilos → degranulação → histamina. Anafilaxia, asma alérgica, rinite." },
      { type: "true_false", question: "A anafilaxia é uma reação de hipersensibilidade tipo III.", correctAnswer: "Falso", explanation: "Anafilaxia: tipo I (imediata). Tipo III: imunocomplexos (doença do soro, LES, GNPE)." },
      { type: "fill_blank", question: "A ___ é o autoinjetor usado no tratamento emergencial da anafilaxia.", correctAnswer: "epinefrina (adrenalina)", explanation: "Epinefrina IM: tratamento de primeira linha. Vasoconstritora, broncodilatadora, reduz edema. Auto-injetor (EpiPen).", options: ["epinefrina (adrenalina)", "anti-histamínico", "corticoide", "aminofilina"] },
      { type: "multiple_choice", question: "A degranulação dos mastócitos na alergia é desencadeada por:", options: ["Antígeno ligando-se diretamente ao mastócito", "Ligação cruzada de IgE na superfície do mastócito pelo antígeno", "Complemento", "IgG opsonizante"], correctAnswer: 1, explanation: "IgE liga-se ao FcεRI no mastócito → reexposição ao antígeno → cross-linking → degranulação (histamina, leucotrienos, prostaglandinas)." },
      { type: "true_false", question: "Os leucotrienos C4, D4, E4 causam broncoespasmo prolongado na asma.", correctAnswer: "Verdadeiro", explanation: "SRS-A (slow-reacting substance of anaphylaxis) = leucotrienos C4/D4/E4. Broncoconstrição > histamina. Alvo: montelucaste." },
    ]},
    { id: 47, title: "Autoimunidade", theme: "Imunologia", diff: "Difícil", time: 420, puzzles: [
      { type: "multiple_choice", question: "O LES (lúpus) é caracterizado por anticorpos contra:", options: ["Antígenos de superfície celular", "DNA de dupla fita (anti-dsDNA) e outros antígenos nucleares", "Mitocôndrias", "Receptor de TSH"], correctAnswer: 1, explanation: "LES: anti-dsDNA (específico, correlaciona com nefrite), anti-Smith (mais específico), ANA (sensível mas não específico). Depósito de imunocomplexos." },
      { type: "true_false", question: "Na artrite reumatoide, o fator reumatoide (FR) é um anticorpo IgM contra IgG.", correctAnswer: "Verdadeiro", explanation: "FR: IgM anti-Fc da IgG. Presente em ~80% da AR, mas não é específico. Anti-CCP (anti-peptídeo citrulinado cíclico) é mais específico." },
      { type: "fill_blank", question: "O anticorpo anti-___ é altamente específico para colangite biliar primária.", correctAnswer: "mitocôndria (AMA)", explanation: "AMA (anti-mitocôndria): anti-PDC-E2 (piruvato desidrogenase). >95% dos pacientes com CBP. Destruição de ductos biliares interlobulares.", options: ["mitocôndria (AMA)", "centrômero", "topoisomerase", "histona"] },
      { type: "multiple_choice", question: "A miastenia gravis é causada por anticorpos contra:", options: ["Canais de cálcio", "Receptores de acetilcolina na placa motora", "Mielina do SNP", "Receptores de glutamato"], correctAnswer: 1, explanation: "MG: anti-AChR (85%) ou anti-MuSK. Fraqueza flutuante, ptose, diplopia. Timoma associado em ~15%. Edrofônio (teste diagnóstico)." },
      { type: "true_false", question: "O diabetes tipo 1 envolve destruição autoimune das células beta pancreáticas.", correctAnswer: "Verdadeiro", explanation: "DM1: destruição autoimune (células T + anticorpos anti-GAD65, anti-IA2, anti-insulina). Insulite: infiltrado linfocítico nas ilhotas." },
    ]},
    { id: 48, title: "Neoplasias Hematológicas", theme: "Hematologia", diff: "Extremo", time: 480, puzzles: [
      { type: "multiple_choice", question: "A célula de Reed-Sternberg é patognomônica de:", options: ["Linfoma de Burkitt", "Linfoma de Hodgkin", "LLC", "Mieloma múltiplo"], correctAnswer: 1, explanation: "Reed-Sternberg: célula grande bilobulada ('olhos de coruja'), CD15+, CD30+, em background de células inflamatórias reativas." },
      { type: "fill_blank", question: "O linfoma de Burkitt apresenta translocação t(8;14) envolvendo o gene ___.", correctAnswer: "MYC", explanation: "t(8;14): MYC (8q24) → promotor de IgH. Proliferação extrema ('starry sky'). Endêmico (EBV+), esporádico (EBV-), HIV-associado.", options: ["MYC", "BCL-2", "BCL-6", "CCND1"] },
      { type: "true_false", question: "O mieloma múltiplo produz paraproteína monoclonal (pico M) detectável na eletroforese.", correctAnswer: "Verdadeiro", explanation: "Mieloma: neoplasia de plasmócitos → proteína M (IgG ou IgA). CRAB: Cálcio↑, Renal, Anemia, Bone (lesões líticas). Rouleaux no esfregaço." },
      { type: "multiple_choice", question: "A LMC é definida pela presença de:", options: ["t(14;18)", "t(9;22) cromossomo Philadelphia (BCR-ABL)", "t(8;14)", "t(11;14)"], correctAnswer: 1, explanation: "LMC: t(9;22) → BCR-ABL (tirosina quinase). Leucocitose com espectro maturativo de granulócitos. Imatinibe revolucionou o tratamento." },
      { type: "true_false", question: "Na leucemia promielocítica aguda (LMA-M3), a t(15;17) envolve PML-RARα e responde a ATRA.", correctAnswer: "Verdadeiro", explanation: "LPA: t(15;17) PML-RARα. Promielócitos com grânulos azurofílicos → CIVD. ATRA + ATO → diferenciação → remissão em >90%. Cura." },
      { type: "multiple_choice", question: "O linfoma de manto apresenta t(11;14) com superexpressão de:", options: ["BCL-2", "MYC", "Ciclina D1 (CCND1)", "BCL-6"], correctAnswer: 2, explanation: "Linfoma de manto: t(11;14) CCND1/IgH → ciclina D1 → proliferação. CD5+, CD23-, SOX11+. Intermediário entre indolente e agressivo." },
    ]},
    { id: 49, title: "Parede do Trato GI", theme: "Sistema Digestório", diff: "Fácil", time: 300, puzzles: [
      { type: "multiple_choice", question: "As células enteroendócrinas do TGI produzem:", options: ["Apenas muco", "Hormônios como serotonina, gastrina, colecistoquinina", "Enzimas digestivas", "Anticorpos"], correctAnswer: 1, explanation: "Células enteroendócrinas: APUD. Serotonina (EC cells), gastrina (G cells), CCK (I cells), secretina (S cells), GIP (K cells)." },
      { type: "true_false", question: "As células M (microfold) estão sobre as placas de Peyer e captam antígenos luminais.", correctAnswer: "Verdadeiro", explanation: "Células M: epitélio associado ao folículo. Transcitose de antígenos do lúmen → apresentação a células imunes subepiteliais." },
      { type: "fill_blank", question: "O plexo de ___ na submucosa controla secreção e fluxo sanguíneo.", correctAnswer: "Meissner (submucoso)", explanation: "Plexo de Meissner: submucoso, parassimpático. Regula secreção glandular e fluxo sanguíneo. Auerbach: motilidade.", options: ["Meissner (submucoso)", "Auerbach (mioentérico)", "Henle", "Broca"] },
      { type: "multiple_choice", question: "O apêndice cecal é rico em:", options: ["Glândulas de Brunner", "Tecido linfoide (GALT)", "Células parietais", "Vilosidades"], correctAnswer: 1, explanation: "Apêndice: abundante tecido linfoide na submucosa e lâmina própria. Função imunológica (GALT). Apendicite: obstrução → infecção." },
      { type: "true_false", question: "A doença de Crohn pode afetar qualquer parte do TGI, da boca ao ânus.", correctAnswer: "Verdadeiro", explanation: "Crohn: transmural, granulomatosa, segmentar (skip lesions). Qualquer parte do TGI (mais comum: íleo terminal e cólon). Fístulas, estenoses." },
    ]},
    { id: 50, title: "Adrenal: Córtex e Medula", theme: "Sistema Endócrino", diff: "Médio", time: 360, puzzles: [
      { type: "order", question: "Ordene as zonas do córtex adrenal (externa → interna): Glomerulosa → Fasciculada → Reticulada", correctAnswer: "Glomerulosa,Fasciculada,Reticulada", explanation: "GFR: 'salt, sugar, sex' → glomerulosa (aldosterona), fasciculada (cortisol), reticulada (DHEA/andrógenos)." },
      { type: "multiple_choice", question: "A síndrome de Cushing é causada por excesso de:", options: ["Aldosterona", "Cortisol", "Andrógenos", "Catecolaminas"], correctAnswer: 1, explanation: "Cushing: hipercortisolismo. Causas: iatrogênica (#1), adenoma hipofisário (doença de Cushing), adenoma adrenal, ACTH ectópico." },
      { type: "true_false", question: "A doença de Addison é insuficiência adrenal primária, geralmente autoimune.", correctAnswer: "Verdadeiro", explanation: "Addison: destruição do córtex adrenal (autoimune, TB, metástases). Hipocortisolismo + hipoaldosteronismo + hiperpigmentação (ACTH↑→MSH↑)." },
      { type: "fill_blank", question: "O ___ é um tumor da medula adrenal produtor de catecolaminas.", correctAnswer: "feocromocitoma", explanation: "Feocromocitoma: células cromafins. HAS paroxística, cefaleia, sudorese, palpitações. Diagnóstico: metanefrinas urinárias/plasmáticas.", options: ["feocromocitoma", "neuroblastoma", "adenoma", "carcinoma"] },
      { type: "multiple_choice", question: "O neuroblastoma pediátrico surge de:", options: ["Córtex adrenal", "Medula adrenal e gânglios simpáticos (células da crista neural)", "Córtex renal", "Timo"], correctAnswer: 1, explanation: "Neuroblastoma: tumor sólido extracraniano mais comum na infância. Crista neural → medula adrenal/simpáticos. N-MYC amplificado → pior prognóstico." },
    ]},
    // Continue with IDs 51-100
    { id: 51, title: "Próstata e Patologias", theme: "Sistema Reprodutor", diff: "Médio", time: 360, puzzles: [
      { type: "multiple_choice", question: "A hiperplasia prostática benigna (HPB) afeta predominantemente qual zona?", options: ["Zona periférica", "Zona de transição (periuretral)", "Zona central", "Zona anterior"], correctAnswer: 1, explanation: "HPB: zona de transição → compressão uretral → sintomas obstrutivos (jato fraco, noctúria). Ca próstata: zona periférica (70%)." },
      { type: "fill_blank", question: "O PSA (antígeno prostático específico) é uma ___ produzida pelo epitélio prostático.", correctAnswer: "serina protease (calicreína)", explanation: "PSA (KLK3): serina protease que liquefaz o sêmen. Elevado no Ca, HPB, prostatite. Não é específico para câncer.", options: ["serina protease (calicreína)", "fosfatase ácida", "lipase", "amilase"] },
      { type: "true_false", question: "O adenocarcinoma de próstata é graduado pelo sistema de Gleason.", correctAnswer: "Verdadeiro", explanation: "Gleason: soma dos 2 padrões mais prevalentes (1-5 cada). Score 6 (3+3): baixo grau. 7: intermediário. 8-10: alto grau." },
      { type: "multiple_choice", question: "Qual é a via de metástase mais comum do câncer de próstata?", options: ["Hematogênica para pulmão", "Hematogênica para osso (metástases osteoblásticas)", "Linfática para mediastino", "Transcavitária"], correctAnswer: 1, explanation: "Ca próstata: metástase óssea osteoBLÁSTICA (formadora de osso) → PSA e fosfatase alcalina elevados. Plexo de Batson." },
      { type: "true_false", question: "A neoplasia intraepitelial prostática de alto grau (PIN) é precursora do adenocarcinoma.", correctAnswer: "Verdadeiro", explanation: "PIN alto grau: displasia no epitélio glandular com camada basal preservada. Fator de risco para Ca invasivo." },
    ]},
    { id: 52, title: "SNC: Tumores", theme: "Neuropatologia", diff: "Extremo", time: 480, puzzles: [
      { type: "multiple_choice", question: "Qual é o tumor primário do SNC mais comum em adultos?", options: ["Meningioma", "Glioblastoma (GBM)", "Schwannoma", "Ependimoma"], correctAnswer: 1, explanation: "GBM (astrocitoma grau IV): mais maligno e mais comum glioma. IDH-wildtype, MGMT metilação prediz resposta a temozolomida. Sobrevida ~15 meses." },
      { type: "fill_blank", question: "O meduloblastoma é o tumor maligno do SNC mais comum em ___.", correctAnswer: "crianças", explanation: "Meduloblastoma: tumor embrionário do cerebelo (vermis em crianças, hemisférios em adultos). Drop metastases pelo LCR.", options: ["crianças", "adultos", "idosos", "neonatos"] },
      { type: "true_false", question: "Os meningiomas são tipicamente benignos e mostram corpos psamomatosos.", correctAnswer: "Verdadeiro", explanation: "Meningioma: benigno (~80%), células meningoteliais em espiral (whorls) + calcificações concêntricas (corpos psamomatosos). Extra-axial, dura-máter." },
      { type: "multiple_choice", question: "O craniofaringioma é mais comum em:", options: ["Adultos >60 anos", "Crianças (5-14 anos) e adultos >65", "Neonatos", "Adolescentes exclusivamente"], correctAnswer: 1, explanation: "Craniofaringioma: distribuição bimodal (crianças e adultos). Supraselar. Calcificações, cistos (líquido de motor oil). Restos da bolsa de Rathke." },
      { type: "true_false", question: "A mutação IDH1/2 é um fator prognóstico favorável em gliomas.", correctAnswer: "Verdadeiro", explanation: "IDH mutado: melhor prognóstico que IDH-wildtype. Astrocitoma IDH-mutado e oligodendroglioma (1p/19q codeletado) respondem melhor ao tratamento." },
      { type: "fill_blank", question: "O schwannoma vestibular (neuroma acústico) surge do nervo ___.", correctAnswer: "vestibulococlear (VIII)", explanation: "Schwannoma: benigno, origem nas células de Schwann do VIII par (divisão vestibular). Ângulo pontocerebelar. NF2: bilateral.", options: ["vestibulococlear (VIII)", "trigêmeo (V)", "facial (VII)", "glossofaríngeo (IX)"] },
    ]},
    { id: 53, title: "Transplante e Rejeição", theme: "Imunologia", diff: "Difícil", time: 420, puzzles: [
      { type: "multiple_choice", question: "A rejeição hiperaguda de transplante é mediada por:", options: ["Linfócitos T citotóxicos", "Anticorpos pré-formados contra o enxerto", "Macrófagos", "NK cells"], correctAnswer: 1, explanation: "Hiperaguda: minutos-horas. Anticorpos pré-formados (anti-HLA ou ABO) → ativação complemento → trombose microvascular → necrose." },
      { type: "true_false", question: "A rejeição aguda ocorre em dias a semanas e é mediada principalmente por células T.", correctAnswer: "Verdadeiro", explanation: "Aguda: T CD8+ citotóxicos + T CD4+ → destruição do enxerto. Também componente humoral (anticorpos anti-HLA donor-specific)." },
      { type: "fill_blank", question: "A rejeição ___ é insidiosa, ocorre em meses-anos, com fibrose e arteriosclerose do enxerto.", correctAnswer: "crônica", explanation: "Rejeição crônica: progressiva, sem tratamento efetivo. Fibrose intersticial, atrofia tubular (rim), arteriosclerose. Principal causa de perda tardia do enxerto.", options: ["crônica", "aguda", "hiperaguda", "subaguda"] },
      { type: "multiple_choice", question: "A doença enxerto-versus-hospedeiro (DECH/GVHD) ocorre em:", options: ["Transplante de rim", "Transplante de medula óssea/CTH", "Transplante de coração", "Todos igualmente"], correctAnswer: 1, explanation: "GVHD: linfócitos T do doador atacam tecidos do receptor (pele, fígado, TGI). Principal complicação do TMO alogênico." },
      { type: "true_false", question: "O tacrolimus e a ciclosporina inibem a calcineurina, bloqueando a ativação de linfócitos T.", correctAnswer: "Verdadeiro", explanation: "Inibidores de calcineurina: bloqueiam NFAT → ↓ IL-2 → ↓ proliferação de T. Base da imunossupressão em transplantes." },
    ]},
    { id: 54, title: "Líquido Cefalorraquidiano", theme: "Tecido Nervoso", diff: "Médio", time: 360, puzzles: [
      { type: "multiple_choice", question: "O LCR é produzido principalmente pelo:", options: ["Aracnoide", "Plexo coroide nos ventrículos", "Parênquima cerebral", "Meninges"], correctAnswer: 1, explanation: "Plexo coroide: epitélio ependimário modificado nos ventrículos (laterais, III e IV). Produz ~500mL/dia de LCR." },
      { type: "true_false", question: "A hidrocefalia obstrutiva é causada por bloqueio da circulação do LCR.", correctAnswer: "Verdadeiro", explanation: "Obstrutiva (não-comunicante): obstrução dentro do sistema ventricular (aqueduto de Sylvius, foramen de Monro). Comunicante: falha na absorção." },
      { type: "fill_blank", question: "O LCR é absorvido pelas granulações ___ que se projetam no seio sagital superior.", correctAnswer: "aracnoides (de Pacchioni)", explanation: "Granulações aracnoides: vilosidades que drenam LCR para o sangue venoso. Obstrução → hidrocefalia comunicante.", options: ["aracnoides (de Pacchioni)", "coroidais", "ependimárias", "durais"] },
      { type: "multiple_choice", question: "As meninges, da mais externa para interna, são:", options: ["Aracnoide → Pia → Dura", "Dura-máter → Aracnoide → Pia-máter", "Pia → Dura → Aracnoide", "Dura → Pia → Aracnoide"], correctAnswer: 1, explanation: "Dura-máter (espessa, fibrosa) → aracnoide (avascular, espaço subaracnoideo com LCR) → pia-máter (aderida ao SNC, vascular)." },
      { type: "true_false", question: "A meningite bacteriana mostra LCR turvo com predomínio de neutrófilos.", correctAnswer: "Verdadeiro", explanation: "Meningite bacteriana: LCR purulento, neutrófilos↑, proteína↑, glicose↓. Viral: linfócitos, proteína normal/↑, glicose normal." },
    ]},
    { id: 55, title: "Testículo: Tumores", theme: "Sistema Reprodutor", diff: "Difícil", time: 420, puzzles: [
      { type: "multiple_choice", question: "Os tumores testiculares mais comuns são:", options: ["Linfomas", "Tumores de células germinativas (>90%)", "Tumores de células de Leydig", "Sarcomas"], correctAnswer: 1, explanation: "TCG: >90% dos tumores testiculares. Seminomas (~55%) e não-seminomatosos (carcinoma embrionário, teratoma, coriocarcinoma, tumor do saco vitelino)." },
      { type: "true_false", question: "O coriocarcinoma testicular produz níveis muito elevados de hCG.", correctAnswer: "Verdadeiro", explanation: "Coriocarcinoma: sinciciotrofoblasto → hCG↑↑↑. Altamente maligno, metástases hematogênicas precoces (pulmão). Ginecomastia por hCG." },
      { type: "fill_blank", question: "O tumor de ___ é o TCG não-seminomatoso mais comum em crianças (< 3 anos).", correctAnswer: "saco vitelino (Yolk sac)", explanation: "Tumor do saco vitelino: AFP↑↑. Corpos de Schiller-Duval (glomérulo-like). Mais comum em crianças. Bom prognóstico.", options: ["saco vitelino (Yolk sac)", "teratoma", "coriocarcinoma", "carcinoma embrionário"] },
      { type: "multiple_choice", question: "Qual marcador tumoral é mais útil para acompanhar seminoma puro?", options: ["AFP", "hCG (pode estar discretamente elevado)", "CEA", "PSA"], correctAnswer: 1, explanation: "Seminoma puro: AFP normal (se AFP↑ → componente não-seminomatoso). hCG pode estar levemente↑ em ~10% (sinciciotrofoblasto focal)." },
      { type: "true_false", question: "O teratoma maduro em adultos é benigno e não requer tratamento.", correctAnswer: "Falso", explanation: "Teratoma maduro em ADULTOS: potencialmente maligno (pode conter áreas de transformação somática). Em crianças: benigno." },
    ]},
  ];
  
  for (const s of moreData) {
    scenarios.push({
      id: s.id,
      title: s.title,
      theme: s.theme,
      difficulty: s.diff,
      timeSeconds: s.time,
      description: `Cenário temático sobre ${s.theme.toLowerCase()}. Resolva os enigmas para escapar!`,
      puzzles: s.puzzles,
    });
  }

  // Generate additional scenarios (56-105) with unique themes
  const additionalTopics: { id: number; title: string; theme: string; diff: EscapeScenario["difficulty"]; time: number; puzzles: Puzzle[] }[] = [
    { id: 56, title: "Pancreatite: Aguda e Crônica", theme: "Sistema Digestório", diff: "Difícil", time: 420, puzzles: [
      { type: "multiple_choice", question: "A causa mais comum de pancreatite aguda é:", options: ["Álcool", "Cálculos biliares (litíase)", "Trauma", "Hiperlipidemia"], correctAnswer: 1, explanation: "Litíase biliar: #1 causa de pancreatite aguda (obstrução da ampola de Vater). Álcool: #2. Autodigestão por enzimas pancreáticas ativadas." },
      { type: "true_false", question: "A necrose gordurosa peripancreática é causada pela lipase liberada.", correctAnswer: "Verdadeiro", explanation: "Lipase ativada → saponificação da gordura peripancreática (necrose gordurosa enzimática). Áreas calcificadas (depósitos de Ca²⁺ + ácidos graxos)." },
      { type: "fill_blank", question: "A pancreatite crônica é caracterizada por ___ irreversível do parênquima.", correctAnswer: "fibrose", explanation: "Pancreatite crônica: fibrose progressiva + atrofia acinar + calcificações + insuficiência exócrina/endócrina. Álcool: causa principal.", options: ["fibrose", "necrose", "hiperplasia", "metaplasia"] },
      { type: "multiple_choice", question: "O adenocarcinoma ductal pancreático está mais frequentemente associado à mutação de:", options: ["TP53", "KRAS (~90%)", "APC", "VHL"], correctAnswer: 1, explanation: "KRAS mutado em >90% dos Ca pancreáticos. CDKN2A, TP53, SMAD4 também frequentes. Prognóstico muito ruim (sobrevida 5 anos <10%)." },
      { type: "true_false", question: "O tumor de Frantz (neoplasia pseudopapilar sólida) é mais comum em mulheres jovens.", correctAnswer: "Verdadeiro", explanation: "Frantz: mulheres jovens (20-30 anos). Tumor grande, bem circunscrito, sólido-cístico. Bom prognóstico após ressecção. β-catenina nuclear." },
    ]},
    { id: 57, title: "Vesícula e Vias Biliares", theme: "Sistema Digestório", diff: "Fácil", time: 300, puzzles: [
      { type: "multiple_choice", question: "A vesícula biliar é revestida por epitélio:", options: ["Estratificado pavimentoso", "Simples cilíndrico com microvilosidades", "Pseudoestratificado", "De transição"], correctAnswer: 1, explanation: "Vesícula biliar: epitélio simples cilíndrico absorvente. Concentra bile por absorção de água e eletrólitos. Não possui muscular da mucosa." },
      { type: "true_false", question: "Os cálculos biliares de colesterol são o tipo mais comum nos países ocidentais.", correctAnswer: "Verdadeiro", explanation: "Colesterol: 80% dos cálculos. Fatores: 4 Fs (female, forty, fat, fertile). Pigmentados (bilirrubinato de cálcio): hemólise crônica, cirrose." },
      { type: "fill_blank", question: "O colangiocarcinoma é o tumor maligno das vias ___.", correctAnswer: "biliares (ductos)", explanation: "Colangiocarcinoma: adenocarcinoma dos ductos biliares. Fatores: colangite esclerosante primária, Clonorchis sinensis. CA 19-9↑.", options: ["biliares (ductos)", "pancreáticas", "hepáticas", "intestinais"] },
      { type: "multiple_choice", question: "A colecistite aguda é mais frequentemente causada por:", options: ["Infecção bacteriana primária", "Obstrução do ducto cístico por cálculo", "Trauma", "Isquemia"], correctAnswer: 1, explanation: "Colecistite calculosa: 90% dos casos. Cálculo impactado no ducto cístico → distensão → inflamação → dor em HCD + Murphy+." },
      { type: "true_false", question: "A vesícula em porcelana (calcificação da parede) é fator de risco para carcinoma de vesícula.", correctAnswer: "Verdadeiro", explanation: "Vesícula em porcelana: calcificação distrófica da parede. Risco aumentado de adenocarcinoma → indicação de colecistectomia profilática." },
    ]},
    { id: 58, title: "Melanoma", theme: "Dermatologia", diff: "Difícil", time: 420, puzzles: [
      { type: "multiple_choice", question: "Qual a mutação mais comum no melanoma cutâneo?", options: ["KRAS", "BRAF V600E (~50%)", "EGFR", "KIT"], correctAnswer: 1, explanation: "BRAF V600E: ~50% dos melanomas cutâneos. Alvo de vemurafenibe/dabrafenibe + trametinibe (inibidor MEK)." },
      { type: "fill_blank", question: "O índice de ___ mede a espessura do melanoma em milímetros e é o principal fator prognóstico.", correctAnswer: "Breslow", explanation: "Breslow: espessura em mm da granulosa até a célula tumoral mais profunda. <1mm: bom prognóstico. >4mm: alto risco. Clark: nível de invasão anatômico.", options: ["Breslow", "Clark", "Gleason", "Fisher"] },
      { type: "true_false", question: "O melanoma nodular é o subtipo com pior prognóstico por crescimento vertical precoce.", correctAnswer: "Verdadeiro", explanation: "Nodular: cresce verticalmente desde o início (sem fase radial prolongada). Mais agressivo. Extensivo superficial: mais comum (70%), fase radial longa." },
      { type: "multiple_choice", question: "O melanoma é positivo para qual marcador imunohistoquímico?", options: ["Citoqueratina", "S-100, HMB-45, Melan-A (MART-1)", "Desmina", "CD20"], correctAnswer: 1, explanation: "Melanoma: S-100 (sensível), HMB-45 e Melan-A (mais específicos), SOX10. Derivado de melanócitos (crista neural)." },
      { type: "true_false", question: "A regra ABCDE ajuda na avaliação clínica de lesões melanocíticas suspeitas.", correctAnswer: "Verdadeiro", explanation: "ABCDE: Assimetria, Bordas irregulares, Cor heterogênea, Diâmetro >6mm, Evolução/mudança. Qualquer critério → biopsiar." },
    ]},
    { id: 59, title: "Sarcoidose", theme: "Patologia", diff: "Médio", time: 360, puzzles: [
      { type: "multiple_choice", question: "A sarcoidose é caracterizada por:", options: ["Granulomas caseosos", "Granulomas não-caseosos (sem necrose)", "Abcessos", "Fibrose pura"], correctAnswer: 1, explanation: "Sarcoidose: granulomas não-caseosos em múltiplos órgãos. Diagnóstico de exclusão (descartar TB, fungos). Corpúsculos de Schaumann e asteroides." },
      { type: "true_false", question: "A linfadenopatia hilar bilateral é o achado radiológico mais comum na sarcoidose.", correctAnswer: "Verdadeiro", explanation: "Adenopatia hilar bilateral: >90% dos casos. Estágio I: adenopatia isolada. II: adenopatia + infiltrado pulmonar. III: infiltrado sem adenopatia." },
      { type: "fill_blank", question: "A sarcoidose causa elevação da enzima ___ sérica, produzida por macrófagos dos granulomas.", correctAnswer: "ECA (enzima conversora de angiotensina)", explanation: "ECA: elevada em ~60% dos casos. Produzida pelas células epitelioides dos granulomas. Útil no monitoramento, não no diagnóstico.", options: ["ECA (enzima conversora de angiotensina)", "LDH", "fosfatase alcalina", "amilase"] },
      { type: "multiple_choice", question: "Qual manifestação cutânea é clássica da sarcoidose?", options: ["Psoríase", "Eritema nodoso (paniculite septal)", "Urticária", "Eczema"], correctAnswer: 1, explanation: "Eritema nodoso: nódulos dolorosos vermelhos nas pernas (paniculite septal). Síndrome de Löfgren: eritema nodoso + adenopatia hilar + febre + poliartralgia." },
      { type: "true_false", question: "A sarcoidose pode causar hipercalcemia por produção de 1,25-diidroxivitamina D pelos macrófagos.", correctAnswer: "Verdadeiro", explanation: "Macrófagos dos granulomas expressam 1α-hidroxilase → conversão extra-renal de 25(OH)D → 1,25(OH)₂D → hipercalcemia + hipercalciúria." },
    ]},
    { id: 60, title: "Amiloidose", theme: "Patologia", diff: "Difícil", time: 420, puzzles: [
      { type: "multiple_choice", question: "Qual coloração é diagnóstica para amiloide?", options: ["PAS", "Vermelho Congo (birrefringência verde-maçã sob luz polarizada)", "Tricrômico de Masson", "Perls"], correctAnswer: 1, explanation: "Vermelho Congo: amiloide cora em vermelho/rosa. Sob luz polarizada: birrefringência verde-maçã PATOGNOMÔNICA. Estrutura beta-pregueada." },
      { type: "fill_blank", question: "Na amiloidose AL (primária), a proteína depositada é derivada de ___.", correctAnswer: "cadeias leves de imunoglobulinas", explanation: "AL: cadeias leves lambda > kappa. Associada a mieloma múltiplo e gamopatias monoclonais. Afeta coração, rim, fígado, nervo.", options: ["cadeias leves de imunoglobulinas", "amiloide sérico A", "transtirretina", "beta-2 microglobulina"] },
      { type: "true_false", question: "A amiloidose AA (secundária/reativa) está associada a inflamação crônica.", correctAnswer: "Verdadeiro", explanation: "AA: proteína amiloide A sérica (SAA), reagente de fase aguda. AR, doenças inflamatórias crônicas, infecções persistentes. Principal: rim (nefrótico)." },
      { type: "multiple_choice", question: "A amiloidose cardíaca por transtirretina (ATTR) é associada a:", options: ["Mieloma múltiplo", "Envelhecimento (wild-type) ou mutação hereditária", "Infecção", "Autoimunidade"], correctAnswer: 1, explanation: "ATTR: wild-type (idosos, cardíaca restritiva) ou hereditária (V30M → polineuropatia familiar amiloidótica). Tafamidis estabiliza TTR." },
      { type: "true_false", question: "Na doença de Alzheimer, a proteína amiloide beta (Aβ) se deposita nas placas senis cerebrais.", correctAnswer: "Verdadeiro", explanation: "Alzheimer: placas senis (Aβ42 extracelular) + emaranhados neurofibrilares (tau hiperfosforilada intracelular). APP → clivagem por β e γ-secretases → Aβ." },
    ]},
    // Quick generation of remaining IDs 61-105
    { id: 61, title: "Doença Celíaca", theme: "Sistema Digestório", diff: "Médio", time: 360, puzzles: [
      { type: "multiple_choice", question: "A doença celíaca causa na mucosa intestinal:", options: ["Hipertrofia vilositária", "Atrofia vilositária + hiperplasia de criptas + linfocitose intraepitelial", "Pólipos", "Úlceras profundas"], correctAnswer: 1, explanation: "Celíaca: glúten → anti-tTG/anti-endomísio → resposta imune → atrofia vilositária (Marsh 3). HLA-DQ2/DQ8." },
      { type: "true_false", question: "O anticorpo anti-transglutaminase tecidual (anti-tTG) IgA é o melhor teste sorológico.", correctAnswer: "Verdadeiro", explanation: "Anti-tTG IgA: mais sensível e específico. Confirmação por biópsia duodenal. Atenção: deficiência de IgA (5-10% dos celíacos) → dosar IgA total." },
      { type: "fill_blank", question: "A classificação de ___ gradua a gravidade histológica da doença celíaca.", correctAnswer: "Marsh", explanation: "Marsh: 0 (normal) → 1 (linfocitose) → 2 (+ hiperplasia criptas) → 3a/b/c (atrofia parcial → subtotal → total).", options: ["Marsh", "Gleason", "Breslow", "METAVIR"] },
      { type: "multiple_choice", question: "Qual complicação neoplásica está associada à doença celíaca não tratada?", options: ["Adenocarcinoma gástrico", "Linfoma T associado a enteropatia (EATL)", "Carcinoma hepatocelular", "GIST"], correctAnswer: 1, explanation: "EATL: linfoma T intestinal raro mas agressivo. Celíaca refratária → linfocitose intraepitelial aberrante → EATL." },
      { type: "true_false", question: "A dermatite herpetiforme (Duhring) é a manifestação cutânea da doença celíaca.", correctAnswer: "Verdadeiro", explanation: "Duhring: vesículas pruriginosas em superfícies extensoras. Depósitos granulares de IgA na derme papilar (IF). Responde a dapsona e dieta sem glúten." },
    ]},
    { id: 62, title: "Fibrose Cística", theme: "Genética Médica", diff: "Médio", time: 360, puzzles: [
      { type: "multiple_choice", question: "A fibrose cística é causada por mutação no gene:", options: ["FBN1", "CFTR (canal de cloro)", "DMD", "HTT"], correctAnswer: 1, explanation: "CFTR: canal de Cl⁻ epitelial. Mutação ΔF508 mais comum. AR. Secreções espessas → obstrução em pulmões, pâncreas, intestino." },
      { type: "true_false", question: "O teste do suor com cloro elevado (>60 mEq/L) é diagnóstico.", correctAnswer: "Verdadeiro", explanation: "Cloro no suor >60 mEq/L: confirma FC. CFTR defeituoso → cloro não é reabsorvido nas glândulas sudoríparas → suor salgado." },
      { type: "fill_blank", question: "A insuficiência pancreática ___ ocorre em ~85% dos pacientes com FC.", correctAnswer: "exócrina", explanation: "Insuficiência pancreática exócrina: secreções espessas obstruem ductos → autodigestão → fibrose → má-absorção de gorduras. Reposição enzimática.", options: ["exócrina", "endócrina", "mista", "tubular"] },
      { type: "multiple_choice", question: "A bactéria que mais comumente coloniza os pulmões de pacientes com FC na idade adulta é:", options: ["S. aureus", "Pseudomonas aeruginosa (mucoide)", "H. influenzae", "M. tuberculosis"], correctAnswer: 1, explanation: "Pseudomonas aeruginosa: colonização crônica com formação de biofilme mucoide. Infecções de repetição → bronquiectasias → insuficiência respiratória." },
      { type: "true_false", question: "O íleo meconial é a apresentação neonatal da FC em ~15% dos casos.", correctAnswer: "Verdadeiro", explanation: "Íleo meconial: mecônio espesso obstrui o íleo terminal. Peritonite meconial se perfuração intrauterina. Pode ser a primeira manifestação de FC." },
    ]},
    // More rapid scenario generation
    ...Array.from({ length: 43 }, (_, i) => {
      const id = 63 + i;
      const themesList = [
        { t: "Tireoide: Nódulos", th: "Sistema Endócrino", puzzles: [
          { type: "multiple_choice" as const, question: "O achado mais suspeito de malignidade em nódulo tireoidiano ao ultrassom é:", options: ["Cisto puro", "Nódulo sólido hipoecogênico com microcalcificações e margens irregulares", "Nódulo espongiforme", "Halo periférico completo"], correctAnswer: 1, explanation: "Critérios suspeitos: sólido, hipoecogênico, microcalcificações, margens irregulares, mais alto que largo, extensão extratireoidiana. TI-RADS." },
          { type: "true_false" as const, question: "A PAAF (punção aspirativa) é o método diagnóstico inicial para nódulos tireoidianos suspeitos.", correctAnswer: "Verdadeiro", explanation: "PAAF: classificação Bethesda (I a VI). Bethesda VI: maligno. Bethesda III-IV: indeterminados → testes moleculares ou cirurgia." },
          { type: "fill_blank" as const, question: "O carcinoma ___ da tireoide está associado a MEN 2 e mutação RET.", correctAnswer: "medular", explanation: "Ca medular: células C, calcitonina↑, CEA↑. 25% familiares (MEN 2A/2B). Mutação RET proto-oncogene. Tireoidectomia total profilática.", options: ["medular", "papilífero", "folicular", "anaplásico"] },
          { type: "multiple_choice" as const, question: "O carcinoma anaplásico da tireoide:", options: ["Tem excelente prognóstico", "É o mais indiferenciado e agressivo, com sobrevida de meses", "Responde bem ao radioiodo", "É mais comum em jovens"], correctAnswer: 1, explanation: "Anaplásico: idosos, massa cervical rapidamente progressiva. Indiferenciado. Sobrevida média ~6 meses. Não capta iodo. Resistente a quimioterapia." },
          { type: "true_false" as const, question: "O carcinoma papilífero dissemina predominantemente por via linfática.", correctAnswer: "Verdadeiro", explanation: "Papilífero: metástases linfonodais cervicais (30-80%). Folicular: via hematogênica (pulmão, osso). Papilífero: melhor prognóstico." },
        ]},
        { t: "Anemias", th: "Hematologia", puzzles: [
          { type: "multiple_choice" as const, question: "A anemia ferropriva é caracterizada por:", options: ["Macrocitose", "Microcitose hipocrômica com ferritina baixa", "Normocitose", "Esferocitose"], correctAnswer: 1, explanation: "Ferropriva: VCM↓, HCM↓, ferritina↓, ferro sérico↓, TIBC↑. Causa mais comum de anemia no mundo. RDW elevado." },
          { type: "true_false" as const, question: "Na anemia megaloblástica, há hipersegmentação de neutrófilos no esfregaço.", correctAnswer: "Verdadeiro", explanation: "Megaloblástica: déficit B12/folato → síntese de DNA prejudicada. Neutrófilos hipersegmentados (≥6 lóbulos). Macroovalócitos." },
          { type: "fill_blank" as const, question: "A anemia ___ é causada por destruição acelerada de eritrócitos com reticulocitose compensatória.", correctAnswer: "hemolítica", explanation: "Hemolítica: ↑reticulócitos, ↑LDH, ↑bilirrubina indireta, ↓haptoglobina. Corpórea (esferocitose, falciforme) ou extracorpórea (autoimune, mecânica).", options: ["hemolítica", "aplástica", "sideroblástica", "ferropriva"] },
          { type: "multiple_choice" as const, question: "Na esferocitose hereditária, o defeito está em:", options: ["Hemoglobina", "Proteínas do citoesqueleto da membrana (espectrina, anquirina)", "Enzima G6PD", "Cadeia β da globina"], correctAnswer: 1, explanation: "Esferocitose: defeito em espectrina, anquirina ou banda 3 → perda de membrana → esferócitos → sequestro esplênico. Coombs direto negativo. Esplenectomia é curativa." },
          { type: "true_false" as const, question: "A talassemia β maior (Cooley) apresenta hemoglobina F aumentada.", correctAnswer: "Verdadeiro", explanation: "β-talassemia maior: ausência de cadeia β → eritropoiese ineficaz + hemólise. HbF↑↑ (compensatória). Transfusão-dependente. Quelação de ferro." },
        ]},
        { t: "Doença Inflamatória Intestinal", th: "Gastroenterologia", puzzles: [
          { type: "multiple_choice" as const, question: "Qual é a principal diferença histológica entre Crohn e RCU?", options: ["Crohn: mucosa apenas; RCU: transmural", "Crohn: transmural com granulomas; RCU: limitada à mucosa/submucosa", "Ambas são idênticas", "Crohn: pólipos; RCU: úlceras"], correctAnswer: 1, explanation: "Crohn: transmural, granulomas não-caseosos (60%), skip lesions, fístulas. RCU: mucosa/submucosa, contínua, pseudopólipos, abscessos crípticos." },
          { type: "true_false" as const, question: "A RCU aumenta o risco de câncer colorretal após 8-10 anos de doença.", correctAnswer: "Verdadeiro", explanation: "Risco de CCR na RCU: aumenta com duração da doença, extensão (pancolite), colangite esclerosante associada. Vigilância colonoscópica." },
          { type: "fill_blank" as const, question: "As fístulas são complicações típicas da doença de ___.", correctAnswer: "Crohn", explanation: "Fístulas: enteroentéricas, enterocutâneas, enterovesicais, perianais. Inflamação transmural do Crohn cria trajetos fistulosos.", options: ["Crohn", "Retocolite Ulcerativa", "Diverticulite", "Apendicite"] },
          { type: "multiple_choice" as const, question: "Os anticorpos ASCA são mais associados a:", options: ["RCU", "Doença de Crohn", "Doença celíaca", "Colite microscópica"], correctAnswer: 1, explanation: "ASCA: anti-Saccharomyces cerevisiae → Crohn (60-70%). pANCA: RCU (60-70%). Auxiliares, não diagnósticos." },
          { type: "true_false" as const, question: "A colangite esclerosante primária é mais associada à RCU do que ao Crohn.", correctAnswer: "Verdadeiro", explanation: "CEP: 80% associada a RCU. Fibrose dos ductos biliares intra e extra-hepáticos → colestase → cirrose biliar. Risco de colangiocarcinoma." },
        ]},
      ];
      const themeIdx = i % themesList.length;
      const selected = themesList[themeIdx];
      const diffs: EscapeScenario["difficulty"][] = ["Fácil", "Médio", "Difícil", "Extremo"];
      return {
        id,
        title: `${selected.t} ${Math.ceil((i + 1) / themesList.length)}`,
        theme: selected.th,
        diff: diffs[i % 4],
        time: [300, 360, 420, 480][i % 4],
        description: `Explore os enigmas sobre ${selected.t.toLowerCase()} e teste seus conhecimentos em ${selected.th.toLowerCase()}.`,
        puzzles: selected.puzzles,
      };
    }),
  ];

  for (const s of additionalTopics) {
    scenarios.push({
      id: s.id,
      title: s.title,
      theme: s.theme,
      difficulty: s.diff,
      timeSeconds: s.time,
      description: "description" in s && typeof (s as any).description === "string" ? (s as any).description : `Desvende os enigmas sobre ${s.title.toLowerCase()} neste cenário de ${s.theme.toLowerCase()}.`,
      puzzles: s.puzzles,
    });
  }

  return scenarios;
}
