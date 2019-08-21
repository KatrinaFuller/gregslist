import House from "../models/House.js";


// PRIVATE
let _state = {
  houses: [new House({
    street: "2207 N Oak Hills Dr",
    city: "Meridian",
    bedrooms: 3,
    bathrooms: 2.5,
    price: "$419,999",
    squarefeet: 2395,
    imgUrl: "https://photos.zillowstatic.com/cc_ft_768/ISv0c2ghi5h4071000000000.webp"
  })]
}


// PUBLIC
export default class HouseService {
  constructor() {
    // console.log("Hello from House Service")
  }

  get Houses() {
    return _state.houses.map(house => new House(house))
  }

  addHouse(newHouse) {
    _state.houses.push(new House(newHouse))
  }

  deleteHouse(id) {
    _state.houses.forEach((house, i) => {
      if (house._id == id) {
        _state.houses.splice(i, 1)
      }
    })
  }
}