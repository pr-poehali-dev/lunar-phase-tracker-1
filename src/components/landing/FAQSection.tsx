import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Почему наркотики так опасны?",
    answer:
      "Наркотики разрушают мозг, вызывая стойкую зависимость уже после первого употребления. Они нарушают выработку дофамина — вещества, отвечающего за радость — и человек больше не может чувствовать удовольствие без наркотика. Со временем дозы растут, здоровье разрушается, и без лечения это приводит к смерти.",
  },
  {
    question: "Как быстро развивается зависимость?",
    answer:
      "Зависимость может развиться уже после нескольких употреблений. Особенно быстро — от героина, метамфетамина, кокаина. Психологическая зависимость (желание употреблять снова) формируется буквально с первого раза. Физическая зависимость — за несколько недель.",
  },
  {
    question: "Что делать, если друг употребляет наркотики?",
    answer:
      "Не осуждай и не читай лекции — это не помогает. Поговори честно: скажи, что беспокоишься о нём. Предложи обратиться за помощью вместе. Позвони на горячую линию: 8-800-200-0-200 (бесплатно, анонимно). Не оставайся наедине с этой проблемой.",
  },
  {
    question: "Можно ли попробовать один раз без последствий?",
    answer:
      "Нет — это миф. Даже одно употребление может вызвать передозировку со смертельным исходом, особенно если вещество содержит примеси (например, фентанил). Кроме того, мозг запоминает ощущение, и тяга может вернуться спустя месяцы и годы.",
  },
  {
    question: "Какие признаки говорят о зависимости?",
    answer:
      "Резкая смена поведения, потеря интереса к прежним увлечениям, ложь близким, пропуск учёбы или работы, красные глаза, перепады настроения, потеря веса, новые «друзья». Если ты замечаешь эти признаки у себя или близкого — нужна помощь специалиста.",
  },
  {
    question: "Куда обращаться за помощью?",
    answer:
      "Позвони на бесплатную горячую линию: 8-800-200-0-200 (круглосуточно, анонимно). Также можно обратиться в наркологический диспансер по месту жительства. Помощь есть — главное сделать первый шаг.",
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Левая колонка - заголовок */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Вопросы и ответы
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Честные ответы на важные вопросы
            <br className="hidden md:block" />
            о наркотиках и зависимости.
          </div>
        </div>

        {/* Правая колонка - FAQ */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}