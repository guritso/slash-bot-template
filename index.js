const config = require("./src/Configs/config.js");
const { TOKEN, GUILD_ID, BOT_ID } = config;

if (GUILD_ID == "null") return isMissing("GUILD_ID");
if (BOT_ID == "null") return isMissing("BOT_ID");
if (!TOKEN) return isMissing("TOKEN");

require("./src/Structures/client.js").start(config);

function isMissing(arg) {
  const LOG = `You need to add ${arg} in config.js`;
  console.log(`Missing ${arg}!`, LOG);
}
