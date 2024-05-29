import React, { useEffect, useState } from "react";
import PageTemplate from "../components/PageTemplate";
import { useNavigate, useParams } from "react-router-dom";
import foods from "../utils/data/foods.json";

export default function CreateFoodPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const isEdit = params?.id ? true : false;

  const getFoodDetails = (id) => {
    const food = foods.find((food) => food.id === parseInt(id));
    console.log(food);
    if (food) {
      console.log(food);
      setName(food.name);
      setImage(food.image);
      setPrice(food.price);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || image === null || price === "") {
      alert("Please fill out all fields.");
      return;
    }

    alert("Form submitted successfully!");
    setName("");
    setImage(null);
    navigate("/food");
  };

  useEffect(() => {
    if (isEdit) {
      getFoodDetails(params.id);
    }
  }, [isEdit, params.id]);

  return (
    <PageTemplate title={isEdit ? "Edit Foods" : "Create Foods"}>
      <div className="inputfood_container">
        <form onSubmit={handleSubmit} className="inputfood_form">
          <div className="input_container">
            <label htmlFor="name">Name</label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input_container">
            <label htmlFor="image">Image</label>
            <input
              className="input"
              type="file"
              id="image"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="input_container">
            <label htmlFor="price">Price</label>
            <input
              className="input"
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </PageTemplate>
  );
}
