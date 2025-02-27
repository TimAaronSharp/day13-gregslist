import { AppState } from "../AppState.js";



export class JobsController {
  constructor() {
    AppState.on('jobs', this.drawJobs)

    this.drawJobs()
  }

  drawJobs() {
    console.log('is drawJobs communicating?');

    const jobs = AppState.jobs
    let jobCardContent = ''

    jobs.forEach(job => {
      jobCardContent += job.jobHTMLTemplate
    })

    const jobListingElem = document.getElementById('jobListings')

    jobListingElem.innerHTML = jobCardContent
  }
}