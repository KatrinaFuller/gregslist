

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
        <h1>${this.company}</h1>
        <h2>${this.jobTitle}</h2>
        <p>${this.pay}</p>
        <p>${this.hours}</p>
        <p>${this.location}</p>
        <img src="${this.imgUrl}" alt="">
      </div>
    `
  }
}