import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Lock, Unlock, Timer, Trophy, RotateCcw, ArrowRight, Star, Zap, Brain, Shield, Flame, AlertTriangle, CheckCircle2, XCircle, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { escapeScenarios, type EscapeScenario, type Puzzle } from "@/data/escapeRoomScenarios";

function shuffleArr<T>(arr: T[]): T[] {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [s[i], s[j]] = [s[j], s[i]]; }
  return s;
}

const difficultyConfig = {
  "Fácil": { color: "text-emerald-500", bg: "bg-emerald-500/10 border-emerald-500/30", icon: Star, label: "⭐" },
  "Médio": { color: "text-amber-500", bg: "bg-amber-500/10 border-amber-500/30", icon: Zap, label: "⚡" },
  "Difícil": { color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/30", icon: Flame, label: "🔥" },
  "Extremo": { color: "text-red-500", bg: "bg-red-500/10 border-red-500/30", icon: AlertTriangle, label: "💀" },
};

const themes = ["Todos", ...Array.from(new Set(escapeScenarios.map(s => s.theme)))];

// ===== PUZZLE RENDERER =====
const PuzzleRenderer = ({ puzzle, onAnswer, answered, userAnswer }: {
  puzzle: Puzzle;
  onAnswer: (answer: string | number) => void;
  answered: boolean;
  userAnswer: string | number | null;
}) => {
  // Shuffle options for multiple choice, memoized per puzzle
  const shuffledData = useMemo(() => {
    if ((puzzle.type === "multiple_choice" || puzzle.type === "image_identify") && puzzle.options) {
      const indices = puzzle.options.map((_, i) => i);
      const si = shuffleArr(indices);
      return {
        options: si.map((i) => puzzle.options![i]),
        correctIndex: si.indexOf(puzzle.correctAnswer as number),
        indexMap: si, // shuffledPos -> originalPos
      };
    }
    return null;
  }, [puzzle]);

  const isCorrect = userAnswer !== null && String(userAnswer) === String(
    shuffledData ? shuffledData.correctIndex : puzzle.correctAnswer
  );

  if (puzzle.type === "multiple_choice" || puzzle.type === "image_identify") {
    const opts = shuffledData!.options;
    const correctIdx = shuffledData!.correctIndex;
    return (
      <div className="space-y-3">
        <p className="font-serif text-lg font-bold text-foreground leading-relaxed">{puzzle.question}</p>
        {puzzle.hint && <p className="text-sm text-muted-foreground italic">💡 Dica: {puzzle.hint}</p>}
        <div className="space-y-2">
          {opts.map((opt, i) => {
            let cls = "w-full text-left p-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 ";
            if (!answered) cls += "border-border hover:border-primary/50 cursor-pointer hover:shadow-md";
            else if (i === correctIdx) cls += "border-emerald-500 bg-emerald-500/10";
            else if (i === userAnswer) cls += "border-red-500 bg-red-500/10";
            else cls += "border-border opacity-40";
            return (
              <button key={i} className={cls} onClick={() => !answered && onAnswer(i)} disabled={answered}>
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {answered && i === correctIdx && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                  {answered && i === userAnswer && i !== correctIdx && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (puzzle.type === "true_false") {
    return (
      <div className="space-y-4">
        <p className="font-serif text-lg font-bold text-foreground leading-relaxed">"{puzzle.question}"</p>
        {puzzle.hint && <p className="text-sm text-muted-foreground italic">💡 Dica: {puzzle.hint}</p>}
        {!answered ? (
          <div className="flex gap-3 justify-center">
            <Button onClick={() => onAnswer("Verdadeiro")} size="lg" variant="outline" className="gap-2 px-8 hover:border-emerald-500">✅ Verdadeiro</Button>
            <Button onClick={() => onAnswer("Falso")} size="lg" variant="outline" className="gap-2 px-8 hover:border-red-500">❌ Falso</Button>
          </div>
        ) : (
          <div className={`p-4 rounded-xl border-2 ${isCorrect ? "border-emerald-500 bg-emerald-500/10" : "border-red-500 bg-red-500/10"}`}>
            <p className="text-sm font-semibold mb-1">
              {isCorrect ? "✅ Correto!" : "❌ Incorreto!"} A afirmação é {puzzle.correctAnswer as string}.
            </p>
          </div>
        )}
      </div>
    );
  }

  if (puzzle.type === "fill_blank") {
    return (
      <div className="space-y-4">
        <p className="font-serif text-lg font-bold text-foreground leading-relaxed">{puzzle.question}</p>
        {puzzle.hint && <p className="text-sm text-muted-foreground italic">💡 Dica: {puzzle.hint}</p>}
        <div className="grid grid-cols-2 gap-2">
          {puzzle.options?.map((opt) => {
            let cls = "p-3 rounded-lg border-2 text-sm font-medium transition-all text-left ";
            if (!answered) cls += "border-border hover:border-primary/50 cursor-pointer";
            else if (opt === puzzle.correctAnswer) cls += "border-emerald-500 bg-emerald-500/10";
            else if (opt === userAnswer) cls += "border-red-500 bg-red-500/10";
            else cls += "border-border opacity-40";
            return (
              <button key={opt} className={cls} onClick={() => !answered && onAnswer(opt)} disabled={answered}>{opt}</button>
            );
          })}
        </div>
      </div>
    );
  }

  if (puzzle.type === "order") {
    const parts = (puzzle.correctAnswer as string).split(",");
    const [userOrder, setUserOrder] = useState<string[]>([]);
    const [remaining, setRemaining] = useState<string[]>(() => [...parts].sort(() => Math.random() - 0.5));

    const addToOrder = (item: string) => {
      if (answered) return;
      const newOrder = [...userOrder, item];
      setUserOrder(newOrder);
      setRemaining(remaining.filter(r => r !== item));
      if (newOrder.length === parts.length) {
        onAnswer(newOrder.join(","));
      }
    };

    const reset = () => {
      setUserOrder([]);
      setRemaining([...parts].sort(() => Math.random() - 0.5));
    };

    return (
      <div className="space-y-4">
        <p className="font-serif text-lg font-bold text-foreground leading-relaxed">{puzzle.question}</p>
        {puzzle.hint && <p className="text-sm text-muted-foreground italic">💡 Dica: {puzzle.hint}</p>}
        
        {userOrder.length > 0 && (
          <div className="flex flex-wrap gap-2 p-3 rounded-lg bg-secondary/50 min-h-[48px]">
            {userOrder.map((item, i) => (
              <span key={i} className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                answered ? (item === parts[i] ? "bg-emerald-500/20 text-emerald-700" : "bg-red-500/20 text-red-700") : "bg-primary/10 text-primary"
              }`}>
                {i + 1}. {item}
              </span>
            ))}
          </div>
        )}

        {!answered && remaining.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {remaining.map((item) => (
              <button key={item} onClick={() => addToOrder(item)} className="px-3 py-1.5 rounded-full border-2 border-border text-sm font-medium hover:border-primary/50 transition-all">
                {item}
              </button>
            ))}
          </div>
        )}

        {!answered && userOrder.length > 0 && (
          <Button variant="ghost" size="sm" onClick={reset}>↺ Recomeçar ordem</Button>
        )}
      </div>
    );
  }

  return null;
};

// ===== ACTIVE GAME =====
const ActiveEscapeRoom = ({ scenario, onExit }: { scenario: EscapeScenario; onExit: () => void }) => {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(scenario.timeSeconds);
  const [gameOver, setGameOver] = useState(false);
  const [escaped, setEscaped] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string | number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [shakeEffect, setShakeEffect] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleAnswer = useCallback((answer: string | number) => {
    setUserAnswer(answer);
    setAnswered(true);
    setShowExplanation(true);
    const puzzle = scenario.puzzles[currentPuzzle];
    const correct = String(answer) === String(puzzle.correctAnswer);
    if (correct) {
      setScore(s => s + 1);
      setPulseEffect(true);
      setTimeout(() => setPulseEffect(false), 600);
    } else {
      setShakeEffect(true);
      setTimeout(() => setShakeEffect(false), 500);
    }
  }, [currentPuzzle, scenario.puzzles]);

  const nextPuzzle = () => {
    if (currentPuzzle < scenario.puzzles.length - 1) {
      setCurrentPuzzle(c => c + 1);
      setAnswered(false);
      setUserAnswer(null);
      setShowExplanation(false);
    } else {
      clearInterval(timerRef.current);
      const totalCorrect = score;
      if (totalCorrect >= Math.ceil(scenario.puzzles.length * 0.6)) {
        setEscaped(true);
      }
      setGameOver(true);
    }
  };

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
  const timePercent = (timeLeft / scenario.timeSeconds) * 100;
  const isTimeCritical = timeLeft <= 30;

  if (gameOver) {
    const pct = Math.round((score / scenario.puzzles.length) * 100);
    return (
      <div className="text-center py-8 animate-fade-in">
        <div className={`text-7xl mb-4 ${escaped ? "animate-bounce" : ""}`}>{escaped ? "🔓" : "🔒"}</div>
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
          {escaped ? "Você Escapou! 🎉" : timeLeft === 0 ? "⏰ Tempo Esgotado!" : "Quase lá!"}
        </h3>
        <p className="text-lg text-muted-foreground mb-1">
          {score}/{scenario.puzzles.length} enigmas ({pct}%) — {formatTime(scenario.timeSeconds - timeLeft)} gastos
        </p>
        <div className="flex items-center justify-center gap-1 mb-6">
          {Array.from({ length: scenario.puzzles.length }, (_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full ${i < score ? "bg-emerald-500" : "bg-red-500/40"}`} />
          ))}
        </div>
        <div className="flex gap-3 justify-center">
          <Button onClick={onExit} variant="outline" className="gap-2"><ArrowRight className="w-4 h-4" />Outros cenários</Button>
          <Button onClick={() => { setCurrentPuzzle(0); setScore(0); setTimeLeft(scenario.timeSeconds); setGameOver(false); setEscaped(false); setAnswered(false); setUserAnswer(null); setShowExplanation(false); }} className="gap-2"><RotateCcw className="w-4 h-4" />Tentar novamente</Button>
        </div>
      </div>
    );
  }

  const puzzle = scenario.puzzles[currentPuzzle];
  const dc = difficultyConfig[scenario.difficulty];

  return (
    <div className={`${shakeEffect ? "animate-shake" : ""}`}>
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-1 rounded-full border ${dc.bg} font-semibold`}>{dc.label} {scenario.difficulty}</span>
          <span className="text-sm text-muted-foreground">{currentPuzzle + 1}/{scenario.puzzles.length}</span>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${isTimeCritical ? "bg-red-500/10 text-red-500 animate-pulse" : "bg-secondary text-secondary-foreground"}`}>
          <Timer className="w-4 h-4" />
          <span className="font-mono font-bold text-sm">{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* Time progress */}
      <div className="mb-6">
        <Progress value={timePercent} className={`h-2 ${isTimeCritical ? "[&>div]:bg-red-500" : "[&>div]:bg-primary"}`} />
      </div>

      {/* Puzzle progress dots */}
      <div className="flex items-center gap-1 mb-6 justify-center">
        {scenario.puzzles.map((_, i) => (
          <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all ${
            i === currentPuzzle ? "bg-primary scale-125 ring-2 ring-primary/30" :
            i < currentPuzzle ? "bg-emerald-500" : "bg-border"
          }`} />
        ))}
      </div>

      {/* Score */}
      <div className={`text-center mb-4 transition-transform ${pulseEffect ? "scale-110" : "scale-100"}`}>
        <span className="text-sm font-semibold text-primary">🔑 {score} enigmas decifrados</span>
      </div>

      {/* Puzzle card */}
      <div className="bg-card border border-border rounded-2xl p-6 card-shadow mb-4">
        <PuzzleRenderer puzzle={puzzle} onAnswer={handleAnswer} answered={answered} userAnswer={userAnswer} />
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="bg-secondary rounded-xl p-4 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-sm font-semibold text-secondary-foreground mb-1">💡 Explicação</p>
          <p className="text-sm text-secondary-foreground/80 leading-relaxed">{puzzle.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {answered && (
        <div className="flex justify-between items-center">
          <Button variant="ghost" size="sm" onClick={onExit}>← Sair</Button>
          <Button onClick={nextPuzzle} className="gap-2">
            {currentPuzzle < scenario.puzzles.length - 1 ? "Próximo Enigma" : "Ver Resultado"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

// ===== MAIN COMPONENT =====
const EscapeRoomSection = () => {
  const [activeScenario, setActiveScenario] = useState<EscapeScenario | null>(null);
  const [filterTheme, setFilterTheme] = useState("Todos");
  const [filterDiff, setFilterDiff] = useState<string>("Todos");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = escapeScenarios.filter(s => {
    if (filterTheme !== "Todos" && s.theme !== filterTheme) return false;
    if (filterDiff !== "Todos" && s.difficulty !== filterDiff) return false;
    return true;
  });

  if (activeScenario) {
    return (
      <div>
        <ActiveEscapeRoom scenario={activeScenario} onExit={() => setActiveScenario(null)} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="rounded-xl bg-card border border-border p-4 text-center card-shadow">
          <p className="text-2xl font-bold text-foreground">{escapeScenarios.length}</p>
          <p className="text-xs text-muted-foreground">Cenários</p>
        </div>
        <div className="rounded-xl bg-card border border-border p-4 text-center card-shadow">
          <p className="text-2xl font-bold text-foreground">{escapeScenarios.reduce((a, s) => a + s.puzzles.length, 0)}</p>
          <p className="text-xs text-muted-foreground">Enigmas</p>
        </div>
        <div className="rounded-xl bg-card border border-border p-4 text-center card-shadow">
          <p className="text-2xl font-bold text-foreground">{themes.length - 1}</p>
          <p className="text-xs text-muted-foreground">Temas</p>
        </div>
        <div className="rounded-xl bg-card border border-border p-4 text-center card-shadow">
          <p className="text-2xl font-bold text-foreground">4</p>
          <p className="text-xs text-muted-foreground">Dificuldades</p>
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-3">
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tema</p>
          <div className="flex flex-wrap gap-1.5">
            {themes.map(t => (
              <button key={t} onClick={() => setFilterTheme(t)} className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${filterTheme === t ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/50"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Dificuldade</p>
          <div className="flex gap-1.5">
            {["Todos", "Fácil", "Médio", "Difícil", "Extremo"].map(d => (
              <button key={d} onClick={() => setFilterDiff(d)} className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${filterDiff === d ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/50"}`}>
                {d !== "Todos" ? difficultyConfig[d as keyof typeof difficultyConfig].label + " " : ""}{d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scenarios list */}
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">{filtered.length} cenários encontrados</p>
        {filtered.map(scenario => {
          const dc = difficultyConfig[scenario.difficulty];
          return (
            <div key={scenario.id} className="rounded-xl bg-card border border-border card-shadow overflow-hidden transition-all hover:card-shadow-hover">
              <button onClick={() => setExpanded(expanded === scenario.id ? null : scenario.id)} className="w-full text-left p-4 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${dc.bg} shrink-0`}>
                  <Lock className={`w-5 h-5 ${dc.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif text-base font-bold text-foreground">{scenario.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${dc.bg} font-semibold`}>{dc.label} {scenario.difficulty}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{scenario.theme} • {scenario.puzzles.length} enigmas • {Math.floor(scenario.timeSeconds / 60)} min</p>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ${expanded === scenario.id ? "rotate-180" : ""}`} />
              </button>
              {expanded === scenario.id && (
                <div className="px-4 pb-4 pt-0 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="border-t border-border pt-3">
                    <p className="text-sm text-foreground/80 mb-3">{scenario.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Timer className="w-3.5 h-3.5" /> {Math.floor(scenario.timeSeconds / 60)}:{(scenario.timeSeconds % 60).toString().padStart(2, "0")}</span>
                      <span className="flex items-center gap-1"><Brain className="w-3.5 h-3.5" /> {scenario.puzzles.length} enigmas</span>
                      <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> {Math.ceil(scenario.puzzles.length * 0.6)} para escapar</span>
                    </div>
                    <Button onClick={() => setActiveScenario(scenario)} className="gap-2 w-full">
                      <Sparkles className="w-4 h-4" />
                      Entrar no Escape Room
                    </Button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EscapeRoomSection;
