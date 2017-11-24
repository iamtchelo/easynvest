export default class Item {

  constructor(user) {
    this.user = user
  }

  render() {
    return `
      <li class="user-item">
        <span class="user-info">
          ${this.user.txtFullname}
          (<strong>${this.user.txtCPF}</strong>)
        </span>
        <div class="actions">
          <button
            class="button edit-button"
            data-cpf=${this.user.txtCPF}>
            Editar
          </button>
        </div>
      </li>
    `
  }

}
