import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [allPosition, setAllPosition] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/allPosition")
      .then((res) => {
        console.log("ALL POSITIONS:", res.data);
        setAllPosition(res.data);
      })
      .catch((err) => {
        console.log("Error fetching positions:", err);
      });
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
                <td>{stock.net}</td>
                <td>{stock.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;