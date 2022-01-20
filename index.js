const tanggalan = require('./module/tanggalan.js')
const nekoslife = require('./module/nekoslife.js')

class IkuAPI {
  constructor() {
    this.nekoslife = nekoslife
    this.tanggalan = tanggalan
  }
}

module.exports = {
  Client: IkuAPI
}
