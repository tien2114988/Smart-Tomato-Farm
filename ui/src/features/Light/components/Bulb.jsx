import React, { useState } from "react";
import "./Bulb.css";
import Switch from "react-switch";
const Bulb = ({ name, state }) => {
  const [lighten, setLighten] = useState(state);
  return (
    <>
      <div
        className={`Bulb py-4 d-flex flex-column align-items-center ${
          lighten ? "" : "disable"
        }`}
      >
        <div className="p-0 h4">{name}</div>
        <div className="bulb_state">
          {lighten ? (
            <i class="bi bi-lightbulb"></i>
          ) : (
            <i class="bi bi-lightbulb-off"></i>
          )}
        </div>
        <Switch
          onChange={() => {
            setLighten(!lighten);
          }}
          checked={lighten}
        />
      </div>
    </>
  );
};

export default Bulb;
