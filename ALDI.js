
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const imgbb = require('imgbb-uploader')
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const os = require('os')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const { webp2mp4Url, webp2gifFile, reverseVideoFile, voiceremover } = require('./lib/ezgif')

const afkk = JSON.parse(fs.readFileSync('./data/afk.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
let _scommand = JSON.parse(fs.readFileSync('./src/scommand.json'))
const Exif = require('./lib/exif');
const exif = new Exif();
const simple = require('./lib/simple')
const data = fs.readFileSync('./src/quote.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote =''+randKey.quote
//================================================\\
//===========[ BATAS SRC NYA NIH ]=================\\
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const antilink = JSON.parse(fs.readFileSync('./src/.dat/antilink.json'))
const _jasa = JSON.parse(fs.readFileSync('./src/.dat/antijualan.json'))
let antiviewonce = JSON.parse(fs.readFileSync('./data/antiviewonce.json'));
fakereply = fs.readFileSync('./image/fake.jpeg')
fakeimage = fs.readFileSync('./image/thumb.jpeg')
cewe = fs.readFileSync('./image/cewe.jpeg')
//=================================================//
//JSON3
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
//=================================================//

//=========[ FILE TTC ]============\\
const tictac = require('./src/.dat/tictac')
const { isTicTacToe, getPosTic } = require('./src/.dat/tictactoe')


// jangan di ubah bang nantinya eror
// edit di file src/settings.json
ownerNumber = [`${setting.noown}@s.whatsapp.net`,`6285697725326@s.whatsapp.net`,`62856977253261@s.whatsapp.net`]
fake = '𝘿𝙞𝙫'// ini fake
namaown = 'YUME'//ama owner
noown = 6287727925499 //nomor owner
namabot = 'ʏᴜᴍᴇ' // nama bot
namabot2 = 'ʏᴜᴍᴇ' // nama bot ⟨ nama bot ⟩
ytown = 'Cᴏᴍɪᴍɢ sᴏᴏɴ' //setting.ytown
githubown = setting.githubown
igown = 'https://instagram.com/' //setting.igown
imgmenu = 'Divacyan' //setting.imgmenu


harga1bulan = setting.harga1blnsewa
harga2bulan = setting.harga2blnsewa
hargaperpanjang = setting.perpanjangsewa
harga6bulan = setting.harga6blnsewa

harga1blnprem = setting.harga1blnprem
harga2blnprem = setting.harga2blnprem
hargaperpanjangprem = setting.perpanjangprem
harga6bulan = setting.harga6blnprem

pulsa = setting.pulsa
gopay = setting.gopay
ovo = setting.ovo
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
numbernye = '0'
waktu = '-'
alasan = '-'
public = false
offline = false
ngetik = false

// Prefix

prefixStatus = true;

antidel = false
antical = false

vn = true
gaya = '```'
shape = '⬡'
bulet = '◯'
G = '*'

baterai = {

baterai: 0, 
cas: true
}

menusimpel = false
let p = 0

let {
    
    hard,
    
    zeks,
    
    xtem,
    
    lol,
    
    tbz,
    LolKey,
    ZiyKey,
    apiAnto,
    ai

} = require('./data/key')

let {
gamewaktu,
limitCount

} = require('./settings')

let tebakgambar = [];
let family100 = [];
let mtk = [];
let ckl = [];
let tictactoe = [];
const game = require("./lib/game");

//=================================================//
//============[ BATAS NYA ---------------- ]=====≠===≠==========\\
// fuction STC CMD bang
// sorry di enc
// jika eror
//chat wa.me/6275697725326
function _0x187e(){const _0x5201c3=['354332XZSVKt','stringify','10gXCFmS','writeFileSync','chats','826660vMhFZs','push','831785OvEahb','9YWQYLr','30yImjxS','6342256ZSdPUT','2360940FsKSew','forEach','333777enEhHA','keys','5973359gTLRyl'];_0x187e=function(){return _0x5201c3;};return _0x187e();}function _0x53ad(_0x327943,_0x496650){const _0x187e5a=_0x187e();return _0x53ad=function(_0x53ad6b,_0x638151){_0x53ad6b=_0x53ad6b-0x7b;let _0x56c9cd=_0x187e5a[_0x53ad6b];return _0x56c9cd;},_0x53ad(_0x327943,_0x496650);}(function(_0x5c82b1,_0x583797){const _0x404869=_0x53ad,_0x5daaac=_0x5c82b1();while(!![]){try{const _0x4771ab=-parseInt(_0x404869(0x88))/0x1+parseInt(_0x404869(0x8a))/0x2*(parseInt(_0x404869(0x85))/0x3)+-parseInt(_0x404869(0x83))/0x4+parseInt(_0x404869(0x7f))/0x5*(-parseInt(_0x404869(0x81))/0x6)+parseInt(_0x404869(0x87))/0x7+parseInt(_0x404869(0x82))/0x8+-parseInt(_0x404869(0x80))/0x9*(-parseInt(_0x404869(0x7d))/0xa);if(_0x4771ab===_0x583797)break;else _0x5daaac['push'](_0x5daaac['shift']());}catch(_0x52bd20){_0x5daaac['push'](_0x5daaac['shift']());}}}(_0x187e,0x7c338));const addCmd=(_0x36813b,_0x481a74)=>{const _0x5c67d7=_0x53ad,_0x3aa4ea={'id':_0x36813b,'chats':_0x481a74};_scommand[_0x5c67d7(0x7e)](_0x3aa4ea),fs[_0x5c67d7(0x7b)]('./src/scommand.json',JSON[_0x5c67d7(0x89)](_scommand));},getCommandPosition=_0x467b73=>{const _0xde6c6=_0x53ad;let _0x564579=null;Object[_0xde6c6(0x86)](_scommand)[_0xde6c6(0x84)](_0x12d946=>{_scommand[_0x12d946]['id']===_0x467b73&&(_0x564579=_0x12d946);});if(_0x564579!==null)return _0x564579;},getCmd=_0x2ac48e=>{const _0x252724=_0x53ad;let _0x3b3ee6=null;Object[_0x252724(0x86)](_scommand)[_0x252724(0x84)](_0x2c0eb9=>{_scommand[_0x2c0eb9]['id']===_0x2ac48e&&(_0x3b3ee6=_0x2c0eb9);});if(_0x3b3ee6!==null)return _scommand[_0x3b3ee6][_0x252724(0x7c)];},checkSCommand=_0x214db0=>{const _0x4d3d7e=_0x53ad;let _0x597323=![];return Object[_0x4d3d7e(0x86)](_scommand)['forEach'](_0x2b847a=>{_scommand[_0x2b847a]['id']===_0x214db0&&(_0x597323=!![]);}),_0x597323;};
            const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

    module.exports = ALDI = async (ALDI, mek) => {
	try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, } = MessageType;
    const type = Object.keys(mek.message)[0];1;
    var prefixRegEx = /^[!&z?=#.+\/]/gi;
    let _chats = type === "conversation" && mek.message.conversation ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "";
    body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : "";
    budy = type === "conversation" ? mek.message.conversation : type === "extendedTextMessage" ? mek.message.extendedTextMessage.text : "";
    let chats = _chats.match(prefixRegEx) ? _chats .split(prefixRegEx) .find((v) => v === _chats.replace(prefixRegEx, "")) : _chats;
    let command = chats.split(/ +/g)[0];
    const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []

    const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""        
    const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
    mention != undefined ? mention.push(mentionByReply) : []
    const mentionUser = mention != undefined ? mention.filter(n => n) : []
    const args = _chats.trim().split(/ +/).slice(1);
    const isCmd = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)["input"]: _chats;
    const q = args.join(" ");
    const botNumber = ALDI.user.jid;
    const botNumberss = ALDI.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");
    const sender = mek.key.fromMe ? ALDI.user.jid : isGroup ? mek.participant : mek.key.remoteJid;
    let senderr = mek.key.fromMe ? ALDI.user.jid : mek.key.remoteJid.endsWith("@g.us") ? mek.participant : mek.key.remoteJid;
    const senderNumber = sender.split("@")[0]
    const itsMe = mek.key.fromMe ? true : false
    var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
    var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
	const messagesCC = pes.slice(0).trim().split(/ +/).shift()
	ALDI.chatRead(from, "read")
		
//========================\\
		const totalchat = await ALDI.chats.all()
           	const m = simple.smsg(ALDI, mek);
		const groupMetadata = isGroup ? await ALDI.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isAntiVO = isGroup ? antiviewonce.includes(from) : false		
		const isOwner = ownerNumber.includes(sender)
        const isVote = isGroup ? voting.includes(from) : false        
        const conts = mek.key.fromMe ? ALDI.user.jid : ALDI.contacts[sender] || { notify: jid.replace(/@.+/, '') }
	    if (vn) {
		ALDI.updatePresence(from, Presence.recording)
		} else if (ngetik) {
		ALDI.updatePresence(from, Presence.composing)
		}
       //====================\\
       const isWelkom = isGroup ? welkom.includes(from) : false
       const isGcdetect = isGroup ? gcdetect.includes(from) : false 
       const pushname = mek.key.fromMe ? ALDI.user.name : conts.notify || conts.vname || conts.name || '-'
       const isAntiLink = isGroup ? antilink.includes(from) : false
       const isjasa = isGroup ? _jasa.includes(from) : false   
            mess = {
			prem: `Fitur Ini Kusus Premium\nmau beli premium?\nchat : wa.me/6285717026352`,
			wait: `Tunggu bntr Kak`,
	        success: `succes....`,
     		wrongFormat: `Format salah, coba liat lagi di menu`,

			error: `Error Ngab!!!`,

			lvlon: `Berhasil Mengaktifkan Mode Leveling Di Group Ini️`,

			lvloff: `Berhasil Menonaktifkan Mode Leveling Di Group Ini️`,

			lvlnul: `Level Mu Masih Kosong`,

			baned: `Maaf Kamu Sudah Terbanned!!`,

			group: `Khusus grup ngab...`,
			Iv: ` Linknya error:v`,

			lvlnoon: `Leveling Di Group Belum Diaktifkan`,

			stikga: `Yah Gagal Coba Ulangi Beberapa Saat Lagi`,

			linkga: `Link Tidak Valid`,

			groupo: `Command Ini Khusus Untuk Group`,

			ownerb: `Command Ini Khusus Untuk Owner`,

			ownerg: `Command Ini Khusus Untuk Owner Group`,

			admin: `Command Ini Khusus Untuk Admin`,

			badmin: `BOT Harus Menjadi Admin`
			}
			
		 // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        
        const listmsg = (from, title, desc, list) => { // Fixx
            let po = ALDI.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "Jangan Lupa Donasi Ya Kak ☕","listType": "SINGLE_SELECT","sections": list}}, {})
            return ALDI.relayWAMessage(po, {waitForAck: true})
        }
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
        ALDI.sendMessage(from, teks, text,{sendEphemeral : true,quoted : mek, thumbnail : fakereply})
        }
        const textImg = (teks) => {
           return ALDI.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./image/fake.jpeg')})
        }
        const sendMess = (hehe, teks) => {
            ALDI.sendMessage(hehe, teks, text)
        }
        const grupinv = (teks) => {
        	grup = ALDI.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/BdUIiuy3eJa7idWsRLMn2h', "groupName": `${NamaBot}`, "footerText": "*_© Dcode Denpa_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            ALDI.relayWAMessage(grup)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? ALDI.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : ALDI.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }      
        
        const replyWithFakeig = (teks) => {
ALDI.sendMessage(from, teks, text,{contextInfo:{
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `WIBU By\Diva` ,
"body": `${tampilTanggal}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"mediaUrl": "https://Instagram.com/awangsetiaadipratama_",
"thumbnail": fakeimage,
"sourceUrl": "https://github.com/Awang"
},mentionedJid:[sender]}, quoted : mek})
}

   //FAKEREPLY PRODUCT
            const ftoko = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./image/thumb.jpeg`)},"title": `NGEJUDI GAK BROH?\n${pushname}`,"description": "X -ALDI Team", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "X - ALDI Team","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
            const fvn = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}
            //FAKE LIVE ACTION
            const floc2 = {
            key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
            //FAKEREPLY TROLI
            const ftroli = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 1,message: `${fake}`,orderTitle: 'Xyz',thumbnail: fs.readFileSync('./image/thumb.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
const fakevn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
            },
	 message: { 
		"audioMessage": {
            "mimetype":"audio/ogg; codecs=opus",
            "seconds": "99999999999",
            "ptt": "true"
            }
	            } 
            } 
            //FAKEREPLY VIDEO
            const fvideo = {
            key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}
const fvid = {
	 key: { 
	      participant: '0@s.whatsapp.net'
	       },
	 message: { 
            "videoMessage": { 
            "title":"hallo bang",
            "h": `Hmm`, 
            'seconds': '99', 
            'caption': 'Y U M E',
            'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')
            }
            }
	            }
            //FAKEREPLY GROUPINVITE
            const fgc = {
            key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}
            //FAKEREPLY GIF
            const fgif = {
            key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}} 
            
        const fakestatus = (teks) => {
            ALDI.sendMessage(from, teks, text, {
            quoted: {
            key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
            },
            message: {
            "imageMessage": {
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
            "mimetype": "image/jpeg",
            "caption": fake,
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            "fileLength": "28777",
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": fs.readFileSync('./image/thumb.jpeg'),
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
            }
            }
            }
            })
        }
        const fakethumb = (teks, yes) => {
            ALDI.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./image/fake.jpeg'),quoted:mek,caption:yes})
            
        }
        const fakegroup = (teks) => {
            ALDI.sendMessage(from, teks, text, {
            quoted: {
            key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
            },
            message: {
            "imageMessage": {
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
            "mimetype": "image/jpeg",
            "caption": fake,
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            "fileLength": "28777",
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": fs.readFileSync('./image/thumb.jpeg'),
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
            }
            }
            }
            })
        }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{	    	
        if(mids.length > 0){		    
        text = normalizeMention(to, text, mids)	    	
        }		    
        const fn = Date.now() / 10000;		    
        const filename = fn.toString()	     	
        let mime = ""		    
        var download = function (uri, filename, callback) {		   
        request.head(uri, function (err, res, body) {			
        mime = res.headers['content-type']			
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);		   
        });		   
        };		    
        download(url, filename, async function () {		    
        console.log('done');		    
        let media = fs.readFileSync(filename)		    
        let type = mime.split("/")[0]+"Message"		    
        if(mime === "image/gif"){			
        type = MessageType.video			
        mime = Mimetype.gif		    
        }		    
        if(mime.split("/")[0] === "audio"){			
        mime = Mimetype.mp4Audio		    
        }		    
        ALDI.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})		    		    
        fs.unlinkSync(filename)		    
        });	       
        }
      function addMetadata(packname, author) {
      if (!packname) packname = 'WABot';
      if (!author) author = 'Bot';
      author = author.replace(/[^a-zA-Z0-9]/g, '');
      let name = `${author}_${packname}`
      if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
      const json = {
      "sticker-pack-name": packname,
      "sticker-pack-publisher": author,
      }
      const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
      const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
      let len = JSON.stringify(json).length
      let last
      if (len > 256) {
      len = len - 256
      bytes.unshift(0x01)
      } else {
      bytes.unshift(0x00)
      }
      if (len < 16) {
      last = len.toString(16)
      last = "0" + len
      } else {
      last = len.toString(16)
      }
      const buf2 = Buffer.from(last, "hex")
      const buf3 = Buffer.from(bytes)
      const buf4 = Buffer.from(JSON.stringify(json))
      const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
      fs.writeFile(`./${name}.exif`, buffer, (err) => {
      return `./${name}.exif`	
	
      })	


      }
			const uploadImages = (buffData, type) => {    
      // eslint-disable-next-line no-async-promise-executor          
      return new Promise(async (resolve, reject) => {        
      const { ext } = await fromBuffer(buffData)       
      const cmd = text.toLowerCase()      
      const filePath = 'utils/tmp.' + ext       
      const _buffData = type ? await resizeImage(buffData, false) : buffData        
      fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {			
      if (err) return reject(err)
      console.log('Uploading image to telegra.ph server...')			
      const fileData = fs.readFileSync(filePath)			
      const form = new FormData()			
      form.append('file', fileData, 'tmp.' + ext)          
      fetch('https://telegra.ph/upload', {			   
      method: 'POST',           	
      body: form			
      })           	
      .then(res => res.json())           	
      .then(res => {			
      if (res.error) return reject(res.error)			
      resolve('https://telegra.ph' + res[0].src)           	
      })           	
      .then(() => fs.unlinkSync(filePath))			   
      .catch(err => reject(err))			   
      })			 
      })			
      }
           	
      const sendStickerFromUrl = async(to, url) => {           	
      var names = Date.now() / 10000;           	
      var download = function (uri, filename, callback) {			
      request.head(uri, function (err, res, body) {			   
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);			
      });           	
      };           	
      download(url, './sticker' + names + '.png', async function () {			
      console.log('selesai');			
      let filess = './sticker' + names + '.png'			
      let asw = './sticker' + names + '.webp'           	   
      exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {			  
      let media = fs.readFileSync(asw)			   
      ALDI.sendMessage(to, media, MessageType.sticker,{quoted:mek})			   
      fs.unlinkSync(filess)			   
      fs.unlinkSync(asw)			
      });           	
      });			
      }

      const sendStickerUrl = async(to, url) => {			
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))           	
      var names = getRandom('.webp')           	
      var namea = getRandom('.png')           	
      var download = function (uri, filename, callback) {           	
      request.head(uri, function (err, res, body) {           		
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);           	
      });           	
      };           	
      download(url, namea, async function () {           	
      let filess = namea           	
      let asw = names           	
      require('./lib/exif.js')           	
      exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {           	
      exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {           	
      let media = fs.readFileSync(asw)           	
      ALDI.sendMessage(to, media, sticker,{quoted : mek})           	
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
      });           	
      });           	
      });			
      }        
      

//<------------[ ADVANCE ]----------->\\
//******************** 》Advance《 ********************\\

function monospace(string) {

return '```' + string + '```'

}   


function jsonformat(string) {

return JSON.stringify(string, null, 2)

}


function randomNomor(angka){

return Math.floor(Math.random() * angka) + 1
}
const nebal = (angka) => {
return Math.floor(angka)
}
      
//-------[ GAME ]----------\\
game.cekWaktuMtk(ALDI, mtk)      
game.cekWaktuTG(ALDI, tebakgambar)
      
        if (game.isTebakGambar(from, tebakgambar)){

        if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
        var htgm = randomNomor(1000)
        await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah : doi lu\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
        tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
       
}

        }

        if (game.isMtk(from, mtk)){
        if (chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
        var htgm3 = randomNomor(1000)

        await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMtk(from, mtk)}\n*Hadiah : janda beranak 2\n\nIngin bermain lagi? kirim *${prefix}math*`)
        mtk.splice(game.getMtkPosi(from, mtk), 1)

        }

        }
        
        
const replyWithFakeLink = (teks) => {
ALDI.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : mek})
}      
      
          const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      ALDI.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await ALDI.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      ALDI.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe && !isOwner){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            ALDI.sendMessage(mek.key.remoteJid,`@${noowner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${noowner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe && !isOwner){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${noowner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        ALDI.sendMessage(mek.key.remoteJid,`@${noowner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${noowner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
        if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285697725326@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285697725326@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}
    /////*** AFK ***\\\\\
    for (let x of mentionUser) {
                if (afkk.hasOwnProperty(x.split('@')[0])) {
                    ini_mn1k = "maaf kak jangan tag diah, diah lagi pergi\n"
                    if (afkk[x.split('@')[0]] != "") {
                        ini_mn1k += "Dengan alasan " + afkk[x.split('@')[0]]
                    }
                    ALDI.sendMessage(from, ini_mn1k, text, {quoted: mek})
                }
            }
            if (afkk.hasOwnProperty(sender.split('@')[0])) {
                reply(`${pushname} telah kembali dengan sejuta kerinduan`)
                delete afkk[sender.split('@')[0]]
                fs.writeFileSync("./data/afk.json", JSON.stringify(afkk))
            }
//========================================================================================================================//
	        const isText = type === 'textMessage'		    
		    colors = ['red','white','deepskyblue','black','blue','orangered','yellow','green','mediumpurple','orange','limegreen']

            const isMedia = (type === 'imageMessage' || type === 'videoMessage')
            const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

if (!public){
if (!isOwner && !itsMe) return
}
  
        if (isCmd && !isGroup) {console.log(color('[ CMD PRIVATE ]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'magenta'), color(`${command} [${args.length}]`, 'cyan'))}
	    if (!command) console.log(mek)
	    if (isCmd && isGroup) {
        console.log(color('[ CMD GROUP ]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'magenta'), color(`${command} [${args.length}]`, 'cyan'), color('from', 'pink'), color(`${pushname}`, 'yellow'), color('in', 'pink'), color(`${groupName}`, 'gold'))}
       
        
        var datw = new Date();
  
        var tahun = datw.getFullYear();
        var bulan = datw.getMonth();
        var tanggal = datw.getDate();
        var hari = datw.getDay();
        var jams = datw.getHours();
        var menit = datw.getMinutes();
        var detik = datw.getSeconds();


        switch(hari) {
         case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
         case 2: hari = "Selasa"; break;
         case 3: hari = "Rabu"; break;
         case 4: hari = "Kamis"; break;
         case 5: hari = "Jum'at"; break;
         case 6: hari = "Sabtu"; break;
        }
        switch(bulan) {
         case 0: bulan = "Januari"; break;
         case 1: bulan = "Februari"; break;
         case 2: bulan = "Maret"; break;
         case 3: bulan = "April"; break;
         case 4: bulan = "Mei"; break;
         case 5: bulan = "Juni"; break;
         case 6: bulan = "Juli"; break;
         case 7: bulan = "Agustus"; break;
         case 8: bulan = "September"; break;
         case 9: bulan = "Oktober"; break;
         case 10: bulan = "November"; break;
         case 11: bulan = "Desember"; break;
        }
			switch(jams){
           	case 0: jams = "Malam🌃"; break;
           	case 1: jams = "Malam🌃"; break;
           	case 2: jams = "Malam🌃"; break;
           	case 3: jams = "Malam🌃"; break;
           	case 4: jams = "menjelang subuh🌌"; break;
           	case 5: jams = "Subuh🕌"; break;
           	case 6: jams = "Pagi🏙"; break;
           	case 7: jams = "Pagi🏙"; break;
           	case 8: jams = "Pagi🏙"; break;
           	case 9: jams = "Pagi🏙"; break;
           	case 10: jams = "Pagi🏙"; break;
           	case 11: jams = "Siang🌁"; break;
           	case 12: jams = "Dzuhur🕌"; break;
           	case 13: jams = "Siang🌁"; break;
           	case 14: jams = "Siang🌁"; break;
           	case 15: jams = "Ashar🕌"; break;
           	case 16: jams = "Sore🌇"; break;
           	case 17: jams = "Magrib🕌"; break;
           	case 18: jams = "menjelang malam🌃"; break;
           	case 19: jams = "isya🕌"; break;
           	case 20: jams = "Malam🌆"; break;
           	case 21: jams = "Malam🌆"; break;
           	case 22: jams = "MALAM??"; break;
           	case 23: jams = "Malam🌃"; break;
			}
        var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
        var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
        var tampilHari = "" + jams;
//<---------------------[ JAM By ALDI FAUZI ]----------------------------->\\		
        // const waktu
        const time = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const date = new Date().toLocaleDateString()
        const tima = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         

           function parseMention(text = '') {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')

    }
    // by nayla| by amel
    //=================[ BATAS ]===========================≠======\\	    
          
            if (isTicTacToe(from, tictactoe)) tictac(budy, prefix, tictactoe, from, sender, reply, mentions)
           
            const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]
            /*=======================================================*/
                    	 
            const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const wloytoy = ['X : O : X','O : X : O','X : O : X','O : X : O','X : O : X','O : X : O','X : O : X',		'O : X : O','X : O : X','O : X : O','X : O : X','O : X : O','X : O : X','O : X : O','X : O : X','O : X : O','X : O : X','O : X : O','X : O : X','O : X : O']
            const wloytoy1 = ['O : X : O','X : O : X','O : X : O','X : O : X','O : X : O','X : O : X',		'O : X : O','X : O : X','O : X : O','X : O : X','O : X : O','X : O : X','O : X : O','X : O : X','O : X : O']
            const wloytoy2 = ['X : O : X','O : X : O','X : O : X','O : X : O','X : O : X','O : X : O',		'X : O : X','O : X : O','X : O : X','O : X : O','X : O : X','O : X : O','X : O : X','O : X : O','X : O : X']
            const wloytoy3 = ['X : X : X','O : O : O','X : X : X']
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
/*====================================================[ ROLE LEVELING ]==============================================================*/

    
       if (prefixStatus) if (_chats.startsWith(command)) return;
switch (command) {
//===================[ BATAS ]=====================\\
case 'menu':
case 'help':
case 'h':
case 'm':
const gik = public ? 'FALSE': 'TRUE'
const onll = offline ? 'FALSE' : 'TRUE'
const user1 = !mek.key.fromMe ? 'FALSE':'TRUE'
var gc1 = ALDI.chats.array.filter(v => v.jid.endsWith('g.us'))
var private1 = ALDI.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const totalchatt1 = await ALDI.chats.all()
const timestampp1 = speed();
const latensot1 = speed() - timestampp1
const quotess =  randQuote
menu1 = `*𝖘𝖆𝖙𝖚 𝖐𝖆𝖙𝖆 𝖇𝖚𝖆𝖙 𝖍𝖆𝖗𝖎 𝖏𝖓𝖎 :*

${gaya}${quotess}${gaya}


┏◪ *info bot*
┃🌹 ${G}Nama : ${namabot}${G}
┃🌹 ${G}Group Chat : ${gc1.length}${G}
┃🌹 ${G}Private Chat : ${private1.length}${G}
┃🌹 ${G}Total Chat : ${totalchatt1.length}${G}
┃🌹 ${G}Speed Run : ${latensot1.toFixed(4)} Seconds${G}
┃🌹 ${G}SELF : ${gik}${G}
┃🌹 ${G}ONLINE : ${onll}${G}
┗◪
       ⟨ ${namabot2} ⟩
   
      ꪶ ཻུ۪۪ꦽꦼ̷⸙YUMEꪶ ཻུ۪۪ꦽꦼ̷⸙
`   
menu2 = `
┏◪ *_info jam_*
┃🌹 ${G}Jam : ${time} WIB${G}
┃🌹 ${G}Jam : ${wita} WITA${G}
┃🌹 ${G}Jam : ${wit} WIT${G}
┗◪

┏◪ *_prefix bot_*
┃ 🌹 ${G}Perfix: ◤ ${prefix} ◢${G}
┗◪

┏◪ *_INFO OWNER_*
┃🌹 ${G}Nama${G} : ${G}${namaown}${G}
┃🌹 ${G}NO${G} : ${G}wa.me/${noown}${G}
┃🌹 ${G}Github${G} : ${G}${githubown}${G}
┃🌹 ${G}YouTube${G} :  ${G}${ytown}${G}
┃🌹 ${G}Instagram${G} :  ${G}${igown}${G}
┗◪

┏◪ *_INFO DEVELOPER_*
┃🌹 ${G}Nama${G} : ${G}PacarYume<3${G}
┃🌹 ${G}NO${G} : ${G}wa.me/6285717026352${G}
┃🌹 ${G}scrip${G} : ${G}ketik !sc${G}
┃🌹 ${G}YouTube${G} :  ${G}cmd.to/ImWQq${G}
┗◪
`
// seperti biasa kawan²
// saya enc
// kalo mau ganti image nya

// upload di imgibb ambil link gambar

//tempel di src/setting.json nama nya "imgmenu" : "taroh di situ",
let mew = await ALDI.prepareMessage(from, fs.readFileSync('./image/cewe.jpeg'), image)
gbutsanmm = [
  
              {buttonId:`${prefix}menu`,buttonText:{displayText:' MENU'},type:1},

{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER'},type:1},

{buttonId:`${prefix}script`,buttonText:{displayText:'SCRIPT'},type:1}

]
        let mhan = await ALDI.prepareMessage("0@s.whtsapp.net", fs.readFileSync('./image/cewe.jpeg'), image)
gbutsan = [{buttonId: `${prefix}start`, buttonText: {displayText: '⎙ MENU'}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: '🌹 OWNER'}, type: 1},{buttonId: `${prefix}credits`, buttonText: {displayText: '𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤☻︎'}, type: 1}]
gbuttonan = {
imageMessage: mhan.message.imageMessage,
    
contentText: `${menu1}`,// ini buat nampilin menunya
    
footerText: `${menu2}`,
    
buttons: gbutsan,
    
headerType: 4
}
// yg di ubh yg atass
await ALDI.sendMessage(from, gbuttonan, MessageType.buttonsMessage,{sendEphemeral: true, contextInfo: {forwardingScore: 508, isForwarded: true, "externalAdReply": { "title": `Hallo ${pushname}`, "body": `${jams}`, "mediaType": "2", "thumbnail": "ofrply", "mediaUrl": "https://youtu.be/kYDvPxWdTYU", "thumbnail": cewe, "sourceUrl": "",},mentionedJid:[sender]}, quoted : ftroli})

  break

//========================================÷======================================\\
case 'start':
try{
if(menusimpel == false){
const pugik = public ? 'FALSE': 'TRUE'
const onl = offline ? 'FALSE' : 'TRUE'
const user = !mek.key.fromMe ? 'FALSE':'TRUE'
var gc = ALDI.chats.array.filter(v => v.jid.endsWith('g.us'))
var private = ALDI.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const totalchatt = await ALDI.chats.all()
const timestampp = speed();
const latensot = speed() - timestampp
men1 = `
┏◪ *INFO BOT*
┃ 🌹 ${G}Nama : ${namabot}${G}
┃ 🌹 ${G}Group Chat : ${gc.length}${G}
┃ 🌹 ${G}Private Chat : ${private.length}${G}
┃ 🌹 ${G}Total Chat : ${totalchatt.length}${G}
┃ 🌹 ${G}Speed Run : ${latensot.toFixed(4)} Seconds${G}
┃ 🌹 ${G}SELF : ${pugik}${G}
┃ 🌹 ${G}ONLINE : ${onl}${G}
┗◪

┏◪ *_INFO JAM_*
┃ 🌹 ${G}Jam : ${time} WIB${G}
┃ 🌹 ${G}Jam : ${wita} WITA${G}
┃ 🌹 ${G}Jam : ${wit} WIT${G}
┗◪

┏◪ *_PRRFIX BOT_*
┃ 🌹 ${G}Perfix: ◤ ${prefix} ◢${G}
┗◪

┏◪ *_INFO OWNER_*
┃ 🌹 ${G}Nama${G} : ${G}${namaown}${G}
┃ 🌹 ${G}NO${G} : ${G}wa.me/${noown}${G}
┃ 🌹 ${G}Github${G} : ${G}${githubown}${G}
┃ 🌹 ${G}YouTube${G} :  ${G}${ytown}${G}
┃ 🌹 ${G}Instagram${G} :  ${G}${igown}${G}
┗◪

       ⟨ ${namabot2} ⟩

         V 3.0.0


*mau sewabot?:*
${gaya}${prefix}sewabot${gaya}

*untuk owner, menu bisa di ubah*
*jika eror menu simple*
${gaya}${prefix}setmenu simplemenu${gaya}
${gaya}${prefix}setmenu allmenu${gaya}

╭─「 ❉ *OWNER MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}setprefix${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}setmenu simplemenu${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}setbug ⟨ ngetik ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}setthumb${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}setfakeimg${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}setfake${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}public${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}self${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}on${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}off${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}exif${gaya}
│${gaya}🌹 ${p+=1}. ${shape} x ⟨ eval ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} > ⟨ evalV2 ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} => ⟨ async ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} $ ⟨ esec ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}buttonbc${gaya}

╭─「 ❉ *DOWNLOAD MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}igstalk${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}ytsearch${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}tiktok${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}tiktokaudio${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}brainly${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}fb${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}ig${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}twitter${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}pinterest${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}playstore${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}lirik${gaya}


╭─「 ❉ *STICKER MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sticker${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}toimg${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}take${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}colong${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}emoji${gaya}


╭─「 ❉ *GROUP MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sider ⟨ reply ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}add ⟨ 62×× ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}radd ⟨ reply ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}kick ⟨ @tag ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}rkick ⟨ reply ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}welcome aktif${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}welcome nonaktif${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}group open${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}group close${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}promote @tag${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}demote ⟨ maintenance ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}antilink 1${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}antilink 0${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}antijualan 1${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}antijualan 0${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}gcdetect on${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}gcdetect off${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}antiviewonce on${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}antiviewonce off${gaya}


╭─「 ❉ *SESSION MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}jadibot${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}stopjadibot${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}listjadibot${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}vote${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}voting${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}delvote${gaya}

╭─「 ❉ *PLAY MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}play${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}ytmp3${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}ytmp4${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}video${gaya}

╭─「 ❉ *SEWA BOT* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sewabot${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sewaprem${gaya}

╭─「 ❉ *STCMD MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}addcmd${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}delcmd${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}listcmd${gaya}

╭─「 ❉ *OTHER MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}linkwa${gaya}
│${gaya}🌹${p+=1}. ${shape} ${prefix}teruskan${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}caripesan${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}fdeface${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}inspect${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}runtime${gaya}
│${gaya}🌹${p+=1}. ${shape} ${prefix}speed${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}kontak${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}tourl${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}imgtourl${gaya}

╭─「 ❉ *ANIME MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}otaku${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}komiku${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}chara${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}anime${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}art${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}bts${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}exo${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}elf${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}loli${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}waifu${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}neko${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}shota${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sagiri${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}shinobu${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}megumin${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}wallnime${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}chiisaihentai${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}trap${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}blowjob${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}yaoi${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}ecchi${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}hentai${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}ahegao${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}hololewd${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sideoppai${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}animefeets${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}animebooty${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}animethighss${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}hentaiparadise${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}animearmpits${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}hentaifemdom${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}lewdanimegirls${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}biganimetiddies${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}animebellybutton${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}hentai4everyone${gaya}

╭─「 ❉ *CONVER MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}tomp3${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}tomp4${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}slow${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}fast${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}reverse${gaya}

╭─「 ❉ *TAG MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}hidetag${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}totag${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}kontag${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sticktag${gaya}

╭─「 ❉ *STORAGE MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}addvn${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}getvn${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}listvn${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}addsticker${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}getsticker${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}stickerlist${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}addvideo${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}getvideo${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}listvideo${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}addimage${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}getimage${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}imagelist${gaya}

╭─「 ❉ *GAME MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}math${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}tebakgambar${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${gaya}tembak
│${gaya}🌹 ${p+=1}. ${shape} ${gaya}tictactoe
│${gaya}🌹 ${p+=1}. ${shape} ${gaya}delttc
│${gaya}🌹 ${p+=1}. ${shape} ${gaya}vslot
│${gaya}🌹 ${p+=1}. ${shape} ${gaya}slot
│${gaya}🌹 ${p+=1}. ${shape} ${gaya}suit2

╭─「 ❉ *UPSW MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}upswteks${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}upswaudio${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}upswvideo${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}upswimage${gaya}

------------< >------------
 *quotes:*
𝒋𝒂𝒏𝒈𝒂𝒏 𝒎𝒆𝒏𝒚𝒆𝒓𝒂𝒉 𝒌𝒂𝒓𝒆𝒏𝒂 𝒌𝒂𝒓𝒚𝒂 𝒎𝒖
𝒕𝒊𝒅𝒂𝒌 𝒅𝒊 𝒉𝒂𝒓𝒈𝒂𝒊 𝒅𝒂𝒏 𝒅𝒊 𝒔𝒆𝒃𝒖𝒕 𝒏𝒆𝒘𝒃𝒊𝒆. 𝒔𝒖𝒂𝒕𝒖 𝒔𝒂𝒂𝒕
𝒌𝒂𝒎𝒖 𝒑𝒂𝒔𝒕𝒊 𝒃𝒂𝒌𝒂𝒍 𝒅𝒊 𝒔𝒆𝒃𝒖𝒕 𝒑𝒂𝒏𝒖𝒕𝒂𝒏𝒒𝒖

  -------------< *Tq To* >------------
${gaya}• hexagonz ( sc ori )
• arifi Razzaq ( mastah )
• Hazel ( creator )
• anto ( mastah )
• Paw ( partner )
• vean ( mastah )
• rapa ( mastah )
• hxfz ( creator )
• x far ( creator )
• dinata ( creator )
• farid ( creator )
• rafli ( creator )
• Aldi Fauzi ( newbie )
• Yume ( Cuma Recode )
• semua para penyedia modul${gaya}
`


// seperti biasa kawan²
// saya enc
// kalo mau ganti image nya

// upload di imgibb ambil link gambar

//tempel di src/setting.json nama nya "imgmenu" : "taroh di situ",
let menq = await ALDI.prepareMessage("0@s.whatsapp.net", fs.readFileSync('./image/cewe.jpeg'), image)
gbutsanmm = [
  
              {buttonId: `${prefix}owner`, buttonText: {displayText: '👑 ᴄᴏɴᴛᴀᴄᴛ ᴅᴇᴠᴇʟᴏᴘᴇʀ'}, type: 1},
  
              {buttonId: `${prefix}sc`, buttonText: {displayText: '📃 sc bot'}, type: 1},
  
              {buttonId: `${prefix}credits`, buttonText: {displayText: '👉 credits'}, type: 1}
          ]
gbuttonanq = {
imageMessage: menq.message.imageMessage,
contentText: `${men1}`,
    
footerText: 'subscribe yt : wybucans\nMade White By DIVA',
    
buttons: gbutsanmm,
    
headerType: 4
}
await ALDI.sendMessage(from, gbuttonanq, MessageType.buttonsMessage,{ quoted:ftroli, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true, "externalAdReply": { "title": `hallo ${pushname}`, "body": "Subscribe yt WybuCans", "previewType": "PHOTO", "thumbnailUrl": `${imgmenu}`, "thumbnail": fs.readFileSync('./image/thumb.jpeg'), "sourceUrl": "https://Diva.com"}}})
} else if(menusimpel == true){
meu =`
┏◪ *_INFO JAM_*
┃🌹${G}Jam : ${time} WIB${G}
┃🌹${G}Jam : ${wita} WITA${G}
┃🌹${G}Jam : ${wit} WIT${G}
┗◪

┏◪ *_PRRFIX BOT_*
┃🌹${G}Perfix: ◤ ${prefix} ◢${G}
┗◪

┏◪ *_INFO OWNER_*
┃🌹${G}Nama${G} : ${G}${namaown}${G}
┃🌹${G}NO${G} : ${G}wa.me/${noown}${G}
┃🌹${G}Github${G} : ${G}${githubown}${G}
┃🌹${G}YouTube${G} :  ${G}${ytown}${G}
┃🌹${G}Instagram${G} :  ${G}${igown}${G}
┗◪

       ⟨ ${namabot2} ⟩

         V 3.0.0

╭─「 ❉ *OWNER MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}setprefix${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}setmenu simplemenu${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}setbug ⟨ ngetik ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}setthumb${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}setfakeimg${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}setfake${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}public${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}self${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}on${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}off${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}exif${gaya}
│${gaya}🌹 ${p+=1}. ${shape} x ⟨ eval ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} > ⟨ evalV2 ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} => ⟨ async ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} $ ⟨ esec ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}buttonbc${gaya}

╭─「 ❉ *DOWNLOAD MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}igstalk${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}ytsearch${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}tiktok${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}tiktokaudio${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}brainly${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}fb${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}ig${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}twitter${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}pinterest${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}playstore${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}lirik${gaya}


╭─「 ❉ *STICKER MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sticker${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}toimg${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}take${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}colong${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}emoji${gaya}


╭─「 ❉ *GROUP MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sider ⟨ reply ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}add ⟨ 62×× ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}radd ⟨ reply ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}kick ⟨ @tag ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}rkick ⟨ reply ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}welcome aktif${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}welcome nonaktif${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}group open${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}group close${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}promote @tag${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}demote ⟨ maintenance ⟩${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}antilink 1${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}antilink 0${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}antijualan 1${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}antijualan 0${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}gcdetect on${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}gcdetect off${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}antiviewonce on${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}antiviewonce off${gaya}


╭─「 ❉ *SESSION MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}jadibot${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}stopjadibot${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}listjadibot${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}vote${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}voting${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}delvote${gaya}

╭─「 ❉ *PLAY MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}play${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}ytmp3${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}ytmp4${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}video${gaya}

╭─「 ❉ *SEWA BOT* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sewabot${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sewaprem${gaya}

╭─「 ❉ *STCMD MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}addcmd${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}delcmd${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}listcmd${gaya}

╭─「 ❉ *OTHER MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}linkwa${gaya}
│${gaya}🌹${p+=1}. ${shape} ${prefix}teruskan${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}caripesan${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}fdeface${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}inspect${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}runtime${gaya}
│${gaya}🌹${p+=1}. ${shape} ${prefix}speed${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}kontak${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}tourl${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}imgtourl${gaya}

╭─「 ❉ *ANIME MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}otaku${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}komiku${gaya}
│${gaya}?? ${p+=1}. ${shape} ${prefix}chara${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}anime${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}art${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}bts${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}exo${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}elf${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}loli${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}waifu${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}neko${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}shota${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sagiri${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}shinobu${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}megumin${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}wallnime${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}chiisaihentai${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}trap${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}blowjob${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}yaoi${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}ecchi${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}hentai${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}ahegao${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}hololewd${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sideoppai${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}animefeets${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}animebooty${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}animethighss${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}hentaiparadise${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}animearmpits${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}hentaifemdom${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}lewdanimegirls${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}biganimetiddies${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}animebellybutton${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}hentai4everyone${gaya}

╭─「 ❉ *CONVER MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}tomp3${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}tomp4${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}slow${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}fast${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}reverse${gaya}

╭─「 ❉ *TAG MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}hidetag${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}totag${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}kontag${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}sticktag${gaya}

╭─「 ❉ *STORAGE MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}addvn${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}getvn${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}listvn${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}addsticker${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}getsticker${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}stickerlist${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}addvideo${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}getvideo${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}listvideo${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}addimage${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}getimage${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}imagelist${gaya}

╭─「 ❉ *GAME MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}math${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}tebakgambar${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${gaya}tembak
│${gaya}🌹 ${p+=1}. ${shape} ${gaya}tictactoe
│${gaya}🌹 ${p+=1}. ${shape} ${gaya}delttc
│${gaya}🌹 ${p+=1}. ${shape} ${gaya}vslot
│${gaya}🌹 ${p+=1}. ${shape} ${gaya}slot
│${gaya}🌹 ${p+=1}. ${shape} ${gaya}suit2

╭─「 ❉ *UPSW MENU* ❉ 」
│
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}upswteks${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}upswaudio${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}upswvideo${gaya}
│${gaya}🌹 ${p+=1}. ${shape} ${prefix}upswimage${gaya}

------------< >------------
 *quotes:*
𝒋𝒂𝒏𝒈𝒂𝒏 𝒎𝒆𝒏𝒚𝒆𝒓𝒂𝒉 𝒌𝒂𝒓𝒆𝒏𝒂 𝒌𝒂𝒓𝒚𝒂 𝒎𝒖
𝒕𝒊𝒅𝒂𝒌 𝒅𝒊 𝒉𝒂𝒓𝒈𝒂𝒊 𝒅𝒂𝒏 𝒅𝒊 𝒔𝒆𝒃𝒖𝒕 𝒏𝒆𝒘𝒃𝒊𝒆. 𝒔𝒖𝒂𝒕𝒖 𝒔𝒂𝒂𝒕
𝒌𝒂𝒎𝒖 𝒑𝒂𝒔𝒕𝒊 𝒃𝒂𝒌𝒂𝒍 𝒅𝒊 𝒔𝒆𝒃𝒖𝒕 𝒑𝒂𝒏𝒖𝒕𝒂𝒏𝒒𝒖

  -------------< *Tq To* >------------
${gaya}• hexagonz ( sc ori )
• arifi Razzaq ( mastah )
• Hazel ( creator )
• anto ( mastah )
• Paw ( partner )
• vean ( mastah )
• rapa ( mastah )
• hxfz ( creator )
• x far ( creator )
• dinata ( creator )
• farid ( creator )
• rafli ( creator )
• Aldi Fauzi ( newbie )
• Yume ( Cuma Recode )
• semua para penyedia modul${gaya}
`

ALDI.sendMessage(from, meu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
}
} catch {
reply(`eror kak silahkan ketik !setmenu allmenu`)
}
break

case 'gabutmenu':

gabutmenu =`
${G}⬣ gabut menu${G}
${gaya}✨ ${p+=1}. ${shape} ${prefix}tahta${gaya}
${gaya}✨ ${p+=1}. ${shape} ${prefix}nulis${gaya}
${gaya}✨ ${p+=1}. ${shape} ${prefix}tulis${gaya}
${gaya}✨ ${p+=1}. ${shape} ${prefix}nhentaipdf < kode >${gaya}
`
ALDI.sendMessage(from, gabutmenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break
case 'ownermenu':

ownermenu =`
${G}⬣ owner menu${G}
${gaya}👑 ${p+=1}. ${shape} ${prefix}setprefix${gaya}
${gaya}👑 ${p+=1}. ${shape} ${prefix}setmenu simplemenu${gaya}
${gaya}👑 ${p+=1}. ${shape} ${prefix}setbug ⟨ ngetik ⟩${gaya}
${gaya}👑 ${p+=1}. ${shape} ${prefix}setthumb${gaya}
${gaya}👑 ${p+=1}. ${shape} ${prefix}setfakeimg${gaya}
${gaya}👑 ${p+=1}. ${shape} ${prefix}setfake${gaya}
${gaya}👑 ${p+=1}. ${shape} ${prefix}public${gaya}
${gaya}👑 ${p+=1}. ${shape} ${prefix}self${gaya}
${gaya}👑 ${p+=1}. ${shape} ${prefix}on${gaya}
${gaya}👑 ${p+=1}. ${shape} ${prefix}off${gaya}
${gaya}👑 ${p+=1}. ${shape} ${prefix}exif${gaya}
${gaya}👑 ${p+=1}. ${shape} x ⟨ eval ⟩${gaya}
${gaya}👑 ${p+=1}. ${shape} > ⟨ evalV2 ⟩${gaya}
${gaya}👑 ${p+=1}. ${shape} => ⟨ async ⟩${gaya}
${gaya}👑 ${p+=1}. ${shape} $ ⟨ esec ⟩${gaya}
`
ALDI.sendMessage(from, ownermenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break
case 'sessionsmenu':

sessmenu =`
${G}⬣ session menu${G}
${gaya}📲 ${p+=1}. ${shape} ${prefix}jadibot${gaya}
${gaya}📲 ${p+=1}. ${shape} ${prefix}stopjadibot${gaya}
${gaya}📲 ${p+=1}. ${shape} ${prefix}listjadibot${gaya}
${gaya}📲 ${p+=1}. ${shape} ${prefix}vote${gaya}
${gaya}📲️ ${p+=1}. ${shape} ${prefix}voting${gaya}
${gaya}📲️ ${p+=1}. ${shape} ${prefix}delvote${gaya}
`
ALDI.sendMessage(from, sessmenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break
case 'groupmenu':

groupmenu =`
${G}⬣ group menu${G}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}sider ⟨ reply ⟩${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}add ⟨ 62×× ⟩${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}radd ⟨ reply ⟩${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}kick ⟨ @tag ⟩${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}rkick ⟨ reply ⟩${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}welcome aktif${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}welcome nonaktif${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}group open${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}group close${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}promote @tag${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}demote ⟨ maintenance ⟩${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}antilink 1${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}antilink 0${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}antijualan 1${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}antijualan 0${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}gcdetect on${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}gcdetect off${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}antiviewonce on${gaya}
${gaya}⚔️ ${p+=1}. ${shape} ${prefix}antiviewonce off${gaya}

${G}⬣ tag menu${G}
${gaya}🔖 ${p+=1}. ${shape} ${prefix}hidetag${gaya}
${gaya}🔖 ${p+=1}. ${shape} ${prefix}totag${gaya}
${gaya}🔖 ${p+=1}. ${shape} ${prefix}kontag${gaya}
${gaya}🔖 ${p+=1}. ${shape} ${prefix}sticktag${gaya}
`
ALDI.sendMessage(from, groupmenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break
case 'animemenu':

animemenu =`
${G}⬣ anime menu${G}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}otaku${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}komiku${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}chara${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}anime${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}art${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}bts${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}exo${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}elf${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}loli${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}waifu${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}neko${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}shota${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}sagiri${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}shinobu${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}megumin${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}wallnime${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}chiisaihentai${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}trap${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}blowjob${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}yaoi${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}ecchi${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}hentai${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}ahegao${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}hololewd${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}sideoppai${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}animefeets${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}animebooty${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}animethighss${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}hentaiparadise${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}animearmpits${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}hentaifemdom${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}lewdanimegirls${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}biganimetiddies${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}animebellybutton${gaya}
${gaya}🖼 ${p+=1}. ${shape} ${prefix}hentai4everyone${gaya}
`
ALDI.sendMessage(from, animemenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break

case 'storagemenu':

storagemenu =`
${G}⬣ storage menu${G}
${gaya}📂 ${p+=1}. ${shape} ${prefix}addvn${gaya}
${gaya}📂 ${p+=1}. ${shape} ${prefix}getvn${gaya}
${gaya}📂 ${p+=1}. ${shape} ${prefix}listvn${gaya}
${gaya}📂 ${p+=1}. ${shape} ${prefix}addsticker${gaya}
${gaya}📂 ${p+=1}. ${shape} ${prefix}getsticker${gaya}
${gaya}📂 ${p+=1}. ${shape} ${prefix}stickerlist${gaya}
${gaya}📂 ${p+=1}. ${shape} ${prefix}addvideo${gaya}
${gaya}📂 ${p+=1}. ${shape} ${prefix}getvideo${gaya}
${gaya}📂 ${p+=1}. ${shape} ${prefix}listvideo${gaya}
${gaya}📂 ${p+=1}. ${shape} ${prefix}addimage${gaya}
${gaya}📂 ${p+=1}. ${shape} ${prefix}getimage${gaya}
${gaya}📂 ${p+=1}. ${shape} ${prefix}imagelist${gaya}
`
ALDI.sendMessage(from, storagemenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break

case 'conversmenu':

conmenu =`
${G}⬣ conver menu${G}
${gaya}🗃️️ ${p+=1}. ${shape} ${prefix}tomp3${gaya}
${gaya}🗃️ ${p+=1}. ${shape} ${prefix}tomp4${gaya}
${gaya}🗃️ ${p+=1}. ${shape} ${prefix}slow${gaya}
${gaya}🗃️ ${p+=1}. ${shape} ${prefix}fast${gaya}
${gaya}🗃️ ${p+=1}. ${shape} ${prefix}reverse${gaya}

`
ALDI.sendMessage(from, conmenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break

case 'upswmenu':

upswmenu =`
${G}⬣ upsw menu${G}
${gaya}📷 ${p+=1}. ${shape} ${prefix}upswteks${gaya}
${gaya}📷 ${p+=1}. ${shape} ${prefix}upswaudio${gaya}
${gaya}📷 ${p+=1}. ${shape} ${prefix}upswvideo${gaya}
${gaya}📷 ${p+=1}. ${shape} ${prefix}upswimage${gaya}
`
ALDI.sendMessage(from, upswmenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break

case 'othermenu':

othermenu =`
${G}⬣ other menu${G}
${gaya}📚 ${p+=1}. ${shape} ${prefix}linkwa${gaya}
${gaya}📚 ${p+=1}. ${shape} ${prefix}teruskan${gaya}
${gaya}📚 ${p+=1}. ${shape} ${prefix}caripesan${gaya}
${gaya}📚 ${p+=1}. ${shape} ${prefix}fdeface${gaya}
${gaya}📚 ${p+=1}. ${shape} ${prefix}inspect${gaya}
${gaya}📚 ${p+=1}. ${shape} ${prefix}runtime${gaya}
${gaya}📚 ${p+=1}. ${shape} ${prefix}speed${gaya}
${gaya}📚 ${p+=1}. ${shape} ${prefix}kontak${gaya}
${gaya}📚 ${p+=1}. ${shape} ${prefix}tourl${gaya}
${gaya}📚 ${p+=1}. ${shape} ${prefix}imgtourl${gaya}
`
ALDI.sendMessage(from, othermenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break

case 'downloadmenu':

downloadmenu =`
${G}⬣ download menu${G}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}igstalk${gaya}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}ytsearch${gaya}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}tiktok${gaya}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}tiktokaudio${gaya}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}brainly${gaya}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}fb${gaya}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}ig${gaya}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}twitter${gaya}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}pinterest${gaya}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}playstore${gaya}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}lirik${gaya}
`
ALDI.sendMessage(from, downloadmenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break

case 'playmenu':

playmenu =`
${G}⬣ play menu${G}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}play${gaya}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}ytmp3${gaya}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}ytmp4${gaya}
${gaya}⏳ ${p+=1}. ${shape} ${prefix}video${gaya}
`
ALDI.sendMessage(from, playmenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break

case 'stickercmdmenu':

setcmdmenu =`
${G}⬣ stcmd menu${G}
${gaya}📂 ${p+=1}. ${shape} ${prefix}addcmd${gaya}
${gaya}📂 ${p+=1}. ${shape} ${prefix}delcmd${gaya}
${gaya}📂 ${p+=1}. ${shape} ${prefix}listcmd${gaya}
`
ALDI.sendMessage(from, setcmdmenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break

case 'stickermenu':

stickermenu =`
${G}⬣ sticker menu${G}
${gaya}💍 ${p+=1}. ${shape} ${prefix}sticker${gaya}
${gaya}💍 ${p+=1}. ${shape} ${prefix}toimg${gaya}
${gaya}💍 ${p+=1}. ${shape} ${prefix}take${gaya}
${gaya}💍 ${p+=1}. ${shape} ${prefix}colong${gaya}
${gaya}💍 ${p+=1}. ${shape} ${prefix}emoji${gaya}
`
ALDI.sendMessage(from, stickermenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break
case 'gamemenu':

gamemenu =`
${G}⬣ game menu${G}
${gaya}🎮 ${p+=1}. ${shape} ${prefix}math${gaya}
${gaya}🎮 ${p+=1}. ${shape} ${prefix}tebakgambar${gaya}
${gaya}🎮 ${p+=1}. ${shape} ${gaya}tembak
${gaya}🎮 ${p+=1}. ${shape} ${gaya}tictactoe
${gaya}🎮 ${p+=1}. ${shape} ${gaya}delttc

${gaya}🎮 ${p+=1}. ${shape} ${gaya}vslot
${gaya}🎮 ${p+=1}. ${shape} ${gaya}slot
${gaya}🎮 ${p+=1}. ${shape} ${gaya}suit2
`
ALDI.sendMessage(from, gamemenu, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${namabot}\nBy ${namaown}`,
"body": "By Yume",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : ftroli})
break

// gan gan gan gan jangan hapus
// credits ini oke jika ingin memasukan

// nama kalian masukin aja
// asal jangan hapus nama nama nya oke

// itu termasuk orang yang tidak pernah menghargai kalo aku tuh cinta sama kamu:v
case 'credits':
taggg =`
${G}⬣ THANKS TO${G}
${gaya}👑 ◪• hazel ⟨ @6282313549797 ⟩${gaya}
${gaya}👑 ◪• anto ⟨ @6287811078485 ⟩${gaya}
${gaya}👑 ◪• x far ⟨ @62895619083555 ⟩${gaya}
${gaya}👑 ◪• vean ⟨ @628983583288 ⟩${gaya}
${gaya}👑 ◪• rapa ⟨ @6281804680327 ⟩${gaya}
${gaya}👑 ◪• paw ⟨ @13189951000 ⟩${gaya}
${gaya}👑 ◪• Arifi ⟨ @6281261324817 ⟩${gaya}
${gaya}👑 ◪• ALDI FAUZI ⟨ @6285697725326 ⟩${gaya}
${gaya}👑 ◪• hxfz ⟨ @6282126046864 ⟩${gaya}
${gaya}👑 ◪• hexagonz ⟨ @undefined ⟩${gaya}
${gaya}👑 ◪• ${namaown} ⟨ @${noown} ⟩${gaya}
${gaya}👑 ◪• semua parah penyedia modul${gaya}
${gaya}👑 ◪• dan all my friends${gaya}`
mentions(taggg, [`6282313549797@s.whatsapp.net`,`6285697725326@s.whatsapp.net`,`13189951000@s.whatsapp.net`,`6287811078485@s.whatsapp.net`,`6282126046864@s.whatsapp.net`,`6281804680327@s.whatsapp.net`,`628983583288@s.whatsapp.net`,`62895619083555@s.whatsapp.net`,`6281261324817@s.whatsapp.net`,`${noown}@s.whatsapp.net`], true)
break
            case 'sc': 
            se =`
scrip:
https://youtube.com/channel/UCGbTjktnZaa6VPsccblGGTA


Rest Api : 
https://ziyy.herokuapp.com
apikey = xZiyy`
			replyWithFakeLink(se)
			break
case 'setmenu':

if (!isOwner && !itsMe) return reply('hanya owner bot')
if(args[0] == 'allmenu'){
menusimpel = true
reply('Sucsess')

}else if(args[0] == 'simplemenu'){
menusimpel = false
reply('Sucsess')

}else{
reply(`Cara Penggunaan : ${prefix + command} simplemenu\n\nTersedia\n •simplemenu\n •allmenu`)
}
break
			
			case 'sewabot':		
            saap =`open jawa sewa bot
\nby : ${namaown}\nbot : ${namabot}\n\n• ${harga1bulan}\n• ${harga2bulan}\n• ${hargaperpanjang}\n• ${harga6bulan}\n\n🗣️ Bang kenapa wajib beli disini?\nHarganya juga mahal\n\n👤Kita menyediakan\nbanyak fitur dan selalu update fitur fitur\nterbaru\n\n🗣️ Bang bot ya 24 jam?\n\n👤 Gak selalu on kak
Karena kita nyalain\nbot nya dari hp,\nnah hp juga butuh baterai + kuota`            
            const buttonpulsay = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'via pulsa'}, type: 1},{buttonId: `${prefix}via gopay`, buttonText: {displayText: 'via gopay'}, type: 1},{buttonId: `${prefix}via ovo`, buttonText: {displayText: 'via ovo'}, type: 1}]
            const buttonMessageppp = {
			headerType: "IMAGE",
			contentText: `${saap}`,
			footerText: 'ketik di bawah untuk melanjutkan',
			buttons: buttonpulsay,
			headerType: 1
			}
            ALDI.sendMessage(from, buttonMessageppp, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6285697725326@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `*𝐒𝐄𝐋𝐅*\n${gaya}Made By: ${namaown}${gaya}`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
  		    break

            case 'via':
            if (args.length < 1) return reply('bukan gitu\n\nada dua pilihan\nvn\nngetik\n\ncontoh: !setbug ngetik')
            if((args[0]) == 'pulsa'){
            saa =`${pulsa}`            
            const buttonpulsa = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saa}`,
			footerText: 'chat owner untuk lebih lanjut',
			buttons: buttonpulsa,
			headerType: 1
			}
            ALDI.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6285697725326@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `*𝐒𝐄𝐋𝐅 *\n${gaya}Made By: ${namaown}${gaya}`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
            } else
if ((args[0]) == 'gopay'){
            pay =`${gopay}`            
            const buttongopay = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${pay}`,
			footerText: 'chat owner untuk lebih lanjut',
			buttons: buttongopay,
			headerType: 1
			}
            ALDI.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6285697725326@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `*𝐒𝐄𝐋𝐅 𝐗𝐙𝐈𝐘 𝐖𝐀𝐒 𝐇𝐄𝐑𝐄*\n${gaya}Made By: ${namaown}${gaya}`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
            } else
if ((args[0]) == 'ovo'){
            voo =`${ovo}`            
            const buttonovo = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'chat owner untuk lebih lanjut',
			buttons: buttonovo,
			headerType: 1
			}
            ALDI.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6285697725326@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `*𝐒𝐄𝐋𝐅 𝐗𝐙𝐈𝐘 𝐖𝐀𝐒 𝐇𝐄𝐑𝐄*\n${gaya}Made By: ${namaown}${gaya}`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
                   
            }
            break   		    			
		    //==================[ DETECTED ]==================\\
            case 'read': case 'sider':
            if (!isGroupAdmins && !itsMe && !isOwner)return reply(mess.admin)
            if (!isGroup) return reply(mess.group)

            if (!isQuotedMsg)return reply('Reply pesan bot')
            infom = await ALDI.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
            tagg = []
teks = `Telah Dibaca Oleh :\n\n`
            for(let i of infom.reads){

            teks += '⬡'+' ' + '@' + i.jid.split('@')[0] + '\n'
            teks += `┗━ ⬡ Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)

            }

            mentions(teks, tagg, true)
            break
            case 'hidetag':
            case 'h':
            if (!isGroup) return reply(mess.group)
            if (!isGroupAdmins && !itsMe && !isOwner)return reply(mess.admin)
            if (!q)return reply('Ingfonya apa?')
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
text: q,
contextInfo: { mentionedJid: mem },
quoted: mek
}
            ALDI.sendMessage(from, options, text)
            break
            case 'tovid': case 'tovideo':
            if (!isQuotedSticker) return reply('Reply stiker nya')
            if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.xtInfo

            media = await ALDI.downloadAndSaveMediaMessage(encmedia)

            mik = await webp2gifFile(media)
            reply(mess.wait)
            console.log(mik)
            sendMediaURL(from, mik.result, 'Nih..')
            limitAdd(sender, limit)
            break
						

            case 'togif':
            if (!isQuotedSticker) return reply('Reply stiker nya')
            if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            mik = await webp2gifFile(media)
            reply(mess.wait)
            console.log(mik)
            anu = await getBuffer(mik.result)
            ALDI.sendMessage(from, anu, video, {mimetype: 'video/gif', caption: 'Nih..', quoted: mek})
            break
            case 'add':
            if (!isGroup) return reply(mess.group)
            if (!isGroupAdmins) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            orang = args[0] + '@s.whatsapp.net'
            response = await ALDI.groupAdd(from, [orang])
o = response.participants[0]
            let inv = (Object.values(o))
            if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')

            else if(inv[0].code == 403){

            ALDI.sendMessage(from, `Mengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
            ALDI.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp,
            groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
            }
            break
            case 'radd':
            if (!isGroup) return reply(mess.group)
            if (!itsMe && !isGroupAdmins) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
            ALDI.groupAdd(from, mentioned)
            break
            case 'kick': 
            if (!isGroup) return reply(mess.group)

            if (!itsMe && !isGroupAdmins) return reply(mess.admin)
            if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            y = q.split('@')[1] + '@s.whatsapp.net'
            ALDI.groupRemove(from, [y])
            reply(`Succses kick target!`)
            break

            case 'rkick':
            if (!isGroup) return reply(mess.group)
            if (!itsMe && !isGroupAdmins) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)

            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
            ALDI.groupRemove(from, mentioned)
            break
            case 'group':
            case 'grup':
            if (!isGroup) return reply(mess.group)
            if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            if (args[0] === 'open') {
            reply('Succses Open Group!')
            ALDI.groupSettingChange(from, GroupSettingChange.messageSend, false)
	
            } else if (args[0] === 'close') {
            reply('Succses Close Group!')
            ALDI.groupSettingChange(from, GroupSettingChange.messageSend, true)
	
            } else if ((args[0]) === '-help') {
            mentions(`*Contoh Penggunaan Fitur ${command}*\n*Example :*\n*${prefix + command} open*\n*${prefix + command} close*\n\n*_Thanks To : @${`0`.split("@")[0]}_*`, [`${`0`}@s.whatsapp.net`], true)
            } else {
            reply(`*Input (${args[0]}) Error!*\n*Buka Tutorial untuk cara pakai!*\n\n*Example* : \n*${prefix + command} -help*`)
            }
            break
            case "noprefix":
            if (!mek.key.fromMe && !isOwner)return reply ('siapa ya')
            if (prefixStatus == false) return reply("No prefix is recently on!");
            prefixStatus = false;
            reply("Berhasil mengganti prefix menjadi noprefix");
            break;
            case "multiprefix":
            if (!mek.key.fromMe && !isOwner) return; reply('hanya bos bro')
            if (prefixStatus == true) return reply("Multi prefix is recently on!");
            prefixStatus = true;
            reply("Berhasil mengganti prefix menjadi multiprefix");
            break;            
            case 'pm':
            case 'promote':
            if (!isBotGroupAdmins) return reply(mess.badmin)
            if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.admin)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
            ALDI.groupMakeAdmin(from, mentioned)
            .catch((err) => reply(jsonformat(err)))
            break
					

            /*case 'demote':
	eror ngap ntah ta tau gw bailys padahal udah support:(				
            if (!isGroup) return reply(mess.group)
					
            if (!isGroupAdmins) return reply(mess.admin)
					
            if (!isBotGroupAdmins) return reply(mess.badmin)
					
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) 
            return reply('tag orangnya')
					
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					
            if (mentioned.length > 1) {
						
            teks = ''
						
            for (let _ of mentioned) {
							
            teks += `Status adminmu dicopot. Makanya jan jadi sider🏃 :\n`
							
            teks += `@_.split('@')[0]`
						
            }
						
            mentions(teks, mentioned, true)
						
            ALDI.groupDemoteAdmin(from, mentioned)
					
            } else {
					
            mentions(`yahaaa wahyu @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi sider`, mentioned, true)
						
            ALDI.groupDemoteAdmin(from, mentioned)
					
            }
					
            break*/
            case 'afk':
            alasan = args.join(" ")
            afkk[sender.split('@')[0]] = alasan.toLowerCase()
            fs.writeFileSync("./data/afk.json", JSON.stringify(afkk))
            ini_mn1k = "Anda telah afk\n\n"
            if (alasan != "") {
            ini_mn1k += "Dengan alasan :"  + alasan
            }
            reply(ini_mn1k)
            break   
		    case 'welcome':		    
		    if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(mess.admin)		    
		    if (args.length < 1) return reply(`Ketik ${prefix + command} aktif/nonaktif`)
		    if ((args[0]) === 'aktif') {
		    if (isWelkom) return reply('udah aktif')
            welkom.push(from)
		    fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
		    reply(`\`\`\`✓Sukses mengaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)			
		    } else if ((args[0]) === 'nonaktif') {			
		    if (!isWelkom) return reply('udah nonaktif')			
		    welkom.splice(from, 1)			
		    fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))			
		    reply(`\`\`\`Sukses menonaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)			
		    } else {		
		    reply('aktif untuk mengaktifkan, nonaktif untuk menonaktifkan')			
		    }			
		    break

            case 'antiviewonce':
            case 'antivo':
                
            if (!isGroup) return reply(mess.group)
                
            if (!isGroupAdmins && !isOwner) return reply(mess.admin)
                
   		    if (args.length < 1) return reply(`Pilih enable atau disable`)
                
            if ((args[0]) === 'on') {                    
            if (isAntiVO) return reply(`Udah aktif`)
                    
            antiviewonce.push(from)
					
            fs.writeFileSync('./data/antiviewonce.json', JSON.stringify(antiviewonce))
					
            reply('Antiview Once grup aktif')
                
            } else if ((args[0]) === 'off') {                      
            antiviewonce.splice(from, 1)
                    
            fs.writeFileSync('./data/antiviewonce.json', JSON.stringify(antiviewonce))
                    
            reply('antiviewonce grup nonaktif')
                
            } else {
                    
		    reply('on untuk mengaktifkan, off untuk menonaktifkan')			        
            }
                
            break
           		    	                                           		
		    case 'groupdetect':		
		    case 'gcdtc':			
		    case 'gcdetect':			
		    if (!isOwner && !mek.key.fromMe) return reply(mess.owner)	       
		    if (args.length < 1) return reply(`Ketik ${prefix + command} on/off`)		   
		    if ((args[0]) === 'on') {		    
		    if (isGcdetect) return reply('udah on')			
		    gcdetect.push(from)			
		    fs.writeFileSync('./src/gcdetect.json', JSON.stringify(gcdetect))	        
		    reply(`\`\`\`✓Sukses mengaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)			
		    } else if ((args[0]) === 'off') {			
		    if (!isGcdetect) return reply('sudah off')			
		    gcdetect.splice(from, 1)			
		    fs.writeFileSync('./src/gcdetect.json', JSON.stringify(gcdetect))			
		    reply(`\`\`\`✓Sukses menonaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)			
		    } else {			
		    reply('on untuk mengaktifkan, off untuk menonaktifkan')			
		    }		        	
		    break
           
case 'math':{
            if (!isGroup) return reply(mess.group)
            if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
            if (!q) return reply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
            let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${q}`)
            //	const petunjuk = anu.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
            reply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}`)
            let anih = anu.data.jawaban.toLowerCase()
            game.addmtk(from, anih, gamewaktu, mtk)
            }
            break

            case 'tebakgambar':{
            if (!isGroup) return reply(mess.group)
            if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
            let tbg = await axios.get(`https://api.zeks.xyz/api/tebakgambar?apikey=${zeks}`)
            const petunjuk = tbg.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
            sendMediaURL(from, tbg.data.result.soal, monospace(`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`), mek)

            let anih = tbg.data.result.jawaban.toLowerCase()
game.addgambar(from, anih, gamewaktu, tebakgambar)
            }
            break            		    
            case 'antilink': 
            if (!isBotGroupAdmins) return reply(mess.badmin)			
			if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply(`LU ADMIN??`)
			if (args.length < 1) return reply('PILIH 1/0')
			if (Number(args[0]) === 1) {
			if (isAntiLink) return reply('*SUDAH AKTIF* !!!')
			antilink.push(from)
			fs.writeFileSync('./src/.dat/antilink.json', JSON.stringify(antilink))
			reply('*[❗] SUCCESS ENABLE ANTILINK*')
			reply(`*「 WARNING 」\n\njika bukan admin group kalian dilarang mengirim link group!!*`)
			} else if (Number(args[0]) === 0) {
			antilink.splice(from, 1)
			fs.writeFileSync('./src/.dat/antilink.json', JSON.stringify(antilink))
			reply('*[❗] SUCCESS DISABLE ANTILINK*')
			} else {
			reply(`PILIH 1/0`)
			}
			break
            case 'antijualan': 
            if (!isBotGroupAdmins) return reply(mess.badmin)			
			if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply(`LU ADMIN??`)
			if (args.length < 1) return reply('PILIH 1/0')
			if (Number(args[0]) === 1) {
			if (isjasa) return reply('*SUDAH AKTIF* !!!')
			_jasa.push(from)
			fs.writeFileSync('./src/.dat/antijasa.json', JSON.stringify(_jasa))
			reply('*[❗] SUCCESS ENABLE ANTIN JUALAN*')
			reply(`*「 WARNING 」\n\njika bukan admin group kalian dilarang jualan di group!!*`)
			} else if (Number(args[0]) === 0) {
			_jasa.splice(from, 1)
			fs.writeFileSync('./src/.dat/antijasa.json', JSON.stringify(_jasa))
			reply('*[❗] SUCCESS DISABLE ANTIJUALAN*')
			} else {
			reply(`PILIH 1/0`)
			}
			break

            case 'autoread':
            if (!itsMe && !isOwner)return mentions(`*Perintah ini Khusus @${noown} !*`, [`${noown}@s.whatsapp.net`], true)
            if ((args[0]) === 'on') {
            if(aread)return reply('_Sudah diaktifkan sebelumnya_')
            aread = true
            return reply(  `*Auto Read On!*`, text)
            } else if ((args[0]) === 'off') {
            if(!aread)return reply('_Sudah dimatikan sebelumnya_')
            aread = false
            return reply(`*Auto Read Off!*`, text)
            } else {
            reply('on untuk mengaktifkan, off untuk menonaktifkan')
            }
            break            
            case 'setbug':
            if (!itsMe && !isOwner) return mentions(`*Perintah ini Khusus @${noown} !*`, [`${noown}@s.whatsapp.net`], true)
            if (args.length < 1) return reply('bukan gitu\n\nada dua pilihan\nvn\nngetik\n\ncontoh: !setbug ngetik')
            if((args[0]) == 'vn'){
            ngetik = false
            vn = true
            if(ngetik) return reply('_Sudah diaktifkan sebelumnya!_')
            reply(`_Succses mengganti ke vn`)
            } else
if ((args[0]) == 'ngetik'){
            ngetik = true
            vn = false
            if(vn)return reply('_Sudah diaktifkan sebelumnya!_')
            reply(`_Succses mengganti ngetik`)
           
}
            break					
			case 'tes':	
			case 'test':		
			const buttons = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴄʀᴇᴀᴛᴏʀ'}, type: 1},{buttonId: `${prefix}menu`, buttonText: {displayText: 'ᴍᴇɴᴜ ʙᴏᴛ'}, type: 1}]
			const buttonMessage = {
			headerType: "IMAGE",
			contentText: "Active!!",
			footerText: '𝘿𝙞𝙫𝙖 𝐁𝐎𝐓 𝐕2.0.0',
			buttons: buttons,
			headerType: 1
			}
            ALDI.sendMessage(from, buttonMessage, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6285697725326@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `*𝐒𝐄𝐋𝐅 𝘿𝙞𝙫𝙖𝘾𝙮𝙖𝙣*\n${gaya}Made By: 𝘿𝙞𝙫𝙖${gaya}`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
   		    break	            
//====[ CASE BC ]===\\
case 'buttonbc':
  
            if (!mek.key.fromMe && !isOwner) return reply(`hanya owner bro`)
            if (args.length < 1) return reply('Textnya Mane?')
            anu = await ALDI.chats.all()
            for (let _ of anu) {
            const buttons = [{buttonId: `${prefix}`, buttonText: {displayText: `Siap Bang👌`}, type: 1},{buttonId: `${prefix}menu`, buttonText: {displayText: `MENU`}, type: 1}]
            const buttonMessage = {
            headerType: "IMAGE",
            contentText: q,
            footerText: `${gaya}GAY\nCreated By: diva`,
            buttons: buttons,
            headerType: 1
            }
            ALDI.sendMessage(`${_.jid}`,
            buttonMessage,
            MessageType.buttonsMessage,
            {quoted:{key: {fromMe: false, participant: `6287727925499@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${gaya}BROADCAST\nWIBU${gaya}`, pageCount: 0, fileName: `${gaya}BROADCAST\nWIBU${gaya}`, jpegThumbnail: fakeimage}}}, contextInfo: {"mentionedJid" : ['6287727925499@s.whatsapp.net']}})
            }
            reply('◯ 𝐒𝐔𝐂𝐂𝐄𝐒 ◯')
            break
            case 'bc':
			
            if (!mek.key.fromMe && !isOwner) return reply(`khusus owner broh`)
			
            if (args.length < 1) return reply('.......')
			
            anu = await ALDI.chats.all()
			
            if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			
            bc = await ALDI.downloadMediaMessage(encmedia)
			
            for (let _ of anu) {
			
            ALDI.sendMessage(_.jid, bc, image, {quoted:troli,caption: `*「 ${namabot} BROADCAST 」*\n\n${body.slice(4)}`})
		    
            }
		    
            reply('Suksess broadcast')

            } else {			
            for (let _ of anu) {			
            sendMess(_.jid, `*「 ${namabot} BROADCAST 」*\n\n${body.slice(4)}`)		    
            }			
            reply('Suksess broadcast')		    
            }			
            break			
            case 'owner':
            case 'creatoe':
            case 'developer':
            let ini_list = []
            for (let i of ownerNumber) {
            const vname = ALDI.contacts[i] != undefined ? ALDI.contacts[i].vname || ALDI.contacts[i].notify : undefined
            ini_list.push({
            "displayName": 'Yume',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${ALDI.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
            }
            hehe = await ALDI.sendMessage(from, {
            "displayName": `${ini_list.length} kontak`,
            "contacts": ini_list 
            }, 'contactsArrayMessage', { quoted: ftroli })
            ALDI.sendMessage(from,`Nih Kak ${command} ${namabot}`,text,{quoted: hehe})
            break			
            case 'leaveall':
            if (!mek.key.fromMe && !isOwner)return reply('kamu bukan ALDI')
            let totalgroup = ALDI.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
            for (let id of totalgroup) {
            sendMess(id, 'Byee', null)
            await sleep(3000)
            ALDI.groupLeave(id)
            }
            break
            case 'teruskan':
            case 'q':
            ALDI.sendMessage(from, `${body.slice(9)}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break
            case 'listbot':
            case 'listjadibot':
            case 'listnumpang':
            let tekss = '「 *LIST JADIBOT* 」\n'
            for(let i of listjadibot) {
            tekss += `*Nomor* : ${i.jid.split('@')[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`
            }
            reply(tekss)
            break
            case 'jadibot':         
            jadibot(reply,ALDI,from)
            break
            case 'stopjadibot':    
            stopjadibot(reply)
            break
            case 'shutdown':
            if (!mek.key.fromMe && !isOwner) return 
            reply(`Bye...`)
            await sleep(3000)
            process.exit()
            break
            case 'add':		
			if (args.length < 1) return reply('Yang mau di add jin ya?')
		    if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
		    try {
			num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
			ALDI.groupAdd(from, [num])
			} catch (e) {
			console.log('Error :', e)
		    reply('Gagal menambahkan target, mungkin karena di private')
		    }
	        break
            case 'addcmd': 
			case 'setcmd':
			if (isQuotedSticker) {
			if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
			var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
			addCmd(kodenya, q)
			reply("Done")
			} else {
			reply('tag stickernya')
			}

			break
			case 'delcmd':
			if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
			var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
			_scommand.splice(getCommandPosition(kodenya), 1)
			fs.writeFileSync('./src/scommands.json', JSON.stringify(_scommand))
			reply("Done")
			break
			case 'listcmd':
			let teksnyee = `\`\`\` LIST STICKER CMD \`\`\``
			let cemde = [];
			for (let i of _scommand) {
			cemde.push(i.id)
			teksnyee += `\n\n*ID:* ${i.id}\n*CMD:* ${i.chats}`
			}
			reply(teksnyee)
			break
            case 'notif':					
            if (!isGroup) return reply(mess.group)
            teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
            group = await ALDI.groupMetadata(from);
            member = group['participants']
            jids = [];
            member.map(async adm => {
            jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
            })
            options = {
            text: teks,
            contextInfo: {
            mentionedJid: jids
            },
            quoted: ftroli
            }
            await ALDI.sendMessage(from, options, text)
            break
            case 'delvote':
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
            case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
            case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
            case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
            if(i.url.includes('mp4')){
            let link = await getBuffer(i.url)
            ALDI.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
            } else {
            let link = await getBuffer(i.url)
            ALDI.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})            
            }
            }
            });
            break
            case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await ALDI.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await ALDI.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
            case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
            case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            ALDI.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
            case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
            case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await ALDI.sendMessage(from,li,image,{quoted: mek})
            break
            case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await ALDI.sendMessage(from,di,image,{quoted: mek})
            break
            case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
            case 'on':
            if (!mek.key.fromMe && !isOwner) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
            case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${public ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
            case 'off':
            if (!mek.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
            case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
            case 'kontag':
            if (!mek.key.fromMe && !isOwner) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            ALDI.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
            case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
            case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
            }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
            } else{
            reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
            }
            break
            case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            ALDI.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
            case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ALDI.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ALDI.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ALDI.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ALDI.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            ALDI.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
            case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            ALDI.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
          	case 'stickergif':			
           	case 'stiker':			
           	case 'stikergif':			
           	case 's':			
           	case 'sgif':
           	case 'gifstiker':
           	case 'gifsticker':
           	case 'sticker':
           	ator = 'WybuCans'
           	namo = 'SubscribeMe:'
           	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek	
           	const media = await ALDI.downloadAndSaveMediaMessage(encmedia)
           	ran = getRandom('.webp')
           	await ffmpeg(`./${media}`)
           	.input(media)
           	.on('start', function (cmd) {
           	console.log(`Started : ${cmd}`)
           	})
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply(mess.stick)
            })
            .on('end', function () {
            console.log('Finish')
            exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
            //if (error) {
            // reply(Zuxy.stikga())
            // fs.unlinkSync(media)
            // fs.unlinkSync(ran)
            //}
            ALDI.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
            //if (error) {
            // reply(Zuxy.stikga())
            // fs.unlinkSync(media)
            // fs.unlinkSync(ran)
            // }
            ALDI.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`sticker poto :\nKirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\n\nsticker vidio :\nKirim Vidio atau vidio gif dengan caption ${prefix}stickergif atau tag vidio/vidiogif yang sudah dikirim\n\nNote : \nDurasi video maximal 9 detik`)
            }
            break
//addmedia
            case 'getsticker':
            case 'gets':
            namastc = body.slice(12)
            result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
            ALDI.sendMessage(from, result, sticker, {quoted :mek})
            break
            case 'stickerlist':
            case 'liststicker':
            teks = '*Sticker List :*\n\n'
            for (let awokwkwk of setiker) {
            teks += `❏ ${awokwkwk}\n`
            }
            teks += `\n*Total : ${setiker.length}*`
            ALDI.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
            break
            case 'addsticker':
            if (!isQuotedSticker) return reply('Reply stiker nya')
            svst = body.slice(12)
            if (!svst) return reply('Nama sticker nya apa?')
            boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            delb = await ALDI.downloadMediaMessage(boij)
            setiker.push(`${svst}`)
            fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
            fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
            ALDI.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
            break
            case 'addaudio': 
            case 'addvn': 
            if (!isQuotedAudio) return reply('Reply vnnya blokk!')
            svst = body.slice(7)
            if (!svst) return reply('Nama audionya apa su?')
            boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            delb = await ALDI.downloadMediaMessage(boij)
            audionye.push(`${svst}`)
            fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
            fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
            ALDI.sendMessage(from, `Sukses Menambahkan Vn\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
            break
            case 'getvn':
            namastc = body.slice(7)
            buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
            ALDI.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
            break
            case 'listvn':
            case 'vnlist':
            teks = '*List Vn:*\n\n'
            for (let awokwkwk of audionye) {
            teks += `❏  ${awokwkwk}\n`
            }
            teks += `\n*Total : ${audionye.length}*`
            ALDI.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
            break
            case 'addimage':
            case 'addfoto':
            if (!isQuotedImage) return reply('Reply imagenya blokk!')
            svst = body.slice(10)
            if (!svst) return reply('Nama imagenya apa su?')
            boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            delb = await ALDI.downloadMediaMessage(boij)
            imagenye.push(`${svst}`)
            fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
            fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
            ALDI.sendMessage(from, `Sukses Menambahkan Image\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
            break
            case 'getimage':
            case 'getfoto':
            namastc = body.slice(10)
            buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
            ALDI.sendMessage(from, buffer, image, { quoted: mek, caption: `NIH ${namastc}` })
            break
            case 'imagelist':
            case 'listimage':
            case 'listfoto':
            teks = '*List Image :*\n\n'
            for (let awokwkwk of imagenye) {
            teks += `❏ ${awokwkwk}\n`
            }
            teks += `\n*Total : ${imagenye.length}*`
            ALDI.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
            break
            case 'addvideo':
            if (!isQuotedVideo) return reply('Reply videonya blokk!')
            svst = body.slice(10)
            if (!svst) return reply('Nama videonya apa su?')
            boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            delb = await ALDI.downloadMediaMessage(boij)
            videonye.push(`${svst}`)
            fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
            fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
            ALDI.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
            break
            case 'getvideo':
            namastc = body.slice(10)
            buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
            ALDI.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
            break
            case 'listvideo':
            case 'videolist':
            teks = '*List Video :*\n\n'
            for (let awokwkwk of videonye) {
            teks += `❏ ${awokwkwk}\n`
			}
			teks += `\n*Total : ${videonye.length}*`
			ALDI.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
			break                        
            case 'toimg':
            var b = fs.readFileSync(`./image/fake.jpeg`)
            var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            var media = await ALDI.downloadMediaMessage(encmedia)
            if (!isQuotedSticker) return reply('Reply Stikernya nya asu')
            ALDI.sendMessage(from, media, MessageType.image, { thumbnail: b, caption: 'Nihh dah Jadi Kak', quoted: mek})
            break
            case 'exif':
            if (!itsMe && !isOwner)return mentions(`*Perintah ini Khusus @${6285697725326} !*`, [`${6285697725326}@s.whatsapp.net`], true)
            if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
            if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
            exif.create(arg.split('|')[0], arg.split('|')[1])
            reply('sukses')
            break        
	        case 'colong':
		    if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		    const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await ALDI.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    ALDI.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: ftroli})
	        fs.unlinkSync(media)
		    fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
			})
			break
	        case 'takestick':		    
	        case 'take':			
	        if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
			var pembawm = body.slice(6)
			var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			var media = await ALDI.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
			var packname = pembawm.split('|')[0]
			var author = pembawm.split('|')[1]
			exif.create(packname, author, `takestick_${sender}`)
			exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
			if (error) return reply('Error')
			ALDI.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: ftroli})
			fs.unlinkSync(media)
			fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
		    })
			break
	        case 'stikerwm':
	        case 'stickerwm':
            case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            ALDI.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            ALDI.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            ALDI.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            ALDI.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
            case 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            ALDI.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
            case 'upswaudio':
            if (isQuotedAudio) {
            const swsw = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await ALDI.downloadMediaMessage(swsw)
            ALDI.sendMessage('status@broadcast', cihcih, audio, { caption: `${q}` }) 
            bur = `Sukses Upload Story Audio dengan Caption: ${q}`
            ALDI.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
//====================[ GAME MENU ]==================\\
           
            case 'suit2':
		    query = args.join(" ")
	      	const botol = ['Batu','Gunting','Kertas']
            const suitcuy = botol[Math.floor(Math.random() * botol.length)]
	        brow = `
\n*BOT*
\n> ${suitcuy}
\n*KAMU*
\n> ${query}
`
            reply(brow)
            break
            case 'slot':
			slot = `\n`
		    slot += `  *SLOT* \n`
			slot += `➻ ${slot11} ║ ${slot22} ║ ${slot33}\n`
			slot += `➻ ${slot44} ║ ${slot55} ║ ${slot66} <====\n`
		    slot += `➻ ${slot77} ║ ${slot88} ║ ${slot99}	\n`			  				    
		    slot += `➻ GAME : SLOT [ *NEW* ]\n`
			slot += `\n`
			slot += `\n`
			ALDI.sendMessage(from, slot, text, {quoted: mek})
		    break
            case 'vslot':
            if (!isGroup) return reply(`hanya bisa di group`)             
            result = await fetchJson(`https://api.xteam.xyz/game/virtualslot?APIKEY=${XteamKey}`)
            txt = `*🎰Slot didapatkan🎰* \n\n${result.map}\n`
            txt += `\n🔖Hasil : ${result.hasil}\n`
            txt += `🕹️Score : ${result.score}\n`
            reply(txt)
            break
            case 'slot1': //SLOT BY M4N1K
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
            const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
            const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
            ALDI.sendMessage(from, `
\n[ SLOTS ]\n-----------------
\n${somtoy2}
\n${somtoy}<=====
\n${somtoy3}
\n[ SLOTS ]
\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
\nContoh : ${somtoy4}<=====`, text, { quoted: ftoko })
            break
            
            case 'tictactoe': 
            case 'ttt': 
            case 'ttc':
            if (!isGroup) return reply(`hanya bisa di group`)          
	        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('tag orangnya')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            if (isTicTacToe(from, tictactoe)) return reply(`Masih ada sesi yg blum selesai`)
            if (args.length < 0) return reply(`Kirim perintah ${prefix}tictactoe @tag`)
            if (mentioned.length !== 0){
      		if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)
            let h = randomNomor(1000)
            mentions(monospace(`@${sender.split('@')[0]} kamu bertarung dengan @${mentioned[0].split('@')[0]} untuk bermain TictacToe	\n\nKirim Y untuk menerima dan T untuk menolak\n\nHadiah : ${h} limit`), [sender, mentioned[0]], false)
            tictactoe.push({
            id: from,
            status: null,
            hadiah: h,
            penantang: sender,
            ditantang: mentioned[0],
            TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
            })
            } else {
            reply(`Kirim perintah ${prefix}tictactoe @tag`)
            }
            break
            case 'delttt':
            case 'delttc':
            if (!isGroup) return reply(`hanya bisa di group`)          
            
            if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
            tictactoe.splice(getPosTic(from, tictactoe), 1)
            reply(`Berhasil menghapus sesi tictactoe di grup ini`)
            break
            
            case 'tembak':
            if (args[0] == 'udara') {
            setTimeout( () => {
            reply(`[ *PERINTAH DILAKSANAKAN* ]`)
            }, 1000)
            setTimeout( () => {
            reply(`[ *SEDANG BERBURU* ]`)
            }, 5000)
            setTimeout( () => {
            reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
            }, 8000)
            setTimeout( () => {
            reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]`)
            }, 12000)
            }
            if (args[0] == 'darat') {
            setTimeout( () => {
            reply(`[ *PERINTAH DILAKSANAKAN* ]`)
            }, 1000)
            setTimeout( () => {
            reply(`[ *SEDANG BERBURU* ]`)
            }, 5000)
            setTimeout( () => {
            reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
            }, 8000)
            setTimeout( () => {
            reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]`)
            }, 12000)
            }
            if (args[0] == 'laut') {
            setTimeout( () => {
            reply(`[ *PERINTAH DILAKSANAKAN* ]`)
            }, 1000)
            setTimeout( () => {
            reply(`[ *SEDANG BERBURU* ]`)
            }, 5000)
            setTimeout( () => {
            reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
            }, 8000)
            setTimeout( () => {
            reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh11}* ]`)
            }, 12000)
            }
            break
           
            case 'xox':
	     	const sumiyati = wloytoy[Math.floor(Math.random() * wloytoy.length)]
            const sumiyati1 = wloytoy1[Math.floor(Math.random() * wloytoy1.length)]
            const sumiyati2 = wloytoy2[Math.floor(Math.random() * wloytoy2.length)]
            const sumiyati3 = wloytoy3[Math.floor(Math.random() * wloytoy3.length)]
            ALDI.sendMessage(from, `
\n[ XOX ]\n-----------------
\n${sumiyati}
\n${sumiyati1}
\n${sumiyati2}
\n[ XOX ]
\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
\nContoh : ${sumiyati3}`, text, { quoted: ftroli })
            break
                        
            case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await ALDI.downloadMediaMessage(swsw)
            ALDI.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            ALDI.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
            case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await ALDI.downloadMediaMessage(swsw)
            ALDI.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            ALDI.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
            case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await ALDI.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await ALDI.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		ALDI.sendMessage(from, mat, MessageType.extendedText, anu)
            break
			case 'mode':
buttonnnss = [{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC??'}, type: 1},{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Salah Satu',
    buttons: buttonnnss,
    headerType: 1
}
await ALDI.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftroli})
break
case 'self':

			if (!isOwner && !mek.key.fromMe) return reply('*lu siapa?,*')

            if(!public)return reply('*_Fitur sudah diaktifkan sebelumnya_*')			

			public = false

			return replyWithFakeig(`

*「 MODE SELF 」*



${gaya}sukses ke Mode self

sekarang hanya nomor bot

dan owner yang bisa menggunakan

fitur.${gaya}`, text)

			break

			case 'public':

			if (!isOwner && !mek.key.fromMe) return reply('*lu siapa?,*')

			if(public)return reply('*_Fitur sudah diaktifkan sebelumnya_*')

			public = true

			return replyWithFakeig(`

*「 MODE PUBLIC 」*



${gaya}sukses ke Mode Public 

semua user dan admin

bisa menggunakan bot.${gaya}`, text)

			break
 	        case 'hidetag':
			if (!isGroup) return reply(mess.group)
			var value = args.join(' ')
			var group = await ALDI.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			ALDI.sendMessage(from, optionshidetag, text)
			break
	    case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
            try {
            yta(mulaikah)
            .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
            .then(async (a) => {
            if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
            const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
            sendMediaURL(from, thumb, captions)
            await sendMediaURL(from, dl_link).catch(() => reply('error'))
            })            
            })
            } catch (err) {
            reply(mess.api)
            }
            break  
            case 'video':           
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url            
            try {
            ytv(mulaikah)
            .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
            .then(async (a) => {
            if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
            const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
            sendMediaURL(from, thumb, captions)
            await sendMediaURL(from, dl_link).catch(() => reply('error'))
            })            
            })
            } catch (err) {
            reply(mess.api)
            }
            break
	        case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await ALDI.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	        case 'setreply':
	        case 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
            case 'youtubedl':
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.Iv)
            teks = args.join(' ')
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
            })
            result = `*Youtube Downloader*
            
💾 Title : ${res[0].judul}
🎥 Type : mp3/mp4
⏳ Durasi : ${res[0].size}`
            buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
            fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
            imageMsg = ( await ALDI.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
            buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
            contentText:`${result}`,buttons,headerType:4}
            prep = await ALDI.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            ALDI.relayWAMessage(prep)
            fs.unlinkSync(`./ytmp.jpeg`)
            break
	        case 'setfakeimg':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		    delb = await ALDI.downloadMediaMessage(boij)
		    fs.writeFileSync(`./image/fake.jpeg`, delb)
			fakestatus('Sukses')
            } else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	         case 'setthumb':
	         if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			 delb = await ALDI.downloadMediaMessage(boij)
			 fs.writeFileSync(`./image/thumb.jpeg`, delb)
			 fakestatus('Sukses')
        	 } else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	 }
			 break	
		     case "setprefix":
             if (!mek.key.fromMe) return;
             sendButMessage(
             from,
             `PREFIX : ${prefixStatus ? "Multi Prefix" : "No Prefix"}`,
             `Silahkan pilih salah satu`,
             [
             {
             buttonId: `${prefix}noprefix`,
             buttonText: {
             displayText: `NOPREFIX`,
             },
             type: 1,
             },
             {
             buttonId: `${prefix}multiprefix`,
             buttonText: {
             displayText: `MULTIPREFIX`,
             },
             type: 1,
             },
             ]
             );
             break;
             case 'anticall':
             if (!isOwner && !itsMe) return
             if (args.length < 1) return reply('Pilih on atau off')
             if (args[0] === "on") {
             if(antical)return reply('Sudah diaktifkan sebelumnya!')
             antical = true
             reply(`Succes mengaktifkan anticall`)
             } else if (args[0] === "off") {
             if(!antical)return reply('Sudah di NonAktifkan sebelumnya!')
             antical = false
reply(`Succes mematikan anticall`)
             } else {

             reply(`Pilih on atau off`)

             }

             break


             case 'antidelete':

             if (!isOwner && !itsMe) return
             if (args.length < 1) return reply('Pilih on atau off')
             if (args[0] === "on") {
             if(antidel)return reply('Sudah diaktifkan sebelumnya!')
             antidel = true
             reply(`Succes mengaktifkan antidelete`)

             } else if (args[0] === "off") {
             if(!antidel)return reply('Sudah di NonAktifkan sebelumnya!')
             antidel = false
reply(`Succes mematikan antidelete`)
             } else {
             reply(`Pilih on atau off`)
             }
             break
             
	         case 'ytmp4':     
			 if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			 let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			 if (!isLinks2) return reply(mess.Iv)
			 try {
			 reply(mess.wait)
			 ytv(args[0])
		     .then((res) => {
			 const { dl_link, thumb, title, filesizeF, filesize } = res
			 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
			 .then((a) => {
			 if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
			 const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
			 sendMediaURL(from, thumb, captionsYtmp4)
			 sendMediaURL(from, dl_link).catch(() => reply(mess.api))
			 })		
			 })
			 } catch (err) {
			 reply(mess.api)
			 }
			 break
	         case 'emoji':
		  	 if (!q) return fakegroup('emojinya?')
			 qes = args.join(' ')
			 emoji.get(`${qes}`).then(emoji => {
			 teks = `${emoji.images[4].url}`
    		 sendStickerFromUrl(from,`${teks}`)	
    		 console.log(teks)
   			 })
    		 break
	         case 'ytmp3':
			 if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			 let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			 if (!isLinks) return reply(mess.Iv)
		     try {
			 reply(mess.wait)
			 yta(args[0])
			 .then((res) => {
			 const { dl_link, thumb, title, filesizeF, filesize } = res
			 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
			 .then((a) => {
		     if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
			 const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
			 sendMediaURL(from, thumb, captions)
			 sendMediaURL(from, dl_link).catch(() => reply(mess.api))
			 })
			 })
			 } catch (err) {
			 reply(mess.api)
			 }
			 break
             case 'image':
             if (args.length < 1) return reply('Masukan teks!')
             const gimg = args.join('');
             reply(mess.wait)
             gis(gimg, async (error, result) => {
             n = result
             images = n[Math.floor(Math.random() * n.length)].url
             ALDI.sendMessage(from,{url:images},image,{quoted:mek})
             });
             break
 	         case 'tiktok':
 		     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		     if (!q) return fakegroup('Linknya?')
 		     reply(mess.wait)
		     hx.ttdownloader(`${args[0]}`)
    		 .then(result => {
    		 const { wm, nowm, audio } = result
    		 axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		 .then(async (a) => {
    		 me = `*Link* : ${a.data}`
		     ALDI.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		     })
		     })
     		 .catch(e => console.log(e))
     	 	 break
             case 'tiktokaudio':
            
 		     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		     if (!q) return fakegroup('Linknya?')
 		     reply(mess.wait)
 		     hx.ttdownloader(`${args[0]}`)
    		 .then(result => {
    		 const { audio} = result
            sendMediaURL(from,audio,'')
    		 })
     		 .catch(e => console.log(e))
     		 break
            case 'brainly':
			 if (args.length < 1) return reply('Pertanyaan apa')
            brien = args.join(' ')
			 brainly(`${brien}`).then(res => {
			 teks = '❉───────────────────────❉\n'
			 for (let Y of res.data) {
			 teks += `\n*「 _${namabot} MENJAWAB_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			 }
			 ALDI.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})            
            })            
			 break
            case 'ig':
            if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            reply(mess.wait)
	         hx.igdl(args[0])
	         .then(async(result) => {
            for(let i of result.medias){
            if(i.url.includes('mp4')){
            let link = await getBuffer(i.url)
            ALDI.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
            } else {
            let link = await getBuffer(i.url)
            ALDI.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})            
            }
            }
            });
	         break
            case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
            case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	         case 'term':
	         if (!isOwmer) return reply('hanya owner')
			 if (!q) return fakegroup(mess.wrongFormat)
			 exec(q, (err, stdout) => {
			 if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			 if (stdout) {
			 fakegroup(stdout)
			 }
			 })
		     break 
            case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await ALDI.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
            case 'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
            case 'ping':
            case 'speed':
            case 'runtime':
            var groups = ALDI.chats.array.filter(v => v.jid.endsWith('g.us'))
            var privat = ALDI.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
            var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
            uptime = process.uptime();
            timestamp = speed();
            totalChat = await ALDI.chats.all()
           latensi = speed() - timestamp        

teks = `
${G}STATUS BOT:${G}

👥• ${G}Group Chats :${G} ${gaya}${groups.length}${gaya}
👤• ${G}Private Chats :${G} ${gaya}${privat.length}${gaya}
🎰 • ${G}Total Chats :${G} ${gaya}${totalChat.length}${gaya}
💬 • ${G}Speed :${G} ${gaya}${latensi.toFixed(4)} Second${gaya}
⏰ • ${G}Runtime :${G} ${gaya}${kyun(uptime)}${gaya}

${G}Phone Stats:${G}
🔋 *Battery* : ${gaya}undefined${gaya}
🔌 *Charge* : ${gaya}undefined${gaya}
💾 *RAM* : ${gaya}${ram2}${gaya}
📱 • ${G}Platform :${G} ${gaya}${os.platform()}${gaya}
🖥️ • ${G}Hostname :${G} ${gaya}${os.hostname()}${gaya}
🕤 • ${G}Uptime :${G} ${gaya}${kyun(os.uptime())}${gaya}
🪀 • ${G}Wa Version :${G} ${gaya}${ALDI.user.phone.wa_version}${gaya}
🥏 • ${G}Os Version :${G} ${gaya}${ALDI.user.phone.os_version}${gaya}
☕ • ${G}Device Model :${G} ${gaya}${ALDI.user.phone.device_model}${gaya}
`
replyWithFakeLink(`${teks}`)
break
            case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'audio/mp4',
            ptt : true,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
            }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
            } else{
            reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
            }
            break
            case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await ALDI.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
            case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await ALDI.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
//====================[ MAKER MENU ]===========================\\
            case 'imgtourl':
            reply(mess.wait)
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var jnckk = await  ALDI.downloadAndSaveMediaMessage(encmedia)
            imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
            .then(data => {
            var caps = `
╭─「 IMGBB TO URL 」
│
├• ID : ${data.id}
├• MimeType : ${data.image.mime}
├• Extension : ${data.image.extension}
│
├• URL : ${data.display_url}
╰─────────────────────`
            ibb = fs.readFileSync(jnckk)
            ALDI.sendMessage(from, ibb, image, { quoted: ftroli, caption: caps })
            })
            .catch(err => {
            throw err 
            })
            break
            case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await ALDI.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
            par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
            jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
            }
            jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
            jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
            ALDI.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
            } catch {
            reply('Link error')
            }
            break
			break
			case 'nhentaipdf':		    
			if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)			
			henid = args[0]			
			get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${LolKey}`)			
			get_result = get_result.result			
			ini_buffer = await getBuffer(get_result)			
			ALDI.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })			
			break            
			case 'nhentaisearch':
		    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
		    query = args.join(" ")
		    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${LolKey}&query=${query}`)
		    get_result = get_result.result
		    ini_txt = "Result : \n"
		    for (var x of get_result) {
		    ini_txt += `Id : ${x.id}\n`
		    ini_txt += `Title English : ${x.title_english}\n`
		    ini_txt += `Title Japanese : ${x.title_japanese}\n`
		    ini_txt += `Native : ${x.title_native}\n`
		    ini_txt += `Upload : ${x.date_upload}\n`
		    ini_txt += `Page : ${x.page}\n`			
		    ini_txt += `Favourite : ${x.favourite}\n\n`			
		    }			
		    reply(ini_txt)			
		    break
			// Random Image //
			case 'art':
			case 'bts':			
			case 'exo':			
			case 'elf':			
			case 'waifu':
			case 'loli':
			case 'neko':					
			case 'shota':					
			case 'sagiri':			
			case 'shinobu':			
			case 'megumin':			
			case 'wallnime':		
			buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LolKey}`)
			//ALDI.sendMessage(from, buffer, image, { quoted: mek})
			ALDI.sendMessage(from, buffer, image, { thumbnail: cewe, caption: `*nih kak*`, quoted: ftroli})
			break
			case 'chiisaihentai':
			case 'trap':
			case 'blowjob':
			case 'yaoi':
			case 'ecchi':
			case 'hentai':
			case 'ahegao':
			case 'hololewd':
			case 'sideoppai':
			case 'animefeets':
			case 'animebooty':
			case 'animethighss':
			case 'hentaiparadise':
			case 'animearmpits':
			case 'hentaifemdom':
			case 'lewdanimegirls':
			case 'biganimetiddies':
			case 'animebellybutton':
			case 'hentai4everyone':
			ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LolKey}`)
			ALDI.sendMessage(from, ini_buffer, image, { thumbnail: cewe, caption: `*nih kak*`, quoted: ftroli})
			break
			case 'tahta': case 'hartatahta':
			if (args.length == 0) return reply(`contoh: ${prefix + command} NAY`)
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://zuxyapi.herokuapp.com/api/maker/harta-tahta?apikey=${ZuxyKey}&text=${teks}`)
            ALDI.sendMessage(from, ini_buf, image, { thumbnail: Buffer.alloc(0), caption: `*nih kak jangan lupa follow ig @zuxyganz_*`, quoted: ftroli})
            break            
            case 'nulis': case 'nulisbuku':            
            if (args.length == 0) return reply(`contoh: ${prefix + command} NAY`)
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://zuxyapi.herokuapp.com/api/maker/nulis?apikey=${ZuxyKey}&text=${teks}`)            
            ALDI.sendMessage(from, ini_buf, image, { thumbnail: Buffer.alloc(0), caption: `*nih kak jangan lupa follow ig @zuxyganz_*`, quoted: ftroli})
            break
            case "tulis":
            if (args.length < 1) return reply(`Usage: ${prefix + command} nama&kelas&nomo&kata\n*Example*: ${prefix + command} udin&20&17&blablabla`);
            var bodi = args.join(" ");
            var nama = bodi.split("&")[0];
            var kelas = bodi.split("&")[1];
            var no = bodi.split("&")[2];
            var aksarane = bodi.split("&")[3];
            reply("wait.....");
            rakz = await getBuffer(`https://fdz-app.herokuapp.com/api/tulis?nama=${nama}&no=${no}&kelas=${kelas}&text=${aksarane}`);
            ALDI.sendMessage(from, rakz, image, {
            quoted: mek, thumbnail: Buffer.alloc(0),});
            break;
            case "wanted":
            if (
            ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
            args.length == 0
            ) {
            ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
            .extendedTextMessage.contextInfo
            : mek;
            reply("Loading.....");
            owgi = await ALDI.downloadAndSaveMediaMessage(ted);
            //	  console.log(owgi)
            anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
            console.log(anu);
            hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/wanted?picurl=${anu.display_url}`
            );
            ALDI.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
            });
            }
            break;
            case "deltrash":
            if (
            ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
            args.length == 0
            ) {
            ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
            .extendedTextMessage.contextInfo
            : mek;
            reply("Loading.....");
            owgi = await ALDI.downloadAndSaveMediaMessage(ted);
            //	  console.log(owgi)
            anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
            console.log(anu);
            hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/deltrash?imgurl=${anu.display_url}`
            );
            ALDI.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
            });
            }
            break;
            case "wasted":
            if (
            ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
            args.length == 0
            ) {
            ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
            .extendedTextMessage.contextInfo
            : mek;
            //  console.log(ted)
            reply("Loading.....");
            owgi = await ALDI.downloadAndSaveMediaMessage(ted);
            console.log(owgi);
            anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
            console.log(anu);
            hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/wasted?imgurl=${anu.display_url}`
            );
            ALDI.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
            });
            }
            break;
            case 'cecan':
            case 'uhktyy':
            try {
            reply(mess.wait)
    
            let wipuu = (await axios.get(`https://raw.githubusercontent.com/MyZuyx/poto/main/${command}.json`)).data
    
            let wipii = wipuu[Math.floor(Math.random() * (wipuu.length))]
    
            fs.writeFileSync(`./strg/cecan/${sender}.jpeg`, 
            await getBuffer(wipii))
    
            const ima = await ALDI.prepareMessage(from, fs.readFileSync(`./strg/cecan/${sender}.jpeg`),  MessageType.image, {thumbnail: cewe})
    
            const butto = [{buttonId:`${prefix+command}`,buttonText: {displayText: '⏩ NEXT ⏪'}, type: 1}]
    
            const ButtonsMessagess = {
    
            contentText: `Nih ${command} kak`,
    
            buttons: butto,
    
            footerText: `Klik Next Untuk Melanjutkan Ke Gambar Berikutnya`,
    
            headerType: 4,
    
            imageMessage: ima.message.imageMessage
    
            }
    
            await ALDI.sendMessage(from, ButtonsMessagess, MessageType.buttonsMessage, {quoted : mek})
    
            fs.unlinkSync(`./strg/cecan/${sender}.jpeg`)
    
            } catch {
            reply('eror kak')
            }
            break
			case 'setprefix':
            saaap =`silah lan pilih kak`            
            const buttonpref = [{buttonId: `${prefix}noprefix`, buttonText: {displayText: 'no prefix'}, type: 1},{buttonId: `${prefix}multiprefix`, buttonText: {displayText: 'Multi Prefix'}, type: 1},{buttonId: `${prefix}via ovo`, buttonText: {displayText: 'via ovo'}, type: 1}]
            const buttonMessageppppp = {
			headerType: "IMAGE",
			contentText: `${saaap}`,
			footerText: 'ketik di bawah untuk melanjutkan',
			buttons: buttonpref,
			headerType: 1
			}
            ALDI.sendMessage(from, buttonMessageppppp, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6285697725326@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `*𝐒𝐄𝐋𝐅 𝘿𝙞𝙫𝙖𝘾𝙮𝙖𝙣*\n${gaya}Made By: Yume${gaya}`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
  		    break

            
//https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json      
//https://raw.githubusercontent.com/MyZuyx/poto/main/${command}.json      
default:
	    if (isGroup && !mek.key.fromMe && isAntiLink) {
        if (budy.includes("chat.whatsapp.com")) {
        if (!isGroup) return
	    if (!isAntiLink) return
		if (isGroupAdmins) return reply('*_Kerana Kamu Admin bot Tidak Akan Di Kick*')
		ALDI.updatePresence(from, Presence.composing)
		if (messagesCC.includes("#izinmin")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Group Terdeteksi 」*${sender.split("@")[0]} Bot Akan Kick Kamu Bye Bye`)
		setTimeout( () => {
		ALDI.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		console.log(color('LINKGROUP TERDETEKSI'))
		}
		}
	    if (isGroup && !mek.key.fromMe && isAntiLink) {		
	    if (budy.includes('jasa','sewa','akun','harga','jual','open')) {
        if (!isGroup) return
	    if (!isjasa) return
		if (isGroupAdmins) return reply('*_Kerana Kamu Admin bot Tidak Akan Di Kick*')
		ALDI.updatePresence(from, Presence.composing)
		if (messagesCC.includes("#izinmin")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 jualan:v 」${sender.split("@")[0]} Bot Akan Kick Kamu Bye Bye*`)
		setTimeout( () => {
		ALDI.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		console.log(color('jualan terdeteksi'))
		}
		}		
// function ANTI viewOnce


if (isGroup && isAntiVO && m.mtype == 'viewOnceMessage'){
var msg = {...mek}

let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage
        
typenya["viewOnce"] = false
            
typenya["caption"] = `\`\`\`Anti-ViewOnce\n\n\nCaption : ${(typenya.caption === '') ? 'NONE' : typenya.caption}\`\`\``
            
let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }
            
let pe = await ALDI.prepareMessageFromContent(from, msg.message.viewOnceMessage.message, {quoted: peq})
            
await ALDI.relayWAMessage(pe)
}

if (chats.startsWith('>')){
			
if(!mek.key.fromMe && !isOwner) return
				
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Eval V2 brooo`))
				
try{
reply(require('util').format(await eval(`;(async () => { ${chats.slice(2)} })()`)))
}catch(err){
	e = String(err)
reply(e)
	
}

}

if (budy.startsWith('x')){

try {
if (!mek.key.fromMe && !isOwner) return reply('```khusus owner bro```')

return ALDI.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})

} 
catch(err) {
e = String(err)

reply(e)

}

}  

        
if (budy.startsWith("$ ")){
if (!mek.key.fromMe && !isOwner) return reply('```khusus owner bro```')
           	console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Dari owner ni`))
           	exec(chats.slice(2), (err, stdout) => {
           	if (err) return reply(`${err}`)
           	if (stdout) reply(`${stdout}`)
           	})
            }
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return reply('khusus owner bro')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}  

	}
//============[ BATAS RESPON VN ]=================\\	
		              
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
