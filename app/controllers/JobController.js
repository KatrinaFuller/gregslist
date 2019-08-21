import JobService from "../services/JobService.js";
import CarService from "../services/CarService.js";
import HouseService from "../services/HouseService.js";


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

  addJob(event) {
    event.preventDefault()
    let form = event.target

    let newJob = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      pay: form.pay.value,
      hours: form.hours.value,
      location: form.location.value,
      imgUrl: form.imgUrl.value
    }

    _jobService.addJob(newJob)
    _draw()
  }
}