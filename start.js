// this is to start the bot first time
// you only need to use this file once
// add your bot and guild id here
// then use `node start.js` on a terminal
/*/ or add `require(./start.js)` on a ready envet in the index.js in case you're not in a terminal /*/
const { REST, Routes } = require('discord.js')
const { token } = require('./config.js')
const json = require('./options/commands.json')
const guildID = 'GUILD_ID_HERE'
const clientID = 'BOT_ID_HERE'
async () => {
  const rest = await new REST({ version: '10' }).setToken(token)
  
  await rest.post(Route.applicationGuildCommand(guildID,clientID)),
  { body: json['ADD'] }
};
