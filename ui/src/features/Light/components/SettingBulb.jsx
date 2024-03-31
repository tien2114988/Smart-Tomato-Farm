import React from "react";
import "./SettingBulb.css";
import Switch from "react-switch";

import { useState } from "react";
import FormTimer from "./FormTimer";
import FormSensor from "./FormSensor";
const SettingBulb = ({ setting, handleSetting }) => {
  console.log(setting);
  const lux = 10000;
  const [autoMode, setAutoMode] = useState(true);
  const [timer, setTimer] = useState(false);
  const [sensor, setSensor] = useState(false);
  const handleClick = (isTimer) => {
    if (isTimer) {
      setTimer(true);
      setSensor(false);
    } else {
      setTimer(false);
      setSensor(true);
    }
  };

  return (
    <div
      className={`settingbulb px-3 py-4 gap-4 justify-content-start flex-column ${
        setting ? "active-setting d-flex" : ""
      }`}
    >
      <div className="automode d-flex gap-5 align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <span>Tự động</span>
          <Switch onChange={() => setAutoMode(!autoMode)} checked={autoMode} />
        </div>
        <div className="automod__close" onClick={handleSetting}>
          <i class="bi bi-x-circle h3 m0"></i>
        </div>
      </div>
      <div className="automode d-flex gap-4 flex-column">
        <button onClick={() => handleClick(true)} className="border h4">
          Theo thời gian
        </button>
        <button onClick={() => handleClick(false)} className="border h4">
          Theo Cảm biến
        </button>
        {timer ? <FormTimer /> : <></>}
        {sensor ? <FormSensor props={lux} /> : <></>}
      </div>
    </div>
  );
};

export default SettingBulb;
