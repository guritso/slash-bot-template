const { EmbedBuilder } = require("discord.js");

module.exports.run = async (inter, client) => {
  const lat = Date.now() - inter.createdTimestamp;
  const api = Math.round(client.ws.ping);

  const embed = new EmbedBuilder()
    .setTitle("PONG!")
    .addFields([
      { name: "Latency", value: `${lat}ms` },
      { name: "Api", value: `${api}ms` },
    ])
    .setColor("#00FFAA");

  await inter.reply({
    embeds: [embed],
    ephemeral: true,
  });
};
