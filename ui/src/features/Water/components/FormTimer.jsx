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
  // console.log(bulb_id);
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
