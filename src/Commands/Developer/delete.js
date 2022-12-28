const { REST, Routes } = require("discord.js");

module.exports = {
  data: {
    name: "delete",
    description: "delete a command",
    default_member_permissions: "0",
    dm_permissions: "0",
    options: [
      {
        name: "name",
        description: "put the name of the command to delete",
        type: 3,
        required: true,
      },
      {
        name: "type",
        description: "choose the type of the command to delete",
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
    const { TOKEN } = client.config;
    const guild = interaction.guild;
    const rest = new REST({ version: "10" });
    rest.setToken(TOKEN);
    // get the type of the command guild/global
    const type = interaction.options.getString("type").toUpperCase();
    // get the input (command name)
    const name = interaction.options.getString("name").toUpperCase();
    // get all guild/global commands
    const commands = {
      GUILD: await guild.commands.fetch(),
      GLOBAL: await client.application.commands.fetch(),
    };
    // parse to json
    const arr = commands[type].toJSON();
    // call the function
    const id = getCommandId(arr, name);
    // return if invalid name
    if (!id) {
      return interaction.reply({
        embeds: [
          {
            title: `${name} ⊗ NOT FOUND in ${type}`,
            color: 0xd8303b, // = #D8303B
          },
        ],
        ephemeral: true,
      });
    }
    // call delete command
    if (deleteCommand(type)) {
      return interaction.reply({
        embeds: [
          {
            title: `${name} ⊗ DELETED in ${type}`,
            color: 0x00ffaa, // = #00FFAA
          },
        ],
        ephemeral: true,
      });
    }
    // delete command function
    function deleteCommand(type) {
      if (type === "GLOBAL") {
        return rest.delete(Routes.applicationCommand(client.user.id, id));
      } else {
        return rest.delete(
          Routes.applicationGuildCommand(client.user.id, guild.id, id)
        );
      }
    }
    /*/ simple function to get the id of a command, using the name and the array (parsed to JSON) /*/
    function getCommandId(arr, name) {
      let _name = name.toLowerCase();
      for (let i in arr) {
        if (arr[i].name === _name) {
          return arr[i].id;
        }
      }
      return null;
    }
  },
};
