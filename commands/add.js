const json = require('../options/commands.json')
const { REST, Routes } = require ('discord.js')
const { token }= require('../config.js')
module.exports.run = async(client, inter, guild) => {
  
  const rest = new REST({ version: '10'}).setToken(token)
  
  const type = inter.options._hoistedOptions[0].name;
  
  const value = inter.options.getString(type).toUpperCase()
  
  if(!json[value]){
    return await inter.reply({
      content: "✖️ | command not found",
      ephemeral: true
    })
  }
  
  if(type == 'guild'){
    await rest.post(
     Routes.applicationGuildCommands(client.user.id, guild.id),
    { body: json[value] })
  }
  if(type == 'global'){
    await rest.post(
      Routes.applicationCommands(client.user.id),
      {body: json[value]})
  }
  await inter.reply({
    content: `➕ | command ${value} added`,
    ephemeral: true
  })
}
