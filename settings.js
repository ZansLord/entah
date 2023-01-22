const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true

//aumto functioner
//global.autoTyping = false //auto tying in gc (true to on, false to off)
//global.autoRecord = true //auto recording (true to on, false to off)

global.Owner = ['6285869074622'] //ur number 
global.OwnerNumber = ['6285869074622']
global.ownertag = ['6285869074622']
global.BotName = "ElainaBot-V2" //ur bot name 
global.packname = "ElainaBot" //ur sticker pack name
global.author = "☁️Abdul Masuk Surga" 
global.OwnerName = "☁️Abdul Masuk Surga" //ur name
global.BotSourceCode = "https://lynk.id/ZansLord" //ur website link
global.SupportGroupLink = "https://chat.whatsapp.com/LJsK2qecGOeKCfc97giQFB" //ur group link 
global.sessionName = "session"

// Prefix //
global.prefa = ['.'] 


global.location = "Bandung, Jawa Barat, Indonesia"
global.reactmoji = "🐕"
global.themeemoji = "🦄"
global.vidmenu = { url: 'https://i.ibb.co/ZSj6pDM/cheemspic.jpg' }
global.websitex = "https://lynk.id/ZansLord"
global.lolhuman = "SGWN"


global.BotLogo = fs.readFileSync("./Assets/cheemspic.jpg")
global.Thumb = fs.readFileSync("./Assets/cheemspic.jpg")
global.Thumb1 = fs.readFileSync("./Assets/cheemspic.jpg")
global.ErrorPic = fs.readFileSync("./Assets/cheemspic.jpg")


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
    jobdone: 'Job done...',
    useradmin: 'Sorry, only *Group Admins* can use this command *Dear*!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *Owner* can use this command, Yeah!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Okey ?!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: ' Wait Crow...',
    nolink: 'Please provide me *link*, Uff!',
    error: 'An error occurd!',
    banned: 'You are *Banned* fron using commands!, Haha',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert  Uff! This is not a NSFW enabled group!, Uff!,'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 20,
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
	zenz: 'https://zenzapi.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '795eea27c6',
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
