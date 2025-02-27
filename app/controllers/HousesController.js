import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";



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

  createHouseListing() {
    event.preventDefault()
    const houseFormElem = event.target

    const rawHouseData = getFormData(houseFormElem)

    console.log('housesController.createHouseListing is communicating')

    housesService.createHouse(rawHouseData)

    // @ts-ignore
    houseFormElem.reset()
  }

  deleteHouseListing(houseId) {
    console.log(`deleteHouseListing is communicating. "deleted" ${houseId}`);
  }
}