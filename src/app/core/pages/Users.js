import Page from './Page'
import Form from '../components/form/Form'
import List from '../components/users/List'
import UserStorage from '../storage/UserStorage'
import { Router } from '../../router'
import { fetchForm } from '../../api'

export default class Users extends Page {

  constructor() {
    super('users')
  }

  render() {
    const users = UserStorage.fetch()
    this.target.insertAdjacentHTML('afterbegin',
      new List(users).render()
    )

    this.setListeners()
  }

  setListeners() {
    const items = Array.from(document.querySelectorAll('.user-item .edit-button'))

    items.forEach(item => item.addEventListener('click', async (event) => {
      const { cpf } = event.target.dataset
      const user = UserStorage.getUserByCPF(cpf)
      const fields = await fetchForm().then(fields =>
        fields.filter(f => f.id !== 'txtCPF')
      )

      this.target.innerHTML = ''
      new Form({
        fields,
        values: user,
        submit: this.updateUser.bind(this, cpf)
      }).render()
    }, false))
  }

  updateUser(cpf, fields) {
    UserStorage.update({
      ...fields,
      txtCPF: cpf
    })
    .then(user => Router.redirect('/users'))
    .catch(error => console.log(error))
  }

}
