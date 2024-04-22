const { Area, Light } = require("../models/models");
const axios = require("axios");
class LightRepository {
  constructor({ db }) {
    this.db = db;
  }
  async all(req, res) {
    try {
      const lights = await Light.find({});
      return res.status(200).json(lights);
    } catch (error) {
      console.log(error);
    }
  }

  async findLightById(id) {
    try {
      const LightRecord = await Light.findById({ id: id });
      return LightRecord;
    } catch (error) {
      console.log(error);
    }
  }

  async FindByIdArea(area_id) {
    const LightRecord = await Light.findById({ area_id: area_id });
    return LightRecord;
  }

  async update(bulb_id, data) {
    try {
      const LightRecord = await Light.findById({ id: bulb_id });
      const res = this.createRequest(LightRecord.ada_id, data);
      if (!res) {
        res.status(500).json({
          message: "Not update light",
        });
      }
      await LightRecord.save();
      return res.status(200).json(LightRecord);
    } catch (error) {
      console.log(error);
    }
  }

  async createRequest(ada_id, data) {
    try {
      await axios
        .post(
          `https://io.adafruit.com/api/v2/viet_hcmut/feeds/${ada_id}/data/`,
          { value: data },
          {
            headers: {
              "Content-Type": "application/json",
              "X-AIO-Key": process.env.ADA_FEEDKEY,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      if (res.ok) {
        return res;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = LightRepository;
