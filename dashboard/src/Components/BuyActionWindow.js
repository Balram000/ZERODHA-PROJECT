
import React, { useState } from "react";
import axios from "axios";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode, closeBuyWindow }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleOrderClick = () => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "http://localhost:3002/api/orders",
        {
          name: uid,
          quantity: Number(stockQuantity),
          price: Number(stockPrice),
          mode: mode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Order placed:", response.data);
        closeBuyWindow();
      })
      .catch((error) => {
        console.log("Order error:", error);
      });
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        <div>
          <button
            type="button"
            className={`btn ${
              mode === "BUY" ? "btn-blue" : "btn-red"
            }`}
            onClick={handleOrderClick}
          >
            {mode}
          </button>

          <button
            type="button"
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;

