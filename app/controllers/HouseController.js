import HouseService from "../services/HouseService.js";


//PRIVATE
let _houseService = new HouseService();

function _draw() {
  let template = ''
  let houses = _houseService.Houses

  houses.forEach((house, index) => {
    template += house.Template
  })
  document.querySelector("#houses").innerHTML = template
}

// PUBLIC
export default class HouseController {
  constructor() {
    // console.log("Hello from House Controller")
    _draw()
  }

  addHouse(event) {
    event.preventDefault()
    let form = event.target

    let newHouse = {
      street: form.street.value,
      city: form.city.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      price: form.price.value,
      squarefeet: form.squarefeet.value,
      imgUrl: form.imgUrl.value
    }

    _houseService.addHouse(newHouse)
    _draw()
  }

  deleteHouse(id) {
    _houseService.deleteHouse(id)
    _draw()
  }

}