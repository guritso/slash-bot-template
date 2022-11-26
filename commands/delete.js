const { REST, Routes } = require("discord.js");
const { token } = require("../config.js");
const rest = new REST({ version: "10" }).setToken(token);

module.exports.run = async (inter, client, guild) => {
  // only the user/team owners of the bot can use 'delete'
  const bot = await client.application.fetch();
  const team = bot.owner.members;
  const isMember = team ? team.get(inter.user.id) : false;
  const isOwner = bot.owner.id == inter.user.id;
  // even if this command is added as global
  if (!isOwner && !isMember) {
    return inter.reply({
      content: "` delete `: you don't have ` owner ` permission",
      ephemeral: true,
    });
  }
  // get the type of the command guild/global
  const type = inter.options.getString("type");
  // get the input (command name)
  const name = inter.options.getString("name").toLowerCase();
  // get all guild/global commands
  const commands = {
    guild: await guild.commands.fetch(),
    global: await client.application.commands.fetch(),
  };
  // parse to json
  const arr = commands[type].toJSON();
  // call the function
  const id = getCommandId(arr, name);
  // return if invalid name
  if (!id) {
    return inter.reply({
      content: `command ${name.toUpperCase()} not found`,
      ephemeral: true,
    });
  }
  // call delete command
  if (deleteCommand(type)) {
    return inter.reply({
      content: `command ${name.toUpperCase()} deleted`,
      ephemeral: true,
    });
  }
  // delete command function
  function deleteCommand(type) {
    if (type === "global") {
      return rest.delete(Routes.applicationCommand(client.user.id, id));
    } else {
      return rest.delete(
        Routes.applicationGuildCommand(client.user.id, guild.id, id)
      );
    }
  }
  /*/ simple function to get the id of a command, using the name and the array (parsed to JSON) /*/
  function getCommandId(arr, name) {
    for (let i in arr) {
      if (arr[i].name === name) {
        return arr[i].id;
      }
    }
    return null;
  }
};
