import React from "react";
import ButtonComponents from "./ButtonComponents";

function OrderSummary({
  order,
  users,
  foods,
  date,
  onRemoveHandler,
  onSubmitHandler,
}) {
  let total = 0;

  return (
    <div className="order_container">
      <h3>Order Summary</h3>
      <div>Date: {date}</div>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Food</th>
            <th>Price</th>
            <th>Remarks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {order.map((detail, key) => {
            const userDetail = users.find(
              (user) => user.id === parseInt(detail.userId)
            );
            const foodDetail = foods.find((food) => food.id === detail.foodId);

            if (foodDetail) {
              total += foodDetail.price;
            }

            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{userDetail?.name}</td>
                <td>{foodDetail?.name}</td>
                <td>{foodDetail?.price}</td>
                <td>{detail.remarks}</td>
                <td>
                  <ButtonComponents
                    name={"Remove"}
                    style={{
                      border: "2px solid red",
                      padding: "4px",
                      borderColor: "red",
                      color: "red",
                      backgroundColor: "white",
                      fontSize: "12px",
                    }}
                    colorType={"red"}
                    onClickHandler={() => onRemoveHandler(detail.userId)}
                  />
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="3">Total</td>
            <td>{total}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <ButtonComponents
        colorType={"yellow"}
        name={"Conform"}
        onClickHandler={onSubmitHandler}
      />
    </div>
  );
}

export default OrderSummary;
