// Hari (Name of Days Sunday - Saturday)
Ahad = "Ahad";
Isnin = "Isnin";
Selasa = "Selasa";
Rabu = "Rabu";
Khamis = "Khamis";
Jumaat = "Jumaat";
Sabtu = "Sabtu";

// Bulan Hijrah
Muharam = "Muharram";
Safar = "Safar";
Rabi1 = "Rabi'ul Awal";
Rabi2 = "Rabi'ul Akhir";
Jumada1 = "Jamadil Awal";
Jumada2 = "Jamadil Akhir";
Rejab = "Rejab";
Syaban = "Sya'ban";
Ramadan = "Ramadan";
Syawal = "Syawal";
Dzulkaedah = "Dzulka'edah";
Dzulhijjah = "Dzulhijjah";

// Bulan Masihi (Name of Months Jan - Dec)
Januari = "Januari";
Februari = "Februari";
Mac = "Mac";
April = "April";
Mei = "Mei";
Jun = "Jun";
Julai = "Julai";
Ogos = "Ogos";
September = "September";
Oktober = "Oktober";
November = "November";
Disember = "Disember";

function tanggalanIslam(date) {
  if (!date) date = new Date()
  var dow = date.getDay();
  var y = date.getFullYear();
  var m = date.getMonth();
  var d = date.getDate();
  var mh = m + 1;
  fixd = gregToFixed(y, mh, d);
  var h = new Hijri(1426, 11, 29);
  h = fixedToHijri(fixd);
  return {
    toString() {
      return h.toString()
    },
    hari() {
      var weekday = new Array(Ahad, Isnin, Selasa, Rabu, Khamis, Jumaat, Sabtu);
      var dow = date.getDay();
      return weekday[dow]
    },
    bulan() {
      return h.month
    }

  }
}

function tanggalanJawa(date) {
  var pasaran = new Array('Legi', 'Pahing', 'Pon', 'Wage', 'Kliwon');
  var hari = new Array('Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Ahad');
  var d2 = new Date("2014/01/27");
  var d1 = new Date();
  var selisih = Math.floor(Math.abs(d1 - d2) / 86400000);
  var pasar = pasaran[selisih % 5];
  var hari = hari[selisih % 7];
  var day = d1.getDate();
  var month = d1.getMonth() + 1;
  var year = d1.getFullYear();
  return {
    toString() {
      return hari + ' ' + pasar + '' + year
    },
    pasar: pasar,
    hari: hari
  }
}


//Module Kalender Islam
function isGregLeapYear(year)
{
  return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}

function gregToFixed(year, month, day)
{
  day = day + adjust
  var a = Math.floor((year - 1) / 4);
  var b = Math.floor((year - 1) / 100);
  var c = Math.floor((year - 1) / 400);
  var d = Math.floor((367 * month - 362) / 12);

  if (month <= 2)
    e = 0;
  else if (month > 2 && isGregLeapYear(year))
    e = -1;
  else
    e = -2;

  return 1 - 1 + 365 * (year - 1) + a - b + c + d + e + day;
}

class Hijri {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  toFixed()
  {
    return this.day + Math.ceil(29.5 * (this.month - 1)) + (this.year - 1) * 354 +
      Math.floor((3 + 11 * this.year) / 30) + 227015 - 1;
  }

  month() {
    var months = new Array(Muharam, Safar, Rabi1, Rabi2, Jumada1, Jumada2, Rejab, Syaban, Ramadan, Syawal, Dzulkaedah, Dzulhijjah);
    return months[this.month - 1]
  }

  toString()
  {
    var months = new Array(Muharam, Safar, Rabi1, Rabi2, Jumada1, Jumada2, Rejab, Syaban, Ramadan, Syawal, Dzulkaedah, Dzulhijjah);
    return this.day + " " + months[this.month - 1] + " " + this.year;
  }
}

function fixedToHijri(f) {
  var i = new Hijri(1100, 1, 1);
  i.year = Math.floor((30 * (f - 227015) + 10646) / 10631);
  var i2 = new Hijri(i.year, 1, 1);
  var m = Math.ceil((f - 29 - i2.toFixed()) / 29.5) + 1;
  i.month = Math.min(m, 12);
  i2.year = i.year;
  i2.month = i.month;
  i2.day = 1;
  i.day = f - i2.toFixed() + 1;
  return i;
}

module.exports = {
  tanggalanIslam: tanggalanIslam,
  tanggalanJawa: tanggalanJawa
}
