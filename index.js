const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.on("ready", () => {
  console.log(`${client.user.tag} online`);
  client.user.setPresence({
    activities: [{ name: `Use /`, type: 1 }],
  });
});
// interaction to response a command
client.on("interactionCreate", async (inter) => {
  if (!inter.isChatInputCommand()) return;
  // get guild / command / options
  const guild = client.guilds.cache.get(inter.guildId);
  const command = inter.commandName.toLowerCase();
  // run the command file from command name
  try {
    require(`./commands/${command}.js`).run(inter, client, guild);
  } catch (err) {
    console.log(err)
  }
});
client.login(token);
