import React from "react";

const Apps = [
  {
    name: "Console",
    tagline: "Your account, one dashboard",
    description:
      "Track holdings, funds, reports and account settings in a single backoffice view.",
    accent: "#5B6B79",
    tint: "#EEF1F3",
    initial: "C",
  },
  {
    name: "Coin",
    tagline: "Direct mutual funds",
    description:
      "Invest in direct mutual funds at zero commission and build long-term wealth.",
    accent: "#2E8B57",
    tint: "#EAF5EF",
    initial: "Co",
  },
  {
    name: "Kite",
    tagline: "Trading, simplified",
    description:
      "Fast, clean trading terminal for equity, F&O, currency and commodity markets.",
    accent: "#387ED1",
    tint: "#EAF2FB",
    initial: "K",
  },
  {
    name: "Varsity",
    tagline: "Learn the markets",
    description:
      "Free structured modules that take you from the basics to advanced trading.",
    accent: "#D97B29",
    tint: "#FBF1E7",
    initial: "V",
  },
  {
    name: "TradingView",
    tagline: "Advanced charting",
    description:
      "Professional-grade charts and technical analysis tools built into Kite.",
    accent: "#131722",
    tint: "#ECEDEF",
    initial: "T",
  },
];

function AppCard({ app }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E4E6E9",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        transition: "border-color 0.15s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = app.accent)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E4E6E9")}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "8px",
          background: app.tint,
          color: app.accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: "15px",
        }}
      >
        {app.initial}
      </div>

      <div>
        <h3
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 600,
            color: "#1A1D21",
          }}
        >
          {app.name}
        </h3>
        <p
          style={{
            margin: "2px 0 0",
            fontSize: "13px",
            color: app.accent,
            fontWeight: 500,
          }}
        >
          {app.tagline}
        </p>
      </div>

      <p
        style={{
          margin: 0,
          fontSize: "13.5px",
          lineHeight: 1.55,
          color: "#6B7178",
        }}
      >
        {app.description}
      </p>
    </div>
  );
}

export default function AppsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F7F8FA",
        padding: "48px 24px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 600,
            color: "#1A1D21",
            margin: "0 0 6px",
          }}
        >
          Apps
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#6B7178",
            margin: "0 0 32px",
          }}
        >
          Everything you need to invest and trade, in one ecosystem.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {Apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
}
