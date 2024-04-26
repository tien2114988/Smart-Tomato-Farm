// import React from "react";

// const FormSensor = ({ props }) => {
//   const mois = props;
//   return (
//     <div>
//       <form action="" className="d-flex flex-column gap-2">
//         <label>Máy bơm bật khi</label>
//         <select>
//           <option value="">Khi độ ẩm &lt; {mois} %</option>
//         </select>
//         <label>Máy bơm tắt khi</label>
//         <select>
//           <option value="">Khi độ ẩm &gt; {mois} %</option>
//         </select>
//         <button className="automode__save border">Lưu</button>
//       </form>
//     </div>
//   );
// };

// export default FormSensor;

import { useState, useEffect } from "react";
import axios from "axios";

const FormSensor = ({
  pumpwater,
  level,
  auto,
  handleSetting,
  setAuto,
}) => {
  const [pump, setPump] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:3001/api/water/pumps/setting`, {
        pumpwater_id: pumpwater._id,
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
        <label> Bật máy bơm khi</label>
        <select>
          <option value="">Khi độ ẩm đất &lt; {level} %</option>
        </select>
        <button className="automode__save border" onClick={onSubmit}>
          Lưu
        </button>
      </form>
    </div>
  );
};

export default FormSensor;
