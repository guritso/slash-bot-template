const json = require("../slash/commands.json");
const { Routes, REST } = require("discord.js");
const config = require("../config.js");
const rest = new REST({ version: "10" }).setToken(config.token);

module.exports.run = async (inter, client, guild) => {
  // only the user/team owners of the bot can use 'add'
  const bot = await client.application.fetch();
  const team = bot.owner.members;
  const isOwner = bot.owner.id == inter.user.id;
  const isMember = team ? team.get(inter.user.id) : false;
  // even if this command is added as global
  if (!isMember && !isOwner) {
    return inter.reply({
      content: "` add `: you don't have ` owner ` permission",
      ephemeral: true,
    });
  }
  // get the input (command name)
  const name = inter.options.getString("name").toUpperCase();
  // get the type of the command guild/global
  const type = inter.options.getString("type");
  // get the command from the json file
  if (!json[name]) {
    return inter.reply({
      content: `command ${name} not found`,
      ephemeral: true,
    });
  }

  if (type == "global") {
    // register the command globally
    await rest.post(Routes.applicationCommands(client.user.id), {
      body: json[name],
    });
  } else {
    // register the command on a guild
    await rest.post(Routes.applicationGuildCommands(client.user.id, guild.id), {
      body: json[name],
    });
  }

  inter.reply({
    content: `command ${name} added`,
    ephemeral: true,
  });
};
