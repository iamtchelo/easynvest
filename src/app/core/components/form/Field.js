import Input from './Input'
import InputAddress from './InputAddress'
import InputFile from './InputFile'
import InputSubmit from './InputSubmit'

export default class Field {

  constructor(props) {
    let elem

    switch (props.type.toUpperCase()) {
      case 'ADDRESS':
        elem = new InputAddress(props)
      break
      case 'FILE':
        elem = new InputFile(props)
      break
      case 'SUBMIT':
        elem = new InputSubmit()
      break
      default:
        elem = new Input(props)
    }

    this.el = elem.el
  }

}
