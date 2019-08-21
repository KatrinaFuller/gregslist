import CarController from "./controllers/CarController.js";
import HouseController from "./controllers/HouseController.js";


class App {
  constructor() {
    // console.log("Hello from main.js")
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController()
    }
  }
}

window["app"] = new App();