import NotFound from './core/pages/NotFound'

export class Router {

  constructor(routes) {
    const { pathname } = window.location
    const currentPage = routes[pathname] ? routes[pathname] : new NotFound()

    currentPage.render()
  }

  static redirect(to) {
    window.location.href = to
  }

}
