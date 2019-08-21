import Job from "../models/Job.js";


// PRIVATE
let _state = {
  jobs: [new Job({
    company: "Dennis Dillon",
    jobTitle: "car deals",
    pay: 50,
    hours: 40,
    location: "Boise",
    imgUrl: "https://di-uploads-development.dealerinspire.com/dennisdillondcj/uploads/2018/04/DennisDillonOGImage.png"
  })]
}


// PUBLIC
export default class JobService {
  constructor() {
    // console.log("Hello from Job Service")
  }

  // makes a copy of the job
  get Jobs() {
    return _state.jobs.map(job => new Job(job))
  }
}