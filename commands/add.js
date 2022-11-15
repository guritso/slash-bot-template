const json = require('../options/commands.json')
const { REST, Routes } = require ('discord.js')
const { token }= require('../config.js')
module.exports.run = async(client, inter, guild) => {
  
  
  const rest = new REST({ version: '10'}).setToken(token)
  // get the type of command guild/global
  const type = inter.options._hoistedOptions[0].name;
  // get the input (name of the command)
  const value = inter.options.getString(type).toUpperCase()
  // get the command form the json file
  if(!json[value]){
    return await inter.reply({
      content: "Command not found ×",
      ephemeral: true
    })
  }
  
  if(type == 'guild'){
    // register the command on a guild
    await rest.post(
     Routes.applicationGuildCommands(client.user.id, guild.id),
    { body: json[value] })
  }
  if(type == 'global'){
    // register the command globally 
    await rest.post(
      Routes.applicationCommands(client.user.id),
      {body: json[value]})
  }
  await inter.reply({
    content: `Command ${value} added ✓`,
    ephemeral: true
  })
}
