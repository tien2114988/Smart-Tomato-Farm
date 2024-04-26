import React, { useEffect, useState } from "react";
import "./Water.css";
import Area from "./pages/Area";
import axios from "axios";

const Water = () => {
  const [areas, setAreas] = useState([]);
  const [chooseArea, setChooseArea] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/water/")
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
    <div className="Pump border p-2 w-100">
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
        </div>
      </div>
      <Area area={chooseArea} key={chooseArea._id} />
    </div>
  );
};

export default Water;
