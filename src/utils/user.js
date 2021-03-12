import axios from 'axios'

export default class User {
  constructor(url) {
    this.url = url
  }

  async login(data) {
    const config = {
      method: 'get',
      url: this.url,
      data: {
        email: data.email,
        password: data.password
      },
      headers: {
        "Content-Type": "application/json"
      }
    }
    const result = await axios(config)
    return result.data
  }
}
