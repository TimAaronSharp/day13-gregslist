import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"
import { loadState, saveState } from "../utils/Store.js"


class JobsService {
  createJob(jobData) {
    const newJob = new Job(jobData)
    const jobs = AppState.jobs

    jobs.push(newJob)
    console.log(jobs);
    this.saveJobs()
  }

  saveJobs() {
    saveState('jobs', AppState.jobs)
  }

  loadJobs() {
    const jobsFromLocalStorage = loadState('jobs', [Job])

    if (jobsFromLocalStorage.length == 0) {
      AppState.emit('jobs')
      return
    }
    AppState.jobs = jobsFromLocalStorage
  }
}

export const jobsService = new JobsService()