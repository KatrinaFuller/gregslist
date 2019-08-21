import HouseService from "../services/HouseService.js";


//PRIVATE
let _houseService = new HouseService();

function _draw() {
  let template = ''
  let houses = _houseService.House
  houses.forEach(house => {
    template += house.Template
  })
  document.querySelector("#houses").innerHTML = template
}

// PUBLIC
export default class HouseController {
  constructor() {
    console.log("Hello from House Controller")
  }


}