
import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [allPosition, setAllPosition] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Login hai → only logged-in user's positions
      axios
        .get("http://localhost:3002/api/positions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("USER POSITIONS:", res.data);
          setAllPosition(res.data.positions);
        })
        .catch((err) => {
          console.log("Error fetching user positions:", err);
        });
    } else {
      // Login nahi → all positions
      axios
        .get("http://localhost:3002/api/allPosition")
        .then((res) => {
          console.log("ALL POSITIONS:", res.data);
          setAllPosition(res.data);
        })
        .catch((err) => {
          console.log("Error fetching all positions:", err);
        });
    }
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPosition.length})</h3>

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
            {allPosition.map((stock, index) => (
              <tr key={stock._id || index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>₹{stock.avg}</td>
                <td>₹{stock.price}</td>

                <td className={stock.net >= 0 ? "profit" : "loss"}>
                  {stock.net >= 0 ? "+" : ""}
                  {stock.net}
                </td>

                <td className={stock.day >= 0 ? "profit" : "loss"}>
                  {stock.day >= 0 ? "+" : ""}
                  {stock.day}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
