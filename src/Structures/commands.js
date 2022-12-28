const { readdirSync } = require("node:fs");

module.exports = {
  async execute(client) {
    const commands = client.commands;
    const PATH = process.cwd() + "/src/Commands";

    const folders = readdirSync(PATH);
    for (let dir of folders) {
      const folder = readdirSync(`${PATH}/${dir}`);

      for (let file of folder) {
        const cmd = await require(`${PATH}/${dir}/${file}`);
        commands.set(cmd.data.name, cmd);
      }
    }
  },
};
