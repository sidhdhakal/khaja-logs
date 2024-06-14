import React from "react";

function SelectFoodComponent({ foods, currentValue, setValue }) {
  return (
    <div className="input_container">
      <label>Select Food:</label>
      <div className="food_container">
        {foods.map((details) => {
          let isActive = currentValue == details.id;
          return (
            <div
              className="food_card"
              key={details.id}
              onClick={() => {
                setValue(details.id);
              }}
              style={{
                cursor: "pointer",
                borderColor: isActive ? "#F3B431" : "#DAE0E2",
                backgroundColor: isActive ? "#f8f6e4d5" : "white",
              }}
            >
              <img src={details.image} alt="food_image" />
              {details.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectFoodComponent;
