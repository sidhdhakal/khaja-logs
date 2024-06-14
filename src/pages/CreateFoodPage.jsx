import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import { AppContext } from "../context/appContext";
import ButtonComponents from "../components/ButtonComponents";

export default function CreateFoodPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const appState = useContext(AppContext);
  const params = useParams();
    
  const isEdit = params?.id ? true : false;

  useEffect(() => {
    if (isEdit) {
      const food = appState.foods.find(
        (food) => food.id === parseInt(params.id)
      );
      if (food) {
        setName(food.name);
        setImage(food.image);
        setPrice(food.price);
      }
    }
  }, [isEdit, params.id, appState.foods]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || image === "" || price === "") {
      alert("Please fill out all fields.");
      return;
    }

    if (isEdit) {
      appState.updateFoodHandler({
        id: parseInt(params.id),
        name,
        price,
        image,
      });
      alert("Food updated successfully!");
    } else {
      appState.addFoodHandler({
        name,
        price,
        image,
      });
      alert("Food created successfully!");
    }
    setName("");
    setImage("");
    setPrice("");
    navigate("/food");
  };

  return (
    <PageTemplate title={isEdit ? "Edit Foods" : "Create Foods"}>
      <div className="inputfood_container">
        <form onSubmit={handleSubmit} className="inputfood_form">
          <div className="input_container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        
          <div className="input_container">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="input_container">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <ButtonComponents name={"Submit"} colorType={"blue"} onClickHandler={handleSubmit}>{isEdit ? "Update" : "Create"}</ButtonComponents>
        </form>
      </div>
    </PageTemplate>
  );
}
