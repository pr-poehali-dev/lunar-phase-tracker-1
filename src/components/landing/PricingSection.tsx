import { useState } from "react";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually");

  const pricing = {
    starter: {
      monthly: 0,
      annually: 0,
    },
    professional: {
      monthly: 1990,
      annually: 1590,
    },
    enterprise: {
      monthly: 9990,
      annually: 7990,
    },
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {/* Заголовок */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          {/* Бейдж */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                  stroke="#37322F"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
              Тарифы и цены
            </div>
          </div>

          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-serif tracking-tight">
            Выберите подходящий план для вашего бизнеса
          </div>

          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Масштабируйте операции с гибкими тарифами, которые растут вместе с вашей командой.
            <br />
            Начните бесплатно, переходите на платный план когда будете готовы.
          </div>
        </div>
      </div>

      {/* Переключатель периода */}
      <div className="self-stretch px-6 md:px-16 py-9 relative flex justify-center items-center gap-4">
        <div className="w-full max-w-[1060px] h-0 absolute left-1/2 transform -translate-x-1/2 top-[63px] border-t border-[rgba(55,50,47,0.12)] z-0"></div>

        <div className="p-3 relative bg-[rgba(55,50,47,0.03)] border border-[rgba(55,50,47,0.02)] backdrop-blur-[44px] backdrop-saturate-150 backdrop-brightness-110 flex justify-center items-center rounded-lg z-20 before:absolute before:inset-0 before:bg-white before:opacity-60 before:rounded-lg before:-z-10">
          <div className="p-[2px] bg-[rgba(55,50,47,0.10)] shadow-[0px_1px_0px_white] rounded-[99px] border-[0.5px] border-[rgba(55,50,47,0.08)] flex justify-center items-center gap-[2px] relative">
            <div
              className={`absolute top-[2px] w-[calc(50%-1px)] h-[calc(100%-4px)] bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.08)] rounded-[99px] transition-all duration-300 ease-in-out ${
                billingPeriod === "annually" ? "left-[2px]" : "right-[2px]"
              }`}
            />

            <button
              onClick={() => setBillingPeriod("annually")}
              className="px-4 py-1 rounded-[99px] flex justify-center items-center gap-2 transition-colors duration-300 relative z-10 flex-1"
            >
              <div
                className={`text-[13px] font-medium leading-5 font-sans transition-colors duration-300 ${
                  billingPeriod === "annually" ? "text-[#37322F]" : "text-[#6B7280]"
                }`}
              >
                Ежегодно
              </div>
            </button>

            <button
              onClick={() => setBillingPeriod("monthly")}
              className="px-4 py-1 rounded-[99px] flex justify-center items-center gap-2 transition-colors duration-300 relative z-10 flex-1"
            >
              <div
                className={`text-[13px] font-medium leading-5 font-sans transition-colors duration-300 ${
                  billingPeriod === "monthly" ? "text-[#37322F]" : "text-[#6B7280]"
                }`}
              >
                Ежемесячно
              </div>
            </button>
          </div>

          <div className="w-[3px] h-[3px] absolute left-[5px] top-[5.25px] bg-[rgba(55,50,47,0.10)] shadow-[0px_0px_0.5px_rgba(0,0,0,0.12)] rounded-[99px]"></div>
          <div className="w-[3px] h-[3px] absolute right-[5px] top-[5.25px] bg-[rgba(55,50,47,0.10)] shadow-[0px_0px_0.5px_rgba(0,0,0,0.12)] rounded-[99px]"></div>
          <div className="w-[3px] h-[3px] absolute left-[5px] bottom-[5.25px] bg-[rgba(55,50,47,0.10)] shadow-[0px_0px_0.5px_rgba(0,0,0,0.12)] rounded-[99px]"></div>
          <div className="w-[3px] h-[3px] absolute right-[5px] bottom-[5.25px] bg-[rgba(55,50,47,0.10)] shadow-[0px_0px_0.5px_rgba(0,0,0,0.12)] rounded-[99px]"></div>
        </div>
      </div>

      {/* Карточки тарифов */}
      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <div className="flex justify-center items-start w-full">
          {/* Декоративный паттерн слева */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>

          {/* Контейнер карточек */}
          <div className="flex-1 flex flex-col md:flex-row justify-center items-center gap-6 py-12 md:py-0">
            {/* Стартовый план */}
            <div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 border border-[#E0DEDB] overflow-hidden flex flex-col justify-start items-start gap-12 bg-[rgba(255,255,255,0)]">
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-[rgba(55,50,47,0.90)] text-lg font-medium leading-7 font-sans">Стартовый</div>
                  <div className="w-full max-w-[242px] text-[rgba(41,37,35,0.70)] text-sm font-normal leading-5 font-sans">
                    Идеально для частных лиц и небольших команд, которые только начинают.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-[#37322F] text-5xl font-medium leading-[60px] font-serif">
                      <span className="invisible">{pricing.starter[billingPeriod]} руб.</span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "annually" ? 1 : 0,
                          transform: `scale(${billingPeriod === "annually" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "annually" ? 0 : 4}px)`,
                        }}
                      >
                        {pricing.starter.annually} руб.
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "monthly" ? 1 : 0,
                          transform: `scale(${billingPeriod === "monthly" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "monthly" ? 0 : 4}px)`,
                        }}
                      >
                        {pricing.starter.monthly} руб.
                      </span>
                    </div>
                    <div className="text-[#847971] text-sm font-medium font-sans">
                      в {billingPeriod === "monthly" ? "месяц" : "год"}, за пользователя.
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 py-[10px] relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors">
                  <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="flex justify-center flex-col text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">
                    Начать бесплатно
                  </div>
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[
                  "До 3 проектов",
                  "Базовые инструменты документации",
                  "Поддержка сообщества",
                  "Стандартные шаблоны",
                  "Базовая аналитика",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 relative flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#9CA3AF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Профессиональный план */}
            <div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 bg-[#37322F] border border-[rgba(55,50,47,0.12)] overflow-hidden flex flex-col justify-start items-start gap-12">
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-[#FBFAF9] text-lg font-medium leading-7 font-sans">Профессиональный</div>
                  <div className="w-full max-w-[242px] text-[#B2AEA9] text-sm font-normal leading-5 font-sans">
                    Расширенные возможности для растущих команд и бизнеса.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-[#F0EFEE] text-5xl font-medium leading-[60px] font-serif">
                      <span className="invisible">{pricing.professional[billingPeriod]} руб.</span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "annually" ? 1 : 0,
                          transform: `scale(${billingPeriod === "annually" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "annually" ? 0 : 4}px)`,
                        }}
                      >
                        {pricing.professional.annually} руб.
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "monthly" ? 1 : 0,
                          transform: `scale(${billingPeriod === "monthly" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "monthly" ? 0 : 4}px)`,
                        }}
                      >
                        {pricing.professional.monthly} руб.
                      </span>
                    </div>
                    <div className="text-[#D2C6BF] text-sm font-medium font-sans">
                      в {billingPeriod === "monthly" ? "месяц" : "год"}, за пользователя.
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 py-[10px] relative bg-[#FBFAF9] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="flex justify-center flex-col text-[#37322F] text-[13px] font-medium leading-5 font-sans">
                    Начать
                  </div>
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[
                  "Безлимитные проекты",
                  "Расширенные инструменты документации",
                  "Приоритетная поддержка",
                  "Пользовательские шаблоны",
                  "Продвинутая аналитика",
                  "Командное сотрудничество",
                  "Доступ к API",
                  "Пользовательские интеграции",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 relative flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#FF8000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-[#F0EFEE] text-[12.5px] font-normal leading-5 font-sans">{feature}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Корпоративный план */}
            <div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 bg-white border border-[#E0DEDB] overflow-hidden flex flex-col justify-start items-start gap-12">
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-[rgba(55,50,47,0.90)] text-lg font-medium leading-7 font-sans">Корпоративный</div>
                  <div className="w-full max-w-[242px] text-[rgba(41,37,35,0.70)] text-sm font-normal leading-5 font-sans">
                    Полное решение для крупных организаций и предприятий.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-[#37322F] text-5xl font-medium leading-[60px] font-serif">
                      <span className="invisible">{pricing.enterprise[billingPeriod]} руб.</span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "annually" ? 1 : 0,
                          transform: `scale(${billingPeriod === "annually" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "annually" ? 0 : 4}px)`,
                        }}
                      >
                        {pricing.enterprise.annually} руб.
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: billingPeriod === "monthly" ? 1 : 0,
                          transform: `scale(${billingPeriod === "monthly" ? 1 : 0.8})`,
                          filter: `blur(${billingPeriod === "monthly" ? 0 : 4}px)`,
                        }}
                      >
                        {pricing.enterprise.monthly} руб.
                      </span>
                    </div>
                    <div className="text-[#847971] text-sm font-medium font-sans">
                      в {billingPeriod === "monthly" ? "месяц" : "год"}, за пользователя.
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 py-[10px] relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors">
                  <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="flex justify-center flex-col text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">
                    Связаться с отделом продаж
                  </div>
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[
                  "Все из Профессионального",
                  "Персональный менеджер",
                  "Поддержка 24/7 по телефону",
                  "Индивидуальный онбординг",
                  "Расширенные функции безопасности",
                  "Интеграция SSO",
                  "Индивидуальные контракты",
                  "White-label решения",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 relative flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#9CA3AF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Декоративный паттерн справа */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
