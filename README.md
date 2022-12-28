# Slash Bot Template

A bot with a easy way to add slash commands!

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/GuriZenit/Slash-Bot-Template/discord.js/v14?style=for-the-badge)
[![Codacy branch grade](https://img.shields.io/codacy/grade/df82a32897b142fab1efeb68435eb69e/main?color=2a672d&style=for-the-badge)](https://www.codacy.com/gh/GuriZenit/slash-bot-template/dashboard?utm_source=github.com&utm_medium=referral&utm_content=GuriZenit/slash-bot-template&utm_campaign=Badge_Grade)
![GitHub](https://img.shields.io/github/license/GuriZenit/Slash-Bot-Template?color=77d374&style=for-the-badge)

> Add slash commands from a json file!

## Example

Let's suppose we have this PING command in `/slash/commands.json`:

```json
{
  "PING": {
    "name": "ping",
    "description": "ping! pong!"
  }
}
```

Having this we just need to use the guild `/add` command, you can choose if it will be a guild or global command:

![](https://i.imgur.com/RHOjui9.png)

To remove the PING command we just need to use `/delete` like `/add` command:

![](https://i.imgur.com/R5MqXzQ.png)

> This doesn't change anything in json file

## Requirements

-   nodejs `V16.9.x`
-   discord.js `V14.6.x`

## Usage

First of all let's install the dependencies, use:
```bash
npm install
# or
yarn
```
Now you need to add your `BOT_ID` and your `GUILD_ID` on the file `/start.js`, and your token put in a `.env` file or in the `/config.js`.
then run:

```bash
node start.js
```

or you can use it on a ready event in the `/index.js`:

```javascript
require("./start.js");
```

> you just need to use once

You will get the first command `add`,
lets start using the bot, You can use the command:

```bash
/add name:delete type:guild
```

It will add the `/delete` command like we saw on [Example](#example).

### Default commands

-   add
-   delete
-   avatar
-   ping

> these commands are already setup in `/slash/commands.json` and `/commands`, you can `add` them.

Any command you want to add, just edit the `/slash/commands.json` using the following format

```json
"COMMAND1": {
  "name": "command1",
  "description": "description of 1"
},
"COMMAND2": {
  "name": "command2",
  "description": "description of 2",
  "options": [{
    "name": "option1",
    "description": "description of op1"
  }]
}
```

then go to discord and use

```bash
/add name:command1 type:guild
```

or

```bash
/add name:command2 type:global
```

> Don't miss the JavaScript file:`/commands/command1.js`!

## Links

[Slash Commands](https://discord.com/developers/docs/interactions/application-commands)

## License

[MIT](https://github.com/GuriZenit/Slash/blob/main/LICENSE)
