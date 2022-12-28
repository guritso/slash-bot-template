const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
  presence: {
    activities: [{ name: "use /", type: 0 }],
    status: "dnd",
  },
});
const ownerCmds = ["add", "delete"];
// interaction to response a command
client.on("interactionCreate", async (inter) => {
  if (!inter.isChatInputCommand()) return;
  // get guild / command / options
  const guild = client.guilds.cache.get(inter.guildId);
  const command = inter.commandName.toLowerCase();
  // check if is one of the owners commands
  if (ownerCmds.includes(command)) {
    // only the user/team owners of the bot can use these commands
    const bot = await client.application.fetch();
    const team = bot.owner.members;
    const isOwner = bot.owner.id == inter.user.id;
    const isMember = team ? team.get(inter.user.id) : false;
    // even if these commands are added globally
    if (!isMember && !isOwner) {
      return inter.reply({
        content: "you don't have ` owner ` permission",
        ephemeral: true,
      });
    }
  }
  // run the command file from command name
  try {
    require(`./commands/${command}.js`).run(inter, client, guild);
  } catch (err) {
    console.log(err);
  }
});
client.on("ready", () => {
  console.log(`${client.user.tag} online`);
});
client.login(token);
