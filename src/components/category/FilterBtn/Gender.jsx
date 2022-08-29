import React from "react";
import Btn from "../FilterBtn/Btn";

export default function Gender({ onClickFilterBtn, setGender, setPage }) {
  let genders = ["female", "male", "genderless", "unknown"];

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Gender
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap gap-3">
            {genders.map((data, index) => {
              return (
                <Btn
                  name="gender"
                  key={index}
                  index={index}
                  onClickFilterBtn={onClickFilterBtn}
                  task={setGender}
                  setPage={setPage}
                  data={data}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
