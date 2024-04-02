import React, { useState } from "react";
import "./Bulb.css";
import Switch from "react-switch";
import { useEffect } from "react";
import axios from "axios";
const Bulb = ({ bulb_id, name, status }) => {
  const [lighten, setLighten] = useState(status);
  const ChangeLight = async () => {
    setLighten(!lighten);

    await axios
      .put("http://localhost:3001/api/light/bulbs/", { bulb_id: bulb_id })
      .then((res) => {
        
      })
      .catch((err) => console.log(err));
  };
  // console.log(bulb_id);

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
        <Switch onChange={ChangeLight} checked={lighten} />
      </div>
    </>
  );
};

export default Bulb;
