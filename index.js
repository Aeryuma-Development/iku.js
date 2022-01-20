const tanggalan = require('./module/tanggalan.js')
const nekoslife = require('./module/nekoslife.js')

class IkuAPI {
  nekoslife() {
    return nekoslife
  }
  tanggalan() {
    return tanggalan
  }
}

module.exports = {
  Client: IkuAPI
} 
