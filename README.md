# Slash Bot Template
A bot with a easy way to add slass commands!

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/GuriZenit/slash-bot-template/discord.js/V13?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/GuriZenit/slash-bot-template?color=blue&style=for-the-badge)
> Add slash commands from json file!

## Example
Let's suppose we have this PING command in `/options/commands.json`:
```json
{
  "PING": {
    "name": "ping",
    "description": "ping! pong!"
  }
}
```
Having this we just need to use the guild `/add` command, and you can choose if it will be a guild or global command:

![](https://i.imgur.com/JIpedAR.jpg)

To remove the PING command we just need to use `/delete` like `/add` command:

![](https://i.imgur.com/V3Foc5m.jpg)
> This doesn't change anything in json file!

## Usage

To start adding commands for your bot first you need to add the `/add` command, then we use it to add the `/delete` command!

To add the `/add` command put this code inside the READY event in `index.js` with your guild id, remembering that it will only be used once.
```javascript
const json = require('./options/commands.json')

client.api.applications(client.user.id)
    .guilds('YOUR GUILD ID')
    .commands.post({data: json['ADD']})
```
Now you can use the command:
```
/add guild: DELETE
```
to add the `/delete` command like we saw on Example.

Everything command you want to add just edit the `/options/commands.json` using the following style:
```json
"COMMAND1": {
  "name": "command1",
  "description": "description of 1"
}
"COMMAND2": {
  "name": "command2",
  "description": "description of 2",
  "options": [{
    "name": "option1",
    "description": "description of op1"
  }]
}
```
So you go to discord and use
```
/add guild: COMMAND1
```
or
```
/add global: COMMAND2
```

and obviously you need to make the command JavaScript file on `/commands/command1.js`!

> You also can use `/add guild: command` doesn't matter if is on upper or lower case
## License
[MIT](https://github.com/GuriZenit/Slash/blob/main/LICENSE)
