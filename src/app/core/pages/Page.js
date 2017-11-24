export default class Page {

  constructor(name) {
    this.target = document.querySelector('#app > .container')
    this.setPage(name)
  }

  setPage(name) {
    this.target.id = `page-${name}`
  }

}
