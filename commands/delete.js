module.exports.run = async (client, inter, args, guild, send, msg) => {
  if (!args) return;

  const value = args[0].value;
  const type = args[0].name;

  if (type == 'guild') {
    let gui = await client.api.applications(client.user.id).guilds(guild.id).commands.get()
    let id = getCommandId(gui, value)
    if (!id) return;
    client.api.applications(client.user.id).guilds(guild.id).commands(id).delete()
  }
  if (type == 'global') {
    let glo = await client.api.applications(client.user.id).commands.get()
    let id = getCommandId(glo, value)
    if (!id) return;
    client.api.applications(client.user.id).commands(id).delete()
  }

  function getCommandId(arr, name) {
    for (i in arr) {
      if (arr[i].name === name) {
        send(`🟩 | command ${value} removed`, true)
        return arr[i].id;
      }
    }
    send("🟥 | command not found", true)
  }
}