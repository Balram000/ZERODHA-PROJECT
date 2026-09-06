import React, { useEffect, useState } from "react";
import axios from "axios";

const Holdings = () => {
  const [allHolding, setHolding] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHolding")
      .then((res) => {
        setHolding(res.data);
      })
      .catch((err) => {
        console.log("Error fetching holdings:", err);
      });
  }, []);

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
              const curValue = stock.price * stock.qty;

              const investment = stock.avg * stock.qty;

              const profitLoss = curValue - investment;

              const isProfit = profitLoss >= 0;

              const profitClass = isProfit ? "profit" : "loss";

              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id || index}>
                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>₹{Number(stock.avg).toFixed(2)}</td>

                  <td>₹{Number(stock.price).toFixed(2)}</td>

                  <td>₹{curValue.toFixed(2)}</td>

                  <td className={profitClass}>
                    ₹{profitLoss.toFixed(2)}
                  </td>

                  <td className={profitClass}>
                    {stock.net}
                  </td>

                  <td className={dayClass}>
                    {stock.day}
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
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;