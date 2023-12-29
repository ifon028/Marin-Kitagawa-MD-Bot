const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['6285736938192']
global.OwnerNumber = ['6285736938192']
global.ownertag = ['62895604931234']
global.BotName = "NAI∆Bot"
global.packname = "ifon"
global.author = "By: ifon-𝙎𝙖𝙣💫🌙✨"
global.OwnerName = "ifon-𝙎𝙖𝙣💫🌙✨"
global.BotSourceCode = "https://github.com/Chey-san/Marin-Kitagawa-MD-Bot"
global.SupportGroupLink = "https://chat.whatsapp.com/G0dZXqJAL9b1boqnra7eb4"
global.sessionName = "session"
global.prefa = ['.']
global.location = "Asia, Jakarta"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://telegra.ph/file/17ecc2eece63a4d8bcd51.mp4' }
global.websitex = "https://github.com/Chey-san"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Pekerjaan selesai...',
    useradmin: 'Maaf, hanya *Admin Grup* yang dapat menggunakan perintah ini *Baka*!',
    botadmin: 'Maaf, saya tidak dapat menjalankan perintah ini tanpa menjadi *Admin* grup ini.',
    botowner: 'Hanya *Owner* & ᥴꫝꫀꪗ-senpai ❣️ saya yang dapat menggunakan perintah ini, Baka!',
    grouponly: 'Perintah ini hanya dibuat untuk *Grup*, Baka!',
    privateonly: 'Perintah ini hanya dibuat untuk *Obrolan Pribadi*, Baka!',
    botonly: 'Hanya *Bot itu sendiri* yang dapat menggunakan perintah ini!',
    waiting: 'tunggu sebentar...',
    nolink: 'Tolong berikan saya *tautan*, Baka!',
    error: 'Terjadi kesalahan!',
    banned: 'Anda *Dilarang* menggunakan perintah!',
    bangc: 'Grup ini *Dilarang* menggunakan Perintah!',
    nonsfw: 'Jangan jadi orang mesum, Baka! Ini bukan grup yang mendukung NSFW!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
