const awilix = require("awilix");
const mongooseLoader = require("./mongoose.js");
const LightController = require("../controllers/LightController.js");
const LightService = require("../services/LightService.js");
const LightRepository = require("../repo/LightRepository.js");

const ManageController = require("../controllers/manage.controller.js");
const ManageService = require("../services/ManageService.js");
const ManageRepository = require("../repo/ManageRepository.js");

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

async function setup(mongooseLoader) {
  container.register({
    lightController: awilix.asClass(LightController),
    lightService: awilix.asClass(LightService),
    lightRepository: awilix.asClass(LightRepository),

    manageController: awilix.asClass(ManageController),
    manageService: awilix.asClass(ManageService),
    manageRepository: awilix.asClass(ManageRepository),
    
    db: awilix.asValue(mongooseLoader),
  });
}

module.exports = {
  container,
  setup,
};
