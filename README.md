# Slash Bot Template

A different way to add and delete slash commands!

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/GuriZenit/Slash-Bot-Template/discord.js/main?style=for-the-badge)
[![Codacy branch grade](https://img.shields.io/codacy/grade/df82a32897b142fab1efeb68435eb69e/main?color=2a672d&style=for-the-badge)](https://www.codacy.com/gh/GuriZenit/slash-bot-template/dashboard?utm_source=github.com&utm_medium=referral&utm_content=GuriZenit/slash-bot-template&utm_campaign=Badge_Grade)
![GitHub](https://img.shields.io/github/license/GuriZenit/Slash-Bot-Template?color=77d374&style=for-the-badge)

## Example

Let's use the data of `ping` command in `/src/Commands/ping.js`:

```javascript
module.exports = {
  data: {
    name: "ping",
    description: "ping! pong!"
  }
},
...
```

With this, we just need to use the `/add` guild command:

![](https://i.imgur.com/RHOjui9.png)

To remove the command we just need to use `/delete`:

![](https://i.imgur.com/R5MqXzQ.png)

## Requirements

-   nodejs `V16.9.x`
-   discord.js `V14.6.x`

## Usage

First of all let's install the dependencies, use:

```bash
npm install
```

Now you need to add your `BOT_ID` and your `GUILD_ID` on the file `src/Configs/config.js`, and for your token create a `.env` file, or change `process.env.TOKEN` by your token in `config.js`

then run:

```bash
node index.js
```

You bot will start with the first command `add`.

Lets use the bot, You can run the command:

```bash
/add name:delete type:guild
```

It will add the `/delete` command like we saw on [Example](#example).

### Default commands

-   add
-   delete
-   avatar
-   ping

> these commands are already setup in `/src/Commands`, you can `add` them.

When you want to add a new command don't miss the `data: ...` on `module.exports`, example:

```js
module.exports = {
  data: {
    name: "say",
    description: "say something",
  },
  ...
}
```

Then go to discord and use

```bash
/add name:say type:guild
```

Or if you want to add on all guilds:

```bash
/add name:say type:global
```

## Tips

If you want to add all commands on startup, remove the code from `src/Structures/handler.js` and add this one:

```javascript
const { REST, Routes } = require("discord.js");

module.exports = {
  async execute(client) {
    const { TOKEN, GUILD_ID, BOT_ID } = client.config;
    const rest = new REST({ version: "10" }).setToken(TOKEN);

    const commandArray = new Array();
    const commands = client.commands;

    commands.forEach((cmd) => {
      commandArray.push(cmd.data);
    });
    // to guild
    await rest.put(Routes.applicationGuildCommands(BOT_ID, GUILD_ID), {
      body: commandArray,
    });
  },
};

```

> You still can use `add` and `delete` commands, but if you delete, they will be readded when bot restart.

To add globally during start change this on `// to guild` comment.


```javascript
// to global
await rest.put(Routes.applicationCommands(BOT_ID), {
      body: commandArray,
});
```

> Caution! the `add` and `delete` commands will also be added globally!

## Links

[Slash Commands](https://discord.com/developers/docs/interactions/application-commands)

## License

[MIT](https://github.com/GuriZenit/Slash/blob/main/LICENSE)
