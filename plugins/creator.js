let handler = function (m) {
  // this.sendContact(m.chat, '919048410619', 'ranjith', m)
  this.sendContact(m.chat, '919048410619', 'mrravanan', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
