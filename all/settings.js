require("./module")

global.owner = "628967643796" //PAKE NO LU BIAR BISA ADD AKSES
global.namabot = "ϴՏͲᎡᎪХ ᏟᎡᎪՏᎻ" //NAMA BOT GANTI
global.namaCreator = "PAEDULZ" //NAMA CREATOR GANTI AJA
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = false //NOT CHANGE / JANGAN GANTI
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.imageurl = 'https://pomf2.lain.la/f/ifjs9gz5.jpg' //GANTI PP MU MENGGUNAKAN LINK
global.isLink = 'https://whatsapp.com/channel/0029VahI3BvDTkK571NWuT2Z' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.simbol = '✘' //GANTI AJA BEBAS
global.tekspushkon = "" //NOT CHANGE / JANGAN GANTI
global.tekspushkonv2 = "" //NOT CHANGE / JANGAN GANTI
global.packname = "PAEDULZ" //GANTI AJ
global.author = "PAEDULZ" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})