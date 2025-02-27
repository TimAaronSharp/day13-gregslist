import { generateId } from "../utils/GenerateId.js"

export class Car {
  // NOTE this constructor takes in a single object as an argument
  // NOTE the JS docs are not necessary, but they will give you better intellisense when using this class
  /**
   * @param {{
   * make: string; 
   * model: string; 
   * year: number; 
   * price: number; 
   * mileage: number; 
   * hasCleanTitle: boolean; 
   * engineType: string; 
   * color: string; 
   * isManualTransmission: boolean;
   * imgUrl: string }} data
   */
  constructor(data) {
    this.id = generateId() // generates a super unique string we can use as an identifier
    this.make = data.make
    this.model = data.model
    this.mileage = data.mileage
    this.color = data.color
    this.year = data.year
    this.price = data.price
    this.engineType = data.engineType
    this.hasCleanTitle = data.hasCleanTitle
    this.isManualTransmission = data.isManualTransmission
    this.imgUrl = data.imgUrl
  }

  get priceAsCurrency() {
    const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(this.price)

    return currency
  }

  get transmissionIcon() {
    if (this.isManualTransmission) {
      return '<span class="mdi mdi-car-shift-pattern" title="Manual Transmission"></span>'
    }

    // else
    return '<span class="mdi mdi-refresh-auto" title="Automatic Transmission"></span>'
  }

  get titleStatus() {
    if (this.hasCleanTitle) {
      return 'This car has a clean title approved by <span class="mdi mdi-dog" title="Clean title good boy"></span>'
    }

    return 'This car has a salvaged title designated by <span class="mdi mdi-turkey" title="Salvaged title turkey"></span>'
  }

  get cardHTMLTemplate() {
    return `
     <div class="col-12">
      <div class="shadow bg-light d-flex mb-4">
        <img src="${this.imgUrl}" alt="${this.make} ${this.model}" class="img-style">
        <div class="p-3 flex-grow-1">
          <h4 class="text-capitalize">${this.year} ${this.make} ${this.model}</h4>
          <div class="d-flex justify-content-between">
            <div>
              <p class="fs-4">${this.priceAsCurrency}</p>
              <p>${this.titleStatus}</p>
              <div class="d-flex gap-2 align-items-center">
                <span>Color</span>
                <div class="color-bubble" style="background-color: ${this.color};"></div>
              </div>
            </div>
            <div class="fs-5">
              <p>${this.engineType}</p>
              <p>${this.mileage.toLocaleString('en-US')} miles</p>
              <p>${this.transmissionIcon}</p>
            </div>
          </div>
          <div class="text-end">
            <button onclick="app.carsController.deleteCarListing('${this.id}')" class="btn btn-outline-danger" type="button">
              Delete Car
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

// new Car('toyota', 'camry') wack
// new Car({ make: 'toyota', model: 'camry' }) dope