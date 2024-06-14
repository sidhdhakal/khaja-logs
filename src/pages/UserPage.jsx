import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import ButtonComponents from "../components/ButtonComponents";
import TableComponent from "../components/TableComponent";
import { AppContext } from "../context/appContext";

export default function UserPage() {
  const navigate = useNavigate();
  const { users, deleteUserHandler } = useContext(AppContext);

  const createUserHandler = () => {
    navigate("/user/create");
  };

  const removeUsersHandler = (id) => {
    deleteUserHandler(id);
  };

  const updateUsersHandler = (id) => {
    navigate(`/user/edit/${id}`);

   
  };
  return (
    <PageTemplate
      title="Users"
      titleRightChildren={
        <ButtonComponents
          name="Create User"
          onClickHandler={createUserHandler}
          colorType={"green"}
        />
      }
    >
      <TableComponent
        tableHead={[
          {
            name: "SN",
          },
          {
            name: "Name",
          },
          { name: "Action",   colSpan: 2,},
        ]}
        data={users}
        row={(details, key) => {
          return (
            <tr key={key + 1}>
              <td>{key + 1}</td>
              <td>{details.name}</td>
              <td>
                <ButtonComponents name="Delete"
                onClickHandler={()=>  removeUsersHandler(details.id)}
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
                onClickHandler={()=>  updateUsersHandler(details.id)}
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

      {/* <table className="user-table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Department</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.department}</td>
              <td
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => handleRemoveUser(user.id)}
              >
                Delete
              </td>
              <td
                style={{ color: "#0A79DF", cursor: "pointer" }}
                onClick={() => handleUpdateUser(user.id)}
              >
                Update
              </td>
            </tr>
          ))}
        </tbody> */}
    </PageTemplate>
  );
}
