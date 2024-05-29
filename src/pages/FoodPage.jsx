import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import foodData from "../utils/data/foods.json";
import PageTemplate from "../components/PageTemplate";

export default function FoodPage() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFoods(foodData);
  }, []);

  const handleCreateFood = () => {
    navigate("/food/create");
  };

  const removeHandler = (id) => {
    const deleteFoods = foods.filter((food) => food.id !== id);
    setFoods(deleteFoods);
  };

  return (
    <PageTemplate
      title={"Foods"}
      titleRightChildren={
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button className="create-food-button" onClick={handleCreateFood}>
            Create Food
          </button>
        </div>
      }
    >
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Price</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((details, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={details.image}
                    alt={details.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                  />
                  {details.name}
                </td>
                <td>{details.price}</td>
                <td
                  style={{ color: "red" }}
                  onClick={() => removeHandler(details.id)}
                >
                  Delete
                </td>
                <td
                  style={{ color: "gray" }}
                  onClick={() => navigate(`/food/edit/${details.id}`)}
                >
                  Update
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageTemplate>
  );
}
