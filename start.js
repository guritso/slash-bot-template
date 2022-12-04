// this is to start the bot first time
// you only need to use this file once
// add your bot and guild id here
// then use `node start.js` on a terminal
/*/ or add `require(./start.js)` on a ready envet in the index.js in case you"re not in a terminal /*/
const { REST, Routes } = require("discord.js");
const { token } = require("./config.js");
const json = require("./slash/commands.json");
const guildID = "GUILD_ID_HERE";
const clientID = "BOT_ID_HERE";
const rest = new REST({ version: "10" }).setToken(token);
const _name = "ADD";
// this will add the first command 'ADD'
(async () => {
  process.stdin.write("adding first command...");
  try {
    await rest.post(Routes.applicationGuildCommands(clientID, guildID), {
      body: json[_name],
    });
  } catch (err) {
    return console.log(err);
  }
  console.log(" done ✓");
  console.log(`command ${_name} added`);
  console.log(`now run 'node index.js'`);
})();
