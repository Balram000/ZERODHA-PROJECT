import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3002/api/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Orders:", data);
        setOrders(data.orders);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      ) : (
        <div>
          <h2>Orders</h2>

          <table >
            <thead >
              <tr >
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Mode</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => {
                console.log("ORDER DATA:", order);

                return (
                  <tr key={order._id}>
                    <td>{order.name}</td>
                    <td>₹{order.price}</td>
                    <td>{order.qty}</td>
                    <td>{order.mode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;