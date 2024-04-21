import React, { useState } from "react";
import "./PumpWater.css";
import Switch from "react-switch";
import axios from "axios";
import SettingWaterPump from "./SettingWaterPump";
const PumpWater = ({ pump }) => {
  const [active, setActive] = useState(pump.status);

  const [setting, setSetting] = useState(false);
  const ChangePump = async () => {
    setActive(!active);
    try {
      await axios
        .put("http://localhost:3001/api/water/pumps/", { pump_id: pump._id })
        .then((res) => {})
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(setting);

  return (
    <>
      <div
        className={`Pump py-4 d-flex flex-column align-items-center ${
          active ? "" : "disable"
        }`}
      >
        <div className="d-flex flex-row align-items-center justify-content-around gap-5">
          <div className="m-0 h4">{pump.name}</div>
          <div className="setting">
            <button
              className="btn-setting h4 px-2 m-0"
              onClick={() => {
                if (active) {
                  setSetting(!setting);
                }
              }}
            >
              <i class="bi bi-gear w-100"></i>
            </button>
          </div>
        </div>
        <div className="pump_state">
          {active ? (
            <i class="bi bi-waterpump"></i>
          ) : (
            <i class="bi bi-waterpump-off"></i>
          )}
        </div>
        <Switch onChange={ChangePump} checked={active} />
        <SettingWaterPump
          pump={pump}
          setting={setting}
          handleSetting={() => setSetting(!setting)}
        />
      </div>
    </>
  );
};

export default PumpWater;
