import { useState, useEffect } from "react";
import axios from "axios";

const FormSensor = ({
  bulb,
  levelOne,
  levelTwo,
  auto,
  handleSetting,
  setAuto,
}) => {
  const [light, setLight] = useState(null);
  // console.log(auto);
  // console.log("Bulb", bulb);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:3001/api/light/bulbs/setting`, {
        bulb_id: bulb._id,
        mode: "sensor",
        status: true,
      })
      .catch((err) => {
        console.log(err);
      });
    setAuto((prevAuto) => {
      return {
        ...prevAuto,
        appliedTimer: false,
        appliedSensor: true,
      };
    });
    handleSetting();
  };
  return (
    <div>
      <form className="d-flex flex-column gap-2">
        <label> Bật Hai đèn khi</label>
        <select>
          <option value="">Khi cường đó ánh sáng &lt; {levelOne} %</option>
        </select>
        <label>Bật Một đèn khi</label>
        <select>
          <option value="">Khi cường đó ánh sáng &lt; {levelTwo} %</option>
        </select>
        <button className="automode__save border" onClick={onSubmit}>
          Lưu
        </button>
      </form>
    </div>
  );
};

export default FormSensor;
