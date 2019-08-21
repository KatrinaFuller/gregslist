import CarService from "../services/CarService.js";


// PRIVATE
let _carService = new CarService();

function _draw() {
  let template = ''
  let cars = _carService.Cars

  cars.forEach((car, index) => {
    template += car.Template
  })

  document.querySelector("#cars").innerHTML = template
}


// PUBLIC
export default class CarController {
  constructor() {
    // console.log("Hello from CarController")
    _draw()
  }

  addCar(event) {
    event.preventDefault()
    let form = event.target

    let newCar = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value,
    }

    _carService.addCar(newCar)
    _draw()
  }
}