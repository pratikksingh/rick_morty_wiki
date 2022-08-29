import React from "react";
import Btn from "../FilterBtn/Btn";

export default function Status({ setStatus, setPage, onClickFilterBtn }) {
  const status = ["Alive", "Dead", "Unknown"];
  // const resFilter = getAllCategoriesOfAFilter("status");
  // const resCategory = getAllFilterOfCategories("alive");

  return (
    <div className="accordion " id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Status
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap gap-3">
            {status?.map((data, index) => {
              return (
                <Btn
                  name="status"
                  key={index}
                  index={index}
                  task={setStatus}
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
