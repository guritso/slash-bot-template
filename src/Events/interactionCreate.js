module.exports = {
  async execute(interaction) {
    const { client, commandName } = interaction;
    const command = client.commands.get(commandName);

    if (!command) return;

    try {
      command.execute(interaction, client);
    } catch (err) {
      console.log(err);
    }
  },
};
