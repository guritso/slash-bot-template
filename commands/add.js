const json = require('../options/commands.json')
module.exports.run = async(client, inter, args, guild, send) => {
  if(!args) return;
  
  const value = args[0].value.toUpperCase()
  const name = args[0].name;
  
  if(!json[value]){
    return send("🟥 | command not found", true)
  }
  if(name == 'guild'){
    client.api.applications(client.user.id)
    .guilds(guild.id)
    .commands.post({data: json[value]})
  }
  if(name == 'global'){
    client.api.applications(client.user.id)
    .commands.post({data: json[value]})
  }
  send(`🟩 | command ${value} added`, true)
}