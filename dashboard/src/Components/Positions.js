import React from "react";
import { holdings } from "../Data/Data";

const Positions = () => {
  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {holdings.map((stock, index) => {
            var curValue = stock.price + stock.qty;
            const isProfit = curValue - stock.avg * stock.qtyn >= 0.0;
            const profitclass = isProfit ? 'profit' : 'loss';
            const dayclass = stock.isLoss ? 'loss' : 'profit';
            return (

              <tr key={index} >
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profitclass} >
                  {(curValue = stock.price + stock.qty).toFixed(2)}
                </td>
               
                <td className={dayclass} >{stock.day}</td>
              </tr>

            );

          })}
        </table>
      </div>
    </>
  );
};

export default Positions;