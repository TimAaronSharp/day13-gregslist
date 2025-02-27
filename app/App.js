import { CarsController } from "./controllers/CarsController.js"
import { HousesController } from "./controllers/HousesController.js"
import { JobsController } from "./controllers/JobsController.js"

class App {
  carsController = new CarsController()
  housesController = new HousesController()
  jobsController = new JobsController()
}

window['app'] = new App()


