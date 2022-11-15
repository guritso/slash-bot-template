const { REST, Routes } = require('discord.js')
const { token } = require('../config.js')
module.exports.run = async(client, inter, guild) => {
  
  const rest = new REST({ version: '10'}).setToken(token)
  const type = inter.options._hoistedOptions[0].name;
  const value = inter.options.getString(type).toLowerCase()
  
  if(type == 'guild'){
    let gui = await client.api.applications(client.user.id).guilds(guild.id).commands.get()
    let id = getCommandId(gui, value)
    if(!id) return;
    rest.delete(Routes.applicationGuildCommand(client.user.id, guild.id, 'id'))
  }
  if(type == 'global'){
    let glo = await client.api.applications(client.user.id).commands.get()
    let id = getCommandId(glo, value)
    if(!id) return;
    rest.delete(Routes.applicationCommand(client.user.id, 'id'))
  }
  
  function getCommandId(arr, name){
    for(i in arr){
      if(arr[i].name === name){
        inter.reply({
          content:`➖ | command ${value} removed`,
          ephemeral: true
        })
        return arr[i].id;
      }
    }
    inter.reply({
      content: "✖️ | command not found",
      ephemeral: true
    })
  }
}
