const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "ping",
    description: "answer pong",
    dm_permissions: "0",
  },
  async execute(interaction, client) {
    const lat = Date.now() - interaction.createdTimestamp;
    const api = Math.round(client.ws.ping);

    const embed = new EmbedBuilder()
      .setTitle("PONG!")
      .addFields([
        { name: "Latency", value: `${lat}ms` },
        { name: "Api", value: `${api}ms` },
      ])
      .setColor("#00FFAA");

    await interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};
