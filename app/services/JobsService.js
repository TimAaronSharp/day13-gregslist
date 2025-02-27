import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"


class JobsService {
  createJob(jobData) {
    const newJob = new Job(jobData)
    const jobs = AppState.jobs

    jobs.push(newJob)
    console.log(jobs);

  }


}

export const jobsService = new JobsService()