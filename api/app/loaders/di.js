const awilix = require("awilix");
const mongooseLoader = require("./mongoose.js");
const LightController = require("../controllers/LightController.js");
const LightService = require("../services/LightService.js");
const LightRepository = require("../repo/LightRepository.js");
const AreaController = require("../controllers/AreaController.js");
const AreaService = require("../services/AreaService.js");
const AreaRepository = require("../repo/AreaRepository.js");

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

async function setup(mongooseLoader) {
  container.register({
    lightController: awilix.asClass(LightController),
    lightService: awilix.asClass(LightService),
    lightRepository: awilix.asClass(LightRepository),
    areaController: awilix.asClass(AreaController),
    areaService: awilix.asClass(AreaService),
    areaRepository: awilix.asClass(AreaRepository),
    db: awilix.asValue(mongooseLoader),
  });
}

module.exports = {
  container,
  setup,
};
