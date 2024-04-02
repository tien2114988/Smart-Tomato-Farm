import "./Area.css";
import Bulb from "../components/Bulb";
import {useState,useEffect} from 'react'
import axios from 'axios'
// const bulbs = [
//   {
//     id: 1,
//     name: "Đèn 1",
//     state: true,
//   },
//   {
//     id: 2,
//     name: "Đèn 2",
//     state: false,
//   },
//   {
//     id: 3,
//     name: "Đèn 3",
//     state: true,
//   },
// ];
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
        <Bulb key={bulb._id} bulb_id={bulb._id} name={bulb.name} status={bulb.status} />
      ))}
    </div>
  );
};

export default Area;
