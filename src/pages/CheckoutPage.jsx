import React, { useEffect, useState } from "react";
import DateComponents from "../components/DateComponents";
import UserComponents from "../components/UserComponents";
import SelectfoodComponents from "../components/SelectfoodComponents";
import RemarksComponents from "../components/RemarksComponents";
import OrderSummary from "../components/OrderSummaryComponents";

import userData from "../utils/data/users.json";
import foodsData from "../utils/data/foods.json";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const [users, setUsers] = useState([]);
  const [foods, setFoods] = useState([]);
  const [date, setDate] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectFood, setSelectFood] = useState("");
  const [remarks, setRemarks] = useState("");
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  // orders: [{:1, foodId:1,remarks:""}]
  // users : [{id:1}, {id:2}]

  useEffect(() => {
    setUsers(userData);
    setFoods(foodsData);
  }, []);

  const onOrderHandler = () => {
    if (selectedUser === "" || selectFood === "" || date === "") {
      alert("Please select name, food and date!");
      return;
    }
    let tempOrders = [...order];
    tempOrders.push({
      date: date,
      userId: selectedUser,
      foodId: selectFood,
      remarks: remarks,
    });

    setOrder(tempOrders);
    console.log(order);
    setSelectedUser("");
    setSelectFood("");
    setRemarks("");
  };

  const onRemoveHandler = (userId) => {
    let tempOrders = [...order];
    tempOrders = tempOrders.filter((e) => e.userId !== userId);
    setOrder(tempOrders);
  };

  const onSubmitHandler = () => {
    alert("Order submitted succesfully");
    // api hit
    // clear order
    setOrder([]);
  };
  return (
    <div className="checkpage">
      <div className="left_side">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1
            style={{
              color: "#EEC213",
            }}
          >
            Lets Order Khaja
          </h1>
          <div
            onClick={() => navigate("/order")}
            style={{
              cursor: "pointer",
            }}
          >
            Login
          </div>
        </div>
        <DateComponents currentValue={date} setValue={setDate} />
        <UserComponents
          orders={order}
          users={users}
          currentValue={selectedUser}
          setValue={setSelectedUser}
        />

        <SelectfoodComponents
          foods={foods}
          currentValue={selectFood}
          setValue={setSelectFood}
        />
        <RemarksComponents
          onclick={onOrderHandler}
          currentValue={remarks}
          setValue={setRemarks}
        />
        <button
          className="btn"
          style={{
            backgroundColor: "#2C3335",
            color: "white",
          }}
          onClick={onOrderHandler}
        >
          Place Order
        </button>
      </div>
      <div className="right_side">
        {order?.length > 0 ? (
          <OrderSummary
            order={order}
            users={users}
            foods={foods}
            date={date}
            onSubmitHandler={onSubmitHandler}
            onRemoveHandler={onRemoveHandler}
          />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            No order placed yet
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutPage;
