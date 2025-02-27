import { AppState } from "../AppState.js";



export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses)

    this.drawHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    let houseCardContent = ''

    houses.forEach(house => {
      houseCardContent += house.houseHTMLTemplate
    })

    const houseListingElem = document.getElementById('houseListings')

    houseListingElem.innerHTML = houseCardContent

    // houses.forEach(house => houseCardContent)
  }

  deleteHouseListing(houseId) {
    console.log(`deleteHouseListing is communicating. "deleted" ${houseId}`);
  }
}