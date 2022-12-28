const { Routes, REST } = require("discord.js");

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
    const { TOKEN } = client.config;
    const guild = interaction.guild;
    const rest = new REST({ version: "10" });
    rest.setToken(TOKEN);
    // get the input (command name)
    const name = interaction.options.getString("name").toUpperCase();
    // get the type of the command guild/global
    const type = interaction.options.getString("type").toUpperCase();
    // get the command
    const command = client.commands.get(name.toLowerCase());
    console.log(command);
    if (!command) {
      return interaction.reply({
        embeds: [
          {
            title: `${name} ⊗ NOT FOUND in the FILE`,
            color: 0xd8303b, // = #D8303B = red
          },
        ],
        ephemeral: true,
      });
    }
    // register the command globally, else in a guild
    if (type === "GLOBAL") {
      await rest.post(Routes.applicationCommands(client.user.id), {
        body: command.data,
      });
    } else {
      await rest.post(
        Routes.applicationGuildCommands(client.user.id, guild.id),
        {
          body: command.data,
        }
      );
    }
    interaction.reply({
      embeds: [
        {
          title: `${name} ⊕ ADDED to ${type}`,
          color: 0x00ffaa, // = #00FFAA = green
        },
      ],
      ephemeral: true,
    });
  },
};
