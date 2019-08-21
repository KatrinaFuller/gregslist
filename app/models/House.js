

export default class House {
  constructor(data) {
    this.street = data.street
    this.city = data.city
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.price = data.price
    this.squarefeet = data.squarefeet
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `
      <div class="col-4 border">
        <h1>${this.street}</h1>
        <h3>${this.city}</h3>
        <p>${this.bedrooms}</p>
        <p>${this.bathrooms}</p>
        <h3>${this.price}</h3>
        <p>${this.squarefeet}</p>
        <img src="${this.imgUrl}" alt="">
        <button class="btn btn-danger" onclick="app.controllers.houseController.deleteHouse(${this._id})">Delete House</button>
      </div>
    `
  }
}