import { DesktopTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useRef } from "react";

const FormTimer = ({
  startTime1,
  setStartTime1,
  startTime2,
  setStartTime2,
  pump_id,
}) => {
  // console.log(pump_id);
  const startRef1 = useRef(null);
  const startRef2 = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    setStartTime1(startRef1.current.value)
    setStartTime2(startRef2.current.value)
  };
  return (
    <div>
      <form action="" className="d-flex flex-column gap-2">
        <label>Bắt đầu lúc</label>
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} inputRef={startRef1} />
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} inputRef={startRef2}/>
        <button className="automode__save border" onClick={handleClick}>
          Lưu
        </button>
      </form>
    </div>
  );
};

export default FormTimer;

// import { DesktopTimePicker } from "@mui/x-date-pickers";
// import dayjs from "dayjs";
// import { useEffect, useRef, useState } from "react";
// import axios from "axios";
// const FormTimer = ({ pump, auto, handleSetting, setAuto }) => {
//   const startRef = useRef(null);
//   const endRef = useRef(null);
//   const [startTime, setStartTime] = useState(null);
//   const [endTime, setEndTime] = useState(null);

//   useEffect(() => {
//     let intervalId;
//     const fetchPumpSettings = async () => {
      
//       try {
//         const result = await axios.get(
//           `http://localhost:3001/api/water/pumps/setting/${pump._id}`
//         );
//         // console.log("?????", result);
//         if (result.data && result != null) {
//           setStartTime(result.data.on_time);
//           setEndTime(result.data.off_time);

//           const currenttime = dayjs().valueOf();
//           const startTimeValue = dayjs(result.data.on_time, "h:mm A").valueOf();
//           const endTimeValue = dayjs(result.data.off_time, "h:mm A").valueOf();

//           console.log("Current Time:", currenttime);
//           console.log("Time:", startTimeValue, endTimeValue);
//           if (currenttime > startTimeValue && currenttime < endTimeValue) {
//             if (pump.status === false) {
//               console.log("Pump Off to On");
//               axios.put(`http://localhost:3001/api/water/pumps/auto`, {
//                 pump_id: pump._id,
//                 action: "one",
//                 status: "on",
//               });
//             } else {
//               console.log("Light On");
//               axios.put(`http://localhost:3001/api/water/pumps/auto`, {
//                 pump_id: pump._id,
//                 action: "one",
//                 status: "on",
//               });
//             }
//           } else if(currenttime > endTimeValue) {
//             if (pump.status === true) {
//               console.log("Pump On to Off");
//               axios.put(`http://localhost:3001/api/water/pumps/auto`, {
//                 pump_id: pump._id,
//                 action: "one",
//                 status: "off",
//               });
//             } else {
//               setAuto((prevAuto) => {
//                 return {
//                   ...prevAuto,
//                   appliedTimer: false,
//                 };
//               });
//               axios.put(`http://localhost:3001/api/water/pumps/auto`, {
//                 pump_id: pump._id,
//                 action: "one",
//                 status: "off",
//               });
//             }
//           }
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     if (auto.appliedTimer) {
//       intervalId = setInterval(fetchPumpSettings, 5000);
//     }

//     return () => {
//       if (intervalId) {
//         clearInterval(intervalId);
//       }
//     };
//   }, [pump._id, pump.status, auto.appliedTimer]);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setAuto((prevAuto) => {
//       return {
//         ...prevAuto,
//         appliedTimer: true,
//         appliedSensor: false,
//       };
//     });

//     setStartTime(startRef.current.value);
//     setEndTime(endRef.current.value);

//     await axios
//       .put(`http://localhost:3001/api/water/pumps/setting`, {
//         pump_id: pump._id,
//         mode: "timer",
//         status: true,
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     await axios
//       .put(`http://localhost:3001/api/light/pumps/setting/${pump._id}`, {
//         startTime: startRef.current.value,
//         endTime: endRef.current.value,
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     handleSetting();
//   };

//   return (
//     <div>
//       <form action="" className="d-flex flex-column gap-2">
//         <label>Bắt đầu từ</label>
//         <DesktopTimePicker
//           defaultValue={dayjs(new Date())}
//           inputRef={startRef}
//         />
//         <label>Kết thúc lúc</label>
//         <DesktopTimePicker defaultValue={dayjs(new Date())} inputRef={endRef} />
//         <button className="automode__save border" onClick={onSubmit}>
//           Lưu
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormTimer;
