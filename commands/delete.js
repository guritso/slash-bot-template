const { REST, Routes } = require('discord.js')
const { token } = require('../config.js')
module.exports.run = async(client, inter, guild) => {
  
  const rest = new REST({ version: '10'}).setToken(token)
  // get the type of the command guild/global
  const type = inter.options._hoistedOptions[0].name;
  // get the input (command name)
  const name = inter.options.getString(type).toLowerCase()
  
  if(type == 'guild'){
    // get all guild commands
    const command = await guild.commands.fetch()
    // parse to JSON
    const arr = command.toJSON()
    
    const id = getCommandId(arr, name)
    
    if(!id) return;
    // delete the command
    rest.delete(Routes.applicationGuildCommand(client.user.id, guild.id, id))
  }
  if(type == 'global'){
    // get all global commands
    const command = await client.application.commands.fetch()
    // parse to JSON
    const arr = command.toJSON()
    
    const id = getCommandId(arr, name)
    
    if(!id) return;
    // delete the command
    rest.delete(Routes.applicationCommand(client.user.id, id))
  }
  /*/ simple function to get the id of a command, using the name and the array (parsed to JSON) /*/
  function getCommandId(arr, name){
    for(i in arr){
      if(arr[i].name === name){
        inter.reply({
          content:`Command ${name} removed ✓`,
          ephemeral: true
        })
        return arr[i].id;
      }
    }
    inter.reply({
      content: "Command not found ×",
      ephemeral: true
    })
  }
}
