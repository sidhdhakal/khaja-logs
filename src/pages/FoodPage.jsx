import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import { AppContext } from "../context/appContext";
import ButtonComponents from "../components/ButtonComponents";
import TableComponent from "../components/TableComponent";

export default function FoodPage() {
  const navigate = useNavigate();
  const { foods, deleteFoodHandler } = useContext(AppContext);

  const createFoodHandler = () => {
    navigate("/food/create");
  };

  const removeFoodHandler = (id) => {
    deleteFoodHandler(id);
  };
  const updateFoodHandler = (id) => {
    navigate(`/food/edit/${id}`);
  };


  return (
    <PageTemplate
      title="Foods"   
      titleRightChildren={
        <div style={{ display: "flex", justifyContent: "end" }}>
          <ButtonComponents
            colorType={"green"}
            name={"Create food"}
            onClickHandler={() => createFoodHandler()}
          />
        </div>
      }
    >
      <div>
        <TableComponent
          tableHead={[
            {
              name: "SN",
            },
            {
              name: "Name",
            },
            {
              name:"price"
            },
            {
              name: "Action",
              colSpan: 3,
            },
          ]}
          data={foods}
          row={(item, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                <ButtonComponents name="Delete"
                onClickHandler={()=>  removeFoodHandler(item.id)}
                style={{
                  border: "2px solid red",
                  padding: "4px",
                  borderColor: "red",
                  color: "red",
                  backgroundColor: "white",
                  fontSize: "12px",
                }}
                colorType={"red"}/>
                 </td>
                 <td>
                <ButtonComponents name="Update"
                onClickHandler={()=>  updateFoodHandler(item.id)}
                style={{
                  border: "2px solid red",
                  padding: "4px",
                  borderColor: "green",
                  color: "green",
                  backgroundColor: "white",
                  fontSize: "12px",
                }}
                colorType={"green"}/>
                </td>
              </tr>
            );
          }}
        />
      </div>
    </PageTemplate>
  );
}
