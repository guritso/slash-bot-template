module.exports = {
  async execute(interaction, client) {
    const commandName = interaction.commandName;
    const command = client.commands.get(commandName);

    if (!command) return;

    try {
      command.execute(interaction, client);
    } catch (err) {
      console.log(err);
    }
  },
};
