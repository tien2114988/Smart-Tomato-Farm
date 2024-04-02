import React, { useEffect, useState } from "react";
import "./Light.css";
import SettingBulb from "./components/SettingBulb";
import Area from "./pages/Area";
import getAllArea from "../../api/areaApi";
import axios from "axios";

// const areas = [
//   {
//     id: 1,
//     name: "Khu A",
//   },
//   {
//     id: 2,
//     name: "Khu B",
//   },
// ];
// console.log(typeof(areas));
const Light = () => {
  const [areas, setAreas] = useState([]);
  const [chooseArea, setChooseArea] = useState(null);
  const [setting, setSetting] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/light/")
      .then((res) => {
        // console.log(res);
        setAreas(res.data);
        if (res.data.length > 0) {
          setChooseArea(res.data[0]);
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleTabs = (id) => {
    areas.forEach((area) => {
      if (area._id === id) {
        setChooseArea(area);
      }
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="Light border p-2 w-100">
      <div className="tabs w-100 h-auto d-flex gap-2 mb-5 justify-content-between align-items-center">
        <div className="areas d-flex gap-5 fs">
          {areas.map((area) => (
            <div
              key={area._id}
              className={`area h4 m-0 px-4 py-2 ${
                chooseArea.name === area.name ? "active" : ""
              }`}
              onClick={() => handleTabs(area._id)}
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
      <Area area={chooseArea} key={chooseArea._id} />
      <SettingBulb
        setting={setting}
        handleSetting={() => setSetting(!setting)}
      />
    </div>
  );
};

export default Light;
