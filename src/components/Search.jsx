import React from "react";

export default function Search({ setName }) {
  return (
    <div className="">
      <h1 className="text-center pb-2">Characters</h1>
      <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Search for characters"
          className="input"
        />
        <button type="button" className="btn btn-primary fs-5">
          Search
        </button>
      </form>
    </div>
  );
}
