module.exports.run = async(client, inter, guild) => {
  
  const type = inter.options._hoistedOptions[0].name;
  const value = inter.options.getString(type).toLowerCase()
  
  if(type == 'guild'){
    let gui = await client.api.applications(client.user.id).guilds(guild.id).commands.get()
    let id = getCommandId(gui, value)
    if(!id) return;
    client.api.applications(client.user.id).guilds(guild.id).commands(id).delete()
  }
  if(type == 'global'){
    let glo = await client.api.applications(client.user.id).commands.get()
    let id = getCommandId(glo, value)
    if(!id) return;
    client.api.applications(client.user.id).commands(id).delete()
  }
  
  function getCommandId(arr, name){
    for(i in arr){
      if(arr[i].name === name){
        inter.reply({
          content:`➖ | command ${value} removed`,
          ephemeral: true
        })
        return arr[i].id;
      }
    }
    inter.reply({
      content: "✖️ | command not found",
      ephemeral: true
    })
  }
}