let handler = async (m, { conn, args }) => {
  throw // Fitur belum jadi :)
  if (!args[0]) throw 'Uhm ... wheres the url?'
  global.API('xteam', '/dl/', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = [].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^\x00s$/i

module.exports = handler
