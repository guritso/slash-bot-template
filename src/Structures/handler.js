const { REST, Routes } = require("discord.js");

module.exports = {
  async execute(client) {
    const { TOKEN, GUILD_ID, BOT_ID } = client.config;
    const rest = new REST({ version: "10" }).setToken(TOKEN);

    const command = client.commands.get("add");

    await rest.post(Routes.applicationGuildCommands(BOT_ID, GUILD_ID), {
      body: command.data,
    });
  },
};
