let toM = a => '@' + a.split('@')[0];

function handler(m, { groupMetadata }) {
  let ps = groupMetadata.participants.map(v => v.id);
  let a = ps.getRandom();
  let b = ps.getRandom();
  
  m.reply(`*تهانينا لـ ${toM(a)}! 🩵 أنتما الآن متزوجين!*
*${toM(b)}, أنتما زوجين رائعين وأتمنى لكما شهر عسل جميل! 💙❤️‍🔥*`, null, {
    mentions: [a]
  });
}

handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'اعدام'];
handler.group = true;

export default handler;
