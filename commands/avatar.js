const Discord = require('discord.js')
module.exports.run = async(client, inter, args, guild, send) => {
  
  const member = guild.members.cache.get(args ? args[0].value : inter.member.user.id)
  
  const image = member.user.avatarURL({dinamic:true,format:'png',size:2048})
  
  let embed = new Discord.MessageEmbed()
  .setTitle(member.user.tag)
  .setDescription('')
  .setImage(image)
  .setFooter(`ID:${member.user.id}`)
  .setColor('#00FFAA')
 
  console.log(member.user.avatarURL({format:'png'}))
  send(embed)
}
