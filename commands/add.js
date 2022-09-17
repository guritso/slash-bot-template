const json = require('../options/commands.json')
module.exports.run = async(client, inter, guild) => {
  
  const type = inter.options._hoistedOptions[0].name;
  
  const value = inter.options.getString(type).toUpperCase()
  
  if(!json[value]){
    return inter.reply({
      content: "✖️ | command not found",
      ephemeral: true
    })
  }
  
  if(type == 'guild'){
    client.api.applications(client.user.id)
    .guilds(guild.id)
    .commands.post({data: json[value]})
  }
  if(type == 'global'){
    client.api.applications(client.user.id)
    .commands.post({data: json[value]})
  }
  inter.reply({
    content: `➕ | command ${value} added`,
    ephemeral: true
  })
}