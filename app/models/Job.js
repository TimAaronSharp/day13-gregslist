import { generateId } from "../utils/GenerateId.js"


export class Job {
  constructor(data) {
    this.id = generateId()
    this.companyName = data.companyName
    this.jobTitle = data.jobTitle
    this.salary = data.salary
    this.city = data.city
    this.state = data.state
    this.imgUrl = data.imgUrl
  }
  get salaryAsCurrency() {
    const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(this.salary)

    return currency
  }

  get jobHTMLTemplate() {
    return `
    <div class="col-12">
      <div class="shadow bg-light d-flex mb-4">
        <img src="${this.imgUrl}" alt="${this.jobTitle}" class="img-fluid img-style py-1">
        <div class="p-3 flex-grow-1">
          <h4 class="text-capitalize">${this.companyName}</h4>
          <p class="text-capitalize">${this.jobTitle}</p>
          <div class="d-flex justify-content-between text-capitalize">
            <div>
              <p class="fs-4">${this.salaryAsCurrency}</p>
              <p>${this.city}</p>
              <p>${this.state}</p>
            </div>
          </div>
          <div class="text-end">
            <button onclick="app.jobsController.deleteJobListing('${this.id}')" class="btn btn-danger" type="button">Delete</button>
          </div>     
        </div>
      </div>
    </div>
    `
  }

}