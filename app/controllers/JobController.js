import JobService from "../services/JobService.js";
import CarService from "../services/CarService.js";


// PRIVATE
let _jobService = new JobService()

function _draw() {
  let template = ''
  let jobs = _jobService.Jobs
  jobs.forEach(job => {
    template += job.Template
  })

  document.querySelector("#jobs").innerHTML = template
}


// PUBLIC
export default class JobController {
  constructor() {
    // console.log("Hello from Job Controller")

  }

}