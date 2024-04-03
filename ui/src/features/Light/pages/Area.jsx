import "./Area.css";
import Bulb from "../components/Bulb";
import {useState,useEffect} from 'react'
import axios from 'axios'

const Area = ({ area }) => {
  const [bulbs, setBulbs] = useState([])
  // console.log(area._id);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/light/bulbs/${area._id}`)
      .then((res) => {
        // console.log(res);
        setBulbs(res.data);
        // setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="content px-4 d-flex flex-row gap-5 flex-wrap justify-content-between">
      {bulbs.map((bulb) => (
        <Bulb key={bulb._id} bulb = {bulb} />
      ))}
    </div>
  );
};

export default Area;
