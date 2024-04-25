import React, { useEffect } from "react";
import "./SettingBulb.css";
import Switch from "react-switch";
import { useState } from "react";
import FormTimer from "./FormTimer";
import FormSensor from "./FormSensor";
import thresholdApi from "../../../api/thresholdApi";
import axios from "axios";

const SettingBulb = ({
  bulb,
  setting,
  handleSetting,
  levelOne,
  levelTwo,
  auto,
  setAuto,
  autoMode
}) => {
  // console.log(bulb);

  const [timer, setTimer] = useState(false);
  const [sensor, setSensor] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClick = (isTimer) => {
    if (isTimer) {
      setTimer(true);
      setSensor(false);
      setAuto((prevAuto) => {
        return {
          ...prevAuto,
          appliedTimer: true,
          appliedSensor: false,
        };
      });
    } else {
      setTimer(false);
      setSensor(true);
      
    }
  };

  const handleAutoMode = async () => {
    // console.log(auto, "xx");
    if (auto.appliedTimer || auto.appliedSensor) {
      setAuto((prevAuto) => {
        return {
          ...prevAuto,
          appliedTimer: false,
          appliedSensor: false,
        };
      });
    } else {
      setAuto((prevAuto) => {
        return {
          ...prevAuto,
          appliedTimer: true,
          appliedSensor: true,
        };
      });
    }
    if (auto.appliedTimer || auto.appliedSensor) {
      await axios
        .put(`http://localhost:3001/api/light/bulbs/setting`, {
          bulb_id: bulb._id,
          mode: "both",
          status: false,
        })
        .catch((err) => {
          console.log(err);
        });
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
          <Switch
            onChange={handleAutoMode}
            checked={auto.appliedTimer || auto.appliedSensor}
          />
        </div>
        <div className="automod__close" onClick={handleSetting}>
          <i class="bi bi-x-circle h3 m0"></i>
        </div>
      </div>
      {auto.appliedTimer || auto.appliedSensor ? (
        <div className="automode d-flex gap-4 flex-column">
          <button onClick={() => handleClick(true)} className="border h4">
            Theo thời gian
          </button>
          <button onClick={() => handleClick(false)} className="border h4">
            Theo Cảm biến
          </button>
          {timer ? (
            <FormTimer bulb={bulb} auto={auto} handleSetting={handleSetting} setAuto={setAuto} />
          ) : (
            <></>
          )}
          {sensor ? (
            <FormSensor
              bulb={bulb}
              levelOne={levelOne}
              levelTwo={levelTwo}
              auto={auto}
              setAuto={setAuto}
              handleSetting={handleSetting}
            />
          ) : (
            <></>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SettingBulb;
