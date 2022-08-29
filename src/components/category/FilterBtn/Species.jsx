import React from "react";
import Btn from "../FilterBtn/Btn";

export default function Species({ onClickFilterBtn, setSpecies, setPage }) {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet"
  ];
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Species
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap gap-3">
            {species.map((data, index) => {
              return (
                <Btn
                  name="species"
                  key={index}
                  index={index}
                  task={setSpecies}
                  setPage={setPage}
                  onClickFilterBtn={onClickFilterBtn}
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
