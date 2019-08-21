import Job from "../models/Job.js";


// PRIVATE
let _state = {
  jobs: [new Job()]
}


// PUBLIC
export default class JobService {
  constructor() {
    console.log("Hello from Job Service")
  }
}