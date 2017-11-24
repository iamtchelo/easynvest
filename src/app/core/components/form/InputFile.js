import Input from './Input'
import Image from '../base/Image'

export default class InputFile extends Input {

  constructor(props) {
    super(props)

    this.el.removeAttribute('required')
    this.el.addEventListener('change', this.handleFile.bind(this), false)
  }

  handleFile(event) {
    const { files } = event.target
    const reader = new FileReader()
    let img = this.el.parentNode.querySelector('.img-thumbnail')

    reader.readAsDataURL(files[0])
    reader.addEventListener('loadend', () => {
      const { result } = reader

      if (img) {
        img.src = result
      } else {
        this.el.parentNode.insertAdjacentHTML('beforeend', new Image({
          src: reader.result,
          className: 'img-thumbnail'
        }).render())
      }
    }, false)
  }

}
