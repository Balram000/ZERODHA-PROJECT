import React from "react";
import "./Apps.css";

const apps = [
  {
    name: "Kite",
    description: "Simple and fast platform for trading and investing.",
    letter: "K",
  },
  {
    name: "Coin",
    description: "Invest in direct mutual funds for long-term wealth.",
    letter: "C",
  },
  {
    name: "TradingView",
    description: "Advanced charts and tools for market analysis.",
    letter: "T",
  },
];

const Apps = () => {
  return (
    <div className="apps">
      <h2>Our Apps</h2>
      <p className="apps-subtitle">
        Simple tools for investing, trading and market analysis.
      </p>

      <div className="apps-list">
        {apps.map((app) => (
          <div className="app-card" key={app.name}>
            <div className="app-logo">{app.letter}</div>

            <h3>{app.name}</h3>

            <p>{app.description}</p>

            <button>Explore →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;