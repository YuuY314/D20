const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const buttonPages = require("../functions/pagination.js");

// embed
const page1 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Satreus Casablanca Solaire')
	.setAuthor({ name: 'Satreus Solaire' })
	.setDescription('Paladino Juramento da Vingança Nível 14')
	.setThumbnail('https://imgur.com/q7gY17P.png')
	.addFields(
		{ name: 'PV Máximos', value: '171', inline: true },
		{ name: 'CA', value: '20', inline: true },
		{ name: 'Iniciativa', value: '-1', inline: true },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Força', value: '20 | +5', inline: true },
		{ name: 'Destreza', value: '8 | -1', inline: true },
		{ name: 'Constituição', value: '16 | +3', inline: true },
		{ name: 'Inteligência', value: '11 | +0', inline: true },
		{ name: 'Sabedoria', value: '12 | +1', inline: true },
		{ name: 'Carisma', value: '14 | +2', inline: true },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Proficiência', value: '+5', inline: true },
		{ name: 'Salvaguardas', value: 'Sabedoria | Carisma', inline: true },
		{ name: 'Percepção Passiva', value: '11', inline: true },
		{ name: 'Perícias', value: 'Atletismo | Intuição | Lidar com Animais | Religião | Sobrevivência' },
	)

const page2 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Características de Paladino')
	.setAuthor({ name: 'Satreus Solaire' })
	.setThumbnail('https://imgur.com/q7gY17P.png')
	.addFields(
		{ name: 'Sentido Divino (x3) [Longo]', value: '```	A presença de um mal poderoso é registrada nos seus sentidos como um odor nocivo e o bem poderoso badala como música celestial nos seus ouvidos. Com uma ação, você pode expandir sua consciência para detectar tais forças. Até o final do seu próximo turno, você sabe a localização de qualquer celestial, corruptor ou morto-vivo a 18 metros de você que não esteja com cobertura total. Você sabe o tipo (celestial, corruptor ou morto-vivo) de qualquer ser cuja presença você sentiu, mas não sua identidade (o vampiro Conde Strahd von Zarovish, por exemplo). Dentro do mesmo raio, você também detecta a presença de qualquer lugar ou objeto que tenha sido consagrado ou conspurcado, como pela magia consagrar. ```' },
		{ name: 'Cura pelas Mãos (70) [Longo]', value: '```	Seu toque abençoado pode curar ferimentos. Você tem uma reserva de poder curativo que se enche quando você realiza um descanso longo. Com essa reserva, você pode restaurar um número total de pontos de vida igual ao seu nível de paladino x 5. \n	Com uma ação, você pode tocar uma criatura e sugar poder da sua reserva para restaurar um número de pontos de vida da criatura, até o máximo de pontos restantes na reserva. \n	Alternativamente, você pode gastar 5 pontos de cura da sua reserva de cura para curar o alvo de uma doença ou neutralizar um veneno que o esteja afetando. Você pode curar múltiplas doenças e neutralizar múltiplos venenos com um único uso de Cura pelas Mãos, gastando pontos de vida separadamente para cada um. \n	Essa característica não gera nenhum efeito em mortos-vivos e constructos.```' },
		{ name: 'Defesa', value: '```	Enquanto estiver usando armadura, você ganha +1 de bônus em sua CA.```' },
		{ name: 'Destruição Divina', value: '```	Quando você atingir uma criatura com um ataque corpo-a-corpo com arma, você pode gastar um espaço de magia de qualquer classe para causar dano radiante no alvo, além do dano normal da arma. O dano extra é de 2d8 para um espaço de magia de 1° nível, mais 1d8 para cada espaço de magia acima do 1°, até o máximo de 5d8. O dano aumenta em 1d8 se o alvo for um corruptor ou um morto-vivo.```' },
		{ name: 'Saúde Divina', value: '```	A magia divina flui através de você tornando você imune a doenças.```' },
		{ name: 'Aura de Proteção', value: '```	Sempre que você ou uma criatura amigável a até 3 metros de você tiver que fazer um teste de resistência, aquela criatura ganha um bônus no seu teste de proteção igual a seu modificador de Carisma (com um bônus mínimo de +1). Você deve estar consciente para garantir esse bônus.```' },
		{ name: 'Aura de Coragem', value: '```	Você e as criaturas amigáveis dentro de um raio de 3 metros de você não podem ser amedrontadas enquanto você estiver consciente. ```' },
		{ name: 'Destruição Divina Aprimorada', value: '```	Você fica tão infundido com o poder da justiça que todos os seus ataques corpo-a-corpo com arma carregam poder divino neles. Sempre que você atingir uma criatura com um ataque corpo-a-corpo, a criatura sofre 1d8 de dano radiante extra. Se você também usar sua Destruição Divina em um ataque, você adiciona esse dano ao dano extra da sua Destruição Divina.```' },
		{ name: 'Toque Purificador (x2) [Longo]', value: '```	Você pode usar sua ação para terminar uma magia em si mesmo ou em uma criatura voluntária que você tocar.```' },
	)

const page3 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Características do Juramento da Vingança')
	.setAuthor({ name: 'Satreus Solaire' })
	.setThumbnail('https://imgur.com/q7gY17P.png')
	.addFields(
		{ name: 'Magias de Juramento', value: '```3° nível | Perdição, Marca do Caçador \n5° nível | Imobilizar Pessoa, Passo Nebuloso \n9° nível | Velocidade, Proteção contra Energia \n13° nível | Banimento, Porta Dimensional```' },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Canalizar Divindade [Curto/Longo]', value: ' ' },
		{ name: 'Abjurar Inimigo', value: '```	Com uma ação, você ergue seu símbolo sagrado e faz uma prece de condenação, usando seu Canalizar Divindade. Escolha uma criatura a até 18 metros de você que você possa ver. A criatura deve realizar um teste de resistência de Sabedoria, a não ser que seja imune a ser amedrontada. Corruptores e mortos-vivos tem desvantagem nesse teste de resistência. \n	Num fracasso no teste de resistência, a criatura ficará amedrontada por 1 minuto ou até sofrer qualquer dano. Enquanto estiver amedrontada, o deslocamento da criatura será 0 e ela não pode receber qualquer bônus de deslocamento. \n	Em um sucesso, o deslocamento da criatura é reduzido à metade por 1 minuto ou até que ela sofra qualquer dano```' },
		{ name: 'Voto de Inimizade', value: '```	Com uma ação bônus, você pode pronunciar um voto de inimizade contra uma criatura que você possa ver a até 3 metros, usando seu Canalizar Divindade. Você ganha vantagem nas jogadas de ataque contra a criatura por 1 minuto ou até ela cair a 0 pontos de vida ou cair inconsciente. ```' },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Vingador Implacável', value: '```	Seu foco sobrenatural ajuda você a impedir a fuga de um inimigo. Quando você atinge uma criatura com um ataque de oportunidade, você pode se mover até metade do seu deslocamento, imediatamente depois do ataque e como parte da mesma reação. Esse movimento não provoca ataques de oportunidade.```' },
	)

const page4 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Magias')
	.setAuthor({ name: 'Satreus Solaire' })
	.setThumbnail('https://imgur.com/q7gY17P.png')
	.addFields(
		{ name: 'Atributo de conjuração', value: 'Carisma', inline: true },
		{ name: 'CD para magia', value: '15', inline: true },
		{ name: 'Bônus de ataque mágico', value: '+7', inline: true },
		{ name: 'Slots de magia', value: '```1° nível | 4 \n2° nível | 3 \n3° nível | 3 \n4° nível | 1```' },
		{ name: '-----------------------------------------------', value: ' ' },
	)

const page5 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Informações')
	.setAuthor({ name: 'Satreus Solaire' })
	.setThumbnail('https://imgur.com/q7gY17P.png')
	.addFields(
		{ name: 'Raça', value: 'Humano Alternativo', inline: true },
		{ name: 'Antecedente', value: 'Herói do Povo', inline: true },
		{ name: 'Alinhamento', value: 'Leal e Bom', inline: true },
		{ name: 'Idade', value: '19 | 18/04 de 2d.GE (21d.GE)', inline: true },
		{ name: 'Altura', value: '1,88 metros', inline: true },
		{ name: 'Peso', value: '98 quilos', inline: true },
		{ name: 'Cor dos Olhos', value: 'Azuis', inline: true },
		{ name: 'Cor da Pele', value: 'Branco', inline: true },
		{ name: 'Cor do Cabelo', value: 'Loiro', inline: true },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Proficiências', value: ' ' },
		{ name: 'Idiomas', value: 'Comum e Celestial'},
		{ name: 'Armaduras', value: 'Todas e escudos', inline: true },
		{ name: 'Armas', value: 'Simples e marciais', inline: true },
		{ name: ' ', value: ' ', inline: true },
		{ name: 'Ferramentas', value: 'Carruagem | Utensílios de Cozinheiro', inline: true },
	)

const page6 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Inventário')
	.setAuthor({ name: 'Satreus Solaire' })
	.setThumbnail('https://imgur.com/q7gY17P.png')
	.addFields(
		{ name: 'Equipamento', value: ' ' },
		{ name: 'Armadura', value: 'Armor of Safeguarding', inline: true },
		{ name: 'Escudo', value: 'Não usa', inline: true },
		{ name: ' ', value: ' ', inline: true },
		{ name: 'Arma Primária', value: 'Espada da Vingança', inline: true },
		{ name: 'Arma Secundária', value: 'Não usa', inline: true },
		{ name: ' ', value: ' ', inline: true },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Sintonização', value: ' ' },
		{ name: 'Slot 1', value: 'Armor of Safeguarding', inline: true },
		{ name: 'Slot 2', value: 'Espada da Vingança', inline: true },
		{ name: 'Slot 3', value: 'Anel de Proteção', inline: true },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Diversos', value: '```- Armadura de placas de adamantina \n- Escudo brasonado \n- Machado grande de aço \n- 5 azagaias \n- Amuleto do devoto \n- Poção de força do gigante de fogo \n- Poção de força do gigante de gelo \n- Óleo para a espada```' },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Moedas', value: '```PC: 0 \nPP: 10 \nPE: 0 \nPO: 155 \nPL: 0```' },
	)

const pages = [page1, page2, page3, page4, page5, page6];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("satreus")
        .setDescription(`Conferir a ficha de Satreus`),

    async execute(interaction) {
		buttonPages(interaction, pages);
    }
}