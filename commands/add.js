const json = require('../slash/commands.json')
const { REST, Routes } = require ('discord.js')
const { token }= require('../config.js')
module.exports.run = async(client, inter, guild) => {
  
  
  const rest = new REST({ version: '10'}).setToken(token)
  // get the type of command guild/global
  const type = inter.options.getString("type")
  // get the input (name of the command)
  const name = inter.options.getString("name").toUpperCase()
  // get the command form the json file
  if(!json[name]){
    return inter.reply({
      content: "command not found",
      ephemeral: true
    })
  }
  
  if(type == 'guild_command'){
    // register the command on a guild
    await rest.post(
     Routes.applicationGuildCommands(client.user.id, guild.id),
    { body: json[name] })
  }
  
  if(type == 'global_command'){
    // register the command globally 
    await rest.post(
      Routes.applicationCommands(client.user.id),
      {body: json[name]})
  }
  inter.reply({
    content: `command ${name} added`,
    ephemeral: true
  })
}
