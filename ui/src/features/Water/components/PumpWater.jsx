import React, { useState } from "react";
import "./PumpWater.css";
import Switch from "react-switch";

const PumpWater = ({ name, state }) => {
  const [watered, setWatered] = useState(state);
  return (
    <>
      <div
        className={`Bulb border p-2 w-30`}
      >
        <div
          className={`d-flex flex-column align-items-center flex-shrink-1 border rounded-3 py-2 px-2 ${
            watered ? "" : "disable"
          }`}
        >
          <div className="p0 h4">{name}</div>
          <div className="bulb_state">
            {watered ? (
              // <i class="bi bi-lightbulb"></i>
              <i class="bi bi-fuel-pump"></i>
            ) : (
              <i class="bi bi-fuel-pump"></i>
            )}
          </div>
          <Switch
            onChange={() => {
              setWatered(!watered);
            }}
            checked={watered}
          />
        </div>
      </div>
    </>
  );
};

export default PumpWater;
