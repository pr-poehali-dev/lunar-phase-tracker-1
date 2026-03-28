import type { FC } from "react";

interface YourWorkInSyncProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  theme?: "light" | "dark";
}

const YourWorkInSync: FC<YourWorkInSyncProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "light",
}) => {
  const imgFrame2147223205 = "/professional-woman-avatar-with-short-brown-hair-an.jpg";
  const imgFrame2147223206 = "/professional-man-avatar-with-beard-and-glasses-loo.jpg";
  const imgFrame2147223207 = "/professional-person-avatar-with-curly-hair-and-war.jpg";
  const imgArrowUp =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='m5 12 7-7 7 7'/%3E%3Cpath d='M12 19V5'/%3E%3C/svg%3E";

  return (
    <div
      className={className}
      style={{
        width,
        height,
        position: "relative",
        background: "transparent",
      }}
      role="img"
      aria-label="Чат показывающий синхронизацию команды"
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "356px",
          height: "216px",
        }}
      >
        <div style={{ width: "356px", height: "216px", position: "relative", transform: "scale(1.1)" }}>
          {/* Сообщение 1 */}
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "0px",
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              width: "356px",
              height: "36px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "44px",
                backgroundImage: `url('${imgFrame2147223205}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid rgba(0,0,0,0.08)",
                flexShrink: 0,
              }}
            />
            <div
              style={{
                background: theme === "light" ? "#e8e5e3" : "#374151",
                borderRadius: "999px",
                padding: "0px 12px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "13px",
                  lineHeight: "16px",
                  letterSpacing: "-0.4px",
                  color: theme === "light" ? "#37322f" : "#f9fafb",
                  whiteSpace: "nowrap",
                }}
              >
                Обновления команды идут плавно
              </span>
            </div>
          </div>

          {/* Сообщение 2 */}
          <div
            style={{
              position: "absolute",
              right: "0px",
              top: "60px",
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                background: theme === "light" ? "#37322f" : "#111827",
                borderRadius: "999px",
                padding: "0px 12px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "13px",
                  lineHeight: "16px",
                  letterSpacing: "-0.4px",
                  color: "#ffffff",
                  whiteSpace: "nowrap",
                }}
              >
                Привет всем
              </span>
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "44px",
                backgroundImage: `url('${imgFrame2147223206}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid rgba(0,0,0,0.08)",
                flexShrink: 0,
              }}
            />
          </div>

          {/* Сообщение 3 */}
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "120px",
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              width: "210px",
              height: "36px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "44px",
                backgroundImage: `url('${imgFrame2147223207}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid rgba(0,0,0,0.08)",
                flexShrink: 0,
              }}
            />
            <div
              style={{
                background: theme === "light" ? "#e8e5e3" : "#374151",
                borderRadius: "999px",
                padding: "0px 12px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "13px",
                  lineHeight: "16px",
                  letterSpacing: "-0.4px",
                  color: theme === "light" ? "#37322f" : "#f9fafb",
                  whiteSpace: "nowrap",
                }}
              >
                А как насчет этого?
              </span>
            </div>
          </div>

          {/* Сообщение 4 с кнопкой отправки */}
          <div
            style={{
              position: "absolute",
              left: "146px",
              top: "180px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              height: "36px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "0px 12px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.08), 0px 1px 2px -0.4px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#030712",
                  whiteSpace: "nowrap",
                }}
              >
                Отличная работа, команда!
              </span>
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "44px",
                background: theme === "light" ? "#37322f" : "#111827",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.08)",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <img
                src={imgArrowUp}
                alt="Отправить"
                style={{
                  width: "20px",
                  height: "20px",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourWorkInSync;
