import React, { useState } from "react";
import "./Light.css";
import SettingBulb from "./components/SettingBulb";
import Area from "./pages/Area";

const areas = [
  {
    id: 1,
    name: "Khu A",
  },
  {
    id: 2,
    name: "Khu B",
  },
];
const Light = () => {
  const [chooseArea, setChooseArea] = useState(areas[0]);
  const [setting, setSetting] = useState(false);
  const handleTabs = (id) => {
    areas.forEach((area) => {
      if (area.id === id) {
        setChooseArea(area);
      }
    });
  };
  return (
    <div className="Light border p-2 w-100">
      <div className="tabs w-100 h-auto d-flex gap-2 mb-5 justify-content-between align-items-center">
        <div className="areas d-flex gap-5 fs">
          {areas.map((area) => (
            <div
              key={area.id}
              className={`area h4 m-0 px-4 py-2 ${
                chooseArea.name === area.name ? "active" : ""
              }`}
              onClick={() => handleTabs(area.id)}
            >
              {area.name}
            </div>
          ))}
          {/* <div className={`area h4 m-0 px-4 py-2 ${areaA ? "active" : ""}`}>
            Khu A
          </div>
          <div className={`area h4 m-0 px-4 py-2 ${areaA ? "" : "active"}`}>
            Khu B
          </div> */}
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
      <Area area={chooseArea} key={chooseArea.id}/>
      <SettingBulb
        setting={setting}
        handleSetting={() => setSetting(!setting)}
      />
    </div>
  );
};

export default Light;
