import { useState } from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import { UserData } from "./Data";
import "./Static.css";

function Static() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        label: "Temperature",
        data: UserData.map((data) => data.Temp),
        backgroundColor: "#FF3030",
        borderColor: "#FF3030",
        borderWidth: 2,
      },
      {
        label: "Air Humidity",
        data: UserData.map((data) => data.Humid),
        backgroundColor: "#064FF0",
        borderColor: "#064FF0",
        borderWidth: 2,
      },
      {
        label: "Soil Moisture",
        data: UserData.map((data) => data.Mois),
        backgroundColor: "#65d459",
        borderColor: "#65d459",
        borderWidth: 2,
      },
      {
        label: "Light",
        data: UserData.map((data) => data.Light),
        backgroundColor: "#fafa1b",
        borderColor: "#fafa1b",
        borderWidth: 2,
      },
    ],
  });


  return (
    <div className="Light border p-2 w-100">
      <div className="tabs w-50 h-auto d-flex gap-2 mb-5 justify-content-between align-items-center">
        <LineChart chartData={userData} />

        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default Static;