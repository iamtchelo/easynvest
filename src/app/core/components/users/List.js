import Item from './Item'

export default class List {

  constructor(users) {
    this.users = users
  }

  render() {
    return `
      <ul class="users-list">
        ${Object.keys(this.users).map(key =>
          new Item(this.users[key]).render()
        )}
      </ul>
    `.replace(/,/g, '')
  }

}
