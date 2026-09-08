import React, { useEffect, useState } from "react";
import axios from "axios";

const Holdings = () => {
  const [allHolding, setHolding] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (token) {
      // Login hai
      axios
        .get("http://localhost:3002/api/holdings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("USER HOLDINGS:", res.data);
          setHolding(res.data.holdings);
        })
        .catch((err) => {
          console.log("Error fetching user holdings:", err);
        });
    } else {
      // Login nahi 
      axios
        .get("http://localhost:3002/api/allHolding")
        .then((res) => {
          console.log("ALL HOLDINGS:", res.data);
          setHolding(res.data);
        })
        .catch((err) => {
          console.log("Error fetching all holdings:", err);
        });
    }
  }, []);


  const totalInvestment = allHolding.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );

  const currentValue = allHolding.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );

  const totalPnL = currentValue - totalInvestment;

  const pnlPercentage =
    totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  return (
    <>
      <h3 className="title">Holdings ({allHolding.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHolding.map((stock, index) => {
              const pnl = (stock.price - stock.avg) * stock.qty;

              return (
                <tr key={stock._id || index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>₹{stock.avg}</td>
                  <td>₹{stock.price}</td>
                  <td>₹{(stock.price * stock.qty).toFixed(2)}</td>

                  <td className={pnl >= 0 ? "profit" : "loss"}>
                    {pnl >= 0 ? "+" : ""}
                    ₹{pnl.toFixed(2)}
                  </td>

                  <td className={stock.net >= 0 ? "profit" : "loss"}>
                    {stock.net}%
                  </td>

                  <td className={stock.day >= 0 ? "profit" : "loss"}>
                    {stock.day}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            ₹{totalInvestment.toFixed(2)}
          </h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>
            ₹{currentValue.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5 className={totalPnL >= 0 ? "profit" : "loss"}>
            {totalPnL >= 0 ? "+" : ""}
            ₹{totalPnL.toFixed(2)}
          </h5>
          <p>
            P&L ({pnlPercentage.toFixed(2)}%)
          </p>
        </div>
      </div>
    </>
  );
};

export default Holdings;