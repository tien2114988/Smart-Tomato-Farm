import React, { useState, useEffect } from "react";
import "./Bulb.css";
import Switch from "react-switch";
import axios from "axios";
import SettingBulb from "./SettingBulb";
import thresholdApi from "../../../api/thresholdApi";

const Bulb = ({ bulb }) => {
  const [lighten, setLighten] = useState(bulb.status);
  const [setting, setSetting] = useState(false);
  const [auto, setAuto] = useState({
    appliedTimer: bulb.is_applied_timer,
    appliedSensor: bulb.is_applied_sensor,
  });
  const [autoMode, setAutoMode] = useState({
    appliedTimer: null,
    appliedSensor: null,
  });
  const [lightOne, setLightOne] = useState(null);
  const [lightTwo, setLightTwo] = useState(null);
  const [light, setLight] = useState(null);

  const ChangeLight = async () => {
    setLighten((prevLight) => !prevLight);

    if (auto.appliedTimer) {
      setAuto((prevAuto) => {
        return {
          ...prevAuto,
          appliedTimer: false,
          appliedSensor: false,
        };
      });
      console.log("Da dung");
    } else if (auto.appliedSensor) {
      setAuto((prevAuto) => {
        return {
          ...prevAuto,
          appliedSensor: false,
          appliedTimer: false,
        };
      });
    }

    try {
      await axios
        .put("http://localhost:3001/api/light/bulbs/", { bulb_id: bulb._id })
        .then((res) => {})
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(auto);

  const fetchBulbSettings = async () => {
    await axios
      .get(
        "https://io.adafruit.com/api/v2/viet_hcmut/feeds/khuvuc1.data-anhsang/data"
      )
      .then((res) => {
        setLight(res.data[0].value);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Light", light, auto);
    console.log("Automode", autoMode);
    console.log(auto.appliedSensor);
    if (auto.appliedSensor) {
      await turnOn();
    }
  };

  const turnOn = async () => {
    if (light < lightOne && light != null) {
      console.log("One");
      try {
        await axios
          .put("http://localhost:3001/api/light/bulbs/auto", {
            bulb_id: bulb._id,
            action: "many",
            status: "on",
          })
          .then((res) => {
            console.log("Turn on many");
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    } else if (light >= lightOne && light < lightTwo) {
      try {
        console.log("Two");
        await axios
          .put("http://localhost:3001/api/light/bulbs/auto", {
            bulb_id: bulb._id,
            action: "one",
            status: "on",
          })
          .then((res) => {
            // console.log(res);
            console.log(`Turn on one ${bulb.name}`);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    } else if (light >= lightTwo && light <= 100) {
      console.log("Three");
      try {
        await axios
          .put("http://localhost:3001/api/light/bulbs/auto", {
            bulb_id: bulb._id,
            action: "one",
            status: "off",
          })
          .then((res) => {
            // console.log(res);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      await axios
        .get(`http://localhost:3001/api/light/bulb/${bulb._id}`)
        .then((res) => {
          // console.log(res.data);
          setLighten(res.data.status);
          setAutoMode({
            appliedTimer: res.data.is_applied_timer,
            appliedSensor: res.data.is_applied_sensor,
          });
        })
        .catch((err) => {
          console.log(err);
        });
      if (auto.appliedSensor){
        fetchBulbSettings();
      }
    }, 7000);

    thresholdApi.getLightThreshold().then((res) => {
      setLightOne(res[0].level1);
      setLightTwo(res[0].level2);
    });

    return () => {
      clearInterval(intervalId);
    };
  }, [bulb, auto.appliedTimer, auto.appliedSensor, light]);
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
                setSetting(!setting);
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
          lighten={lighten}
          levelOne={lightOne}
          levelTwo={lightTwo}
          auto={auto}
          setAuto={setAuto}
          autoMode={autoMode}
        />
      </div>
    </>
  );
};

export default Bulb;
