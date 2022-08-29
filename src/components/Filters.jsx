import React from "react";
import Status from "./category/FilterBtn/Status";
import Species from "./category/FilterBtn/Species";
import Gender from "./category/FilterBtn/Gender";

export default function Filters({
  setStatus,
  setSpecies,
  setGender,
  setPage,
  onClickFilterBtn
}) {
  return (
    <div className="container">
      <Status
        onClickFilterBtn={onClickFilterBtn}
        setStatus={setStatus}
        setPage={setPage}
      />
      <Species
        setSpecies={setSpecies}
        onClickFilterBtn={onClickFilterBtn}
        setPage={setPage}
      />
      <Gender
        setGender={setGender}
        onClickFilterBtn={onClickFilterBtn}
        setPage={setPage}
      />
    </div>
  );
}
