import CarController from "./controllers/CarController.js";


class App {
  constructor() {
    // console.log("Hello from main.js")
    this.controllers = {
      carController: new CarController(),
    }
  }
}

window["app"] = new App();