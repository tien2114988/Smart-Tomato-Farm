import React, { useState } from "react";
import "./Bulb.css";
import Switch from "react-switch";
import axios from "axios";
import SettingBulb from "./SettingBulb";
const Bulb = ({ bulb }) => {
  const [lighten, setLighten] = useState(bulb.status);

  const [setting, setSetting] = useState(false);
  const ChangeLight = async () => {
    setLighten(!lighten);
    try {
      await axios
        .put("http://localhost:3001/api/light/bulbs/", { bulb_id: bulb._id })
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
        className={`Bulb py-4 d-flex flex-column align-items-center ${
          lighten ? "" : "disable"
        }`}
      >
        <div className="d-flex flex-row align-items-center justify-content-around gap-5">
          <div className="m-0 h4">{bulb.name}</div>
          <div className="setting">
            <button
              className="btn-setting h4 px-2 m-0"
              onClick={() => {
                if (lighten) {
                  setSetting(!setting);
                }
              }}
            >
              <i class="bi bi-gear w-100"></i>
            </button>
          </div>
        </div>
        <div className="bulb_state">
          {lighten ? (
            <i class="bi bi-lightbulb"></i>
          ) : (
            <i class="bi bi-lightbulb-off"></i>
          )}
        </div>
        <Switch onChange={ChangeLight} checked={lighten} />
        <SettingBulb
          bulb={bulb}
          setting={setting}
          handleSetting={() => setSetting(!setting)}
        />
      </div>
    </>
  );
};

export default Bulb;
