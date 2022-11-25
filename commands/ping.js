module.exports.run = async (inter, client) => {
  inter.reply({
    content: `${client.user.tag}: pong`,
    ephemeral: true,
  });
};
