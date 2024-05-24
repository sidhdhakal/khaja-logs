import React from "react";

function UserComponents({ users, currentValue, setValue, orders }) {
  // list
  // users = [1,2,3,4] -> [{userId:1},{userId:2}]
  // selectedUsers = [2] -> [{userId:2}]
  // remainingUser = [1,3,4]-> [{userId:3}, {userId:4}, {userId:1}]
  const remainingUsers = users.filter(
    (user) => !orders.some((selectedUser) => selectedUser?.userId == user.id)
  );

  return (
    <div className="input_container">
      <label>Select User:</label>
      <select
        className="input"
        value={currentValue}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">Select user</option>
        {remainingUsers.map((details) => (
          <option key={details.id} value={details.id}>
            {details.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserComponents;
