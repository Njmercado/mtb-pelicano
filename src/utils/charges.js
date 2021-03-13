import axios from 'axios'

export default class Charges{
  constructor(url) {
    this.url = url
  }

  async delete(data) {
    const config = {
      method: 'delete',
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
