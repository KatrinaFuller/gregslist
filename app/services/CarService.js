import Car from "../models/Car.js";


// PRIVATE
let _state = {
  cars: [new Car()]
}


// PUBLIC
export default class CarService {
  constructor() {
    console.log("Hello from CarService");
  }
}