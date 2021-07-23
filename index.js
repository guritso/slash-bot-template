const Discord = require('discord.js')
const config = require('./config.js')
const client = new Discord.Client()

client.login(config.token)

client.on('ready', () => {console.log(`${client.user.tag} online`)})

client.ws.on('INTERACTION_CREATE', async inter => {
})