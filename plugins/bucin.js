let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "പറയാൻ ഒരുപാട് ഉണ്ടായിരുന്നു അത് കേൾക്കാൻ ആരും ഇല്ലാതായി പോയി.",
  "സ്വന്തമാകില്ല എന്നറിഞ്ഞിട്ടും പിന്തിരിഞ്ഞു നില്‍ക്കുമ്പോള്‍ 
ഒരു പിന്‍വിളിക്ക് വേണ്ടി കാതോര്‍ക്കുന്നതാണ് പ്രണയം.",
]