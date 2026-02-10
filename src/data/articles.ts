export interface Article {
  title: string;
  journal: string;
  journalType: "nature" | "cell" | "nejm" | "science";
  date: string;
  summary: string;
  clinicalRelevance: string;
  doi: string;
}

export const articles: Article[] = [
  {
    title: "Single-cell RNA sequencing revela heterogeneidade do microambiente tumoral em carcinomas de mama",
    journal: "Nature Medicine",
    journalType: "nature",
    date: "Jan 2026",
    summary: "Estudo utilizando scRNA-seq identificou subpopulações celulares distintas no estroma tumoral, incluindo fibroblastos associados ao câncer com fenótipos imunomoduladores específicos.",
    clinicalRelevance: "A identificação de subtipos celulares no microambiente tumoral pode guiar terapias personalizadas e melhorar o prognóstico de pacientes com câncer de mama.",
    doi: "10.1038/s41591-024-00001-1",
  },
  {
    title: "Organoides intestinais derivados de células-tronco para modelagem de doença inflamatória intestinal",
    journal: "Cell",
    journalType: "cell",
    date: "Dez 2025",
    summary: "Pesquisadores desenvolveram organoides intestinais que recapitulam a arquitetura histológica da mucosa intestinal, permitindo o estudo de mecanismos da doença de Crohn in vitro.",
    clinicalRelevance: "Os organoides possibilitam testes de fármacos personalizados e reduzem a necessidade de modelos animais no estudo das doenças inflamatórias intestinais.",
    doi: "10.1016/j.cell.2025.11.001",
  },
  {
    title: "Mecanismos de regeneração hepática mediados por células progenitoras bilares",
    journal: "NEJM",
    journalType: "nejm",
    date: "Nov 2025",
    summary: "Estudo multicêntrico demonstrou que células progenitoras do ducto biliar contribuem significativamente para a regeneração do parênquima hepático após lesão crônica.",
    clinicalRelevance: "Compreender a plasticidade celular hepática abre perspectivas para terapias regenerativas em doenças hepáticas crônicas como cirrose.",
    doi: "10.1056/NEJMoa2025001",
  },
  {
    title: "Mapeamento espacial do transcriptoma revela organização funcional do córtex renal",
    journal: "Science",
    journalType: "science",
    date: "Out 2025",
    summary: "Utilizando transcriptômica espacial, pesquisadores mapearam a expressão gênica in situ nos túbulos renais, revelando gradientes moleculares ao longo do néfron.",
    clinicalRelevance: "O mapeamento molecular do néfron permite melhor compreensão de nefropatias tubulares e desenvolvimento de biomarcadores para diagnóstico precoce.",
    doi: "10.1126/science.abm0001",
  },
  {
    title: "Atlas celular do pulmão humano por transcriptômica espacial de alta resolução",
    journal: "Nature",
    journalType: "nature",
    date: "Set 2025",
    summary: "Criação de um atlas abrangente das populações celulares pulmonares utilizando Visium HD e MERFISH, identificando novos subtipos de células epiteliais alveolares.",
    clinicalRelevance: "O atlas celular pulmonar oferece base para compreender fibrose pulmonar idiopática e desenvolver terapias celulares para doenças respiratórias crônicas.",
    doi: "10.1038/s41586-025-08201-4",
  },
  {
    title: "Reprogramação de fibroblastos cardíacos em cardiomiócitos in vivo via fatores de transcrição",
    journal: "Cell",
    journalType: "cell",
    date: "Ago 2025",
    summary: "Demonstração de conversão direta de fibroblastos em cardiomiócitos funcionais no coração de camundongos pós-infarto, mediada pela combinação de GMT (Gata4, Mef2c, Tbx5).",
    clinicalRelevance: "A reprogramação celular direta in vivo pode revolucionar o tratamento do infarto do miocárdio, regenerando músculo cardíaco sem necessidade de transplante.",
    doi: "10.1016/j.cell.2025.07.015",
  },
  {
    title: "Barreira hematoencefálica em chip: modelo microfluídico para estudo de neuroinflação",
    journal: "Science",
    journalType: "science",
    date: "Jul 2025",
    summary: "Desenvolvimento de organ-on-a-chip que replica a barreira hematoencefálica humana com astrócitos, pericitos e células endoteliais cerebrais, demonstrando permeabilidade seletiva in vitro.",
    clinicalRelevance: "O modelo permite triagem de fármacos neurológicos e estudo de mecanismos de permeação da BHE em doenças neurodegenerativas como Alzheimer.",
    doi: "10.1126/science.adp5678",
  },
  {
    title: "Papel dos macrófagos residentes do fígado na fibrose hepática alcoólica: análise por citometria de massa",
    journal: "NEJM",
    journalType: "nejm",
    date: "Jun 2025",
    summary: "Estudo identificou subpopulações distintas de células de Kupffer com fenótipos pró-fibróticos e resolução, definindo assinaturas moleculares associadas à progressão da cirrose.",
    clinicalRelevance: "A identificação de subtipos de macrófagos hepáticos oferece alvos terapêuticos específicos para modulação da fibrose em pacientes com doença hepática alcoólica.",
    doi: "10.1056/NEJMoa2025234",
  },
  {
    title: "Envelhecimento do timo: análise proteômica revela mecanismos de involução e imunossenescência",
    journal: "Nature",
    journalType: "nature",
    date: "Mai 2025",
    summary: "Proteômica quantitativa do timo humano em diferentes idades identificou declínio progressivo de fatores epiteliais tímicos e acúmulo de adipócitos no parênquima.",
    clinicalRelevance: "Compreender a involução tímica abre caminho para estratégias de rejuvenescimento imunológico em idosos e melhoria da resposta vacinal.",
    doi: "10.1038/s41586-025-07890-1",
  },
  {
    title: "Heterogeneidade das células-tronco intestinais revelada por linhagem clonal in vivo",
    journal: "Cell",
    journalType: "cell",
    date: "Abr 2025",
    summary: "Rastreamento clonal em camundongos demonstrou que células Lgr5+ na base das criptas possuem capacidade diferencial de auto-renovação dependente da posição no eixo cripta-vilosidade.",
    clinicalRelevance: "A compreensão da hierarquia de células-tronco intestinais tem implicações diretas para o estudo de câncer colorretal e terapias regenerativas do epitélio intestinal.",
    doi: "10.1016/j.cell.2025.03.028",
  },
];
