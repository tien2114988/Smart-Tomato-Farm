import axios from "axios";

const getAllArea = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/light/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllArea;
