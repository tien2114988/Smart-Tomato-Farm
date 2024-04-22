class LightService {
  constructor({ lightRepository }) {
    this._lightRepository = lightRepository;
  }
  async getAllLight(req, res) {
    try {
      const lights = await this._lightRepository.all();

      return res.status(200).json(lights);
    } catch (error) {
      console.log(error);
    }
  }

  async getOneLight(req, res) {
    try {
      return this._lightRepository.findLightById({ id: req.params.id });
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      const bulb_id = req.body.bulb_id;
      // const bulb = this._lightRepository.findLightById(bulb_id);
      bulb.status = !bulb.status;
      data = bulb.status === true ? "1" : "0";
      return this._lightRepository.update(bulb_id, data)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = LightService;
