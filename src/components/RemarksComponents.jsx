import React from "react";

function RemarksComponents({ currentValue, setValue }) {
  return (
    <div className="input_container">
      <label>Remarks:</label>
      <textarea
        className="input"
        value={currentValue}
        type="text"
        placeholder="What you wants?"
        rows="4"
        cols="50"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default RemarksComponents;
