const {	
	SlashCommandBuilder,
	EmbedBuilder,
} = require("discord.js");
const buttonPages = require("../functions/pagination.js")

// embed
const page1 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Nidro Houggen')
	.setAuthor({ name: 'Rafael Yu' })
	.setDescription('Guerreiro Mestre de Batalha Nível 14')
	.setThumbnail('https://imgur.com/49jQoKO.png')
	.addFields(
		{ name: 'PV máximos', value: '175', inline: true},
		{ name: 'CA', value: '19 | 23', inline: true },
		{ name: 'Iniciativa', value: '+3', inline: true },
		{ name: '-----------------------------------------------', value: ' '},
		{ name: 'Força', value: '20 | +5', inline: true},
		{ name: 'Destreza', value: '16 | +3', inline: true},
		{ name: 'Constituição', value: '20 | +3', inline: true},
		{ name: 'Inteligência', value: '12 | +1', inline: true},
		{ name: 'Sabedoria', value: '14 | +2', inline: true},
		{ name: 'Carisma', value: '13 | +1', inline: true},
		{ name: 'Salvaguardas', value: 'Força +10 | Constituição +10'},
		{ name: 'Perícias', value: 'Atletismo | Intimidação | Percepção | Sobrevivência'},
	)

const page2 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Satreus Solaire')
	.setAuthor({ name: 'João Pedro Spnola' })
	.setDescription('Paladino Juramento da Vingança Nível 14')
	// .setThumbnail('https://imgur.com/49jQoKO.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true }
	)

const pages = [page1, page2];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ficha")
        .setDescription(`Conferir sua ficha`),

    async execute(interaction) {
		buttonPages(interaction, pages);
    }
}