const Discord = require('discord.js')
const config = require('./config.js')
const client = new Discord.Client()
client.login(config.token)
