export default class Label {

  constructor(text, id = '') {
    this.text = text
    this.id = id
  }

  render() {
    return `
      <label for=${this.id}>
        ${this.text}
      </label>
    `
  }

}
