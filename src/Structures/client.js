const { Client, GatewayIntentBits, Collection } = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
  presence: {
    activities: [{ name: "use /", type: 0 }],
    status: "dnd",
  },
});

client.commands = new Collection();

module.exports.start = async (config) => {
  client.config = config;

  console.log("loading commands...");
  await require("./commands.js").execute(client);
  console.log("loading handler...");
  await require("./handler.js").execute(client);
  console.log("loading events...");
  await require("./events.js").execute(client);
  await client.login(config.TOKEN);
};
