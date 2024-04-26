// // import React, { useState } from "react";
// // import "./PumpWater.css";
// // import Switch from "react-switch";
// // import axios from "axios";
// // import SettingWaterPump from "./SettingWaterPump";
// // const PumpWater = ({ pump }) => {
// //   const [active, setActive] = useState(pump.status);

// //   const [setting, setSetting] = useState(false);
// //   const ChangePump = async () => {
// //     setActive(!active);
// //     try {
// //       await axios
// //         .put("http://localhost:3001/api/water/pumps/", { pump_id: pump._id })
// //         .then((res) => {})
// //         .catch((err) => console.log(err));
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
// //   // console.log(setting);

// //   return (
// //     <>
// //       <div
// //         className={`Pump py-4 d-flex flex-column align-items-center ${
// //           active ? "" : "disable"
// //         }`}
// //       >
// //         <div className="d-flex flex-row align-items-center justify-content-around gap-5">
// //           <div className="m-0 h4">{pump.name}</div>
// //           <div className="setting">
// //             <button
// //               className="btn-setting h4 px-2 m-0"
// //               onClick={() => {
// //                 if (1) {
// //                   setSetting(!setting);
// //                 }
// //               }}
// //             >
// //               <i class="bi bi-gear w-100"></i>
// //             </button>
// //           </div>
// //         </div>
// //         <div className="Pump_state">
// //           {active ? (
// //             <i class="bi bi-droplet"></i>
// //           ) : (
// //             <i class="bi bi-droplet-fill"></i>
// //           )}
// //         </div>
// //         <Switch onChange={ChangePump} checked={active} />
// //         <SettingWaterPump
// //           pump={pump}
// //           setting={setting}
// //           handleSetting={() => setSetting(!setting)}
// //         />
// //       </div>
// //     </>
// //   );
// // };

// // export default PumpWater;


// import React, { useState, useEffect } from "react";
// import "./PumpWater.css";
// import Switch from "react-switch";
// import axios from "axios";
// import SettingWaterPump from "./SettingWaterPump";
// import thresholdApi from "../../../api/thresholdApi";

// const PumpWater = ({ pump }) => {
//   const [active, setActive] = useState(pump.status);
//   const [setting, setSetting] = useState(false);
//   const [auto, setAuto] = useState({
//     appliedTimer: pump.is_applied_timer,
//     appliedSensor: pump.is_applied_sensor,
//   });
//   const [autoMode, setAutoMode] = useState({
//     appliedTimer: null,
//     appliedSensor: null,
//   });
//   const [waterpump, setWaterPump] = useState(null);
//   const [pump, setPump] = useState(null);

//   const ChangePump = async () => {
//     setActive((prevPump) => !prevPump);

//     if (auto.appliedTimer) {
//       setAuto((prevAuto) => {
//         return {
//           ...prevAuto,
//           appliedTimer: false,
//           appliedSensor: false,
//         };
//       });
//       console.log("Da dung");
//     } else if (auto.appliedSensor) {
//       setAuto((prevAuto) => {
//         return {
//           ...prevAuto,
//           appliedSensor: false,
//           appliedTimer: false,
//         };
//       });
//     }

//     try {
//       await axios
//         .put("http://localhost:3001/api/water/pumps/", { pump_id: pump._id })
//         .then((res) => {})
//         .catch((err) => console.log(err));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   // console.log(auto);

//   const fetchPumpSettings = async () => {
//     await axios
//       .get(
//         "https://io.adafruit.com/api/v2/viet_hcmut/feeds/khuvuc1.data-doamdat/data"
//       )
//       .then((res) => {
//         setWaterPump(res.data[0].value);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     console.log("WaterPump", waterpump, auto);
//     console.log("Automode", autoMode);
//     console.log(auto.appliedSensor);
//     if (auto.appliedSensor) {
//       await turnOn();
//     }
//   };

//   const turnOn = async () => {
//     if (waterpump < pump && waterpump != null) {
//       console.log("One");
//       try {
//         await axios
//           .put("http://localhost:3001/api/water/pumps/auto", {
//             pump_id: pump._id,
//             action: "many",
//             status: "on",
//           })
//           .then((res) => {
//             console.log("Turn on many");
//           })
//           .catch((err) => console.log(err));
//       } catch (error) {
//         console.log(error);
//       }
//     } else if (waterpump >= pump && waterpump < pumpTwo) {
//       try {
//         console.log("Two");
//         await axios
//           .put("http://localhost:3001/api/water/pumps/auto", {
//             pump_id: pump._id,
//             action: "one",
//             status: "on",
//           })
//           .then((res) => {
//             // console.log(res);
//             console.log(`Turn on one ${pump.name}`);
//           })
//           .catch((err) => console.log(err));
//       } catch (error) {
//         console.log(error);
//       }
//     } else if (waterpump >= pumpTwo && waterpump <= 100) {
//       console.log("Three");
//       try {
//         await axios
//           .put("http://localhost:3001/api/water/pumps/auto", {
//             pump_id: pump._id,
//             action: "one",
//             status: "off",
//           })
//           .then((res) => {
//             // console.log(res);
//           })
//           .catch((err) => console.log(err));
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   useEffect(() => {
//     const intervalId = setInterval(async () => {
//       await axios
//         .get(`http://localhost:3001/api/water/pump/${pump._id}`)
//         .then((res) => {
//           // console.log(res.data);
//           setActive(res.data.status);
//           setAutoMode({
//             appliedTimer: res.data.is_applied_timer,
//             appliedSensor: res.data.is_applied_sensor,
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//       if (auto.appliedSensor){
//         fetchPumpSettings();
//       }
//     }, 7000);

//     thresholdApi.getSoilThreshold().then((res) => {
//       setPump(res[0].level1);
//     });

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [pump, auto.appliedTimer, auto.appliedSensor, waterpump]);
//   return (
//     <>
//       <div
//         className={`Pump py-4 d-flex flex-column align-items-center ${
//           active ? "" : "disable"
//         }`}
//       >
//         <div className="d-flex flex-row align-items-center justify-content-around gap-5">
//           <div className="m-0 h4">{pump.name}</div>
//           <div className="setting">
//             <button
//               className="btn-setting h4 px-2 m-0"
//               onClick={() => {
//                 setSetting(!setting);
//               }}
//             >
//               <i class="bi bi-gear w-100"></i>
//             </button>
//           </div>
//         </div>
//         <div className="pump_state">
//           {active ? (
//             <i class="bi bi-droplet"></i>
//           ) : (
//             <i class="bi bi-droplet-fill"></i>
//           )}
//         </div>
//         <Switch onChange={ChangePump} checked={active} />
//         <SettingWaterPump
//           pump={pump}
//           setting={setting}
//           handleSetting={() => setSetting(!setting)}
//           active={active}
//           level={pump}
//           auto={auto}
//           setAuto={setAuto}
//           autoMode={autoMode}
//         />
//       </div>
//     </>
//   );
// };

// export default PumpWater;
