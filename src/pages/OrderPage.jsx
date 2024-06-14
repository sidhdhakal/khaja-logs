import React, { useState, useEffect, useContext } from "react";
import PageTemplate from "../components/PageTemplate";
import TableComponent from "../components/TableComponent";
import { AppContext } from "../context/appContext";

export default function OrderPage() {
  const appState = useContext(AppContext);

  const [selectedDate, setSelectedDate] = useState("");
  const [total, setTotal] = useState(0);

  const foods = appState.foods;
  const users = appState.users;
  const orders = appState.orders;

  console.log();

  const filteredOrders = selectedDate
    ? orders.filter((order) => order.date === selectedDate)
    : orders;

  useEffect(() => {
    const filteredOrders = selectedDate
      ? orders.filter((order) => order.date === selectedDate)
      : orders;

    let totalPrice = 0;

    filteredOrders.forEach((detail) => {
      const foodDetail = foods.find(
        (food) => food.id === parseInt(detail?.foodId)
      );

      if (foodDetail) {
        totalPrice += foodDetail?.price;
      }
    });
    setTotal(totalPrice);
  }, [selectedDate, orders, foods]);

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
      <TableComponent
        tableHead={[
          { name: "SN" },
          { name: "Name" },
          { name: "Food" },
          { name: "price" },
          { name: "Remarks" },
        ]}
        data={filteredOrders}
        row={(details, key) => {
          const userDetail = users.find(
            (user) => user.id === parseInt(details.userId)
          );
          const foodDetail = foods.find(
            (food) => food.id === parseInt(details.foodId)
          );

          return (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{userDetail?.name}</td>
              <td>{foodDetail?.name}</td>
              <td>{foodDetail?.price}</td>
              <td>{details?.remarks}</td>
            </tr>
          );
        }}
      />

      <h3>Total Price: {parseInt(total)}</h3>
    </PageTemplate>
  );

  {
    /* <table className="table">
        
        <tbody>
          {filteredOrders.map((detail, key) => {
            const userDetail = users.find(
              (user) => user.id === parseInt(detail?.userId)
            );
            const foodDetail = foods.find(
              (food) => food.id === parseInt(detail?.foodId)
            );
               
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{userDetail?.name}</td>
                <td>{foodDetail?.name}</td>
                <td>{foodDetail?.price}</td>
                <td>{detail?.remarks}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */
  }
}
