let handler = async m => m.reply(`
╭─「 Donasi • Donate」
│ • Gpay : 9048410619
│ • Instagram :. https://instagram.com/__mr_ravanan?igshid=f4z9schljgsl
╰────

╭─「 online」
│ • youtube :. https://youtube.com/channel/UCzmR66qTS65JUNNmFplCMNg
│ • second channel : https://youtube.com/channel/UChVky9HwaivYVdQRMCrM9Ig
╰────
`.trim()) // Add it yourself if you want
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
