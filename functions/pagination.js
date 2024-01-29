const {
    ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	ComponentType
} = require("discord.js");

async function buttonPages(interaction, pages, time = 1200000) {
	if(!interaction) throw new Error("Por favor providencie um parâmetro de interação");
	if(!pages) throw new Error("Por favor providencie um parâmetro de páginas");
	if(!Array.isArray(pages)) throw new Error("Páginas precisam ser um array");

	if(typeof time !== "number") throw new Error("O tempo precisa ser um número");
	if(parseInt(time) < 60000)
		throw new Error("O tempo precisa ser maior que 60 segundos");

	await interaction.deferReply();

	if(pages.lenght === 1){
		const page = await interaction.editReply({
			embeds: pages,
			components: [],
			fetchReply: true,
		});

		return page;
	}

	const start = new ButtonBuilder()
		.setCustomId("start")
		.setEmoji("⏪")
		.setStyle(ButtonStyle.Primary)
		.setDisabled(true);

	const prev = new ButtonBuilder()
		.setCustomId("prev")
		.setEmoji("◀️")
		.setStyle(ButtonStyle.Primary)
		.setDisabled(true);

	const next = new ButtonBuilder()
		.setCustomId("next")
		.setEmoji("▶️")
		.setStyle(ButtonStyle.Primary);

	const end = new ButtonBuilder()
		.setCustomId("end")
		.setEmoji("⏩")
		.setStyle(ButtonStyle.Primary);

	const buttonRow = new ActionRowBuilder().addComponents(start, prev, next, end);
	let index = 0;

	const currentPage = await interaction.editReply({
		embeds: [pages[index]],
		components: [buttonRow],
		fetchReply: true,
	});

	const collector = await currentPage.createMessageComponentCollector({
		componentType: ComponentType.Button,
		time,
	});

	collector.on("collect", async (i) => {
		// if(i.user.id !== interaction.user.id)
		// 	return i.reply({
		// 		content: "Você não pode usar esses botões",
		// 		ephemeral: true,
		// 	});
		
		await i.deferUpdate();

		if(i.customId === "prev"){
			if(index > 0) index--;
		} else if(i.customId === "start"){
			index = 0;
		} else if(i.customId === "next"){
			if(index < pages.length - 1) index++;
		} else if(i.customId === "end"){
			index = pages.length - 1;
		}

		if(index === 0) prev.setDisabled(true);
		else prev.setDisabled(false);

		if(index === 0) start.setDisabled(true);
		else start.setDisabled(false);

		if(index === pages.length - 1) {
			next.setDisabled(true);
			end.setDisabled(true);
		} else {
			next.setDisabled(false);
			end.setDisabled(false)
		}

		await currentPage.edit({
			embeds: [pages[index]],
			components: [buttonRow],
		});

		collector.resetTimer();
	})

	collector.on("end", async (i) => {
		await currentPage.edit({
			embeds: [pages[index]],
			components: [],
		});
	});
	return currentPage;
}

module.exports = buttonPages;