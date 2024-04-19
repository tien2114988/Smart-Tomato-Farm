import { useState, useEffect } from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
//import { UserData } from "./Data";
import "./Static.css";
import axios from "axios";



function Static() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/analysis/home"); // Thay đổi đường dẫn tương ứng với API của bạn
        const userData = response.data;
        const formattedChartData = {
          labels: userData.map((data) => data.date),
          datasets: [
            {
              label: "Temperature",
              data: userData.map((data) => data.temperature),
              backgroundColor: "#FF3030",
              borderColor: "#FF3030",
              borderWidth: 2,
            },
            {
              label: "Air Humidity",
              data: userData.map((data) => data.air_humidity),
              backgroundColor: "#064FF0",
              borderColor: "#064FF0",
              borderWidth: 2,
            },
            {
              label: "Soil Moisture",
              data: userData.map((data) => data.soil_moisture),
              backgroundColor: "#65d459",
              borderColor: "#65d459",
              borderWidth: 2,
            },
            {
              label: "Light",
              data: userData.map((data) => data.light),
              backgroundColor: "#fafa1b",
              borderColor: "#fafa1b",
              borderWidth: 2,
            },
          ],
        };

        setChartData(formattedChartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000); // Gửi yêu cầu cập nhật mỗi 10 giây

    return () => clearInterval(interval); 
  }, []); // Chỉ gửi yêu cầu khi component được tạo ra (mount)

  return (
    <div className="Light border p-2 w-100">
      {chartData ? (
        <div className="tabs w-50 h-auto d-flex gap-2 mb-5 justify-content-between align-items-center">
          <LineChart chartData={chartData} />
          <BarChart chartData={chartData} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

    

  // const [chartData, setUserData] = useState({

  //   labels: UserData.map((data) => data.date),
  //   datasets: [
  //     {
  //       label: "Temperature",
  //       data: UserData.map((data) => data.Temp),
  //       backgroundColor: "#FF3030",
  //       borderColor: "#FF3030",
  //       borderWidth: 2,
  //     },
  //     {
  //       label: "Air Humidity",
  //       data: UserData.map((data) => data.Humid),
  //       backgroundColor: "#064FF0",
  //       borderColor: "#064FF0",
  //       borderWidth: 2,
  //     },
  //     {
  //       label: "Soil Moisture",
  //       data: UserData.map((data) => data.Mois),
  //       backgroundColor: "#65d459",
  //       borderColor: "#65d459",
  //       borderWidth: 2,
  //     },
  //     {
  //       label: "Light",
  //       data: UserData.map((data) => data.Light),
  //       backgroundColor: "#fafa1b",
  //       borderColor: "#fafa1b",
  //       borderWidth: 2,
  //     },
  //   ],
  // });


  // return (
  //   <div className="Light border p-2 w-100">
  //     <div className="tabs w-50 h-auto d-flex gap-2 mb-5 justify-content-between align-items-center">
  //       <LineChart chartData={chartData} />

  //       <BarChart chartData={chartData} />
  //     </div>
  //   </div>
  // );
}

export default Static;