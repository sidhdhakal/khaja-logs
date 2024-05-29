import React, { useState, useEffect } from "react";
import PageTemplate from "../components/PageTemplate";
import { useNavigate, useParams } from "react-router-dom";
import users from "../utils/data/users.json";

export default function CreateUserPage() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const isEdit = params?.id ? true : false;

  const getUserDetails = (id) => {
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      setName(user.name);
      setDepartment(user.department);
    }
  };

  useEffect(() => {
    if (isEdit) {
      getUserDetails(params.id);
    }
  }, [isEdit, params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || department === "") {
      alert("Please fill out all fields");
      return;
    }

    alert("Form submitted successfully!");
    setName("");
    setDepartment("");
    navigate("/user");
  };

  return (
    <PageTemplate title={isEdit ? "Edit Users" : "Create Users"}>
      <div className="inputuser_container">
        <form onSubmit={handleSubmit} className="inputuser_form">
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
            <label htmlFor="department">Department</label>
            <input
              className="input"
              type="text"
              id="department"
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </PageTemplate>
  );
}
