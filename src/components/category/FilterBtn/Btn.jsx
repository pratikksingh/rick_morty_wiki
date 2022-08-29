import React from "react";

export default function Btn({ data, task, setPage, name, index }) {
  return (
    <div>
      <style jsx="true">{`
        .x:checked + label {
          background-color: #0b5ed7;
          color: white;
        }
        input[type="radio"] {
          display: none;
        }
      `}</style>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          onClick={() => {
            setPage(1);
            task(data);
          }}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {data}
        </label>
      </div>
    </div>
  );
}
