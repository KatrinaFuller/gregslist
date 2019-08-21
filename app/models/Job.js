

export default class Job {
  constructor(data) {
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.pay = data.pay
    this.hours = data.hours
    this.location = data.location
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `
      <div class="col-4 border">
        <h1>company</h1>
        <h2>jobTitle</h2>
        <p>pay</p>
        <p>hours</p>
        <p>location</p>
        <img src="imgUrl" alt="">
      </div>
    `
  }
}