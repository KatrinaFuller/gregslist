import HouseService from "../services/HouseService.js";


//PRIVATE
let _houseService = new HouseService();


// PUBLIC
export default class HouseController {
  constructor() {
    console.log("Hello from House Controller")
  }
}