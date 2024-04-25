import { DesktopTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const FormTimer = ({ bulb, auto, handleSetting, setAuto }) => {
  const startRef = useRef(null);
  const endRef = useRef(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    let intervalId;
    const fetchBulbSettings = async () => {
      
      try {
        const result = await axios.get(
          `http://localhost:3001/api/light/bulbs/setting/${bulb._id}`
        );
        // console.log("?????", result);
        if (result.data && result != null) {
          setStartTime(result.data.on_time);
          setEndTime(result.data.off_time);

          const currenttime = dayjs().valueOf();
          const startTimeValue = dayjs(result.data.on_time, "h:mm A").valueOf();
          const endTimeValue = dayjs(result.data.off_time, "h:mm A").valueOf();

          console.log("Current Time:", currenttime);
          console.log("Time:", startTimeValue, endTimeValue);
          if (currenttime > startTimeValue && currenttime < endTimeValue) {
            // console.log("Lighting On");
            if (bulb.status === false) {
              console.log("Light Off to On");
              axios.put(`http://localhost:3001/api/light/bulbs/auto`, {
                bulb_id: bulb._id,
                action: "one",
                status: "on",
              });
            } else {
              console.log("Light Onnn");
              axios.put(`http://localhost:3001/api/light/bulbs/auto`, {
                bulb_id: bulb._id,
                action: "one",
                status: "on",
              });
            }
          } else if(currenttime > endTimeValue) {
            if (bulb.status === true) {
              console.log("Light On to Off");
              axios.put(`http://localhost:3001/api/light/bulbs/auto`, {
                bulb_id: bulb._id,
                action: "one",
                status: "off",
              });
            } else {
              setAuto((prevAuto) => {
                return {
                  ...prevAuto,
                  appliedTimer: false,
                };
              });
              axios.put(`http://localhost:3001/api/light/bulbs/auto`, {
                bulb_id: bulb._id,
                action: "one",
                status: "off",
              });
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (auto.appliedTimer) {
      intervalId = setInterval(fetchBulbSettings, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [bulb._id, bulb.status, auto.appliedTimer]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setAuto((prevAuto) => {
      return {
        ...prevAuto,
        appliedTimer: true,
        appliedSensor: false,
      };
    });

    setStartTime(startRef.current.value);
    setEndTime(endRef.current.value);

    await axios
      .put(`http://localhost:3001/api/light/bulbs/setting`, {
        bulb_id: bulb._id,
        mode: "timer",
        status: true,
      })
      .catch((err) => {
        console.log(err);
      });

    await axios
      .put(`http://localhost:3001/api/light/bulbs/setting/${bulb._id}`, {
        startTime: startRef.current.value,
        endTime: endRef.current.value,
      })
      .catch((err) => {
        console.log(err);
      });

    handleSetting();
  };

  return (
    <div>
      <form action="" className="d-flex flex-column gap-2">
        <label>Bắt đầu từ</label>
        <DesktopTimePicker
          defaultValue={dayjs(new Date())}
          inputRef={startRef}
        />
        <label>Kết thúc lúc</label>
        <DesktopTimePicker defaultValue={dayjs(new Date())} inputRef={endRef} />
        <button className="automode__save border" onClick={onSubmit}>
          Lưu
        </button>
      </form>
    </div>
  );
};

export default FormTimer;
