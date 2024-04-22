const awilix = require("awilix");
const mongooseLoader = require("./mongoose.js");
const LightController = require("../controllers/LightController.js");
const LightService = require("../services/LightService.js");
const LightRepository = require("../repo/LightRepository.js");

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

async function setup(mongooseLoader) {
  container.register({
    lightController: awilix.asClass(LightController),
    lightService: awilix.asClass(LightService),
    lightRepository: awilix.asClass(LightRepository),
    db: awilix.asValue(mongooseLoader),
  });
}

module.exports = {
  container,
  setup,
};
