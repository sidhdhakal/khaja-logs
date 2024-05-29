import React, { useState, useEffect } from "react";
import PageTemplate from "../components/PageTemplate";
import userOrders from "../utils/data/orders.json";
import users from "../utils/data/users.json";
import foods from "../utils/data/foods.json";

export default function OrderPage() {
  const [orderFoods, setOrderFoods] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const filteredOrders = selectedDate
      ? userOrders.filter((order) => order.date === selectedDate)
      : userOrders;

    setOrderFoods(filteredOrders);

    let totalPrice = 0;
    filteredOrders.forEach((detail) => {
      const foodDetail = foods.find(
        (food) => food.id === parseInt(detail.foodId)
      );
      if (foodDetail) {
        totalPrice += foodDetail.price;
      }
    });
    setTotal(totalPrice);
  }, [selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <PageTemplate title={"Orders"}>
      <div className="date_container">
        <label htmlFor="orderDate">Enter a date:</label>
        <input
          type="date"
          id="orderDate"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Food</th>
            <th>Price</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {orderFoods.map((detail, key) => {
            const userDetail = users.find(
              (user) => user.id === parseInt(detail.userId)
            );
            const foodDetail = foods.find(
              (food) => food.id === parseInt(detail.foodId)
            );

            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{userDetail?.name}</td>
                <td>{foodDetail?.name}</td>
                <td>{foodDetail?.price}</td>
                <td>{detail.remarks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>Total Price: {total}</h3>
    </PageTemplate>
  );
}
