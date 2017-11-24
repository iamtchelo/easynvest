export default class Image {

  constructor(props = {}) {
    this.border = 0
    this.width = props.width || 100
    this.height = props.height || 100
    this.className = props.className || ''
    this.src = props.src || ''
  }

  render() {
    return `
      <img
        border=${this.border}
        width=${this.width}
        height=${this.height}
        class=${this.className}
        src=${encodeURI(this.src)} />
    `
  }

}
