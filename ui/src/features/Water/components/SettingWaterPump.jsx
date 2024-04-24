import React from "react";
import "./SettingWaterPump.css";
import Switch from "react-switch";

import { useState } from "react";
import FormTimer from "./FormTimer";
import FormSensor from "./FormSensor";

const SettingWaterPump = ({ pump, setting, handleSetting }) => {
  // console.log(setting);
  const mois = 60;
  const [autoMode, setAutoMode] = useState(true);
  // const [autoMode, setAutoMode] = useState(
  //   bulb.is_applied_sensor && bulb.is_applied_timer
  // );
  const [timer, setTimer] = useState(false);
  const [sensor, setSensor] = useState(false);
  const [loading, setLoading] = useState(true);

  const [startTime1, setStartTime1] = useState(null);
  const [startTime2, setStartTime2] = useState(null);

  const handleClick = (isTimer) => {
    if (isTimer) {
      setTimer(true);
      setSensor(false);
    } else {
      setTimer(false);
      setSensor(true);
    }
  };

  const handleAutoMode = () => {
    setAutoMode(!autoMode);
  };
  // console.log(".", startTime, endTime);
  return (
    <div
      className={`settingpump px-3 py-4 gap-4 justify-content-start flex-column ${
        setting ? "active-setting d-flex" : ""
      }`}
    >
      <div className="automode d-flex gap-5 align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <span>Tự động</span>
          <Switch onChange={handleAutoMode} checked={autoMode} />
        </div>
        <div className="automod__close" onClick={handleSetting}>
          <i class="bi bi-x-circle h3 m0"></i>
        </div>
      </div>
      {autoMode ? (
        <div className="automode d-flex gap-4 flex-column">
          <button onClick={() => handleClick(true)} className="border h4">
            Theo thời gian
          </button>
          <button onClick={() => handleClick(false)} className="border h4">
            Theo Cảm biến
          </button>
          {timer ? (
            <FormTimer
              startTime1={startTime1}
              setStartTime1={setStartTime1}
              startTime2={startTime2}
              setStartTime2={setStartTime2}
              pump_id={pump._id}
            />
          ) : (
            <></>
          )}
          {sensor ? <FormSensor props={mois} /> : <></>}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SettingWaterPump;
