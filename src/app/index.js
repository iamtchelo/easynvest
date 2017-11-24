import { Router } from './router'
import HomePage from './core/pages/Home'
import UsersPage from './core/pages/Users'

import '../assets/css/app.styl'

document.addEventListener('DOMContentLoaded', () => {
  new Router({
    '/': new HomePage(),
    '/users': new UsersPage()
  })
}, false)
