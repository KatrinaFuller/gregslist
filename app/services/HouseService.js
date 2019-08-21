import House from "../models/House.js";


// PRIVATE
let _state = {
  houses: [new House({

  })]
}


// PUBLIC
export default class HouseService {
  constructor() {
    console.log("Hello from House Service")
  }

  get House() {
    return _state.houses.map(house => new House(house))
  }
}