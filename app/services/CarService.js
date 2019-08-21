import Car from "../models/Car.js";


// PRIVATE
let _state = {
  cars: [new Car({
    make: "Toyota",
    model: "RAV4",
    year: 2004,
    price: 12000,
    imgUrl: "https://file.kelleybluebookimages.com/kbb/base/house/2005/2005-Toyota-RAV4-Side_TTRAV043_505x375.jpg",
    description: "Great vehicle!"
  })]
}


// PUBLIC
export default class CarService {
  constructor() {
    // console.log("Hello from CarService");
  }

  get Cars() {
    return _state.cars.map(car => new Car(car))
  }

  addCar(newCar) {
    _state.cars.push(new Car(newCar))
  }

  deleteCar(id) {
    _state.cars.forEach((car, i) => {
      if (car._id == id) {
        _state.cars.splice(i, 1)
      }
    })
  }
}