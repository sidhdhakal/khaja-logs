import React, { useContext, useState } from "react";
import DateComponents from "../components/DateComponents";
import UserComponents from "../components/UserComponents";
import SelectfoodComponents from "../components/SelectfoodComponents";
import RemarksComponents from "../components/RemarksComponents";
import ButtonComponents from "../components/ButtonComponents";
import OrderSummary from "../components/OrderSummaryComponents";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/appContext";

function CheckoutPage() {
  const [date, setDate] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectFood, setSelectFood] = useState("");
  const [remarks, setRemarks] = useState("");
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
  const appState = useContext(AppContext);
  const foods = appState.foods;
  const users = appState.users;

  const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const onOrderHandler = () => {
    if (selectedUser === "" || selectFood === "" || date === "") {
      alert("Please select name, food and date!");
      return;
    }
    const newOrder = {
      id: generateRandomId(),
      date: date,
      userId: selectedUser,
      foodId: selectFood,
      remarks: remarks,
    };

    setOrder((prevOrder) => prevOrder.concat(newOrder));
    setSelectedUser("");
    setSelectFood("");
    setRemarks("");
  };

  const onSubmitHandler = () => {
    appState.addOrderHandler(order);
    alert("Order submitted successfully");
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
        <ButtonComponents
          colorType={"black"}
          name={"Place Order"}
          onClickHandler={onOrderHandler}
        />
      </div>
      <div className="right_side">
        {order?.length > 0 ? (
          <OrderSummary
            order={order}
            users={users}
            foods={foods}
            date={date}
            onSubmitHandler={onSubmitHandler}
            onRemoveHandler={(userId) =>
              setOrder((prevOrder) =>
                prevOrder.filter((order) => order.userId !== userId)
              )
            }
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
