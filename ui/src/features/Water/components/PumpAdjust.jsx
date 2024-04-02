import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 50,
    label: "Mức 1",
  },
  {
    value: 100,
    label: "Mức 2",
  },
];
const PumpAdjust = () => {
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={50}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
};

export default PumpAdjust;
