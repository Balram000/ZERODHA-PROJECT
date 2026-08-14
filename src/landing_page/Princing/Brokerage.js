import React from "react";

function Brokerage() {
  return (
    <div className="ml-48">
      <div className=" p-5 mt-5 text-center border-top">
        <div className="w-3/4  p-4 text-center   ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 text-3xl p-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "15px" }}
            
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="w-1/4 p-4 ml-72">
          <a href="wwwtext.com" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 text-4xl font-bold  ">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;