export default class UserStorage {

  static fetch() {
    return JSON.parse(localStorage.getItem('users')) || {}
  }

  static insert(user) {
    return new Promise((resolve, reject) => {
      const users = UserStorage.fetch()

      if (users[user.txtCPF]) {
        reject(`The ${user.txtCPF} alredy exists, try again.`)
      }

      users[user.txtCPF] = user
      localStorage.setItem('users', JSON.stringify(users))

      resolve(`The user ${user.txtCPF} was inserted with successful.`)
    })
  }

  static getUserByCPF(cpf) {
    const users = UserStorage.fetch()
    return users[cpf]
  }

  static update(user) {
    return new Promise((resolve, reject) => {
      if (UserStorage.getUserByCPF(user.txtCPF)) {
        let users = UserStorage.fetch()

        users[user.txtCPF] = { ...user }
        localStorage.setItem('users', JSON.stringify(users))

        resolve(`The user ${user.txtCPF} was updated with successful.`)
      }

      reject(`The user ${user.txtCPF} not found or failed to update.`)
    })
  }

}
