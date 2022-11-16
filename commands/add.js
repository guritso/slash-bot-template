const json = require('../slash/commands.json')
const { REST, Routes } = require ('discord.js')
const { token }= require('../config.js')
module.exports.run = async(client, inter, guild) => {
  
  
  const rest = new REST({ version: '10'}).setToken(token)
  // get the type of command guild/global
  const type = inter.options.getString("type")
  // get the input (name of the command)
  const command = inter.options.getString("name").toUpperCase()
  // get the command form the json file
  if(!json[command]){
    return await inter.reply({
      content: "Command not found ×",
      ephemeral: true
    })
  }
  
  if(type == 'guild_command'){
    // register the command on a guild
    await rest.post(
     Routes.applicationGuildCommands(client.user.id, guild.id),
    { body: json[command] })
  }
  if(type == 'global_command'){
    // register the command globally 
    await rest.post(
      Routes.applicationCommands(client.user.id),
      {body: json[command]})
  }
  await inter.reply({
    content: `Command ${command} added ✓`,
    ephemeral: true
  })
}
