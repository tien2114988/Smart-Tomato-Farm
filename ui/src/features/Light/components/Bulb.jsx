import React, { useState } from "react";
import "./Bulb.css";
import Switch from "react-switch";
import axios from "axios";
import adafruit from "../../../api/adafruit";

const Bulb = ({ bulb }) => {
  const [lighten, setLighten] = useState(bulb.status);
  const ChangeLight = async () => {
    setLighten(!lighten);
    try {
      await axios
        .post(
          `https://io.adafruit.com/api/v2/viet_hcmut/feeds/${bulb.ada_id}/data/`,
          { value: `${!lighten === true ? "1" : "0"}` },
          {
            headers: {
              "Content-Type": "application/json",
              "X-AIO-Key": "aio_qliQ64LT5XQdvAkPGdSm1Cqo0Xqz",
            },
          }
        )
        .then((res) => {
          console.log(res);
          // console.log(lighten);
        })
        .catch((err) => {
          console.log(err);
        });

      await axios
        .put("http://localhost:3001/api/light/bulbs/", { bulb_id: bulb._id })
        .then((res) => {})
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(bulb_id);

  return (
    <>
      <div
        className={`Bulb py-4 d-flex flex-column align-items-center ${
          lighten ? "" : "disable"
        }`}
      >
        <div className="p-0 h4">{bulb.name}</div>
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
