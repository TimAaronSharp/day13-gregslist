import { generateId } from "../utils/GenerateId.js";



export class House {
  constructor(data) {
    this.id = generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get priceAsCurrency() {
    const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(this.price)

    return currency
  }

  get houseHTMLTemplate() {
    return `
    <div class="col-md-12">
      <div class="shadow bg-light d-flex mb-4">
        <img src="${this.imgUrl}" alt="${this.description}" class="img-fluid img-style py-1">
        <div class="p-3 flex-grow-1">
            <h4 class="text-capitalize">${this.year} ${this.bedrooms} bedroom ${this.bathrooms} bath</h4>
              <div class="d-flex justify-content-between">
                <div>
                  <p class="fs-4">${this.priceAsCurrency}</p>
                  <p>${this.sqft} sq ft</p>
                  <div class="d-flex gap-2">
                  <p>${this.description}</p>
                </div>
              </div>
              <div class="text-end">
                <button onclick="app.housesController.deleteHouseListing('${this.id}')" class="btn btn-danger"
                    type="button">Delete</button>
              </div>
           </div>
        </div>
      </div>
    </div>
        `
  }

}