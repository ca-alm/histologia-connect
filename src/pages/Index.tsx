import { useState } from "react";
import { Newspaper, Brain, BookOpen, Microscope } from "lucide-react";
import heroImage from "@/assets/hero-histology.jpg";
import ArticleCard from "@/components/ArticleCard";
import QuizSection from "@/components/QuizSection";
import SummaryCard from "@/components/SummaryCard";
const tabs = [{
  id: "updates",
  label: "Atualizações",
  icon: Newspaper
}, {
  id: "activities",
  label: "Atividades",
  icon: Brain
}, {
  id: "summaries",
  label: "Resumos",
  icon: BookOpen
}] as const;
type TabId = (typeof tabs)[number]["id"];
const articles = [{
  title: "Single-cell RNA sequencing revela heterogeneidade do microambiente tumoral em carcinomas de mama",
  journal: "Nature Medicine",
  journalType: "nature" as const,
  date: "Jan 2026",
  summary: "Estudo utilizando scRNA-seq identificou subpopulações celulares distintas no estroma tumoral, incluindo fibroblastos associados ao câncer com fenótipos imunomoduladores específicos.",
  clinicalRelevance: "A identificação de subtipos celulares no microambiente tumoral pode guiar terapias personalizadas e melhorar o prognóstico de pacientes com câncer de mama.",
  doi: "10.1038/s41591-024-00001-1"
}, {
  title: "Organoides intestinais derivados de células-tronco para modelagem de doença inflamatória intestinal",
  journal: "Cell",
  journalType: "cell" as const,
  date: "Dez 2025",
  summary: "Pesquisadores desenvolveram organoides intestinais que recapitulam a arquitetura histológica da mucosa intestinal, permitindo o estudo de mecanismos da doença de Crohn in vitro.",
  clinicalRelevance: "Os organoides possibilitam testes de fármacos personalizados e reduzem a necessidade de modelos animais no estudo das doenças inflamatórias intestinais.",
  doi: "10.1016/j.cell.2025.11.001"
}, {
  title: "Mecanismos de regeneração hepática mediados por células progenitoras bilares",
  journal: "NEJM",
  journalType: "nejm" as const,
  date: "Nov 2025",
  summary: "Estudo multicêntrico demonstrou que células progenitoras do ducto biliar contribuem significativamente para a regeneração do parênquima hepático após lesão crônica.",
  clinicalRelevance: "Compreender a plasticidade celular hepática abre perspectivas para terapias regenerativas em doenças hepáticas crônicas como cirrose.",
  doi: "10.1056/NEJMoa2025001"
}, {
  title: "Mapeamento espacial do transcriptoma revela organização funcional do córtex renal",
  journal: "Science",
  journalType: "science" as const,
  date: "Out 2025",
  summary: "Utilizando transcriptômica espacial, pesquisadores mapearam a expressão gênica in situ nos túbulos renais, revelando gradientes moleculares ao longo do néfron.",
  clinicalRelevance: "O mapeamento molecular do néfron permite melhor compreensão de nefropatias tubulares e desenvolvimento de biomarcadores para diagnóstico precoce.",
  doi: "10.1126/science.abm0001"
}];
const summaries = [{
  icon: "🔬",
  title: "Tecido Epitelial",
  subtitle: "Classificação, funções e especializações de membrana",
  content: ["Os tecidos epiteliais revestem superfícies corporais e cavidades, formando barreiras seletivas. São classificados pelo número de camadas (simples, estratificado, pseudoestratificado) e pela morfologia celular (pavimentoso, cúbico, cilíndrico).", "As especializações de membrana incluem microvilosidades (aumentam absorção), cílios (movimentam substâncias), e estereocílios (absorção no epidídimo). A lâmina basal é uma estrutura extracelular que ancora o epitélio ao tecido conjuntivo subjacente.", "As junções celulares (tight junctions, desmossomos, gap junctions) garantem coesão e comunicação intercelular, sendo fundamentais para a função de barreira epitelial."]
}, {
  icon: "🧬",
  title: "Tecido Conjuntivo",
  subtitle: "Células, fibras e substância fundamental",
  content: ["O tecido conjuntivo é caracterizado pela abundância de matriz extracelular, composta por fibras (colágenas, elásticas e reticulares) e substância fundamental amorfa (GAGs e proteoglicanos).", "As células residentes incluem fibroblastos (síntese de matriz), macrófagos (fagocitose), mastócitos (mediadores inflamatórios), e adipócitos (armazenamento energético).", "Os tipos especializados incluem tecido adiposo (unilocular e multilocular), cartilaginoso (hialina, elástica, fibrosa) e ósseo (compacto e esponjoso), cada um com funções específicas."]
}, {
  icon: "💪",
  title: "Tecido Muscular",
  subtitle: "Esquelético, cardíaco e liso",
  content: ["O tecido muscular esquelético é formado por fibras multinucleadas com estriações transversais, organizadas em sarcômeros. A contração é voluntária e depende da interação actina-miosina mediada por cálcio.", "O músculo cardíaco possui células ramificadas com núcleo central e discos intercalares contendo gap junctions, permitindo a contração sincronizada. É involuntário e auto-rítmico.", "O músculo liso apresenta células fusiformes com núcleo central, sem estriações visíveis. Está presente em vísceras e vasos sanguíneos, com contração lenta e sustentada."]
}, {
  icon: "🧠",
  title: "Tecido Nervoso",
  subtitle: "Neurônios, glia e sinapses",
  content: ["Os neurônios são as unidades funcionais do sistema nervoso, compostos por corpo celular (pericário), dendritos e axônio. São classificados em multipolares, bipolares e pseudounipolares.", "As células da glia incluem astrócitos (suporte e barreira hematoencefálica), oligodendrócitos (mielina no SNC), células de Schwann (mielina no SNP), microglia (defesa) e células ependimárias (revestimento ventricular).", "As sinapses podem ser químicas (neurotransmissores) ou elétricas (gap junctions). A bainha de mielina aumenta a velocidade de condução nervosa através da condução saltatória nos nodos de Ranvier."]
}, {
  icon: "🩸",
  title: "Sangue e Hematopoiese",
  subtitle: "Elementos figurados e formação",
  content: ["O sangue é um tecido conjuntivo especializado composto por plasma e elementos figurados: eritrócitos (transporte de O₂), leucócitos (defesa) e plaquetas (hemostasia).", "Os leucócitos são divididos em granulócitos (neutrófilos, eosinófilos, basófilos) e agranulócitos (linfócitos, monócitos). Cada tipo tem funções específicas na resposta imune.", "A hematopoiese ocorre na medula óssea vermelha a partir de células-tronco hematopoiéticas pluripotentes que se diferenciam nas linhagens mieloide e linfoide."]
}];
const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("updates");
  return <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Histologia microscópica" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24 text-center bg-[#f0e6bc]/60 text-[#b71515]">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Microscope className="w-8 h-8 text-primary-foreground/90" />
            <span className="text-primary-foreground/80 font-sans text-sm font-semibold uppercase tracking-widest">
              FMBRU-USP
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-[#b71515] font-sans">
            HistoApp
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Apoio pedagógico em Histologia — atualizações científicas, atividades interativas e resumos para a prática médica.
          </p>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="sticky top-0 z-20 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-1">
            {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold transition-all border-b-2 ${activeTab === tab.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>)}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        {activeTab === "updates" && <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
              Atualizações Científicas
            </h2>
            <p className="text-muted-foreground mb-8">
              Artigos recentes de alto impacto com relevância para a histologia e prática clínica.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((article, i) => <ArticleCard key={i} {...article} />)}
            </div>
          </section>}

        {activeTab === "activities" && <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
              Atividades Interativas
            </h2>
            <p className="text-muted-foreground mb-8">
              Teste seus conhecimentos nos temas abordados na disciplina de Histologia.
            </p>
            <QuizSection />
          </section>}

        {activeTab === "summaries" && <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
              Resumos
            </h2>
            <p className="text-muted-foreground mb-8">
              Sínteses dos principais temas abordados na disciplina.
            </p>
            <div className="space-y-4">
              {summaries.map((summary, i) => <SummaryCard key={i} {...summary} />)}
            </div>
          </section>}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            HistoApp — Faculdade de Medicina de Bauru (FMBRU-USP)
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            Projeto de apoio pedagógico à disciplina de Histologia
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;