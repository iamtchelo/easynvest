import Field from './Field'
import Label from './Label'
import Image from '../base/Image'

export default class Form {

  constructor({ fields, values = {}, submit }) {
    this.fields = fields
    this.values = values
    this.form = document.createElement('form')
    this.target = document.querySelector('#app > .container')

    this.form.className = 'form'
    this.target.appendChild(this.form)

    this.form.addEventListener('checkform', this.checkForm.bind(this), false)
    this.form.addEventListener('submit', (event) => {
      event.preventDefault()
      submit(this.getFields())
    }, false)
  }

  setValues() {
    this.fields
    .filter(f => f.type !== 'submit')
    .map(f => {
      const field = document.getElementById(f.id)
      const value = this.values[field.id]

      if (value) {
        if (field.type === 'file') {
          field.parentNode.insertAdjacentHTML('beforeend', new Image({
            className: 'img-thumbnail',
            src: value
          }).render())
        } else {
          field.value = value
          field.className = 'filled success'
        }
      }
    })

    this.checkForm()
  }

  getFields() {
    let data = {}
    let fields = Array.from(this.form.querySelectorAll('input:not([type="submit"])'))

    fields.forEach(field => {
      const image = field.parentNode.querySelector('img')
      if (field.type === 'file' && image) {
        data[field.id] = image.src
      } else {
        data[field.id] = field.value
      }
    })

    return data
  }

  checkForm() {
    const submit = this.form.querySelector('input[type="submit"]')
    submit.disabled = this.isInvalid()
  }

  isInvalid() {
    const fields = Array.from(this.form.querySelectorAll('input[required]'))
    return fields.some(field => {
      return field.classList.contains('invalid') || !field.value
    })
  }

  render() {
    let container, fieldElement

    this.fields.forEach(field => {
      container = document.createElement('div')
      fieldElement = new Field(field)

      if (field.type !== 'submit') {
        container.insertAdjacentHTML('afterbegin',
          new Label(field.placeholder, field.id).render()
        )
      }

      container.className = 'group'
      container.prepend(fieldElement.el)
      this.form.appendChild(container)
    })

    this.setValues()
  }

}
