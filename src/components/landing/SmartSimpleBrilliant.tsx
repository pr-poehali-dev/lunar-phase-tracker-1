import type { FC } from "react";

interface SmartSimpleBrilliantProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  theme?: "light" | "dark";
}

const SmartSimpleBrilliant: FC<SmartSimpleBrilliantProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "dark",
}) => {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        position: "relative",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      role="img"
      aria-label="Календарные карточки с цветными событиями"
    >
      <div
        style={{
          position: "relative",
          width: "295.297px",
          height: "212.272px",
          transform: "scale(1.2)",
        }}
      >
        {/* Левая наклоненная карточка */}
        <div style={{ position: "absolute", left: "123.248px", top: "0px", width: 0, height: 0 }}>
          <div style={{ transform: "rotate(5deg)", transformOrigin: "center" }}>
            <div
              style={{
                width: "155.25px",
                background: "#ffffff",
                borderRadius: "9px",
                padding: "6px",
                boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.07)",
              }}
            >
              {/* Янтарное событие */}
              <div
                style={{
                  width: "100%",
                  height: "51px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  background: "rgba(245,158,11,0.1)",
                  display: "flex",
                }}
              >
                <div style={{ width: "2.25px", background: "#F59E0B" }} />
                <div style={{ padding: "4.5px", width: "100%" }}>
                  <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "9px", color: "#92400E" }}>
                      14:00
                    </span>
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "9px", color: "#92400E" }}>
                    Встреча с Анной
                  </div>
                </div>
              </div>

              {/* Голубое событие */}
              <div
                style={{
                  width: "100%",
                  height: "79.5px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  background: "rgba(14,165,233,0.1)",
                  marginTop: "3px",
                  display: "flex",
                }}
              >
                <div style={{ width: "2.25px", background: "#0EA5E9" }} />
                <div style={{ padding: "4.5px", width: "100%" }}>
                  <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "9px", color: "#0C4A6E" }}>
                      14:00
                    </span>
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "9px", color: "#0C4A6E" }}>
                    Обзор концепт-дизайна II
                  </div>
                </div>
              </div>

              {/* Зеленое событие */}
              <div
                style={{
                  width: "100%",
                  height: "51px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  background: "rgba(16,185,129,0.1)",
                  marginTop: "3px",
                  display: "flex",
                }}
              >
                <div style={{ width: "2.25px", background: "#10B981" }} />
                <div style={{ padding: "4.5px", width: "100%" }}>
                  <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "9px", color: "#064E3B" }}>
                      9:00
                    </span>
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "9px", color: "#064E3B" }}>
                    Вебинар: Figma ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Правая карточка */}
        <div style={{ position: "absolute", left: "0px", top: "6.075px", width: "155.25px" }}>
          <div style={{ transform: "rotate(-5deg)", transformOrigin: "center" }}>
            <div
              style={{
                width: "155.25px",
                background: "#ffffff",
                borderRadius: "9px",
                padding: "6px",
                boxShadow: "-8px 6px 11.3px rgba(0,0,0,0.12), 0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.06)",
              }}
            >
              {/* Фиолетовое событие */}
              <div
                style={{
                  width: "100%",
                  height: "51px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  background: "rgba(139,92,246,0.1)",
                  display: "flex",
                }}
              >
                <div style={{ width: "2.25px", background: "#8B5CF6" }} />
                <div style={{ padding: "4.5px", width: "100%" }}>
                  <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "9px", color: "#581C87" }}>
                      11:00
                    </span>
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "9px", color: "#581C87" }}>
                    Презентация онбординга
                  </div>
                </div>
              </div>

              {/* Розовое событие */}
              <div
                style={{
                  width: "100%",
                  height: "51px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  background: "#FFE4E6",
                  display: "flex",
                  marginTop: "3px",
                }}
              >
                <div style={{ width: "2.25px", background: "#F43F5E" }} />
                <div style={{ padding: "4.5px", width: "100%" }}>
                  <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "9px", color: "#BE123C" }}>
                      16:00
                    </span>
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "9px", color: "#BE123C" }}>
                    Корпоратив
                  </div>
                </div>
              </div>

              {/* Большое фиолетовое событие */}
              <div
                style={{
                  width: "100%",
                  height: "79.5px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  background: "rgba(139,92,246,0.1)",
                  display: "flex",
                  marginTop: "3px",
                }}
              >
                <div style={{ width: "2.25px", background: "#8B5CF6" }} />
                <div style={{ padding: "4.5px", width: "100%" }}>
                  <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "9px", color: "#581C87" }}>
                      11:00
                    </span>
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "9px", color: "#581C87" }}>
                    Обед с новым сотрудником!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartSimpleBrilliant;
