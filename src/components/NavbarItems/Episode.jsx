import React, { useState, useEffect } from "react";
import Card from "../Card";
import InputGroup from "./InputGroup";

export default function Episode() {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [characters, setCharacters] = useState([]);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data?.characters?.map((api) => {
          return fetch(api).then((res) => res.json());
        })
      );

      setCharacters(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className=" text-center ubuntu fs-1 fw-bold navbar-brand fw-bold mb-3 ">
          Episode name : <span className="text-primary ">{info.name}</span>
        </h1>
        <p className="text-center fs-5">Air Date: {info.air_date}</p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="text-center fw-bold fs-4 mb-4">Pick Episode</div>
          <div className="text-center mb-3">
            <InputGroup total={51} name={"Episode- "} setId={setId} />
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            {characters.map((character, index) => {
              return <Card page="/episode/" key={index} {...character} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
