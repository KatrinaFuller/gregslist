

export default class Car {
  constructor(data) {
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.imgUrl - data.imgUrl
    this.description = data.description || "No description provided"
  }
}