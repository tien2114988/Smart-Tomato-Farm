import "./Area.css";
import PumpWater from "../components/PumpWater";
import { useState, useEffect } from "react";
import axios from "axios";

const Area = ({ area }) => {
  const [pumps, setPumps] = useState([]);
  // console.log(area._id);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/water/pumps/${area._id}`)
      .then((res) => {
        // console.log(res);
        setPumps(res.data);
        // setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="content px-4 d-flex flex-row gap-2 flex-wrap justify-content-around" >
      {pumps.map((pump) => (
        <PumpWater key={pump._id} pump={pump} />
      ))}
      
    </div>
  );
};

export default Area;
