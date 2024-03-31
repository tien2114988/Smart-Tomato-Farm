import React, { useState } from "react";
import "./Light.css";
import Bulb from "./components/Bulb";
import SettingBulb from "./components/SettingBulb";

const bulbs = [
  {
    id: 1,
    name: "Đèn 1",
    state: true,
  },
  {
    id: 1,
    name: "Đèn 2",
    state: false,
  },
  {
    id: 1,
    name: "Đèn 3",
    state: true,
  },
];
const areas = [
  {
    id: 1,
    name: "Khu A"
  },
  {
    id: 2,
    name: "Khu B"
  }
]
const Light = () => {
  const [areaA, setAreaA] = useState(true);
  const [setting, setSetting] = useState(false);
  return (
    <div className="Light border p-2 w-100">
      <div className="tabs w-100 h-auto d-flex gap-2 mb-5 justify-content-between align-items-center">
        <div className="areas d-flex gap-5 fs">
          <div className={`area h4 m-0 px-4 py-2 ${areaA ? "active" : ""}`}>
            Khu A
          </div>
          <div className={`area h4 m-0 px-4 py-2 ${areaA ? "" : "active"}`}>
            Khu B
          </div>
        </div>
        <div className="setting">
          <button
            className="btn-setting h4 px-2 m-0"
            onClick={() => setSetting(!setting)}
          >
            <i class="bi bi-gear w-100"></i>
          </button>
        </div>
      </div>
      <div className="content px-4 d-flex flex-row gap-5 flex-wrap justify-content-between">
        {bulbs.map((bulb) => (
          <Bulb key={bulb.id} name={bulb.name} state={bulb.state} />
        ))}
      </div>
      {/* {setting ? (
        <SettingBulb
          setting={setting}
          handleSetting={() => setSetting(!setting)}
          
        />
      ) : null} */}
      <SettingBulb
        setting={setting}
        handleSetting={() => setSetting(!setting)}
      />
    </div>
  );
};

export default Light;
