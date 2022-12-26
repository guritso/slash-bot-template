const { Routes, REST } = require("discord.js");
const config = require("../../Configs/config.js");
const { readFileSync } = require("node:fs");
const rest = new REST({ version: "10" }).setToken(config.token);

module.exports = {
  data: {
    name: "add",
    description: "add a command",
    default_member_permissions: "0",
    dm_permissions: "0",
    options: [
      {
        name: "name",
        description: "put the name of the command to add",
        type: 3,
        required: true,
      },
      {
        name: "type",
        description: "choose the type of the command to add",
        type: 3,
        required: true,
        choices: [
          {
            name: "guild",
            value: "guild",
          },
          {
            name: "global",
            value: "global",
          },
        ],
      },
    ],
  },
  async execute(interaction, client) {
    const guild = interaction.guild;
    // read the commands.json
    const PATH = "slash/commands.json";
    const jsonFile = JSON.parse(readFileSync(PATH));
    // get the input (command name)
    const name = interaction.options.getString("name").toUpperCase();
    // get the type of the command guild/global
    const type = interaction.options.getString("type").toUpperCase();
    // check the command in the json file
    if (!jsonFile[name]) {
      return interaction.reply({
        embeds: [
          {
            title: `${name} ⊗ NOT FOUND in JSON`,
            color: 0xd8303b, // = #D8303B
          },
        ],
        ephemeral: true,
      });
    }
    // register the command globally, else in a guild
    if (type == "GLOBAL") {
      await rest.post(Routes.applicationCommands(client.user.id), {
        body: jsonFile[name],
      });
    } else {
      await rest.post(
        Routes.applicationGuildCommands(client.user.id, guild.id),
        {
          body: jsonFile[name],
        }
      );
    }
    interaction.reply({
      embeds: [
        {
          title: `${name} ⊕ ADDED to ${type}`,
          color: 0x00ffaa, // = #00FFAA
        },
      ],
      ephemeral: true,
    });
  },
};
