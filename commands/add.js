const json = require("../slash/commands.json");
const { REST, Routes } = require("discord.js");
const { token } = require("../config.js");
const rest = new REST({ version: "10" }).setToken(token);
module.exports.run = async (client, inter, guild) => {
  // get the name-type guild/global
  const type = inter.options.getString("type");
  const name = inter.options.getString("name").toUpperCase();
  // get the command form the json file
  if (!json[name]) {
    return inter.reply({
      content: "command not found",
      ephemeral: true,
    });
  }
  //
  if (type == "guild") {
    // register the command on a guild
    await rest.post(Routes.applicationGuildCommands(client.user.id, guild.id), {
      body: json[name],
    });
  }
  //
  if (type == "global") {
    // register the command globally
    await rest.post(Routes.applicationCommands(client.user.id), {
      body: json[name],
    });
  }
  inter.reply({
    content: `command ${name} added`,
    ephemeral: true,
  });
};
