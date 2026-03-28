import type { FC, CSSProperties } from "react";

interface NumbersThatSpeakProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  theme?: "light" | "dark";
}

const NumbersThatSpeak: FC<NumbersThatSpeakProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "light",
}) => {
  const themeVars: CSSProperties = {
    ["--nts-surface" as string]: "#ffffff",
    ["--nts-text-primary" as string]: "#2f3037",
    ["--nts-text-secondary" as string]: "rgba(47,48,55,0.8)",
    ["--nts-text-muted" as string]: "rgba(55,50,47,0.7)",
    ["--nts-border" as string]: "rgba(47,48,55,0.12)",
    ["--nts-shadow" as string]: "rgba(47,48,55,0.06)",
  };

  return (
    <div
      className={className}
      style={{
        width,
        height,
        position: "relative",
        background: "transparent",
        ...themeVars,
      }}
      role="img"
      aria-label="Финансовый дашборд с графиками выручки"
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "calc(50% + 23.703px)",
        }}
      >
        {/* Маленькая карточка - задний слой */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "calc(50% - 19.427px)",
            width: "270px",
            height: "199.565px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="border border-[rgba(0,0,0,0.08)]"
            style={{
              width: "270px",
              height: "199.565px",
              background: "#ffffff",
              borderRadius: "4.696px",
              boxShadow:
                "0px 0px 0px 0.587px rgba(47,48,55,0.12), 0px 1.174px 2.348px -0.587px rgba(47,48,55,0.06), 0px 1.761px 3.522px -0.88px rgba(47,48,55,0.06)",
              overflow: "hidden",
              position: "relative",
            }}
          />
        </div>

        {/* Средняя карточка */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "calc(50% + 12.573px)",
            width: "330px",
            height: "243.913px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="border border-[rgba(0,0,0,0.08)]"
            style={{
              width: "330px",
              height: "243.913px",
              background: "#ffffff",
              borderRadius: "5.739px",
              boxShadow:
                "0px 0px 0px 0.717px rgba(47,48,55,0.12), 0px 1.435px 2.87px -0.717px rgba(47,48,55,0.06), 0px 2.152px 4.304px -1.076px rgba(47,48,55,0.06)",
              overflow: "hidden",
              position: "relative",
            }}
          />
        </div>

        {/* Большая карточка - передний слой */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "calc(50% + 33.573px)",
            width: "360px",
            height: "266.087px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="border border-[rgba(0,0,0,0.08)]"
            style={{
              width: "360px",
              height: "266.087px",
              background: "#ffffff",
              borderRadius: "6.261px",
              boxShadow:
                "0px 0px 0px 0.783px rgba(47,48,55,0.12), 0px 1.565px 3.13px -0.783px rgba(47,48,55,0.06), 0px 2.348px 4.696px -1.174px rgba(47,48,55,0.06)",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: "18.783px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "37.565px",
                width: "100%",
                height: "100%",
                flexGrow: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18.783px",
                  width: "100%",
                  height: "100%",
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "100%",
                    flexGrow: 1,
                  }}
                >
                  {/* Заголовок */}
                  <div
                    style={{
                      display: "flex",
                      gap: "6.261px",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6.261px",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: "10.174px",
                          lineHeight: "18.783px",
                          color: "rgba(47,48,55,0.8)",
                          whiteSpace: "pre",
                        }}
                      >
                        Выставлено счетов
                      </div>
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                          fontSize: "18.783px",
                          lineHeight: "20.348px",
                          letterSpacing: "-0.587px",
                          color: "#2f3037",
                          whiteSpace: "pre",
                        }}
                      >
                        23 450 000 руб.
                      </div>
                    </div>
                  </div>

                  {/* График */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "18.783px",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        height: "156.522px",
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      {/* Ось */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          gap: "3.13px",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexGrow: 1,
                            height: "100%",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            position: "relative",
                          }}
                        >
                          {/* Y-ось */}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              height: "100%",
                              alignItems: "flex-start",
                              justifyContent: "center",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingRight: "7.826px",
                                boxSizing: "border-box",
                              }}
                            >
                              {["500к", "300к", "200к", "100к", "0"].map((label, index) => (
                                <div
                                  key={index}
                                  style={{
                                    display: "flex",
                                    gap: "6.261px",
                                    height: "17.217px",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    padding: "8.609px 0",
                                    width: "100%",
                                    boxSizing: "border-box",
                                  }}
                                >
                                  <div
                                    style={{
                                      fontFamily: "'Inter', sans-serif",
                                      fontWeight: 500,
                                      fontSize: "7.826px",
                                      lineHeight: "14.087px",
                                      color: "rgba(55,50,47,0.7)",
                                      textAlign: "right",
                                      whiteSpace: "pre",
                                    }}
                                  >
                                    {label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Сетка и X-ось */}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              flexGrow: 1,
                              height: "100%",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                width: "100%",
                              }}
                            >
                              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                                <div
                                  key={i}
                                  style={{ height: i === 0 ? "17.217px" : "13.304px", width: "100%", display: "flex", alignItems: "center" }}
                                >
                                  <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(0,0,0,0.05)" }} />
                                </div>
                              ))}
                            </div>

                            {/* X-ось */}
                            <div
                              style={{
                                display: "flex",
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 500,
                                alignItems: "center",
                                justifyContent: "space-between",
                                fontSize: "7.826px",
                                lineHeight: "14.087px",
                                padding: "0 6.261px",
                                boxSizing: "border-box",
                                color: "rgba(55,50,47,0.7)",
                                textAlign: "right",
                                width: "100%",
                              }}
                            >
                              <div style={{ whiteSpace: "pre" }}>Авг 2024</div>
                              <div style={{ whiteSpace: "pre" }}>Авг 2025</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Столбцы графика */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "23.48px",
                          right: 0,
                          top: "12.52px",
                          width: "295.043px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: "-1.56px",
                            right: 0,
                            top: 0,
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "space-between",
                            padding: "0 9.391px",
                            boxSizing: "border-box",
                            overflow: "hidden",
                          }}
                        >
                          {[
                            { height: "83px" },
                            { height: "108px" },
                            { height: "58px" },
                            { height: "89px" },
                            { height: "83px" },
                            { height: "89px" },
                            { height: "83px" },
                            { height: "95px" },
                            { height: "108px" },
                            { height: "76px" },
                            { height: "89px" },
                          ].map((item, index) => (
                            <div
                              key={index}
                              style={{
                                width: "12.522px",
                                height: item.height,
                                backgroundColor: "#5D4E37",
                                borderRadius: "2px",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
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

export default NumbersThatSpeak;
