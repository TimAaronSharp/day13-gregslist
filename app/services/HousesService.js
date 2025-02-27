import { AppState } from "../AppState.js";
import { House } from "../models/House.js";



class HousesService {

  createHouse(houseData) {
    console.log('houseService.createHouse is communicating', houseData);

    const newHouse = new House(houseData)
    console.log(`newHouse is ${newHouse}`);

    const houses = AppState.houses
    houses.push(newHouse)

    console.log(houses);


  }
}

export const housesService = new HousesService()