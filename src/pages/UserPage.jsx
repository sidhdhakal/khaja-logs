import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userData from "../utils/data/users.json";
import PageTemplate from "../components/PageTemplate";

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleCreateUser = () => {
    navigate("/user/create");
  };

  const removeHandler = (id) => {
    const deletedUser = users.filter((user) => user.id !== id);
    setUsers(deletedUser);
  };

  return (
    <PageTemplate
      title={"Users"}
      titleRightChildren={
        <button className="create-food-button" onClick={handleCreateUser}>
          Create Users
        </button>
      }
    >
      <table className="table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((details, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{details.name}</td>
              <td
                style={{ color: "red" }}
                onClick={() => removeHandler(details.id)}
              >
                Delete
              </td>
              <td
                style={{ color: "#0A79DF" }}
                onClick={() => navigate(`/user/edit/${details.id}`)}
              >
                Update
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageTemplate>
  );
}
