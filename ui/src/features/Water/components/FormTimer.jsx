import { DesktopTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useRef } from "react";

const FormTimer = ({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  pump_id,
}) => {
  // console.log(bulb_id);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    setStartTime(startRef.current.value)
    setEndTime(endRef.current.value)
  };
  return (
    <div>
      <form action="" className="d-flex flex-column gap-2">
        <label>Bắt đầu lúc</label>
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} inputRef={startRef} />
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} inputRef={endRef}/>
        <button className="automode__save border" onClick={handleClick}>
          Lưu
        </button>
      </form>
    </div>
  );
};

export default FormTimer;
