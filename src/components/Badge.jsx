import React from "react";

const badgeColorClass = {
  Alive: "success",
  Dead: "danger",
  unknown: "secondary"
};

export default function Badge({ status, position, fs }) {
  return (
    <div className={`badge ${position} bg-${badgeColorClass[status]} ${fs}`}>
      {status}
    </div>
  );
}
