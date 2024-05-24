import React from "react";

function DateComponents({ currentValue, setValue }) {
  return (
    <div className="input_container">
      <label>Date:</label>
      <input
        className="input"
        value={currentValue}
        type="date"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
export default DateComponents;
