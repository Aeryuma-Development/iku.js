const axios = require('axios')

var endpoints = {
  nekolife: {
    nsfw: {
      randomHentaiGif: "/nekoslife/Random_hentai_gif",
      pussy: "/nekoslife/pussy",
      nekoGif: "/nekoslife/nsfw_neko_gif",
      neko: "/nekoslife/lewd",
      lesbian: "/nekoslife/les",
      kuni: "/nekoslife/kuni",
      cumsluts: "/nekoslife/cum",
      classic: "/nekoslife/classic",
      boobs: "/nekoslife/boobs",
      bJ: "/nekoslife/bj",
      anal: "/nekoslife/anal",
      avatar: "/nekoslife/nsfw_avatar",
      yuri: "/nekoslife/yuri",
      trap: "/nekoslife/trap",
      tits: "/nekoslife/tits",
      girlSoloGif: "/nekoslife/solog",
      girlSolo: "/nekoslife/solo",
      pussyWankGif: "/nekoslife/pwankg",
      pussyArt: "/nekoslife/pussy_jpg",
      kemonomimi: "/nekoslife/lewdkemo",
      kitsune: "/nekoslife/lewdk",
      keta: "/nekoslife/keta",
      holo: "/nekoslife/hololewd",
      holoEro: "/nekoslife/holoero",
      hentai: "/nekoslife/hentai",
      futanari: "/nekoslife/futanari",
      femdom: "/nekoslife/femdom",
      feetGif: "/nekoslife/feetg",
      eroFeet: "/nekoslife/erofeet",
      feet: "/nekoslife/feet",
      ero: "/nekoslife/ero",
      eroKitsune: "/nekoslife/erok",
      eroKemonomimi: "/nekoslife/erokemo",
      eroNeko: "/nekoslife/eron",
      eroYuri: "/nekoslife/eroyuri",
      cumArts: "/nekoslife/cum_jpg",
      blowJob: "/nekoslife/blowjob",
      spank: "/nekoslife/spank",
      gasm: "/nekoslife/gasm"
    },
    expression: {
      tickle: "/nekoslife/tickle",
      slap: " /nekoslife/slap",
      poke: "/nekoslife/poke",
      pat: "/nekoslife/pat",
      kiss: "/nekoslife/kiss",
      hug: "/nekoslife/hug",
      smug: "/nekoslife/smug",
      baka: "/nekoslife/baka",
      feed: "/nekoslife/feed",
      cuddle: "/nekoslife/cuddle",
    },
    sfw: {
      neko: "/nekoslife/neko",
      meow: "/nekoslife/meow",
      lizard: "/nekoslife/lizard",
      foxGirl: "/nekoslife/fox_girl",
      nekoGif: "/nekoslife/ngif",
      kemonomimi: "/nekoslife/kemonomimi",
      holo: "/nekoslife/holo",
      woof: "/nekoslife/woof",
      wallpaper: "/nekoslife/wallpaper",
      goose: "/nekoslife/goose",
      gecg: "/nekoslife/gecg",
      avatar: "/nekoslife/avatar",
      waifu: "/nekoslife/waifu"
    }
  }
}

function nekoapi(url) {
  try {
    return axios.get("https://ikuapi.glitch.me" + url)
  } catch (e) {
    console.log(e)
  }
}

var nekolife = endpoints.nekolife


function sfw() {
  return {
    async neko() {
      return await nekoapi(nekolife.sfw.neko)
    },
  }
}

function nsfw() {
  return {
    randomHentaiGif() {
      return nekoapi(nekolife.nsfw.randomHentaiGif)
    },
    pussy() {
      return nekoapi(nekolife.nsfw.pussy)
    },
    nekoGif() {
      return nekoapi(nekolife.nsfw.nekoGif)
    },
    neko() {
      return nekoapi(nekolife.nsfw.neko)
    },
    cumsluts() {
      return nekoapi(nekolife.nsfw.cumsluts)
    },
    kuni() {
      return nekoapi(nekolife.nsfw.kuni)
    },
    lesbian() {
      return nekoapi(nekolife.nsfw.lesbian)
    },
    classic() {
      return nekoapi(nekolife.nsfw.classic)
    },
    boobs() {
      return nekoapi(nekolife.nsfw.boobs)
    },
    bJ() {
      return nekoapi(nekolife.nsfw.bJ)
    },
    anal() {
      return nekoapi(nekolife.nsfw.anal)
    },
    avatar() {
      return nekoapi(nekolife.nsfw.avatar)
    },
    yuri() {
      return nekoapi(nekolife.nsfw.yuri)
    },
    trap() {
      return nekoapi(nekolife.nsfw.trap)
    },
    tits() {
      return nekoapi(nekolife.nsfw.tits)
    },
    girlSolo() {
      return nekoapi(nekolife.nsfw.girlSolo)
    },
    girlSoloGif() {
      return nekoapi(nekolife.nsfw.girlSoloGif)
    },
  }
}


module.exports = {
  sfw: sfw,
  nsfw: nsfw
}
