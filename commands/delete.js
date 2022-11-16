const { REST, Routes } = require('discord.js')
const { token } = require('../config.js')
module.exports.run = async (client, inter, guild) => {

  const rest = new REST({ version: '10' }).setToken(token)
  // get the type of the command guild/global
  const type = inter.options.getString("type")
  // get the input (command name)
  const name = inter.options.getString("name").toLowerCase()

  if (type == 'guild_command') {
    // get all guild commands
    const command = await guild.commands.fetch()
    // parse to JSON
    const arr = command.toJSON()
    const id = getCommandId(arr, name)

    if (!id) {
      return inter.reply({
        content: "command not found",
        ephemeral: true
      })
    }
    // delete the command
    rest.delete(Routes.applicationGuildCommand(client.user.id, guild.id, id))
    
    inter.reply({
      content: `command ${name} deleted`,
      ephemeral: true
    })
  }
  }
  if (type == 'global_command') {
    // get all global commands
    const command = await client.application.commands.fetch()
    // parse to JSON
    const arr = command.toJSON()
    const id = getCommandId(arr, name)
    // check id
    if (!id) {
      return inter.reply({
        content: "command not found",
        ephemeral: true
      })
    }
    // delete the command
    rest.delete(Routes.applicationCommand(client.user.id, id))

    inter.reply({
      content: `command ${name} deleted`,
      ephemeral: true
    })
  }
  /*/ simple function to get the id of a command, using the name and the array (parsed to JSON) /*/
  function getCommandId(arr, name) {
    for (i in arr) {
      if (arr[i].name === name) {
        return arr[i].id;
      }
    }
    return null;
  }
}
