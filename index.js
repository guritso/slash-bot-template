const { Client, Intents } = require('discord.js')
const config = require('./config.json')
const client = new Client({
  intents: [Intents.FLAGS.GUILDS]
})

client.login(config.token)
client.on('ready', () => {    
  console.log(`${client.user.tag} online`)
  client.user.setPresence({
    activities: [ { name: `Use /`, type: 1 }]
  })
})

// interaction to response a command
client.on('interactionCreate', async inter  => {
  if (!inter.isCommand()) return;
  
    // get guild / command / options
  const guild = client.guilds.cache.get(inter.guildId)
  const command = inter.commandName.toLowerCase()

  // run the command file from command name
  try {
    
    let commandFile = require(`./commands/${command}.js`).run(client, inter, guild)
  }catch(err){
    console.log(err)
  }
})