import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/appContext";
import PageTemplate from "../components/PageTemplate";

export default function CreateUserPage() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const appState = useContext(AppContext);

  const isEdit = params?.id ? true : false;

  const getUserDetails = (id) => {
    const user = appState.users.find((user) => user.id === parseInt(id));
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
    const userData = {
      id: isEdit ? parseInt(params.id) : new Date().getTime(),
      name,
      department,
    };

    if (isEdit) {
      appState.updateUserHandler({
        id: parseInt(params.id),
        name,
        department,
      });
    } else {
      appState.addUserHandler({
        id: isEdit ? parseInt(params.id) : new Date().getTime(),
        name,
        department,
      });
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
