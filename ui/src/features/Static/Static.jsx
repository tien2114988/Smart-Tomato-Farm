import { useState, useEffect } from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
//import { UserData } from "./Data";
import "./Static.css";
import axios from "axios";



function Static() {
  const [pieData1, setPieData1] = useState(null); //ánh sáng
  const [pieData2, setPieData2] = useState(null); //nhiệt độ
  const [pieData3, setPieData3] = useState(null); //đất
  const [pieData4, setPieData4] = useState(null); //kk
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/analysis/home"); // Thay đổi đường dẫn tương ứng với API của bạn
        const userData = response.data;
        const updatePieData1 = {
          labels: ['low', 'medium', 'high'],
          datasets: [
            {
              label: "Light Level",
              data: [
                userData.filter(data => data.light < 60).length,
                userData.filter(data => data.light >= 60 && data.light < 80).length,
                userData.filter(data => data.light >= 80).length
              ],
              backgroundColor: ['yellow', 'green', 'red'] // Màu tương ứng với các mức
            }
          ]
        };
        const updatePieData2 = {
          labels: ['low', 'medium', 'high'],
          datasets: [
            {
              label: "temp Level",
              data: [
                userData.filter(data => data.temperature < 40).length,
                userData.filter(data => data.temperature >= 40 && data.temperature < 60).length,
                userData.filter(data => data.temperature >= 60).length
              ],
              backgroundColor: ['yellow', 'green', 'red'] // Màu tương ứng với các mức
            }
          ]
        };
        const updatePieData3 = {
          labels: ['low', 'medium', 'high'],
          datasets: [
            {
              label: "soil Level",
              data: [
                userData.filter(data => data.soil_moisture < 60).length,
                userData.filter(data => data.soil_moisture >= 60 && data.soil_moisture < 80).length,
                userData.filter(data => data.soil_moisture >= 80).length
              ],
              backgroundColor: ['yellow', 'green', 'red'] // Màu tương ứng với các mức
            }
          ]
        };
        const updatePieData4 = {
          labels: ['low', 'medium', 'high'],
          datasets: [
            {
              label: "air Level",
              data: [
                userData.filter(data => data.air_humidity < 50).length,
                userData.filter(data => data.air_humidity >= 50 && data.air_humidity < 70).length,
                userData.filter(data => data.air_humidity >= 70).length
              ],
              backgroundColor: ['yellow', 'green', 'red'] // Màu tương ứng với các mức
            }
          ]
        };
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
        setPieData1(updatePieData1);
        setPieData2(updatePieData2);
        setPieData3(updatePieData3);
        setPieData4(updatePieData4);

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
        <div>
        <div className="tabs w-50 h-auto d-flex gap-2 mb-5 justify-content-between align-items-center">
          <LineChart chartData={chartData} title = {"Thống kê các thông số theo thời gian"} />
          <BarChart chartData={chartData} title = {"Thống kê các thông số theo thời gian"}/>
          </div>
          <div className="tabs w-25 h-auto d-flex gap-2 mb-5 justify-content-between align-items-center">
            <PieChart chartData={pieData1} title = {"tỉ lệ mức độ ánh sáng"} />
            <PieChart chartData={pieData2} title = {"tỉ lệ mức độ nhiệt độ"} />
            <PieChart chartData={pieData3} title = {"tỉ lệ mức độ độ ẩm đất"} />
            <PieChart chartData={pieData4} title = {"tỉ lệ mức độ độ ẩm không khí"} />
          </div>
          {/* <div className="tabs w-50 h-auto d-flex gap-2 mb-5 justify-content-between align-items-center">
            <PieChart chartData={pieData3} title = {"tỉ lệ mức độ độ ẩm đất"} />
            <PieChart chartData={pieData4} title = {"tỉ lệ mức độ độ ẩm không khí"} />
          </div> */}
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