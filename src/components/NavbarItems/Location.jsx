import React, { useState, useEffect } from "react";
import InputGroup from "./InputGroup";
import Card from "../Card";

export default function Location() {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [residents, setResidents] = useState([]);

  let api = `https://rickandmortyapi.com/api/location/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data?.residents?.map((api) => {
          return fetch(api).then((res) => res.json());
        })
      );

      setResidents(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className=" text-center ubuntu fs-1 fw-bold navbar-brand fw-bold mb-3 ">
          Location name : <span className="text-primary ">{info.name}</span>
        </h1>
        <p className="text-center fs-5">
          Dimension: {info.dimension ? info.dimension : "unknown"}
        </p>
        <p className="text-center fs-6 mb-4">
          Type: {info.type ? info.type : "unknown"}
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="text-center fw-bold fs-4 mb-4">Pick Episode</div>
          <div className="text-center mb-3">
            <InputGroup total={126} name={"Location- "} setId={setId} />
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            {residents.map((character, index) => {
              return <Card page="/location/" key={index} {...character} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
