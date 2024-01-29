const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("d20")
        .setDescription(`Gira um d20`),

    async execute(interaction) {
        const randomValue = Math.floor((Math.random() * 20) + 1);
        await interaction.reply(randomValue.toString());
    }
}