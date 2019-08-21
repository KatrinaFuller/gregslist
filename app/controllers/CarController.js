import CarService from "../services/CarService.js";


// PRIVATE
let _carService = new CarService();


// PUBLIC
export default class CarController {
  constructor() {
    console.log("Hello from CarController")
  }
}