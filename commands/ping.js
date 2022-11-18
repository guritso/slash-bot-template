module.exports.run = async (client, inter) => {
  inter.reply({ content: `${client.user.tag}: pong` });
};
