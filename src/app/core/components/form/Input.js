import { getAddressMap } from '../../../api'
import maskFormatter from '../../../utils/maskFormatter'

export default class Input {

  constructor(props) {
    this.el = document.createElement('input')

    this.setAttributes(props)
    this.setListeners(props)
  }

  get form() {
    let form = this.el.parentNode
    while(form.tagName !== 'FORM') {
      form = form.parentNode
    }

    return form
  }

  setAttributes(attribute) {
    attribute.required = true
    Object.keys(attribute).forEach(attrName => this.el.setAttribute(attrName, attribute[attrName]))
  }

  setListeners(attribute) {
    this.el.addEventListener('blur', this.handleCheckInput.bind(this), false)

    if (attribute.mask !== undefined) {
      this.oldValue = ''
      this.el.addEventListener('keyup', this.maskFormatter.bind(this), false)
    }
  }

  handleCheckForm() {
    const { form } = this
    const event = new Event('checkform')

    form.dispatchEvent(event)
  }

  handleCheckInput() {
    const {
      value,
      classList, attributes: {
        required = {},
        mask = {}
      }
    } = this.el

    if (required.value) {
      const maskLength = mask.value ? mask.value.length : value.length

      if (!value || (value.length !== maskLength)) {
        this.el.className = 'invalid'
      } else {
        this.el.className = 'success'
      }
    }

    value ? classList.add('filled') : classList.remove('filled')
    this.handleCheckForm()
  }

  maskFormatter(event) {
    const { value, attributes: { mask } } = this.el
    const { key } = event

    this.oldValue = maskFormatter({ mask: mask.value, oldValue: this.oldValue, key })
    this.el.value = this.oldValue

    this.el.value.length === mask.value.length
      ? this.el.className = 'success'
      : this.el.className = 'invalid'
  }

}
