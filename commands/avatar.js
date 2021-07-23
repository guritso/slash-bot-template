const Discord = require('discord.js')
module.exports.run = async(client, inter, args, guild, send) => {
  
  const member = guild.members.cache.get(args ? args[0].value : inter.member.user.id)
 
  let embed = new Discord.MessageEmbed()
  .setTitle(member.user.tag)
  .setDescription('')
  .setImage(member.user.avatarURL({size:2048}))
  .setFooter(`ID:${member.user.id}`)
  .setColor('#00FFAA')
  
  send(embed)
}