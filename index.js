const Discord = require('discord.js')
const config = require('./config.js')
const client = new Discord.Client()

client.login(config.token)

client.on('ready', () => {console.log(`${client.user.tag} online`)})

client.ws.on('INTERACTION_CREATE', async inter => {
  
  const guild = client.guilds.cache.find(gu => gu.id == inter.guild_id)
  const command = inter.data.name.toLowerCase()
  const args = inter.data.options;
  
  try {
    let commandFile = require(`./commands/${command}.js`).run(client, inter, args, guild, send)
  }catch(err){
    console.log(err)
  }
  
})