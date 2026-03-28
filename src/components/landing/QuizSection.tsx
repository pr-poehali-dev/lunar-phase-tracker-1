import { useState } from "react";

const questions = [
  {
    question: "После скольких употреблений может развиться зависимость?",
    options: ["После 100+ раз", "После нескольких раз", "Только при ежедневном употреблении", "Никогда, если сильная воля"],
    correct: 1,
    explanation: "Зависимость может развиться уже после нескольких употреблений. Мозг запоминает ощущение и начинает требовать повторения.",
  },
  {
    question: "Какой возраст является самым уязвимым для начала употребления наркотиков?",
    options: ["До 10 лет", "15–25 лет", "30–40 лет", "После 50 лет"],
    correct: 1,
    explanation: "Подростковый и молодёжный возраст — самый опасный период. Мозг ещё формируется и особенно уязвим к воздействию наркотиков.",
  },
  {
    question: "Что происходит с мозгом при употреблении наркотиков?",
    options: [
      "Мозг становится умнее",
      "Ничего не происходит",
      "Нарушается выработка дофамина — человек не может чувствовать радость без наркотика",
      "Улучшается память",
    ],
    correct: 2,
    explanation: "Наркотики захватывают систему вознаграждения мозга. Человек теряет способность радоваться обычным вещам — еде, общению, хобби.",
  },
  {
    question: "Что делать, если друг предлагает попробовать наркотик?",
    options: [
      "Попробовать — один раз не считается",
      "Согласиться, чтобы не обидеть",
      "Твёрдо отказать и уйти из этой ситуации",
      "Промолчать и сделать вид, что не слышал",
    ],
    correct: 2,
    explanation: "Твёрдый отказ — единственно правильный выбор. Настоящий друг не будет давить и уважает твоё решение.",
  },
  {
    question: "Куда позвонить, если тебе или близкому нужна помощь с зависимостью?",
    options: ["101 (пожарная)", "102 (полиция)", "8-800-200-0-200 (горячая линия, бесплатно)", "112 (скорая)"],
    correct: 2,
    explanation: "8-800-200-0-200 — бесплатная горячая линия по вопросам наркозависимости. Работает круглосуточно и анонимно.",
  },
];

export default function QuizSection() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleStart = () => setStarted(true);

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setShowExplanation(true);
    if (index === questions[current].correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setShowExplanation(false);
  };

  const getScoreMessage = () => {
    if (score === 5) return { title: "Отличный результат!", text: "Ты отлично осведомлён о теме наркотиков. Поделись этой викториной с друзьями!" };
    if (score >= 3) return { title: "Хороший результат!", text: "Ты знаешь многое, но есть что узнать ещё. Почитай раздел «Факты о наркотиках»." };
    return { title: "Есть над чем поработать", text: "Не переживай — теперь ты знаешь больше. Изучи материалы сайта и попробуй снова." };
  };

  const q = questions[current];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
            <div className="w-[14px] h-[14px] flex items-center justify-center text-[#37322F]">🎯</div>
            <div className="text-center text-[#37322F] text-xs font-medium leading-3 font-sans">Интерактивная викторина</div>
          </div>
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-serif tracking-tight">
            Проверь свои знания
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            5 вопросов о наркотиках и их последствиях.
            <br />
            Проверь, что ты знаешь — и узнай что-то новое.
          </div>
        </div>
      </div>

      <div className="self-stretch border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center py-12 md:py-16 px-4">
        <div className="w-full max-w-[640px]">
          {!started && !finished && (
            <div className="flex flex-col items-center gap-8">
              <div className="w-full bg-white border border-[#E0DEDB] rounded-xl p-8 flex flex-col items-center gap-6 text-center">
                <div className="text-5xl">🧠</div>
                <div className="text-[#49423D] text-xl font-semibold font-sans">Готов проверить свои знания?</div>
                <div className="text-[#605A57] text-base font-normal leading-7 font-sans">
                  {questions.length} вопросов · Объяснения к каждому ответу · Займёт 3 минуты
                </div>
                <button
                  onClick={handleStart}
                  className="h-12 px-12 relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors"
                >
                  <span className="text-white text-[15px] font-medium leading-5 font-sans">Начать викторину</span>
                </button>
              </div>
            </div>
          )}

          {started && !finished && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[#605A57] text-sm font-medium font-sans">
                  Вопрос {current + 1} из {questions.length}
                </div>
                <div className="text-[#37322F] text-sm font-semibold font-sans">
                  {score} правильных
                </div>
              </div>
              <div className="w-full h-1.5 bg-[#E0DEDB] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#37322F] rounded-full transition-all duration-500"
                  style={{ width: `${((current) / questions.length) * 100}%` }}
                />
              </div>

              <div className="bg-white border border-[#E0DEDB] rounded-xl p-6 md:p-8">
                <div className="text-[#49423D] text-lg md:text-xl font-semibold leading-tight font-sans mb-6">
                  {q.question}
                </div>
                <div className="flex flex-col gap-3">
                  {q.options.map((opt, i) => {
                    let cls = "w-full px-5 py-4 rounded-lg border text-left text-sm font-medium font-sans transition-all duration-200 cursor-pointer ";
                    if (selected === null) {
                      cls += "border-[#E0DEDB] text-[#49423D] hover:border-[#37322F] hover:bg-[#F7F5F3]";
                    } else if (i === q.correct) {
                      cls += "border-green-500 bg-green-50 text-green-800";
                    } else if (i === selected && i !== q.correct) {
                      cls += "border-red-400 bg-red-50 text-red-800";
                    } else {
                      cls += "border-[#E0DEDB] text-[#9B9490] cursor-default";
                    }
                    return (
                      <button key={i} className={cls} onClick={() => handleSelect(i)}>
                        <span className="mr-2 text-[#9B9490]">{String.fromCharCode(65 + i)}.</span> {opt}
                      </button>
                    );
                  })}
                </div>

                {showExplanation && (
                  <div className="mt-5 p-4 bg-[#F7F5F3] border border-[#E0DEDB] rounded-lg">
                    <div className="text-[#49423D] text-sm font-semibold mb-1 font-sans">
                      {selected === q.correct ? "✅ Правильно!" : "❌ Неправильно"}
                    </div>
                    <div className="text-[#605A57] text-sm font-normal leading-6 font-sans">{q.explanation}</div>
                  </div>
                )}
              </div>

              {showExplanation && (
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="h-11 px-8 bg-[#37322F] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors"
                  >
                    <span className="text-white text-sm font-medium leading-5 font-sans">
                      {current + 1 < questions.length ? "Следующий вопрос →" : "Посмотреть результат →"}
                    </span>
                  </button>
                </div>
              )}
            </div>
          )}

          {finished && (
            <div className="flex flex-col items-center gap-6">
              <div className="w-full bg-white border border-[#E0DEDB] rounded-xl p-8 flex flex-col items-center gap-5 text-center">
                <div className="text-5xl">{score === 5 ? "🏆" : score >= 3 ? "👏" : "💪"}</div>
                <div className="text-[#37322F] text-4xl font-bold font-serif">{score}/{questions.length}</div>
                <div className="text-[#49423D] text-xl font-semibold font-sans">{getScoreMessage().title}</div>
                <div className="text-[#605A57] text-base font-normal leading-7 font-sans max-w-[440px]">
                  {getScoreMessage().text}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <button
                    onClick={handleRestart}
                    className="h-11 px-8 bg-[#37322F] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors"
                  >
                    <span className="text-white text-sm font-medium font-sans">Пройти ещё раз</span>
                  </button>
                  <button className="h-11 px-8 bg-white border border-[#E0DEDB] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#F7F5F3] transition-colors">
                    <span className="text-[#49423D] text-sm font-medium font-sans">Поделиться результатом</span>
                  </button>
                </div>
              </div>
              <div className="w-full bg-[#FFF8F0] border border-[#F0E0C8] rounded-xl p-5 flex flex-col gap-2">
                <div className="text-[#49423D] text-sm font-semibold font-sans">📞 Нужна помощь?</div>
                <div className="text-[#605A57] text-sm font-normal leading-6 font-sans">
                  Бесплатная горячая линия: <span className="font-semibold text-[#49423D]">8-800-200-0-200</span> — круглосуточно, анонимно.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
