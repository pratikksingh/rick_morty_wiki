import React from "react";
import Badge from "./Badge";
import { Link } from "react-router-dom";

export default function Card({ name, location, status, image, page, id }) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`${page}${id}`}
      key={id}
      className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark "
    >
      <div
        style={{ cursor: "pointer" }}
        className="cards d-flex justify-content-center flex-column"
      >
        <img src={image} className="img-fluid x" alt=""></img>
        <div style={{ padding: "10px" }} className="content">
          <div className="fs-4 fb-bold mb-4 ">{name}</div>
          <div className="">
            <div className="fs-6">Last location</div>
            <div className="fs-5"> {location.name} </div>
          </div>
        </div>
      </div>
      <Badge position="position-absolute" status={status} />
    </Link>
  );
}
