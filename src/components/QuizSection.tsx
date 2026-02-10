import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Question {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const questions: Question[] = [
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
    explanation:
      "A traqueia é revestida por epitélio pseudoestratificado cilíndrico ciliado com células caliciformes, fundamental para a defesa mucociliar das vias aéreas.",
  },
  {
    id: 2,
    topic: "Tecido Conjuntivo",
    question: "Qual é a principal célula residente do tecido conjuntivo propriamente dito?",
    options: ["Macrófago", "Mastócito", "Fibroblasto", "Plasmócito"],
    correctIndex: 2,
    explanation:
      "O fibroblasto é a célula mais abundante do tecido conjuntivo propriamente dito, responsável pela síntese de fibras colágenas, elásticas e da substância fundamental amorfa.",
  },
  {
    id: 3,
    topic: "Tecido Muscular",
    question: "Qual característica diferencia o músculo cardíaco do esquelético?",
    options: [
      "Presença de estriações transversais",
      "Discos intercalares e ramificações celulares",
      "Multinucleação das fibras",
      "Ausência de mitocôndrias",
    ],
    correctIndex: 1,
    explanation:
      "O músculo cardíaco possui discos intercalares (junções especializadas) e células ramificadas com núcleo central, diferenciando-o do esquelético que apresenta fibras cilíndricas multinucleadas.",
  },
  {
    id: 4,
    topic: "Tecido Nervoso",
    question: "Qual célula da glia é responsável pela formação da bainha de mielina no SNC?",
    options: [
      "Células de Schwann",
      "Oligodendrócitos",
      "Astrócitos",
      "Microglia",
    ],
    correctIndex: 1,
    explanation:
      "No SNC, os oligodendrócitos formam a bainha de mielina, enquanto no SNP essa função é exercida pelas células de Schwann. Um único oligodendrócito pode mielinizar vários axônios.",
  },
  {
    id: 5,
    topic: "Tecido Ósseo",
    question: "Quais são as células responsáveis pela reabsorção óssea?",
    options: ["Osteoblastos", "Osteócitos", "Osteoclastos", "Condroblastos"],
    correctIndex: 2,
    explanation:
      "Os osteoclastos são células gigantes multinucleadas derivadas de monócitos que promovem a reabsorção óssea através da liberação de enzimas lisossomais e ácidos.",
  },
];

const QuizSection = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[currentQ];

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    if (index === q.correctIndex) setScore((s) => s + 1);
  };

  const next = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="text-6xl mb-4">{score >= 4 ? "🎉" : score >= 3 ? "👍" : "📚"}</div>
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
          Quiz Finalizado!
        </h3>
        <p className="text-lg text-muted-foreground mb-6">
          Você acertou <span className="font-bold text-primary">{score}</span> de{" "}
          <span className="font-bold">{questions.length}</span> questões.
        </p>
        <Button onClick={restart} className="gap-2">
          <RotateCcw className="w-4 h-4" />
          Recomeçar
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-muted-foreground">
          Questão {currentQ + 1} de {questions.length}
        </span>
        <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-semibold">
          {q.topic}
        </span>
      </div>

      <div className="w-full bg-muted rounded-full h-1.5 mb-8">
        <div
          className="hero-gradient h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
        />
      </div>

      <h3 className="font-serif text-xl font-bold text-foreground mb-6 leading-relaxed">
        {q.question}
      </h3>

      <div className="space-y-3 mb-6">
        {q.options.map((opt, i) => {
          let classes =
            "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-sm font-medium ";
          if (!showResult) {
            classes +=
              "border-border hover:border-primary/50 hover:bg-quiz-selected cursor-pointer";
          } else if (i === q.correctIndex) {
            classes += "border-quiz-correct bg-quiz-correct/10 text-foreground";
          } else if (i === selected) {
            classes += "border-quiz-incorrect bg-quiz-incorrect/10 text-foreground";
          } else {
            classes += "border-border opacity-50";
          }

          return (
            <button key={i} className={classes} onClick={() => handleSelect(i)}>
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{opt}</span>
                {showResult && i === q.correctIndex && (
                  <CheckCircle2 className="w-5 h-5 text-quiz-correct ml-auto shrink-0" />
                )}
                {showResult && i === selected && i !== q.correctIndex && (
                  <XCircle className="w-5 h-5 text-quiz-incorrect ml-auto shrink-0" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="bg-secondary rounded-xl p-4 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-sm font-semibold text-secondary-foreground mb-1">💡 Explicação</p>
          <p className="text-sm text-secondary-foreground/80 leading-relaxed">
            {q.explanation}
          </p>
        </div>
      )}

      {showResult && (
        <div className="flex justify-end">
          <Button onClick={next} className="gap-2">
            {currentQ < questions.length - 1 ? "Próxima" : "Ver Resultado"}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
