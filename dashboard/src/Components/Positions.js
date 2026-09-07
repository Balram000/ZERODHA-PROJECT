import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [allPosition, setAllPosition] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allPosition")
      .then((res) => {
        console.log("POSITIONS:", res.data);
        setAllPosition(res.data);
      })
      .catch((error) => {
        console.log("Error fetching positions:", error);
      });
  }, []);

  return (
    <>
      <h3 className="title">
        Positions ({allPosition.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPosition.map((stock) => {
              const qty = Number(stock.qty);
              const avg = Number(stock.avg);
              const price = Number(stock.price);

              const profitLoss = (price - avg) * qty;

              const profitClass =
                profitLoss >= 0 ? "profit" : "loss";

              const dayClass =
                stock.day && stock.day.startsWith("-")
                  ? "loss"
                  : "profit";

              return (
                <tr key={stock._id}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>₹{avg.toFixed(2)}</td>
                  <td>₹{price.toFixed(2)}</td>

                  <td className={profitClass}>
                    ₹{profitLoss.toFixed(2)}
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
    </>
  );
};

export default Positions;