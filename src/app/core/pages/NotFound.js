import Page from './Page'

export default class NotFound extends Page {

  constructor() {
    super('404')
  }

  render() {
    const title = document.createElement('h1')

    title.className = 'message'
    title.appendChild(
      title.appendChild(document.createTextNode('Page not found :/'))
    )

    this.target.appendChild(title)
  }

}
