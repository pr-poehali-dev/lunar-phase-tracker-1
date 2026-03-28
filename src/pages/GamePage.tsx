import { useState, useEffect, useCallback } from "react";

const LEVELS = [
  {
    level: 1,
    title: "Новичок",
    description: "Базовые знания о наркотиках",
    color: "#4CAF50",
    timePerQuestion: 20,
    pointsPerCorrect: 100,
    questions: [
      {
        question: "Что такое наркотическая зависимость?",
        options: [
          "Сильное желание снова употребить вещество, от которого трудно отказаться",
          "Обычная привычка, которую легко бросить",
          "Медицинский термин для обозначения аллергии",
          "Временное состояние после стресса",
        ],
        correct: 0,
        explanation: "Зависимость — это хроническое заболевание мозга, при котором человек не может контролировать употребление вещества, несмотря на вред.",
      },
      {
        question: "Какой орган больше всего страдает при употреблении алкоголя?",
        options: ["Сердце", "Печень", "Лёгкие", "Почки"],
        correct: 1,
        explanation: "Печень — главный орган, перерабатывающий алкоголь. При хроническом употреблении развивается цирроз — необратимое разрушение печени.",
      },
      {
        question: "Как быстро может развиться зависимость от героина?",
        options: ["Только через несколько лет", "После 100+ употреблений", "Уже после нескольких раз", "Зависимость не развивается"],
        correct: 2,
        explanation: "Героин — одно из самых опасных веществ. Физическая зависимость может сформироваться уже после 2–3 употреблений.",
      },
      {
        question: "Что такое «ломка»?",
        options: [
          "Слуховые галлюцинации",
          "Синдром отмены — мучительное состояние при прекращении употребления",
          "Эйфория от наркотика",
          "Головная боль после алкоголя",
        ],
        correct: 1,
        explanation: "Синдром отмены (ломка) — тяжёлые физические и психические симптомы при прекращении употребления. Именно страх ломки удерживает людей в зависимости.",
      },
      {
        question: "Куда позвонить, если нужна помощь при зависимости?",
        options: ["112", "8-800-200-0-200", "01", "8-800-100-1-000"],
        correct: 1,
        explanation: "8-800-200-0-200 — бесплатная горячая линия по вопросам наркозависимости. Работает круглосуточно и анонимно по всей России.",
      },
    ],
  },
  {
    level: 2,
    title: "Знающий",
    description: "Последствия и признаки употребления",
    color: "#FF9800",
    timePerQuestion: 15,
    pointsPerCorrect: 200,
    questions: [
      {
        question: "Какой из этих признаков говорит о возможном употреблении наркотиков?",
        options: [
          "Резкая смена настроения, потеря интереса к увлечениям, ложь близким",
          "Хорошее настроение и активность",
          "Увеличение аппетита",
          "Отличная успеваемость в школе",
        ],
        correct: 0,
        explanation: "Резкие перемены в поведении — один из главных признаков. Важно также обратить внимание на изменение круга общения и финансовые проблемы.",
      },
      {
        question: "На сколько лет употребление тяжёлых наркотиков сокращает жизнь в среднем?",
        options: ["На 1–2 года", "На 5 лет", "На 10–15 лет", "Не влияет на продолжительность жизни"],
        correct: 2,
        explanation: "По данным ВОЗ, регулярное употребление тяжёлых наркотиков сокращает жизнь в среднем на 10–15 лет из-за разрушения органов и высокого риска передозировки.",
      },
      {
        question: "Что такое передозировка?",
        options: [
          "Приятное ощущение от большой дозы",
          "Опасное для жизни состояние при превышении дозы вещества",
          "Привыкание к наркотику",
          "Медицинская процедура лечения",
        ],
        correct: 1,
        explanation: "Передозировка — острое отравление, которое может привести к остановке дыхания, сердца и смерти. Это главная причина смерти среди наркозависимых.",
      },
      {
        question: "Почему подростки более уязвимы к наркотикам, чем взрослые?",
        options: [
          "Они употребляют больше",
          "Мозг подростка ещё формируется и сильнее реагирует на химические воздействия",
          "У них слабее иммунитет",
          "Они легче переносят последствия",
        ],
        correct: 1,
        explanation: "Мозг человека формируется до 25 лет. Наркотики в этот период наносят особенно тяжёлый и необратимый урон — нарушают развитие нейронных связей.",
      },
      {
        question: "Что делать, если ты стал свидетелем передозировки?",
        options: [
          "Уйти, чтобы не быть причастным",
          "Дать человеку поспать",
          "Немедленно вызвать скорую помощь (103)",
          "Дать выпить воды и ждать",
        ],
        correct: 2,
        explanation: "При передозировке каждая минута на счету. Немедленно вызывай 103. В России действует иммунитет для звонящих о передозировке — тебя не привлекут к ответственности.",
      },
    ],
  },
  {
    level: 3,
    title: "Эксперт",
    description: "Глубокие знания и мифы",
    color: "#F44336",
    timePerQuestion: 12,
    pointsPerCorrect: 350,
    questions: [
      {
        question: "Миф или факт: «Лёгкие» наркотики не вызывают зависимости?",
        options: [
          "Факт — они безопасны",
          "Миф — любое психоактивное вещество может вызвать зависимость",
          "Зависит от вещества",
          "Правда только для марихуаны",
        ],
        correct: 1,
        explanation: "Это один из самых опасных мифов. Все психоактивные вещества способны вызывать зависимость. «Лёгкие» наркотики часто становятся воротами к более тяжёлым.",
      },
      {
        question: "Что происходит с нейромедиатором дофамином при употреблении наркотиков?",
        options: [
          "Его выработка прекращается навсегда",
          "Наркотик вызывает выброс дофамина в 2–10 раз сильнее, чем естественные удовольствия",
          "Дофамин не связан с наркотиками",
          "Дофамин разрушается",
        ],
        correct: 1,
        explanation: "Наркотики захватывают систему вознаграждения мозга, вызывая сверхестественный выброс дофамина. После этого обычные радости — еда, общение, хобби — кажутся бледными.",
      },
      {
        question: "Какой процент людей, попробовавших героин, становятся зависимыми?",
        options: ["Около 5%", "Около 15%", "Около 23%", "Около 50%"],
        correct: 2,
        explanation: "По исследованиям, около 23% людей, попробовавших героин, становятся зависимыми. Это один из самых высоких показателей среди всех психоактивных веществ.",
      },
      {
        question: "Что такое «толерантность» в контексте наркотиков?",
        options: [
          "Способность переносить наркотики без последствий",
          "Уважение к людям с зависимостью",
          "Снижение эффекта от прежней дозы — человек вынужден увеличивать дозу",
          "Иммунитет к наркотикам",
        ],
        correct: 2,
        explanation: "Толерантность — когда мозг адаптируется к наркотику и для того же эффекта нужно всё больше вещества. Это ловушка: большие дозы увеличивают риск передозировки.",
      },
      {
        question: "Какова главная причина, по которой люди начинают употреблять наркотики?",
        options: [
          "Генетическая предрасположенность",
          "Давление окружения, желание снять стресс или «просто попробовать»",
          "Слабая воля",
          "Недостаток витаминов",
        ],
        correct: 1,
        explanation: "По исследованиям, главные триггеры — социальное давление сверстников, стресс и любопытство. Именно поэтому так важно уметь говорить «нет» и иметь здоровое окружение.",
      },
    ],
  },
];

type GameState = "menu" | "playing" | "levelComplete" | "gameOver" | "victory";

export default function GamePage() {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [combo, setCombo] = useState(0);
  const [lastPoints, setLastPoints] = useState<number | null>(null);
  const [showPoints, setShowPoints] = useState(false);

  const level = LEVELS[currentLevel];
  const question = level?.questions[currentQuestion];

  const handleTimeout = useCallback(() => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(-1);
    setShowExplanation(true);
    setTimerActive(false);
    setCombo(0);
    setLives((prev) => prev - 1);
  }, [selectedAnswer]);

  useEffect(() => {
    if (!timerActive || timeLeft <= 0) return;
    const t = setTimeout(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearTimeout(t);
  }, [timerActive, timeLeft, handleTimeout]);

  const startGame = () => {
    setCurrentLevel(0);
    setCurrentQuestion(0);
    setLives(3);
    setScore(0);
    setCombo(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setTimeLeft(LEVELS[0].timePerQuestion);
    setTimerActive(true);
    setGameState("playing");
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setTimerActive(false);
    setShowExplanation(true);

    if (index === question.correct) {
      const newCombo = combo + 1;
      setCombo(newCombo);
      const bonus = newCombo >= 3 ? Math.floor(level.pointsPerCorrect * 0.5) : newCombo >= 2 ? Math.floor(level.pointsPerCorrect * 0.25) : 0;
      const pts = level.pointsPerCorrect + bonus;
      setScore((s) => s + pts);
      setLastPoints(pts);
      setShowPoints(true);
      setTimeout(() => setShowPoints(false), 1500);
    } else {
      setCombo(0);
      setLives((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    const isLastQuestion = currentQuestion + 1 >= level.questions.length;
    const isLastLevel = currentLevel + 1 >= LEVELS.length;

    if (lives <= 0 && selectedAnswer !== question.correct) {
      if (lives - 1 <= 0) {
        setGameState("gameOver");
        return;
      }
    }

    if (lives <= 0) {
      setGameState("gameOver");
      return;
    }

    if (isLastQuestion) {
      if (isLastLevel) {
        setGameState("victory");
      } else {
        setGameState("levelComplete");
      }
    } else {
      setCurrentQuestion((q) => q + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(level.timePerQuestion);
      setTimerActive(true);
    }
  };

  const nextLevel = () => {
    const next = currentLevel + 1;
    setCurrentLevel(next);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setTimeLeft(LEVELS[next].timePerQuestion);
    setTimerActive(true);
    setGameState("playing");
  };

  const timerPercent = timeLeft / level?.timePerQuestion * 100;
  const timerColor = timeLeft > level?.timePerQuestion * 0.5 ? "#4CAF50" : timeLeft > level?.timePerQuestion * 0.25 ? "#FF9800" : "#F44336";

  return (
    <div className="min-h-screen bg-[#F7F5F3] flex flex-col items-center justify-start font-sans">
      {/* Шапка */}
      <div className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] flex justify-center">
        <div className="w-full max-w-[700px] px-4 h-14 flex items-center justify-between">
          <a href="/" className="text-[#37322F] font-semibold text-base hover:opacity-70 transition-opacity">
            ← НетНаркотикам
          </a>
          {gameState === "playing" && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <span key={i} className={`text-xl transition-all duration-300 ${i < lives ? "opacity-100" : "opacity-20 grayscale"}`}>❤️</span>
                ))}
              </div>
              <div className="bg-[#37322F] text-white text-sm font-bold px-3 py-1 rounded-full">
                {score.toLocaleString()} очков
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-[700px] px-4 py-8 flex flex-col items-center gap-6">

        {/* МЕНЮ */}
        {gameState === "menu" && (
          <div className="w-full flex flex-col items-center gap-6 mt-4">
            <div className="text-center flex flex-col gap-3">
              <div className="text-6xl">🎮</div>
              <h1 className="text-[#37322F] text-3xl sm:text-4xl font-bold font-serif">Игра «Знай правду»</h1>
              <p className="text-[#605A57] text-base leading-7 max-w-[480px]">
                Проверь свои знания о наркотиках и их последствиях. 3 уровня сложности, жизни, очки и бонусы за серию правильных ответов.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
              {LEVELS.map((lvl) => (
                <div key={lvl.level} className="bg-white border border-[#E0DEDB] rounded-xl p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: lvl.color }} />
                    <span className="text-[#37322F] font-semibold text-sm">Уровень {lvl.level}: {lvl.title}</span>
                  </div>
                  <p className="text-[#605A57] text-xs leading-5">{lvl.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-[#9B9490] bg-[#F7F5F3] px-2 py-0.5 rounded-full">⏱ {lvl.timePerQuestion}с</span>
                    <span className="text-[10px] text-[#9B9490] bg-[#F7F5F3] px-2 py-0.5 rounded-full">+{lvl.pointsPerCorrect} за ответ</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full bg-white border border-[#E0DEDB] rounded-xl p-4 flex flex-col sm:flex-row gap-3 text-sm text-[#605A57]">
              <div className="flex items-center gap-2"><span>❤️❤️❤️</span><span>3 жизни на всю игру</span></div>
              <div className="flex items-center gap-2"><span>🔥</span><span>Комбо × 1.5 за 3 правильных подряд</span></div>
              <div className="flex items-center gap-2"><span>⚡</span><span>Время ограничено на каждый вопрос</span></div>
            </div>

            <button
              onClick={startGame}
              className="h-14 px-16 bg-[#37322F] rounded-full text-white text-lg font-semibold hover:bg-[#2A2520] transition-colors shadow-lg"
            >
              Начать игру
            </button>
          </div>
        )}

        {/* ИГРА */}
        {gameState === "playing" && question && (
          <div className="w-full flex flex-col gap-4">
            {/* Прогресс уровня */}
            <div className="flex items-center justify-between text-sm text-[#605A57]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: level.color }} />
                <span className="font-semibold" style={{ color: level.color }}>Уровень {level.level}: {level.title}</span>
              </div>
              <span>Вопрос {currentQuestion + 1} / {level.questions.length}</span>
            </div>

            {/* Прогресс-бар вопросов */}
            <div className="w-full h-1.5 bg-[#E0DEDB] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${(currentQuestion / level.questions.length) * 100}%`, background: level.color }}
              />
            </div>

            {/* Таймер */}
            <div className="w-full flex items-center gap-3">
              <div className="flex-1 h-2 bg-[#E0DEDB] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-linear"
                  style={{ width: `${timerPercent}%`, background: timerColor }}
                />
              </div>
              <div className="text-sm font-bold min-w-[32px] text-right" style={{ color: timerColor }}>
                {timeLeft}с
              </div>
            </div>

            {/* Комбо */}
            {combo >= 2 && (
              <div className="flex justify-center">
                <div className="bg-orange-100 border border-orange-300 text-orange-700 text-sm font-bold px-4 py-1.5 rounded-full animate-pulse">
                  🔥 Комбо x{combo}! {combo >= 3 ? "+50% к очкам" : "+25% к очкам"}
                </div>
              </div>
            )}

            {/* Вопрос */}
            <div className="bg-white border border-[#E0DEDB] rounded-2xl p-6 relative overflow-hidden">
              {showPoints && lastPoints && (
                <div className="absolute top-3 right-3 text-green-600 font-bold text-lg animate-bounce">
                  +{lastPoints}
                </div>
              )}
              <p className="text-[#37322F] text-lg font-semibold leading-tight mb-5">{question.question}</p>

              <div className="flex flex-col gap-2.5">
                {question.options.map((opt, i) => {
                  let cls = "w-full px-5 py-3.5 rounded-xl border text-left text-sm font-medium transition-all duration-200 ";
                  if (selectedAnswer === null) {
                    cls += "border-[#E0DEDB] text-[#49423D] hover:border-[#37322F] hover:bg-[#F7F5F3] cursor-pointer";
                  } else if (i === question.correct) {
                    cls += "border-green-500 bg-green-50 text-green-800";
                  } else if (i === selectedAnswer && i !== question.correct) {
                    cls += "border-red-400 bg-red-50 text-red-700";
                  } else {
                    cls += "border-[#E0DEDB] text-[#B0A9A4] cursor-default";
                  }

                  return (
                    <button key={i} className={cls} onClick={() => handleAnswer(i)}>
                      <span className="mr-2 text-[#B0A9A4]">{String.fromCharCode(65 + i)}.</span>
                      {opt}
                      {selectedAnswer !== null && i === question.correct && <span className="ml-2">✅</span>}
                      {selectedAnswer === i && i !== question.correct && <span className="ml-2">❌</span>}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer === -1 && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
                  ⏰ Время вышло! Жизнь потеряна.
                </div>
              )}
            </div>

            {/* Объяснение */}
            {showExplanation && (
              <div className="bg-[#F7F5F3] border border-[#E0DEDB] rounded-xl p-4">
                <p className="text-[#605A57] text-sm leading-6">{question.explanation}</p>
              </div>
            )}

            {/* Кнопка далее */}
            {showExplanation && (
              <button
                onClick={handleNext}
                className="w-full h-12 bg-[#37322F] rounded-full text-white font-semibold hover:bg-[#2A2520] transition-colors"
              >
                {currentQuestion + 1 < level.questions.length
                  ? "Следующий вопрос →"
                  : currentLevel + 1 < LEVELS.length
                    ? "Завершить уровень →"
                    : "Завершить игру →"}
              </button>
            )}
          </div>
        )}

        {/* УРОВЕНЬ ПРОЙДЕН */}
        {gameState === "levelComplete" && (
          <div className="w-full flex flex-col items-center gap-6 mt-4 text-center">
            <div className="text-6xl">🏅</div>
            <div>
              <h2 className="text-[#37322F] text-3xl font-bold font-serif mb-2">Уровень {level.level} пройден!</h2>
              <p className="text-[#605A57] text-base">Отличная работа! Переходим на следующий уровень.</p>
            </div>
            <div className="bg-white border border-[#E0DEDB] rounded-2xl p-6 w-full flex flex-col gap-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#605A57]">Текущий счёт</span>
                <span className="text-[#37322F] font-bold text-lg">{score.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#605A57]">Осталось жизней</span>
                <span>{Array.from({ length: lives }).map((_, i) => <span key={i}>❤️</span>)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#605A57]">Следующий уровень</span>
                <span className="font-semibold" style={{ color: LEVELS[currentLevel + 1]?.color }}>
                  {LEVELS[currentLevel + 1]?.title}
                </span>
              </div>
            </div>
            <button
              onClick={nextLevel}
              className="h-14 px-12 bg-[#37322F] rounded-full text-white text-base font-semibold hover:bg-[#2A2520] transition-colors"
            >
              Уровень {currentLevel + 2}: {LEVELS[currentLevel + 1]?.title} →
            </button>
          </div>
        )}

        {/* GAME OVER */}
        {gameState === "gameOver" && (
          <div className="w-full flex flex-col items-center gap-6 mt-4 text-center">
            <div className="text-6xl">💀</div>
            <div>
              <h2 className="text-[#37322F] text-3xl font-bold font-serif mb-2">Игра окончена</h2>
              <p className="text-[#605A57] text-base">Жизни закончились. Не сдавайся — попробуй ещё раз!</p>
            </div>
            <div className="bg-white border border-[#E0DEDB] rounded-2xl p-6 w-full flex flex-col gap-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#605A57]">Набрано очков</span>
                <span className="text-[#37322F] font-bold text-2xl">{score.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#605A57]">Дошёл до</span>
                <span className="font-semibold">Уровень {currentLevel + 1}, вопрос {currentQuestion + 1}</span>
              </div>
            </div>
            <div className="w-full bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <p className="font-semibold mb-1">💡 Знание спасает жизни</p>
              <p>Если нужна помощь: <strong>8-800-200-0-200</strong> — бесплатно, анонимно, круглосуточно.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={startGame} className="h-12 px-8 bg-[#37322F] rounded-full text-white font-semibold hover:bg-[#2A2520] transition-colors">
                Играть снова
              </button>
              <a href="/" className="h-12 px-8 bg-white border border-[#E0DEDB] rounded-full text-[#37322F] font-semibold hover:bg-[#F7F5F3] transition-colors flex items-center">
                На главную
              </a>
            </div>
          </div>
        )}

        {/* ПОБЕДА */}
        {gameState === "victory" && (
          <div className="w-full flex flex-col items-center gap-6 mt-4 text-center">
            <div className="text-6xl">🏆</div>
            <div>
              <h2 className="text-[#37322F] text-3xl font-bold font-serif mb-2">Ты прошёл все уровни!</h2>
              <p className="text-[#605A57] text-base max-w-[460px]">
                Поздравляем! Ты настоящий эксперт по теме борьбы с наркотиками. Поделись игрой с друзьями.
              </p>
            </div>
            <div className="bg-white border border-[#E0DEDB] rounded-2xl p-6 w-full flex flex-col gap-4">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[#605A57] text-sm">Итоговый счёт</span>
                <span className="text-[#37322F] font-bold text-4xl font-serif">{score.toLocaleString()}</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="bg-[#F7F5F3] rounded-xl p-3 flex flex-col gap-1">
                  <span className="text-[#9B9490] text-xs">Жизней осталось</span>
                  <span className="font-bold">{Array.from({ length: lives }).map((_, i) => <span key={i}>❤️</span>)}</span>
                </div>
                <div className="bg-[#F7F5F3] rounded-xl p-3 flex flex-col gap-1">
                  <span className="text-[#9B9490] text-xs">Уровней пройдено</span>
                  <span className="text-[#37322F] font-bold text-lg">{LEVELS.length}/3</span>
                </div>
                <div className="bg-[#F7F5F3] rounded-xl p-3 flex flex-col gap-1">
                  <span className="text-[#9B9490] text-xs">Вопросов отвечено</span>
                  <span className="text-[#37322F] font-bold text-lg">
                    {LEVELS.reduce((s, l) => s + l.questions.length, 0)}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800">
              <p className="font-semibold mb-1">🌟 Ты знаешь правду — помоги другим!</p>
              <p>Поделись этой игрой с друзьями. Каждый осведомлённый человек — это защита для окружающих.</p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <button onClick={startGame} className="h-12 px-8 bg-[#37322F] rounded-full text-white font-semibold hover:bg-[#2A2520] transition-colors">
                Играть снова
              </button>
              <a href="/" className="h-12 px-8 bg-white border border-[#E0DEDB] rounded-full text-[#37322F] font-semibold hover:bg-[#F7F5F3] transition-colors flex items-center">
                На главную
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
