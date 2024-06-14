import React, { useState } from "react";

export default function NavComponents({ currentValue, setValue }) {
  let arr = [
    // key == path
    { key: "new", name: "New" },
    { key: "accept", name: "Accept" },
    { key: "cooking", name: "Cooking" },
    { key: "ready", name: "Ready" },
    { key: "delivered", name: "Delivered" },
    { key: "cancel", name: "Cancel" },
  ];

  return (
    <div className="dashboard-nav">
      {arr.map((item, key) => (
        <div
          className="dashboard-nav-link"
          key={key}
          onClick={() => {
            setValue(item.key);
          }}   
          style={{
            color: currentValue === item.key ? "white" : "black",
            backgroundColor:
              currentValue === item.key ? "#1BCA9B" : "lightgray",
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
