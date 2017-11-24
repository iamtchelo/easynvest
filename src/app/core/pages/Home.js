import Page from './Page'
import Form from '../components/form/Form'
import UserStorage from '../storage/UserStorage'
import { Router } from '../../router'
import { fetchForm } from '../../api'

export default class Home extends Page {

  constructor() {
    super('home')
  }

  render() {
    fetchForm().then(fields =>
      new Form({
        fields,
        submit: this.handleFormSubmit.bind(this)
      })
      .render()
    )
  }

  handleFormSubmit(fields) {
    UserStorage.insert(fields)
      .then(user => Router.redirect('/users'))
      .catch(error => console.log(error))
  }

}
