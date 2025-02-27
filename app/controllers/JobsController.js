import { AppState } from "../AppState.js";
import { jobsService } from "../services/JobsService.js";
import { getFormData } from "../utils/FormHandler.js";



export class JobsController {
  constructor() {
    AppState.on('jobs', this.drawJobs)

    jobsService.loadJobs()
  }

  drawJobs() {
    const jobs = AppState.jobs
    let jobCardContent = ''

    jobs.forEach(job => {
      jobCardContent += job.jobHTMLTemplate
    })

    const jobListingElem = document.getElementById('jobListings')

    jobListingElem.innerHTML = jobCardContent
  }

  createJobListing() {
    event.preventDefault()

    const jobFormElem = event.target

    const rawJobData = getFormData(jobFormElem)

    jobsService.createJob(rawJobData)

    // @ts-ignore
    jobFormElem.reset()

  }
}