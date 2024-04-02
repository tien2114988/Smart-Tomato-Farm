import { DesktopTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
const FormTimer = () => {
  return (
    <div>
      <form action="" className="d-flex flex-column gap-2">
        <label>Bắt đầu từ</label>
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        <label>Kết thúc lúc</label>
        <DesktopTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
        <button className="automode__save border">Lưu</button>
      </form>
    </div>
  );
};

export default FormTimer;
