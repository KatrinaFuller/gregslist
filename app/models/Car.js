

export default class Car {
  constructor(data) {
    this._id = data._id || Math.floor(Math.random() * 4000)
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided"
  }

  get Template() {
    return `
      <div class="col-4 border">
        <h1>${this.make}</h1>
        <h3>${this.model}</h3>
        <p>${this.year}</p>
        <img class="car-size" src="${this.imgUrl}" alt="">
        <h3>${this.price}</h3>
        <p>${this.description}</p>
        <button class="btn btn-danger" onclick="app.controllers.carController.deleteCar(${this._id})">Delete Car</button>
      </div>
    `
  }
}