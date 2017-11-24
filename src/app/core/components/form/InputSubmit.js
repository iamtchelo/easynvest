export default class InputSubmit {

  constructor() {
    this.el = document.createElement('input')
    this.el.type = 'submit'
    this.el.className = 'button button-medium'
    this.el.value = 'Enviar'
    this.el.disabled = true
  }

}
