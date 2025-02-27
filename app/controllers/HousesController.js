import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";



export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses)

    housesService.loadHouses()
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
    const confirmed = window.confirm('Are you sure you want to delete this car listing?')

    if (!confirmed) {
      return
    }
    console.log(`deleting car with the id of ${houseId}`);

    housesService.deleteHouse(houseId)

  }
}