# SCDB
A bot with a easy way to add slash commands!

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/GuriZenit/Slash-Commands-Discord-Bot/discord.js/main?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/GuriZenit/Slash?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/GuriZenit/Slash-Commands-Discord-Bot?color=blue&style=for-the-badge)
> Add slash commands from a json file!

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

First you need to add your `BOT_ID` and your `GUILD_ID` on the file `/start.js`, then run `node start.js` or you can use it on a ready event in the `/index.js`:
```javascript
require('./start.js')
```
> you just need to use once

Now you have the first command `add`,
lets start using the bot, You can use the command:
```
/add guild: DELETE
```
it will add the `/delete` command like we saw on Example.

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
