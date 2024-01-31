const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const buttonPages = require("../functions/pagination.js");

// embed
const page1 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Nidro Houggen')
	.setAuthor({ name: 'Nidro Houggen' })
	.setDescription('Guerreiro Mestre de Batalha Nível 14')
	.setThumbnail('https://imgur.com/49jQoKO.png')
	.addFields(
		{ name: 'PV Máximos', value: '175', inline: true },
		{ name: 'CA', value: '19 | 23', inline: true },
		{ name: 'Iniciativa', value: '+3', inline: true },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Força', value: '20 | +5', inline: true },
		{ name: 'Destreza', value: '16 | +3', inline: true },
		{ name: 'Constituição', value: '20 | +5', inline: true },
		{ name: 'Inteligência', value: '12 | +1', inline: true },
		{ name: 'Sabedoria', value: '14 | +2', inline: true },
		{ name: 'Carisma', value: '13 | +1', inline: true },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Proficiência', value: '+5', inline: true },
		{ name: 'Salvaguardas', value: 'Força | Constituição', inline: true },
		{ name: 'Percepção Passiva', value: '16', inline: true },
		{ name: 'Perícias', value: 'Atletismo | Intimidação | Percepção | Sobrevivência' },
	)

const page2 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Características de Guerreiro')
	.setAuthor({ name: 'Nidro Houggen' })
	.setThumbnail('https://imgur.com/49jQoKO.png')
	.addFields(
		{ name: 'Arma de Sopro (x5) [3d10] [Curto/Longo]', value: '```	Quando você usa sua arma de sopro, cada criatura na área exalada deve realizar um teste de resistência, o tipo do teste é determinado pelo seu ancestral dracônico (Cone de 4,5 metros com teste de resistência de Destreza).```' },
		{ name: 'Resistência a Dano [Fogo]', value: '```	Você possui resistência ao tipo de dano associado ao seu ancestral dracônico.```' },
		{ name: 'Duelismo', value: '```	Quando você empunhar uma arma de ataque corpo-acorpo em uma mão e nenhuma outra arma, você ganha +2 de bônus nas jogadas de dano com essa arma.```' },
		{ name: 'Retomar o Fôlego [Curto/Longo]', value: '```	Você possui uma reserva de estamina e pode usá-la para proteger a si mesmo contra danos. No seu turno, você pode usar uma ação bônus para recuperar pontos de vida igual a 1d10 + seu nível de guerreiro.```' },
		{ name: 'Surto de Ação [Curto/Longo]', value: '```	Você pode forçar o seu limite para além do normal por um momento. Durante o seu turno, você pode realizar uma ação adicional juntamente com sua ação e possível ação bônus.```' },
		{ name: 'Indomável (x2) [Longo]', value: '```	Você pode jogar de novo um teste de resistência que falhou. Se o fizer, você deve usar o novo valor e não pode usar essa característica de novo antes de terminar um descanso longo.```' },
	)

const page3 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Características de Mestre de Batalha')
	.setAuthor({ name: 'Nidro Houggen' })
	.setThumbnail('https://imgur.com/49jQoKO.png')
	.addFields(
		{ name: 'Estudioso da guerra', value: '```	Você ganha proficiência com um tipo de ferramenta de artesão, à sua escolha.```' },
		{ name: 'Conheça seu inimigo', value: '```	Se você gastar, pelo menos, 1 minuto observando ou interagindo com outra criatura fora de combate, você pode aprender certas informações sobre as capacidades dela comparadas as suas. O Mestre conta a você se a criatura é igual, superior ou inferior a você a respeito de duas das seguintes características, à sua escolha:\n- Valor de Força \n- Valor de Destreza \n- Valor de Constituição \n- Classe de Armadura \n- Pontos de Vida atuais \n- Nível total de classe (se possuir) \n- Níveis da classe guerreiro (se possuir)```' },
	)

const page4 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Manobras')
	.setAuthor({ name: 'Nidro Houggen' })
	.setThumbnail('https://imgur.com/49jQoKO.png')
	.addFields(
		{ name: 'Dados de superioridade', value: '5 | d10', inline: true },
		{ name: 'CD para manobra', value: '18', inline: true },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Aparar', value: '```	Quando outra criatura causar dano a você com um ataque corpo-a-corpo, você pode usar sua reação e gastar um dado de superioridade para reduzir o dano pelo número rolado no dado de superioridade + seu modificador de Destreza.```' },
		{ name: 'Ataque Ameaçador', value: '```	Quando você atingir uma criatura com um ataque com arma, você pode gastar um dado de superioridade para tentar amedrontar o alvo. Você adiciona seu dado de superioridade a jogada de dano do ataque e o alvo deve realizar um teste de resistência de Sabedoria. Se falhar, ele ficará com medo de você até o final do seu próximo turno.```' },
		{ name: 'Ataque de Precisão', value: '```	Quando você realizar uma jogada de ataque com arma contra uma criatura, você pode gastar um dado de superioridade para adicioná-lo a jogada. Você pode usar essa manobra antes ou depois de realizar a jogada de ataque, mas deve usá-la antes de qualquer efeito do ataque ser aplicado.```' },
		{ name: 'Ataque Desarmante', value: '```	Quando você atingir uma criatura com um ataque com arma, você pode gastar um dado de superioridade para tentar desarmar o alvo, forçando-o a derrubar um item, à sua escolha, que ele esteja empunhando. Você adiciona o dado de superioridade a jogada de dano do ataque e o alvo deve realizar um teste de resistência de Força. Se fracassar, ele derrubará o objeto escolhido. O objeto cai aos pés dele. ```' },
		{ name: 'Ataque Imobilizador', value: '```	Imediatamente após acertar uma criatura com um ataque corpo-a-corpo em seu turno, você pode gastar um dado de superioridade e então tentar agarrar o alvo como uma ação bônus (veja o Livro do Jogador para as regras sobre Agarrar). Adicione o dado de superioridade ao seu teste de Força (Atletismo).```' },
		{ name: 'Contra-Atacar', value: '```	Quando uma criatura atacar você com um ataque corpo-a-corpo e errar, você pode usar sua reação e gastar um dado de superioridade para realizar um ataque corpo-a-corpo com arma contra essa criatura. Se você atingir, você adiciona seu dado de superioridade a jogada de dano do ataque.```' },
		{ name: 'Derrubar', value: '```	Quando você atingir uma criatura com um ataque com arma, você pode gastar um dado de superioridade para tentar derrubar o alvo no chão. Você adiciona seu dado de superioridade a jogada de dano do ataque e, se o alvo for Grande ou menor, ele deve realizar um teste de resistência de Força. Se falhar, o alvo ficará caído no chão.```' },
	)

const page5 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Informações')
	.setAuthor({ name: 'Nidro Houggen' })
	.setThumbnail('https://imgur.com/49jQoKO.png')
	.addFields(
		{ name: 'Raça', value: 'Draconato Vermelho', inline: true },
		{ name: 'Antecedente', value: 'Soldado', inline: true },
		{ name: 'Alinhamento', value: 'Leal e Bom', inline: true },
		{ name: 'Idade', value: '19 | 25/05 de 2d.GE', inline: true },
		{ name: 'Altura', value: '1,84 metros', inline: true },
		{ name: 'Peso', value: '132 quilos', inline: true },
		{ name: 'Cor dos Olhos', value: 'Amarelo', inline: true },
		{ name: 'Cor da Pele', value: 'Vermelho', inline: true },
		{ name: 'Cor do Cabelo', value: 'Não possui', inline: true },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Proficiências', value: ' ' },
		{ name: 'Idiomas', value: 'Comum e Dracônico'},
		{ name: 'Armaduras', value: 'Todas e escudos', inline: true },
		{ name: 'Armas', value: 'Simples e marciais', inline: true },
		{ name: ' ', value: ' ', inline: true },
		{ name: 'Ferramentas', value: 'Jogo dos Três Dragões | Cavalo de Guerra | Ferramentas de Cartógrafo', inline: true },
	)

const page6 = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Inventário')
	.setAuthor({ name: 'Nidro Houggen' })
	.setThumbnail('https://imgur.com/49jQoKO.png')
	.addFields(
		{ name: 'Equipamento', value: ' ' },
		{ name: 'Armadura', value: 'Armadura de Placas de Adamantina +1', inline: true },
		{ name: 'Escudo', value: 'Escudo do Dragão Prateado', inline: true },
		{ name: ' ', value: ' ', inline: true },
		{ name: 'Arma Primária', value: 'Ira do Dragão (Despertada)', inline: true },
		{ name: 'Arma Secundária', value: 'Lança do Relâmpago', inline: true },
		{ name: ' ', value: ' ', inline: true },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Sintonização', value: ' ' },
		{ name: 'Slot 1', value: 'Ira do Dragão (Despertada)', inline: true },
		{ name: 'Slot 2', value: 'Anel de Escudo Mental', inline: true },
		{ name: 'Slot 3', value: 'Vassoura Voadora', inline: true },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Diversos', value: '```- Cota de malha \n- Cota de talas \n- Escudo +1 \n- Espada longa imbuída em prata \n- Pedaços da Shatterspike \n- Besta Leve \n- 17 virotes \n- Grimório duradouro \n- Mochila \n- Pé de cabra \n- Martelo \n- 10 pítons \n- 8 tochas \n- 2 rações de viagem \n- Cantil \n- 15 metros de corda de cânhamo```' },
		{ name: '-----------------------------------------------', value: ' ' },
		{ name: 'Moedas', value: '```PC: 0 \nPP: 0 \nPE: 0 \nPO: 0 (2000) \nPL: 0```' },
	)

const pages = [page1, page2, page3, page4, page5, page6];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("nidro")
        .setDescription(`Conferir a ficha de Nidro`),

    async execute(interaction) {
		buttonPages(interaction, pages);
    }
}