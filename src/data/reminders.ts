export interface Reminder {
  id: number;
  title: string;
  category: string;
  emoji: string;
  items: string[];
}

export const reminders: Reminder[] = [
  {
    id: 1,
    title: "Diferenciação dos Tecidos Epiteliais",
    category: "Tecido Epitelial",
    emoji: "📌",
    items: [
      "Simples = 1 camada | Estratificado = múltiplas camadas | Pseudoestratificado = parece estratificado mas todos tocam a lâmina basal",
      "Pavimentoso = células achatadas | Cúbico = células cúbicas | Cilíndrico = células altas",
      "Classificação: baseada na camada mais SUPERFICIAL (exceto pseudoestratificado)",
      "Epitélio de transição (urotélio) = EXCLUSIVO das vias urinárias",
    ],
  },
  {
    id: 2,
    title: "Colorações Especiais — Quando Usar",
    category: "Microscopia",
    emoji: "🎨",
    items: [
      "H&E → rotina (núcleos roxos, citoplasma rosa)",
      "PAS → glicogênio, mucinas neutras, membranas basais (magenta)",
      "Tricrômico de Masson → fibras colágenas (azul), músculo (vermelho)",
      "Verhoeff → fibras elásticas (preto)",
      "Prata (Reticulina) → fibras reticulares (preto/marrom)",
      "Azul de toluidina → metacromasia em mastócitos (roxo-avermelhado)",
      "Giemsa → esfregaço sanguíneo e medula óssea",
      "Sudam → lipídios (cortes por congelação)",
    ],
  },
  {
    id: 3,
    title: "Células da Glia — Resumo Rápido",
    category: "Tecido Nervoso",
    emoji: "🧠",
    items: [
      "Astrócitos → suporte, barreira hematoencefálica, captação de glutamato (GFAP+)",
      "Oligodendrócitos → mielina no SNC (1 célula = vários axônios)",
      "Células de Schwann → mielina no SNP (1 célula = 1 internodo)",
      "Microglia → macrófagos do SNC (origem: monócitos)",
      "Células ependimárias → revestem ventrículos, produzem LCR",
      "Células satélites → envolvem neurônios nos gânglios do SNP",
    ],
  },
  {
    id: 4,
    title: "Tipos de Colágeno — Os Mais Cobrados",
    category: "Tecido Conjuntivo",
    emoji: "🧬",
    items: [
      "Tipo I → o mais abundante: pele, osso, tendão, dentina (90% do colágeno corporal)",
      "Tipo II → cartilagem hialina e elástica, humor vítreo",
      "Tipo III → fibras reticulares: fígado, baço, linfonodos, músculo liso",
      "Tipo IV → lâmina basal (não forma fibras, forma rede)",
      "Tipo VII → fibrilas de ancoragem (junção dermoepidérmica)",
      "Mnemônico: 'Um Osso, Dois Cartilagem, Três Reticular, Quatro Basal'",
    ],
  },
  {
    id: 5,
    title: "Junções Celulares",
    category: "Tecido Epitelial",
    emoji: "🔗",
    items: [
      "Zônula de oclusão (tight junction) → vedação, impermeabilização (mais apical)",
      "Zônula de adesão → adesão, ligada a actina (abaixo da tight junction)",
      "Desmossomo (mácula de adesão) → adesão forte, ligada a filamentos intermediários (queratina)",
      "Hemidesmossomo → ancora epitélio à lâmina basal",
      "Gap junction (junção comunicante) → comunicação direta entre citoplasmas (conexinas)",
      "Ordem de cima para baixo: Oclusão → Adesão → Desmossomo (O-A-D)",
    ],
  },
  {
    id: 6,
    title: "Músculo: Esquelético vs Cardíaco vs Liso",
    category: "Tecido Muscular",
    emoji: "💪",
    items: [
      "Esquelético: multinucleado, núcleos periféricos, estriado, voluntário",
      "Cardíaco: 1-2 núcleos centrais, estriado, involuntário, discos intercalares, ramificado",
      "Liso: 1 núcleo central, sem estriações, involuntário, fusiforme",
      "Contração muscular: Ca²⁺ é o íon-chave em todos os tipos",
      "Regeneração: esquelético (células satélites), cardíaco (limitada), liso (boa)",
    ],
  },
  {
    id: 7,
    title: "Ossificação — Intramembranosa vs Endocondral",
    category: "Tecido Ósseo",
    emoji: "🦴",
    items: [
      "Intramembranosa: mesênquima → osso diretamente (ossos chatos do crânio, face, clavícula)",
      "Endocondral: molde de cartilagem hialina → substituído por osso (ossos longos, vértebras)",
      "Placa epifisária: zona de reserva → proliferação → hipertrofia → calcificação → ossificação",
      "Crescimento em comprimento: endocondral (placa epifisária)",
      "Crescimento em espessura: aposicional (periósteo)",
    ],
  },
  {
    id: 8,
    title: "Células do Estômago — Mapa Rápido",
    category: "Sistema Digestório",
    emoji: "🍽️",
    items: [
      "Células mucosas superficiais → muco protetor (todo o epitélio gástrico)",
      "Células parietais (oxínticas) → HCl + fator intrínseco (corpo/fundo)",
      "Células principais (zimogênicas) → pepsinogênio + lipase gástrica (corpo/fundo)",
      "Células G → gastrina (antro)",
      "Células D → somatostatina (inibe secreção ácida)",
      "Células ECL → histamina (estimula células parietais)",
    ],
  },
  {
    id: 9,
    title: "Barreira de Filtração Glomerular",
    category: "Sistema Urinário",
    emoji: "🧪",
    items: [
      "3 camadas: endotélio fenestrado → membrana basal glomerular → podócitos (pedicelos + fendas de filtração)",
      "Endotélio fenestrado: poros de 70-100 nm, retém células sanguíneas",
      "Membrana basal: laminina, colágeno IV, proteoglicanos (carga negativa → repele proteínas)",
      "Podócitos: pedicelos interdigitantes com nefrina nas fendas de filtração",
      "Lesão dos podócitos → proteinúria (ex: doença de lesões mínimas, GESF)",
    ],
  },
  {
    id: 10,
    title: "Camadas da Pele",
    category: "Pele e Anexos",
    emoji: "🧴",
    items: [
      "Epiderme (ectoderma): basal → espinhosa → granulosa → (lúcida) → córnea",
      "Mnemônico: 'Brasileiros Espertos Ganham Louros Certos'",
      "Derme papilar: conjuntivo frouxo, papilas dérmicas, corpúsculos de Meissner",
      "Derme reticular: conjuntivo denso, fibras colágenas e elásticas espessas, corpúsculos de Pacini",
      "Células da epiderme: queratinócitos (90%), melanócitos, Langerhans, Merkel",
      "Queratina mole: pele | Queratina dura: unhas e pelos",
    ],
  },
];
