// https://github.com/Nobuyaki
// Jangan Hapus link githubnya bang :)

const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType, Mimetype } = require("@adiwajshing/baileys")

let handler = async (m, { conn, usedPrefix}) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply Foto/Kirim Foto Dengan Caption ${usedPrefix}wait`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  await m.reply('Searching Anime Titles...')
  let anime = `data:image/jpeg;base64,${img.toString('base64')}`
  let response = await fetch("https://trace.moe/api/search", {
                 method: "POST",
                 body: JSON.stringify({ image: anime }),
                 headers: { "Content-Type": "application/json" }})
  if (!response.ok) throw 'Image not found!'
  let result = await response.json()
  let { is_adult, title, title_chinese, title_romaji, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
  let link = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`
  let nobuyaki = `
${similarity < 0.89 ? 'I Have Low Confidence About This' : ''}

❏ Japanese title : *${title}*
❏ Spelling of the Title : *${title_romaji}*
❏ Similarity : *${(similarity * 100).toFixed(1)}%*
❏ Episode : *${episode.toString()}*
❏ Ecchi : *${is_adult ? 'Yes' : 'No'}*
`.trim()
  conn.sendFile(m.chat, link, 'srcanime.mp4', `${nobuyaki}`, m)
}
handler.help = ['wait (caption|reply image)']
handler.tags = ['tools']
handler.command = /^(wait)$/i

module.exports = handler
