const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, inter, guild) => {
  
  const member = guild.members.cache.get(inter.options.getUser('user') ? inter.options.get('user').value : inter.user.id)
  
  const image = member.user.avatarURL({dinamic:true,format:'png',size:4096})
  
  let embed = new MessageEmbed()
  .setTitle(member.user.tag)
  .setDescription('')
  .setImage(image)
  .setFooter({
    text: `Requested by ${inter.user.tag}`,
    iconURL: inter.user.avatarURL({format:'png'})
  })
  .setColor('#00FFAA')
 
  inter.reply({ embeds:[ embed ]})
}