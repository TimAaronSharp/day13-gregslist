import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { loadState, saveState } from "../utils/Store.js";



class HousesService {

  createHouse(houseData) {
    const newHouse = new House(houseData)

    const houses = AppState.houses
    houses.push(newHouse)

    this.saveHouses()
  }

  deleteHouse(houseID) {
    const houses = AppState.houses
    const houseIndex = houses.findIndex(house => house.id == houseID)

    houses.splice(houseIndex, 1)

    this.saveHouses()
  }

  saveHouses() {
    saveState('houses', AppState.houses)
  }

  loadHouses() {
    const housesFromLocalStorage = loadState('houses', [House])

    if (housesFromLocalStorage.length == 0) {
      AppState.emit('houses')
      return
    }
    AppState.houses = housesFromLocalStorage
  }
}

export const housesService = new HousesService()