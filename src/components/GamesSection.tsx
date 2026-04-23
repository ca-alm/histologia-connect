import { useState } from "react";
import { Gamepad2, RotateCcw, CheckCircle2, XCircle, Timer, Trophy, ArrowRight, Shuffle, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { questions } from "@/data/quizQuestions";

// ===== GAME 1: ASSOCIAÇÃO (MATCHING) =====
interface MatchPair { term: string; definition: string; }

const matchSets: { title: string; pairs: MatchPair[] }[] = [
  {
    title: "Células e Funções",
    pairs: [
      { term: "Osteoclasto", definition: "Reabsorção óssea" },
      { term: "Fibroblasto", definition: "Síntese de matriz extracelular" },
      { term: "Célula de Kupffer", definition: "Macrófago hepático" },
      { term: "Célula de Sertoli", definition: "Suporte da espermatogênese" },
      { term: "Pneumócito tipo II", definition: "Produção de surfactante" },
      { term: "Mastócito", definition: "Liberação de histamina" },
    ],
  },
  {
    title: "Colorações Especiais",
    pairs: [
      { term: "H&E", definition: "Coloração de rotina" },
      { term: "PAS", definition: "Glicogênio e mucinas" },
      { term: "Tricrômico de Masson", definition: "Colágeno em azul" },
      { term: "Verhoeff", definition: "Fibras elásticas em preto" },
      { term: "Prata (reticulina)", definition: "Fibras reticulares" },
      { term: "Vermelho Congo", definition: "Amiloide" },
    ],
  },
  {
    title: "Colágenos e Localizações",
    pairs: [
      { term: "Tipo I", definition: "Osso, tendão, pele" },
      { term: "Tipo II", definition: "Cartilagem hialina/elástica" },
      { term: "Tipo III", definition: "Fibras reticulares" },
      { term: "Tipo IV", definition: "Lâmina basal" },
      { term: "Tipo VII", definition: "Fibrilas de ancoragem" },
    ],
  },
  {
    title: "Epitélios e Localizações",
    pairs: [
      { term: "Simples pavimentoso", definition: "Alvéolos, endotélio" },
      { term: "Estratificado pavimentoso", definition: "Esôfago, pele" },
      { term: "Pseudoestratificado ciliado", definition: "Traqueia" },
      { term: "Transição (urotélio)", definition: "Bexiga urinária" },
      { term: "Simples cilíndrico", definition: "Intestino delgado" },
      { term: "Simples cúbico", definition: "Túbulos renais" },
    ],
  },
  {
    title: "Glândulas Endócrinas e Hormônios",
    pairs: [
      { term: "Zona glomerulosa", definition: "Aldosterona" },
      { term: "Zona fasciculada", definition: "Cortisol" },
      { term: "Medula adrenal", definition: "Adrenalina" },
      { term: "Células beta pancreáticas", definition: "Insulina" },
      { term: "Células parafoliculares (C)", definition: "Calcitonina" },
      { term: "Células parietais gástricas", definition: "HCl e fator intrínseco" },
    ],
  },
  {
    title: "Tumores e Células de Origem",
    pairs: [
      { term: "Seminoma", definition: "Célula germinativa" },
      { term: "Meningioma", definition: "Células meningoteliais aracnoides" },
      { term: "Schwannoma", definition: "Células de Schwann" },
      { term: "Glioblastoma", definition: "Astrócitos" },
      { term: "GIST", definition: "Células de Cajal" },
      { term: "Feocromocitoma", definition: "Células cromafins da medula adrenal" },
    ],
  },
  {
    title: "Marcadores Imunohistoquímicos",
    pairs: [
      { term: "CD3", definition: "Linfócitos T (pan-T)" },
      { term: "CD20", definition: "Linfócitos B maduros" },
      { term: "S-100", definition: "Melanoma, Schwann, Langerhans" },
      { term: "Desmina", definition: "Células musculares" },
      { term: "GFAP", definition: "Astrócitos" },
      { term: "Cromogranina A", definition: "Tumores neuroendócrinos" },
    ],
  },
  {
    title: "Doenças e Mutações Genéticas",
    pairs: [
      { term: "Síndrome de Marfan", definition: "Fibrilina-1 (FBN1)" },
      { term: "Doença de Huntington", definition: "Huntingtina (HTT)" },
      { term: "Fibrose cística", definition: "CFTR" },
      { term: "Retinoblastoma", definition: "RB1" },
      { term: "Li-Fraumeni", definition: "TP53" },
      { term: "Policitemia vera", definition: "JAK2 V617F" },
    ],
  },
  {
    title: "Órgãos e Epitélios Revestidores",
    pairs: [
      { term: "Córnea", definition: "Estratificado pavimentoso não-queratinizado" },
      { term: "Tuba uterina", definition: "Simples cilíndrico ciliado" },
      { term: "Epidídimo", definition: "Pseudoestratificado com estereocílios" },
      { term: "Vagina", definition: "Estratificado pavimentoso não-queratinizado" },
      { term: "Vesícula biliar", definition: "Simples cilíndrico com microvilosidades" },
    ],
  },
  {
    title: "Necroses e Mecanismos",
    pairs: [
      { term: "Coagulação", definition: "Infarto cardíaco/renal (isquemia)" },
      { term: "Liquefativa", definition: "Infarto cerebral, abscessos" },
      { term: "Caseosa", definition: "Tuberculose (granulomas)" },
      { term: "Gordurosa", definition: "Pancreatite aguda (lipase)" },
      { term: "Fibrinoide", definition: "Vasculites e reações autoimunes" },
    ],
  },
  // --- CITOLOGIA ---
  {
    title: "Organelas e Funções",
    pairs: [
      { term: "RER", definition: "Síntese de proteínas de exportação" },
      { term: "REL", definition: "Síntese de lipídios e desintoxicação" },
      { term: "Golgi", definition: "O-glicosilação e endereçamento" },
      { term: "Lisossomo", definition: "Digestão intracelular (fosfatase ácida)" },
      { term: "Peroxissomo", definition: "Catalase e β-oxidação de AG longos" },
      { term: "Mitocôndria", definition: "Produção de ATP e apoptose" },
    ],
  },
  {
    title: "Proteínas Motoras e Funções",
    pairs: [
      { term: "Cinesina", definition: "Transporte anterógrado (extremidade +)" },
      { term: "Dineína citoplasmática", definition: "Transporte retrógrado (extremidade −)" },
      { term: "Dineína ciliar", definition: "Motilidade de cílios (9+2)" },
      { term: "Miosina II", definition: "Contração muscular e citocinese" },
      { term: "Miosina V", definition: "Transporte vesicular em actina" },
    ],
  },
  {
    title: "Doenças de Depósito Lisossômico",
    pairs: [
      { term: "Gaucher", definition: "Deficiência de glicocerebrosidase" },
      { term: "Tay-Sachs", definition: "Deficiência de hexosaminidase A" },
      { term: "Niemann-Pick A", definition: "Deficiência de esfingomielinase" },
      { term: "Fabry", definition: "Deficiência de α-galactosidase A" },
      { term: "Pompe", definition: "Deficiência de maltase ácida" },
      { term: "I-cell disease", definition: "Defeito na marcação M6P" },
    ],
  },
  {
    title: "Filamentos Intermediários e Tecidos",
    pairs: [
      { term: "Citoqueratina", definition: "Células epiteliais (carcinomas)" },
      { term: "Vimentina", definition: "Células mesenquimais" },
      { term: "Desmina", definition: "Células musculares" },
      { term: "GFAP", definition: "Astrócitos" },
      { term: "Neurofilamentos", definition: "Neurônios" },
      { term: "Laminas A/B/C", definition: "Envelope nuclear" },
    ],
  },
  // --- COMPONENTES CELULARES ---
  {
    title: "RER vs REL — Funções",
    pairs: [
      { term: "RER", definition: "Síntese de proteínas de exportação" },
      { term: "REL", definition: "Síntese de lipídios e esteroides" },
      { term: "Corpúsculos de Nissl", definition: "RER em neurônios" },
      { term: "Retículo sarcoplasmático", definition: "REL no músculo (Ca²⁺)" },
      { term: "N-glicosilação", definition: "Inicia no RER (asparagina)" },
      { term: "Citocromo P450", definition: "REL hepático (desintoxicação)" },
    ],
  },
  {
    title: "Vesículas de Transporte",
    pairs: [
      { term: "COP II", definition: "RE → Golgi (anterógrado)" },
      { term: "COP I", definition: "Golgi → RE (retrógrado)" },
      { term: "Clatrina", definition: "TGN → endossomos / endocitose" },
      { term: "Dinamina", definition: "GTPase que cliva vesícula" },
      { term: "v-SNARE + t-SNARE", definition: "Fusão de membranas" },
      { term: "Rab-GTPases", definition: "Especificidade do tráfego" },
    ],
  },
  {
    title: "Defeitos de Membrana e Doenças",
    pairs: [
      { term: "Esferocitose hereditária", definition: "Defeito em anquirina/espectrina" },
      { term: "HPN", definition: "Defeito na âncora GPI" },
      { term: "Fibrose cística", definition: "Defeito no canal CFTR (Cl⁻)" },
      { term: "Hipercolesterolemia familiar", definition: "Defeito no receptor de LDL" },
      { term: "Diabetes insipidus nefrogênico", definition: "Defeito em AQP2" },
    ],
  },
  {
    title: "Toxinas e Alvos Celulares",
    pairs: [
      { term: "Toxina botulínica", definition: "Cliva SNAREs (paralisia flácida)" },
      { term: "Toxina tetânica", definition: "Cliva VAMP inibitório (espasmo)" },
      { term: "Colchicina", definition: "Despolimeriza microtúbulos" },
      { term: "Taxol (paclitaxel)", definition: "Estabiliza microtúbulos" },
      { term: "Faloidina", definition: "Estabiliza filamentos de actina" },
      { term: "Ricina", definition: "Inibe subunidade 60S ribossomal" },
    ],
  },
];

const MatchGame = () => {
  const [setIdx, setSetIdx] = useState(0);
  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [shuffledDefs, setShuffledDefs] = useState<number[]>([]);
  const [wrong, setWrong] = useState<number | null>(null);
  const [gameComplete, setGameComplete] = useState(false);

  const currentSet = matchSets[setIdx];

  const startGame = (idx: number) => {
    setSetIdx(idx);
    const indices = matchSets[idx].pairs.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setShuffledDefs(indices);
    setMatched(new Set());
    setSelectedTerm(null);
    setWrong(null);
    setGameComplete(false);
  };

  if (shuffledDefs.length === 0) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground mb-4">Associe cada termo à sua definição correta. Selecione um termo à esquerda e depois a definição correspondente à direita.</p>
        {matchSets.map((s, i) => (
          <button key={i} onClick={() => startGame(i)} className="w-full text-left rounded-xl bg-card border border-border card-shadow p-4 hover:card-shadow-hover transition-all">
            <p className="font-serif text-lg font-bold text-foreground">{s.title}</p>
            <p className="text-sm text-muted-foreground">{s.pairs.length} pares para associar</p>
          </button>
        ))}
      </div>
    );
  }

  const handleDefClick = (defOriginalIdx: number) => {
    if (selectedTerm === null || matched.has(selectedTerm)) return;
    if (defOriginalIdx === selectedTerm) {
      const newMatched = new Set(matched);
      newMatched.add(selectedTerm);
      setMatched(newMatched);
      setSelectedTerm(null);
      setWrong(null);
      if (newMatched.size === currentSet.pairs.length) setGameComplete(true);
    } else {
      setWrong(defOriginalIdx);
      setTimeout(() => setWrong(null), 800);
    }
  };

  if (gameComplete) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-serif text-xl font-bold text-foreground mb-2">Parabéns! 🎉</h3>
        <p className="text-muted-foreground mb-4">Você associou todos os pares de "{currentSet.title}" corretamente!</p>
        <div className="flex gap-3 justify-center">
          <Button onClick={() => startGame(setIdx)} variant="outline" className="gap-2"><RotateCcw className="w-4 h-4" />Jogar novamente</Button>
          <Button onClick={() => { setShuffledDefs([]); setGameComplete(false); }} className="gap-2"><ArrowRight className="w-4 h-4" />Outros temas</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-lg font-bold text-foreground">{currentSet.title}</h3>
        <span className="text-sm text-muted-foreground">{matched.size}/{currentSet.pairs.length} pares</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Termos</p>
          {currentSet.pairs.map((p, i) => (
            <button
              key={i}
              disabled={matched.has(i)}
              onClick={() => setSelectedTerm(i)}
              className={`w-full text-left p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                matched.has(i) ? "border-quiz-correct bg-quiz-correct/10 opacity-60" :
                selectedTerm === i ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
              }`}
            >
              {matched.has(i) && <CheckCircle2 className="w-4 h-4 text-quiz-correct inline mr-2" />}
              {p.term}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Definições</p>
          {shuffledDefs.map((origIdx, i) => (
            <button
              key={i}
              disabled={matched.has(origIdx)}
              onClick={() => handleDefClick(origIdx)}
              className={`w-full text-left p-3 rounded-lg border-2 text-sm transition-all ${
                matched.has(origIdx) ? "border-quiz-correct bg-quiz-correct/10 opacity-60" :
                wrong === origIdx ? "border-quiz-incorrect bg-quiz-incorrect/10" : "border-border hover:border-primary/50"
              }`}
            >
              {matched.has(origIdx) && <CheckCircle2 className="w-4 h-4 text-quiz-correct inline mr-2" />}
              {currentSet.pairs[origIdx].definition}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="outline" size="sm" onClick={() => { setShuffledDefs([]); }}>← Voltar aos temas</Button>
      </div>
    </div>
  );
};

// ===== GAME 2: VERDADEIRO OU FALSO RÁPIDO =====
const tfStatements: { statement: string; isTrue: boolean; explanation: string }[] = [
  { statement: "O colágeno tipo IV forma fibras visíveis em microscopia óptica.", isTrue: false, explanation: "O colágeno tipo IV forma uma rede, não fibras visíveis. Está presente na lâmina basal." },
  { statement: "Os cílios possuem arranjo de microtúbulos 9+2.", isTrue: true, explanation: "O axonema ciliar tem 9 pares periféricos + 2 microtúbulos centrais, movidos por dineína." },
  { statement: "A cartilagem hialina possui vasos sanguíneos.", isTrue: false, explanation: "A cartilagem é avascular; nutrição ocorre por difusão a partir do pericôndrio ou líquido sinovial." },
  { statement: "Os osteoblastos são células multinucleadas.", isTrue: false, explanation: "Os osteoblastos são mononucleados. Os osteoclastos é que são multinucleados." },
  { statement: "O músculo liso possui estriações transversais.", isTrue: false, explanation: "O músculo liso NÃO possui estriações transversais visíveis; seus filamentos não estão organizados em sarcômeros." },
  { statement: "A microglia é derivada de precursores da medula óssea (monócitos).", isTrue: true, explanation: "A microglia tem origem mesodérmica (monócitos/macrófagos), diferente das demais células gliais (ectoderma)." },
  { statement: "A eosina cora núcleos em azul.", isTrue: false, explanation: "A eosina cora citoplasma e proteínas em rosa. A hematoxilina cora núcleos em azul/roxo." },
  { statement: "As células de Paneth secretam defensinas.", isTrue: true, explanation: "As células de Paneth no fundo das criptas intestinais secretam defensinas e lisozima (peptídeos antimicrobianos)." },
  { statement: "O epidídimo possui epitélio simples cúbico.", isTrue: false, explanation: "O epidídimo possui epitélio pseudoestratificado com estereocílios." },
  { statement: "A barreira hematoencefálica é formada por tight junctions entre células endoteliais.", isTrue: true, explanation: "As tight junctions entre células endoteliais dos capilares cerebrais contínuos formam a base da BHE." },
  { statement: "O tecido adiposo marrom contém UCP1.", isTrue: true, explanation: "A UCP1 (termogenina) desacopla a fosforilação oxidativa nas mitocôndrias do tecido adiposo marrom, gerando calor." },
  { statement: "As fibras de Purkinje são neurônios do córtex cerebelar.", isTrue: false, explanation: "As fibras de Purkinje NO CORAÇÃO são cardiomiócitos modificados de condução. As CÉLULAS de Purkinje são neurônios do cerebelo." },
  { statement: "A aldosterona é produzida pela zona fasciculada.", isTrue: false, explanation: "A aldosterona é produzida pela zona GLOMERULOSA. A fasciculada produz cortisol." },
  { statement: "O urotélio possui células em guarda-chuva com uroplaquinas.", isTrue: true, explanation: "As uroplaquinas nas células em guarda-chuva formam placas rígidas que impermeabilizam o urotélio." },
  { statement: "O surfactante pulmonar é produzido pelos pneumócitos tipo I.", isTrue: false, explanation: "O surfactante é produzido pelos pneumócitos tipo II (corpos lamelares). Os tipo I fazem trocas gasosas." },
  // New statements
  { statement: "A nefrina é a principal proteína do diafragma de fenda dos podócitos.", isTrue: true, explanation: "A nefrina forma o slit diaphragm entre pedicelos dos podócitos. Mutação causa síndrome nefrótica congênita." },
  { statement: "O Ki-67 marca células em fase G0.", isTrue: false, explanation: "O Ki-67 é expresso em todas as fases ativas do ciclo celular (G1, S, G2, M), mas NÃO em G0 (quiescência)." },
  { statement: "A coloração de Ziehl-Neelsen detecta fungos.", isTrue: false, explanation: "Ziehl-Neelsen detecta BAAR (micobactérias). Para fungos, usa-se GMS (Grocott-Gomori) ou PAS." },
  { statement: "Os corpúsculos de Weibel-Palade contêm fator de von Willebrand.", isTrue: true, explanation: "Os corpos de Weibel-Palade são grânulos das células endoteliais contendo vWF e P-selectina." },
  { statement: "O reticulócito é um leucócito imaturo.", isTrue: false, explanation: "O reticulócito é um ERITRÓCITO imaturo com restos de RNA ribossômico. Serve para avaliar atividade eritropoiética." },
  { statement: "A degeneração walleriana ocorre proximal ao local da lesão.", isTrue: false, explanation: "A degeneração walleriana ocorre DISTAL ao local de lesão (axônio e mielina distais degeneram)." },
  { statement: "O seminoma testicular marca OCT4 na imunohistoquímica.", isTrue: true, explanation: "O seminoma é OCT4+, PLAP+, c-KIT+, refletindo sua origem em células germinativas pluripotentes." },
  { statement: "A apoptose causa inflamação intensa no tecido.", isTrue: false, explanation: "A apoptose é morte programada SEM inflamação. Corpos apoptóticos são fagocitados silenciosamente. A necrose causa inflamação." },
  { statement: "As células de Clara (Club cells) produzem muco.", isTrue: false, explanation: "As Club cells secretam proteína CC16 (anti-inflamatória) e são células progenitoras do bronquíolo. Não produzem muco." },
  { statement: "A troponina I cardíaca é marcador específico de lesão miocárdica.", isTrue: true, explanation: "A cTnI é específica do coração. Eleva-se no IAM e outras causas de lesão miocárdica (miocardite, embolia pulmonar)." },
  { statement: "O pênfigo vulgar causa bolhas subepidérmicas.", isTrue: false, explanation: "O pênfigo vulgar causa bolhas INTRAepidérmicas (acantólise por anti-desmogleína). O penfigoide bolhoso causa bolhas SUBepidérmicas." },
  { statement: "A mutação BRAF V600E é encontrada em ~50% dos melanomas.", isTrue: true, explanation: "BRAF V600E está presente em cerca de 50% dos melanomas cutâneos, sendo alvo de inibidores específicos (vemurafenibe, dabrafenibe)." },
  { statement: "O GIST é positivo para CD117 (c-KIT) na imunohistoquímica.", isTrue: true, explanation: "Mais de 95% dos GISTs expressam CD117 (c-KIT), o que auxilia no diagnóstico e indica alvo para imatinibe." },
  { statement: "O corpo lúteo da gravidez é mantido pelo FSH.", isTrue: false, explanation: "O corpo lúteo da gravidez é mantido pelo hCG (gonadotrofina coriônica humana) secretado pelo sinciciotrofoblasto." },
  { statement: "A crista neural origina os melanócitos.", isTrue: true, explanation: "Os melanócitos derivam da crista neural e migram para a epiderme durante o desenvolvimento embrionário." },
  // --- CITOLOGIA V/F ---
  { statement: "O colesterol aumenta a fluidez da membrana em todas as temperaturas.", isTrue: false, explanation: "O colesterol é um tampão de fluidez: REDUZ a fluidez em altas temperaturas e IMPEDE a cristalização em baixas temperaturas." },
  { statement: "O mtDNA é circular e de herança materna.", isTrue: true, explanation: "O DNA mitocondrial é circular, com 37 genes, herdado exclusivamente da mãe (mitocôndrias do espermatozoide são eliminadas)." },
  { statement: "A cinesina transporta cargas para a extremidade negativa dos microtúbulos.", isTrue: false, explanation: "A cinesina vai para a extremidade POSITIVA (+) = anterógrado. A dineína vai para a extremidade NEGATIVA (−) = retrógrado." },
  { statement: "O proteassomo degrada proteínas marcadas com ubiquitina.", isTrue: true, explanation: "O proteassomo 26S reconhece cadeias de poliubiquitina (K48) e degrada a proteína em peptídeos. Regula ciclinas, p53, IκB." },
  { statement: "A N-glicosilação inicia-se no complexo de Golgi.", isTrue: false, explanation: "A N-glicosilação CORE inicia-se no RER (oligossacarídeo do dolicol → Asn). O Golgi faz as modificações subsequentes." },
  { statement: "Os peroxissomos contêm catalase.", isTrue: true, explanation: "A catalase decompõe H₂O₂ em H₂O + O₂. É a enzima-chave dos peroxissomos, protegendo contra dano oxidativo." },
  { statement: "A doença de Tay-Sachs é causada por deficiência de glicocerebrosidase.", isTrue: false, explanation: "Tay-Sachs: deficiência de HEXOSAMINIDASE A → acúmulo de GM2. Glicocerebrosidase → Gaucher." },
  { statement: "A colchicina estabiliza os microtúbulos, impedindo despolimerização.", isTrue: false, explanation: "A colchicina DESPOLIMERIZA microtúbulos, bloqueando a mitose em metáfase. O TAXOL é que estabiliza." },
  { statement: "COP II transporta vesículas do RE para o Golgi.", isTrue: true, explanation: "COP II: transporte anterógrado RE → cis-Golgi. COP I: retrógrado Golgi → RE." },
  { statement: "A via extrínseca da apoptose é iniciada por liberação de citocromo c.", isTrue: false, explanation: "Citocromo c inicia a via INTRÍNSECA (mitocondrial). A via extrínseca é iniciada por receptores de morte (Fas, TNF, TRAIL)." },
  { statement: "Os filamentos intermediários são polarizados como microtúbulos e actina.", isTrue: false, explanation: "Filamentos intermediários NÃO são polarizados (sem extremidade + ou −). Conferem resistência mecânica sem atividade motora." },
  { statement: "A progéria de Hutchinson-Gilford é causada por mutação no gene LMNA (lamina A).", isTrue: true, explanation: "Mutação em LMNA produz progerina (lamina A truncada) → deformação do envelope nuclear → envelhecimento prematuro acelerado." },
];

const TrueFalseGame = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [shuffled, setShuffled] = useState<typeof tfStatements>([]);
  const [started, setStarted] = useState(false);

  const start = () => {
    const s = [...tfStatements].sort(() => Math.random() - 0.5).slice(0, 10);
    setShuffled(s);
    setCurrent(0);
    setScore(0);
    setAnswered(false);
    setUserAnswer(null);
    setStarted(true);
  };

  if (!started) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-muted-foreground mb-4">Leia cada afirmação e decida se é Verdadeira ou Falsa. Rápido e direto! ({tfStatements.length} afirmações no banco)</p>
        <Button onClick={start} className="gap-2"><Shuffle className="w-4 h-4" />Iniciar (10 afirmações)</Button>
      </div>
    );
  }

  if (current >= shuffled.length) {
    const pct = Math.round((score / shuffled.length) * 100);
    return (
      <div className="text-center py-4">
        <div className="text-4xl mb-3">{pct >= 80 ? "🏆" : pct >= 60 ? "👏" : "📖"}</div>
        <p className="text-lg font-bold text-foreground mb-1">Resultado: {score}/{shuffled.length} ({pct}%)</p>
        <Button onClick={start} variant="outline" className="gap-2 mt-3"><RotateCcw className="w-4 h-4" />Jogar novamente</Button>
      </div>
    );
  }

  const stmt = shuffled[current];

  const answer = (val: boolean) => {
    setUserAnswer(val);
    setAnswered(true);
    if (val === stmt.isTrue) setScore((s) => s + 1);
  };

  const next = () => {
    setCurrent((c) => c + 1);
    setAnswered(false);
    setUserAnswer(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">{current + 1}/{shuffled.length}</span>
        <span className="text-sm font-semibold text-primary">Pontos: {score}</span>
      </div>
      <div className="bg-card border border-border rounded-xl p-6 mb-4">
        <p className="font-serif text-lg font-bold text-foreground leading-relaxed">"{stmt.statement}"</p>
      </div>
      {!answered ? (
        <div className="flex gap-3 justify-center">
          <Button onClick={() => answer(true)} size="lg" variant="outline" className="gap-2 px-8">✅ Verdadeiro</Button>
          <Button onClick={() => answer(false)} size="lg" variant="outline" className="gap-2 px-8">❌ Falso</Button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className={`p-4 rounded-xl border-2 ${userAnswer === stmt.isTrue ? "border-quiz-correct bg-quiz-correct/10" : "border-quiz-incorrect bg-quiz-incorrect/10"}`}>
            <p className="text-sm font-semibold mb-1">
              {userAnswer === stmt.isTrue ? "✅ Correto!" : "❌ Incorreto!"} A afirmação é {stmt.isTrue ? "VERDADEIRA" : "FALSA"}.
            </p>
            <p className="text-sm text-foreground/80">{stmt.explanation}</p>
          </div>
          <div className="flex justify-end">
            <Button onClick={next} className="gap-2">Próxima <ArrowRight className="w-4 h-4" /></Button>
          </div>
        </div>
      )}
    </div>
  );
};

// ===== GAME 3: FLASH QUIZ (contra o relógio) =====
const FlashQuiz = () => {
  const [gameQuestions, setGameQuestions] = useState<typeof questions>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [started, setStarted] = useState(false);

  const shuffleArr = <T,>(arr: T[]): T[] => {
    const s = [...arr];
    for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [s[i], s[j]] = [s[j], s[i]]; }
    return s;
  };

  const start = () => {
    const shuffled = shuffleArr([...questions]).slice(0, 10).map((q) => {
      const indices = q.options.map((_, i) => i);
      const si = shuffleArr(indices);
      return { ...q, options: si.map((i) => q.options[i]), correctIndex: si.indexOf(q.correctIndex) };
    });
    setGameQuestions(shuffled);
    setCurrent(0);
    setScore(0);
    setAnswered(false);
    setSelected(null);
    setStarted(true);
  };

  const answer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === gameQuestions[current].correctIndex) setScore((s) => s + 1);
  };

  const next = () => {
    if (current < gameQuestions.length - 1) {
      setCurrent((c) => c + 1);
      setAnswered(false);
      setSelected(null);
    } else {
      setStarted(false);
    }
  };

  if (!started && gameQuestions.length > 0 && current >= gameQuestions.length - 1 && answered) {
    const pct = Math.round((score / gameQuestions.length) * 100);
    return (
      <div className="text-center py-4">
        <div className="text-4xl mb-3">{pct >= 80 ? "⚡" : pct >= 60 ? "💪" : "📚"}</div>
        <p className="text-lg font-bold text-foreground mb-1">Flash Quiz: {score}/{gameQuestions.length} ({pct}%)</p>
        <Button onClick={start} variant="outline" className="gap-2 mt-3"><RotateCcw className="w-4 h-4" />Jogar novamente</Button>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-muted-foreground mb-4">Responda 10 questões rápidas de histologia! Banco com {questions.length} questões.</p>
        <Button onClick={start} className="gap-2"><Timer className="w-4 h-4" />Iniciar Flash Quiz</Button>
      </div>
    );
  }

  const q = gameQuestions[current];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">{current + 1}/{gameQuestions.length}</span>
        <span className="text-sm font-semibold text-primary">⚡ {score} pontos</span>
      </div>
      <p className="font-serif text-base font-bold text-foreground mb-4 leading-relaxed">{q.question}</p>
      <div className="space-y-2 mb-4">
        {q.options.map((opt, i) => {
          let cls = "w-full text-left p-3 rounded-lg border-2 text-sm transition-all ";
          if (!answered) cls += "border-border hover:border-primary/50 cursor-pointer";
          else if (i === q.correctIndex) cls += "border-quiz-correct bg-quiz-correct/10";
          else if (i === selected) cls += "border-quiz-incorrect bg-quiz-incorrect/10";
          else cls += "border-border opacity-50";
          return (
            <button key={i} className={cls} onClick={() => answer(i)}>
              <div className="flex items-center gap-2">
                <span>{opt}</span>
                {answered && i === q.correctIndex && <CheckCircle2 className="w-4 h-4 text-quiz-correct ml-auto" />}
                {answered && i === selected && i !== q.correctIndex && <XCircle className="w-4 h-4 text-quiz-incorrect ml-auto" />}
              </div>
            </button>
          );
        })}
      </div>
      {answered && (
        <>
          <div className="bg-secondary rounded-lg p-3 mb-3 text-sm text-secondary-foreground/80">💡 {q.explanation}</div>
          <div className="flex justify-end">
            <Button onClick={next} className="gap-2">{current < gameQuestions.length - 1 ? "Próxima" : "Ver Resultado"} <ArrowRight className="w-4 h-4" /></Button>
          </div>
        </>
      )}
    </div>
  );
};

// ===== GAME 4: COMPLETE A FRASE =====
const fillBlanks = [
  { text: "O colágeno tipo ___ é o principal componente da lâmina basal.", answer: "IV", options: ["I", "II", "III", "IV"] },
  { text: "As células ___ são os macrófagos residentes do fígado.", answer: "de Kupffer", options: ["de Langerhans", "de Kupffer", "de Sertoli", "de Leydig"] },
  { text: "A ___ é a proteína motora do transporte axonal retrógrado.", answer: "dineína", options: ["cinesina", "dineína", "miosina", "actina"] },
  { text: "O surfactante pulmonar é produzido pelos pneumócitos tipo ___.", answer: "II", options: ["I", "II", "III", "IV"] },
  { text: "A ___ é a principal proteína do filamento intermediário dos astrócitos.", answer: "GFAP", options: ["vimentina", "desmina", "GFAP", "citoqueratina"] },
  { text: "Os osteoclastos derivam da linhagem ___.", answer: "monocítica/hematopoiética", options: ["mesenquimal", "epitelial", "monocítica/hematopoiética", "neural"] },
  { text: "A coloração ___ é usada para detectar fibras elásticas.", answer: "Verhoeff", options: ["PAS", "Verhoeff", "Masson", "Giemsa"] },
  { text: "As tight junctions contêm proteínas transmembranares chamadas ___.", answer: "claudinas e ocludinas", options: ["caderinas", "integrinas", "claudinas e ocludinas", "conexinas"] },
  { text: "O ___ é o tumor benigno mais comum do útero.", answer: "leiomioma (mioma)", options: ["adenomiose", "pólipo", "leiomioma (mioma)", "fibroma"] },
  { text: "A via Wnt/β-catenina regula as células-tronco das criptas ___.", answer: "intestinais", options: ["gástricas", "esofágicas", "intestinais", "colônicas"] },
  { text: "A ___ é a causa mais comum de glomerulonefrite no mundo.", answer: "nefropatia por IgA", options: ["GNPE", "nefropatia por IgA", "nefropatia membranosa", "GESF"] },
  { text: "O carcinoma papilífero da tireoide apresenta núcleos em ___.", answer: "vidro fosco (Orphan Annie eyes)", options: ["relógio de areia", "vidro fosco (Orphan Annie eyes)", "sal e pimenta", "olhos de coruja"] },
  // --- CITOLOGIA ---
  { text: "O modelo do ___ descreve a membrana plasmática como bicamada fluida com proteínas.", answer: "mosaico fluido", options: ["mosaico fluido", "sanduíche lipídico", "dupla hélice", "revestimento celular"] },
  { text: "A bomba Na⁺/K⁺-ATPase bombeia ___ Na⁺ para fora e 2 K⁺ para dentro.", answer: "3", options: ["1", "2", "3", "4"] },
  { text: "As vesículas revestidas por ___ medeiam a endocitose mediada por receptor.", answer: "clatrina", options: ["COP I", "COP II", "clatrina", "caveolina"] },
  { text: "O marcador enzimático dos lisossomos é a ___.", answer: "fosfatase ácida", options: ["catalase", "fosfatase ácida", "citocromo c", "peroxidase"] },
  { text: "A ___ é a proteína motora que caminha para a extremidade + dos microtúbulos.", answer: "cinesina", options: ["dineína", "cinesina", "miosina", "actina"] },
  { text: "A doença de Gaucher resulta do acúmulo de ___ em macrófagos.", answer: "glicocerebrosídeo", options: ["esfingomielina", "gangliosídeo GM2", "glicocerebrosídeo", "colesterol"] },
  { text: "O ponto de restrição (R) ocorre no final da fase ___.", answer: "G1", options: ["S", "G1", "G2", "M"] },
  { text: "A proteína ___ é o fator promotor da maturação (MPF) que inicia a mitose.", answer: "ciclina B/CDK1", options: ["ciclina D/CDK4", "ciclina E/CDK2", "ciclina B/CDK1", "p53/p21"] },
];

const FillBlankGame = () => {
  const [gameItems, setGameItems] = useState<typeof fillBlanks>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const shuffleArr = <T,>(arr: T[]): T[] => {
    const s = [...arr];
    for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [s[i], s[j]] = [s[j], s[i]]; }
    return s;
  };

  const start = () => {
    const shuffled = shuffleArr([...fillBlanks]).slice(0, 10).map((item) => ({
      ...item,
      options: shuffleArr(item.options),
    }));
    setGameItems(shuffled);
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setStarted(true);
  };

  if (!started && gameItems.length > 0 && current >= gameItems.length) {
    const pct = Math.round((score / gameItems.length) * 100);
    return (
      <div className="text-center py-4">
        <div className="text-4xl mb-3">{pct >= 80 ? "🧠" : pct >= 60 ? "📝" : "📖"}</div>
        <p className="text-lg font-bold text-foreground mb-1">Complete a Frase: {score}/{gameItems.length} ({pct}%)</p>
        <Button onClick={start} variant="outline" className="gap-2 mt-3"><RotateCcw className="w-4 h-4" />Jogar novamente</Button>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-muted-foreground mb-4">Complete a frase com a opção correta. Teste seus conhecimentos de histologia!</p>
        <Button onClick={start} className="gap-2"><Brain className="w-4 h-4" />Iniciar</Button>
      </div>
    );
  }

  if (current >= gameItems.length) {
    setStarted(false);
    return null;
  }

  const item = gameItems[current];
  const answered = selected !== null;
  const isCorrect = selected === item.answer;

  const next = () => {
    if (isCorrect) setScore(s => s + 1);
    setCurrent(c => c + 1);
    setSelected(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">{current + 1}/{gameItems.length}</span>
        <span className="text-sm font-semibold text-primary">🧠 {score} pontos</span>
      </div>
      <div className="bg-card border border-border rounded-xl p-6 mb-4">
        <p className="font-serif text-lg font-bold text-foreground leading-relaxed">{item.text}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {item.options.map((opt) => {
          let cls = "p-3 rounded-lg border-2 text-sm font-medium transition-all text-left ";
          if (!answered) cls += "border-border hover:border-primary/50 cursor-pointer";
          else if (opt === item.answer) cls += "border-quiz-correct bg-quiz-correct/10";
          else if (opt === selected) cls += "border-quiz-incorrect bg-quiz-incorrect/10";
          else cls += "border-border opacity-50";
          return (
            <button key={opt} className={cls} onClick={() => !answered && setSelected(opt)} disabled={answered}>
              {opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="flex justify-end">
          <Button onClick={next} className="gap-2">
            {current < gameItems.length - 1 ? "Próxima" : "Ver Resultado"} <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

// ===== MAIN COMPONENT =====
const games = [
  { id: "match", title: "🔗 Jogo de Associação", description: "Associe termos histológicos às suas definições (10 temas)" },
  { id: "tf", title: "✅ Verdadeiro ou Falso", description: `Julgue afirmações sobre histologia (${tfStatements.length} afirmações)` },
  { id: "flash", title: "⚡ Flash Quiz", description: "Quiz rápido com questões aleatórias do banco completo" },
  { id: "fill", title: "🧠 Complete a Frase", description: "Preencha a lacuna com o termo correto" },
] as const;

type GameId = (typeof games)[number]["id"];

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState<GameId | null>(null);

  if (!activeGame) {
    return (
      <div className="space-y-4">
        <p className="text-muted-foreground mb-6">Aprenda histologia de forma divertida com jogos interativos!</p>
        {games.map((g) => (
          <button
            key={g.id}
            onClick={() => setActiveGame(g.id)}
            className="w-full text-left rounded-xl bg-card border border-border card-shadow p-5 hover:card-shadow-hover transition-all flex items-center gap-4"
          >
            <Gamepad2 className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h3 className="font-serif text-lg font-bold text-foreground">{g.title}</h3>
              <p className="text-sm text-muted-foreground">{g.description}</p>
            </div>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Button variant="outline" size="sm" onClick={() => setActiveGame(null)} className="mb-4">← Todos os jogos</Button>
      {activeGame === "match" && <MatchGame />}
      {activeGame === "tf" && <TrueFalseGame />}
      {activeGame === "flash" && <FlashQuiz />}
      {activeGame === "fill" && <FillBlankGame />}
    </div>
  );
};

export default GamesSection;
