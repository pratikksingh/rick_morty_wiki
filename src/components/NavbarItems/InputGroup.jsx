import React from "react";

export default function InputGroup({ total, name, setId }) {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => setId(e.target.value)}
        className="form-select"
        id={name}
      >
        {[...Array(total).keys()].map((item) => {
          return (
            <option key={item} value={item + 1}>
              {name}
              {item + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
}
