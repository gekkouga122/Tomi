const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('devs')
        .setDescription('a message to the devs'),
    name: 'devs',
    async execute(client, message, raw) {
        if (message.author.id === "236169260026560522" || message.author.id === "421801203970736128" ){
            message.channel.send("You're very cool, and I appreciate you creating me :heart:");
            console.log('real')
        } else {
            console.log("fake")
        }
    }
}