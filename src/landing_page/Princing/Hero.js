import React from "react";

function Hero() {
  return (
    <div className="">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1 className="text-3xl font-bold">Pricing</h1>
        <h3 className="text-muted mt-3 fs-5 text-xl">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className=" p-5 mt-5 text-center flex ">
        <div className="w-1/3 p-4">
          <img src="Images\pricingEquity.svg"  alt="pricingequity"/>
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="w-1/3 p-4">
          <img src="Images/intradayTrades.svg" alt="indeadayTrade" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="w-1/3 p-4">
          <img src="images/pricingEquity.svg " alt="pricing" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;