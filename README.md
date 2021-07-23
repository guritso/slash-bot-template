# Slash bot
A bot with a easy way to add slass commands!

![GitHub package.json version](https://img.shields.io/github/package-json/v/GuriZenit/slash)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/GuriZenit/Slash)
![GitHub](https://img.shields.io/github/license/GuriZenit/slash?color=blue)
> Add slash commands from json file!

## Example
Let's suppose we have this PING command in `options/commands.json` file:
```json
{
  "PING": {
    "name": "ping",
    "description": "ping! pong!"
  }
}
```
Having this we just need to use the guild `add` command, and you can choose if it will be a guild or global command:

![](https://i.imgur.com/JIpedAR.jpg)

To remove the PING command we just need to use `delete` like `add` command:

![](https://i.imgur.com/V3Foc5m.jpg)
> This doesn't change anything in json file!

## Usage
> First you need a `.env` file with: `TOKEN='your bot token'`

`building...`

## License
[MIT](https://github.com/GuriZenit/Slash/blob/main/LICENSE)