import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      {/* Funds Header */}
      <div className="funds">
        <div>
          <h3>Funds</h3>
          <p>Instant, zero-cost fund transfers with UPI</p>
        </div>

        <div className="fund-actions">
          <Link to="/funds" className="btn btn-green">
            Add funds
          </Link>

          <Link to="/funds" className="btn btn-blue">
            Withdraw
          </Link>
        </div>
      </div>

      {/* Funds Content */}
      <div className="row funds-row">

        {/* Equity */}
        <div className="col funds-col">
          <h4>Equity</h4>

          <div className="table funds-table">

            {/* Main Balance */}
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">₹4,043.10</p>
            </div>

            <div className="data">
              <p>Used margin</p>
              <p className="imp">₹3,757.30</p>
            </div>

            <div className="data">
              <p>Available cash</p>
              <p className="imp">₹4,043.10</p>
            </div>

            <hr />

            {/* Account Details */}
            <div className="data">
              <p>Opening balance</p>
              <p>₹4,043.10</p>
            </div>

            <div className="data">
              <p>Payin</p>
              <p>₹3,736.40</p>
            </div>

            <div className="data">
              <p>Payout</p>
              <p>₹4,064.00</p>
            </div>

            <div className="data">
              <p>SPAN</p>
              <p>₹0.00</p>
            </div>

            <div className="data">
              <p>Delivery margin</p>
              <p>₹0.00</p>
            </div>

            <div className="data">
              <p>Exposure</p>
              <p>₹0.00</p>
            </div>

            <div className="data">
              <p>Options premium</p>
              <p>₹0.00</p>
            </div>

            <hr />

            {/* Collateral */}
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>₹0.00</p>
            </div>

            <div className="data">
              <p>Collateral (Equity)</p>
              <p>₹0.00</p>
            </div>

            <div className="data total-row">
              <p>Total collateral</p>
              <p>₹0.00</p>
            </div>

          </div>
        </div>

        {/* Commodity */}
        <div className="col funds-col">
          <div className="commodity">
            <h4>Commodity</h4>

            <p>You don't have a commodity account</p>

            <Link to="/funds" className="btn btn-blue">
              Open Account
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Funds;