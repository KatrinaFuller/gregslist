

export default class Job {
  constructor(data) {
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.pay = data.pay
    this.hours = data.hours
    this.location = data.location
    this.imgUrl = data.imgUrl
  }
}