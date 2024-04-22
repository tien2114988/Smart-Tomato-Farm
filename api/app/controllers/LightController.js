const LightService = require("../services/LightService.js");
const LightRepository = require("../repo/LightRepository.js");

class LightController {
  constructor({ lightService }) {
    this._lightService = lightService;
    this.getAll = this.getAll.bind(this);
    this.getLightById = this.getLightById.bind(this);
    this.changeStateLight = this.changeStateLight.bind(this);
  }
  async getAll(req, res) {
    return this._lightService.getAllLight(req, res);
  }

  async getLightById(req, res) {
    return this._lightService.getOneLight(req, res);
  }

  async changeStateLight(req, res) {
    try {
      return this._lightService.update(req, res);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = LightController;
