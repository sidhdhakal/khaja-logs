import React, { useState, useContext } from "react";
import NavComponents from "../components/NavComponents";
import PageTemplate from "../components/PageTemplate";
import TableComponent from "../components/TableComponent";
import { AppContext } from "../context/appContext";
import ButtonComponent from "../components/ButtonComponents";

export default function DashboardPage() {
  const appState = useContext(AppContext);
  const [activeTab, setActiveTab] = useState("new");

  const foods = appState.foods;
  const users = appState.users;
  const orders = appState.orders;

  const statusMap = {
    new: 0,
    accept: 1,
    cooking: 2,
    ready: 3,
    delivered: 4,
    cancel: 5,
  };

  const filteredOrders = orders.filter(
    (order) => order.status === statusMap[activeTab]
  );

  const redButton = {
    border: "2px solid red",
    padding: "4px",
    borderColor: "red",
    color: "red",
    backgroundColor: "white",
    fontSize: "12px",
  };

  const greenButton = {
    border: "2px solid green",
    padding: "4px",
    borderColor: "green",
    backgroundColor: "white",
    fontSize: "12px",
    color: "green",
  };

  return (
    <PageTemplate>
      <div>
        <NavComponents currentValue={activeTab} setValue={setActiveTab} />
      </div>
      <div className="dashboard-content">
        <TableComponent
          tableHead={[{ name: "SN" }, { name: "Food" }, { name: "Action" }]}
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
                <td>{foodDetail?.name}</td>
                <td>
                  {details.status === statusMap.new && (
                    <>
                      <ButtonComponent name="Accept" style={greenButton} />
                      <ButtonComponent name="Cancel" style={redButton} />
                    </>
                  )}
                  {details.status === statusMap.accept && (
                    <>
                      <ButtonComponent name="Cooking" style={greenButton} />
                      <ButtonComponent name="Cancel" style={redButton} />
                    </>
                  )}
                  {details.status === statusMap.cooking && (
                    <>
                      <ButtonComponent name="Ready" style={greenButton} />
                      <ButtonComponent name="Cancel" style={redButton} />
                    </>
                  )}
                  {details.status === statusMap.ready && (
                    <>
                      <ButtonComponent name="Delivered" style={greenButton} />
                      <ButtonComponent name="Cancel" style={redButton} />
                    </>
                  )}
                </td>
              </tr>
            );
          }}
        />
      </div>
    </PageTemplate>
  );
}
