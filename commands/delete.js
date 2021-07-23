module.exports.run = async(client, inter, args, guild, send, msg) => {
  if(!args) return;
  
  const value = args[0].value;
  const type = args[0].name;
  
   if(type == 'guild'){
    
  }
  if(type == 'global'){
    
  }
  
  function getCommandId(arr, name){
    for(i in arr){
      if(arr[i].name === name){
        send(`🟩 | command ${value} removed`, true)
        return arr[i].id;
      }
    }
    send("🟥 | command not found", true)
  }
}