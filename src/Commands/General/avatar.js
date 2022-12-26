const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "avatar",
    description: "show your and other avatars",
    dm_permissions: "0",
    options: [
      {
        name: "user",
        description: "choose a user",
        type: 6,
        required: false,
      },
    ],
  },
  async execute(interaction) {
    const user = interaction.options.getUser("user") || interaction.user;

    const image = user.avatarURL({
      dinamic: true,
      format: "png",
      size: 4096,
    });

    const embed = new EmbedBuilder()
      .setTitle(user.tag)
      .setImage(image)
      .setFooter({
        text: `Requested by ${interaction.user.tag}`,
        iconURL: interaction.user.avatarURL({
          format: "png",
        }),
      })
      .setColor("#00FFAA");

    await interaction.reply({ embeds: [embed] });
  },
};
