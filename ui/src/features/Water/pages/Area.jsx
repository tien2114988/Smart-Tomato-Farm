import "./Area.css";
import PumpWater from "../components/PumpWater";
const pumpswater = [
  {
    id: 1,
    name: "Máy bơm 1",
    state: true,
  },
  // {
  //   id: 2,
  //   name: "Đèn 2",
  //   state: false,
  // },
  // {
  //   id: 3,
  //   name: "Đèn 3",
  //   state: true,
  // },
];
const Area = ({ area }) => {
  //   console.log(area);
  return (
    <div className="content px-4 d-flex flex-row gap-5 flex-wrap justify-content-center align-item-center">
      {pumpswater.map((bulb) => (
        <PumpWater key={bulb.id} name={bulb.name} state={bulb.state} />
      ))}
    </div>
  );
};

export default Area;