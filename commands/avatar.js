const { EmbedBuilder } = require("discord.js");

module.exports.run = async (inter) => {
  const user = inter.options.data.length
    ? inter.options.getUser("user")
    : inter.user;

  const image = user.avatarURL({
    dinamic: true,
    format: "png",
    size: 4096,
  });

  const embed = new EmbedBuilder()
    .setTitle(user.tag)
    .setImage(image)
    .setFooter({
      text: `Requested by ${inter.user.tag}`,
      iconURL: inter.user.avatarURL({
        format: "png",
      }),
    })
    .setColor("#00FFAA");

  await inter.reply({ embeds: [embed] });
};
