import axios from 'axios'

export default class User {
  constructor(url) {
    this.url = url
  }

  async login(data) {
    const config = {
      method: 'post',
      url: this.url,
      data,
      headers: {
        "Content-Type": "application/json"
      }
    }
    const result = await axios(config)
    return result.data
  }

  async signUp(data) {
    const config = {
      method: 'post',
      url: this.url,
      data,
      headers: {
        "Content-Type": "application/json"
      }
    }
    const result = await axios(config)
    return result.data
  }

}
