const json = require("../slash/commands.json");
const { Routes, REST } = require("discord.js");
const config = require("../config.js");
const rest = new REST({ version: "10" }).setToken(config.token);

module.exports.run = async (inter, client, guild) => {
  // get the input (command name)
  const name = inter.options.getString("name").toUpperCase();
  // get the type of the command guild/global
  const type = inter.options.getString("type").toUpperCase();
  // check the command in the json file
  if (!json[name]) {
    return inter.reply({
      embeds: [
        {
          title: `${name} ⊗ NOT FOUND in JSON`,
          color: [216, 48, 59], // = #D8303B
        },
      ],
      ephemeral: true,
    });
  }
  // register the command globally, else in a guild
  if (type == "GLOBAL") {
    await rest.post(Routes.applicationCommands(client.user.id), {
      body: json[name],
    });
  } else {
    await rest.post(Routes.applicationGuildCommands(client.user.id, guild.id), {
      body: json[name],
    });
  }
  inter.reply({
    embeds: [
      {
        title: `${name} ⊕ ADDED to ${type}`,
        color: [0, 255, 170], // = #00FFAA
      },
    ],
    ephemeral: true,
  });
};
