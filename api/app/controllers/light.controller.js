const axios = require("axios");
const adafruit_url = require("../config/adafruit.config");
const feedKey = require("../config/adafruit.config")
const { Area, Light } = require("../models/models");

const index = (req, res) => {
  axios
    .get(adafruit_url)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
//  Get All Area
const getAllArea = async (req, res) => {
  try {
    const areas = await Area.find({});
    return res.status(200).json(areas);
  } catch (error) {
    console.log(error);
  }
};
// Create Area
const createArea = async (req, res) => {
  try {
    const newArea = new Area();
    newArea.name = req.body.name;
    await newArea.save();
    return res.status(200).json({
      newArea,
    });
  } catch (error) {
    console.log(error);
  }
};
// Get All Bulb from One Area
const getBulbFromArea = async (req, res) => {
  try {
    const area_id = req.params.id;
    const bulbs = await Light.find({ area_id });
    return res.status(200).json(bulbs);
  } catch (error) {
    console.log(error);
  }
};
const getBulbFromAda = async (req, res) => {
  try {
    axios
      .get(`https://io.adafruit.com/api/v2/viet_hcmut/feeds/data/${feedKey}`)
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } catch (error) {
    console.log(error);
  }
};
// Create Bulb
const createBulbFromArea = async (req, res) => {
  try {
    const newBulb = new Light();
    newBulb.name = req.body.name;
    newBulb.area_id = req.body.area_id;
    await newBulb.save();
    return res.status(200).json({
      newBulb,
    });
  } catch (error) {
    console.log(error);
  }
};
// Change State Bulb
const getLightById = async (req, res) => {
  try {
    const bulb = await Light.findById(req.params.id);
    if (!bulb) {
      return res.status(404).json({
        message: "Not found bulb",
      });
    }
    return res.status(200).json({
      bulb,
    });
  } catch (error) {
    console.log(error);
  }
};
// Turn On off
const changeStateBulb = async (req, res) => {
  try {
    const bulb_id = req.body.bulb_id;
    const bulb = await Light.findById(bulb_id);
    bulb.status = !bulb.status;
    bulb.save();
    return res.status(200).json({
      message: "Update the Bulb",
    });
    // const saveBulb = Light.findOneAndUpdate({id:bulb_id, !status})
  } catch (error) {
    console.log(error);
  }
};

//

module.exports = {
  index,
  getAllArea,
  createArea,
  getBulbFromArea,
  createBulbFromArea,
  changeStateBulb,
  getLightById,
  getBulbFromAda,
};
