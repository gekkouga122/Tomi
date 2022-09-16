const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { token } = require('./dev-config.json');
const fs = require('node:fs');

const commands = [];
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '453371651611033600';
const guildId = '364953340527771660';

for (const file of commandFiles) {
	const command = require(`./src/commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();