const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const Canvas = require('canvas');

client.on("ready", () => {
    console.log(`asebolado para ${client.users.size} users, em ${client.channels.size} canais de ${client.guilds.size} guilds.`);
    client.user.setActivity(`Servindo ${client.users.size} usuários com muito amor <3`);
});

client.on("guildCreate", guild => {
    console.log(`eu entrei em: ${guild.name} (id: ${guild.id}). esse sv tem ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
    console.log(`Eu fui removido: ${guild.name} (id: ${guild.id})`);
});

client.on('guildMemberAdd', (member) => {
    console.log(member);
});

client.on('guildMemberAdd', (member) => {
    console.log(member);
});

function changing_status() {
    let status = [`Servindo ${client.users.size} usuários com muito amor <3`, `e amando ${client.guilds.size} guilds <3`, 'Use se!help para a lista de ajuda', 'Versão v1.15.1.b.14.12.19', 'Me adicione! se!invite']
    let random = status[Math.floor(Math.random() * status.length)]
    client.user.setActivity(random)
}

client.on("ready", () => {
    console.log('Status definido');
    setInterval(changing_status, 15000);
});

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content.indexOf(config.prefix) !== 0) return
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! minha latência é: ${m.createdTimestamp - message.createdTimestamp}ms. A latência da API é: ${Math.round(client.ping)}ms`);
    }


    if (command === "say") {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => {});
        message.channel.send(sayMessage);
    }

    if (command === "hug") {
        if (message.mentions.members.size == 0) {
            const hugErrEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Algo deu errado!')
                .setDescription('Parece que você esqueceu de mencionar um usuário!')
                .addField('**Maneira correta:**', 'Mencione um usuário junto ao comando!', false)
                .addField('**Exemplo:**', `se!hug ${client.user}`, false)
                .addField('**Variáveis:**', 'se!abraçar', false)
            message.channel.send(hugErrEmbed)
        }
        if (message.mentions.members.size == 1) {
            const rando_hug = [
                'https://cdn.discordapp.com/attachments/655868947014615100/655869156633346115/hugcute.gif',
                'https://cdn.discordapp.com/attachments/655868947014615100/655869103738716189/8572a1d1ebaa45fae290e6760b59caac.gif',
                'https://cdn.discordapp.com/attachments/655868947014615100/655869093580374045/hugsla.gif',
                'https://cdn.discordapp.com/attachments/655868947014615100/655871218825691167/giftop.gif',
            ]
            let imgHug = rando_hug[Math.floor(Math.random() * rando_hug.length)]
            let member = message.mentions.members.first()
            const hugEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Abraços!', ' ', ' ')
                .setDescription(`${member.user} **recebeu um abraço de:** ${message.author}`)
                .setImage(imgHug)
                .setFooter('Sebola, o bot');
            message.channel.send(hugEmbed)
        }
    }

    if (command === "abraçar") {
        if (message.mentions.members.size == 0) {
            const abrErrEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Algo deu errado!')
                .setDescription('Parece que você esqueceu de mencionar um usuário!')
                .addField('**Maneira correta:**', 'Mencione um usuário junto ao comando!', false)
                .addField('**Exemplo:**', `se!abraçar ${client.user}`, false)
                .addField('**Variáveis:**', 'se!hug', false)
            message.channel.send(abrErrEmbed)
        }
        if (message.mentions.members.size == 1) {
            const rando_hug = [
                'https://cdn.discordapp.com/attachments/655868947014615100/655869156633346115/hugcute.gif',
                'https://cdn.discordapp.com/attachments/655868947014615100/655869103738716189/8572a1d1ebaa45fae290e6760b59caac.gif',
                'https://cdn.discordapp.com/attachments/655868947014615100/655869093580374045/hugsla.gif',
                'https://cdn.discordapp.com/attachments/655868947014615100/655871218825691167/giftop.gif',
            ]
            let imgHug = rando_hug[Math.floor(Math.random() * rando_hug.length)]
            let member = message.mentions.members.first()
            const hugEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Abraços!', ' ', ' ')
                .setDescription(`${member.user} **recebeu um abraço de:** ${message.author}`)
                .setImage(imgHug)
                .setFooter('Sebola, o bot');
            message.channel.send(hugEmbed);
        }
    }

    if (command === "kiss") {
        if (message.mentions.members.size == 0) {
            const kissErrEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Algo deu errado!')
                .setDescription('Parece que você esqueceu de mencionar um usuário!')
                .addField('**Maneira correta:**', 'Mencione um usuário junto ao comando!', false)
                .addField('**Exemplo:**', `se!kiss ${client.user}`, false)
                .addField('**Variáveis:**', 'se!beijar', false)
            message.channel.send(kissErrEmbed)
        }
        if (message.mentions.members.size == 1) {
            const randokiss = [
                'https://cdn.discordapp.com/attachments/655875664762765325/655883567142010890/gif_2.gif',
                'https://cdn.discordapp.com/attachments/655875664762765325/655883623479640095/gif_3.gif',
                'https://cdn.discordapp.com/attachments/655875664762765325/655883651380150277/gif_6.gif',
                'https://cdn.discordapp.com/attachments/655875664762765325/655883654110642217/gif_1.gif',
                'https://cdn.discordapp.com/attachments/655875664762765325/655883682040512542/gif_4.gif',
                'https://cdn.discordapp.com/attachments/655875664762765325/655883715825631232/gif_5.gif',
            ]
            let imgKiss = randokiss[Math.floor(Math.random() * randokiss.length)]
            let member = message.mentions.members.first()
            const kissEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Uuh, beijos!', ' ', ' ')
                .setDescription(`${member.user} **recebeu um beijo de** ${message.author}!`)
                .setImage(imgKiss)
                .setTimestamp()
                .setFooter('Sebola, o bot');
            message.channel.send(kissEmbed);
        }
    }

    if (command === "beijar") {
        if (message.mentions.members.size == 0) {
            const bjErrEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Algo deu errado!')
                .setDescription('Parece que você esqueceu de mencionar um usuário!')
                .addField('**Maneira correta:**', 'Mencione um usuário junto ao comando!', false)
                .addField('**Exemplo:**', `se!beijar ${client.user}`, false)
                .addField('**Variáveis:**', 'se!kiss', false)
            message.channel.send(bjErrEmbed)
        }
        if (message.mentions.members.size == 1) {
            const randokiss = [
                'https://cdn.discordapp.com/attachments/655875664762765325/655883567142010890/gif_2.gif',
                'https://cdn.discordapp.com/attachments/655875664762765325/655883623479640095/gif_3.gif',
                'https://cdn.discordapp.com/attachments/655875664762765325/655883651380150277/gif_6.gif',
                'https://cdn.discordapp.com/attachments/655875664762765325/655883654110642217/gif_1.gif',
                'https://cdn.discordapp.com/attachments/655875664762765325/655883682040512542/gif_4.gif',
                'https://cdn.discordapp.com/attachments/655875664762765325/655883715825631232/gif_5.gif',
            ]
            let imgKiss = randokiss[Math.floor(Math.random() * randokiss.length)]
            let member = message.mentions.members.first()
            const kissEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Uuh, beijos!', ' ', ' ')
                .setDescription(`${member.user} **recebeu um beijo de** ${message.author}!`)
                .setImage(imgKiss)
                .setTimestamp()
                .setFooter('Sebola, o bot');
            message.channel.send(kissEmbed);
        }
    }

    if (command === "invite") {
        let link = ('https://discordapp.com/api/oauth2/authorize?client_id=625374033365565465&permissions=8&scope=bot')
        const helpEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setAuthor('Me adicione <3', ' ', ' ')
            .setDescription(`Se você procura me adicionar [Clique aqui](${link})`)
            .setTimestamp()
            .setFooter('Sebola, o bot');
        message.channel.send(helpEmbed);
    }

    if (command === "botinfo") {
        const botinfoEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setAuthor('Sobre mim!', ' ', ' ')
            .addField('**Library**', 'Discord.js', true)
            .addField('**Versão**', 'v1.15.1.b.14.12.19', true)
            .addField('**Ultima atualização**', '14/12/19', true)
            .addField('**Versão do Node.js**', '12.13.1', true)
            .addField('**Versão do Discord.js**', '11.5.1', true)
            .addField('**Versão do VScode**', '1.41', true)
            .addField('**Usuários**', `${client.users.size}`, true)
            .addField('**Guilds**', `${client.guilds.size}`)
            .setFooter('Sebola, o bot');
        message.channel.send(botinfoEmbed);
    }

    if (command === "help") {
        const helpEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setAuthor('Lista de ajuda!', ' ', ' ')
            .setDescription("**Inclua o prefixo `se!` antes do comando!**")
            .addField('**Ações** (4 comandos)', '`kiss, hug, headpat, slap`', false)
            .addField('**Misc** (1 comando)', '`say`', false)
            .addField('**Bot** (3 comandos)', '`invite, ping, botinfo`', false)
            .addField('**Social** (2 comandos)', '`avatar, memberinfo`', false)
            .setFooter('Sebola, o bot');
        message.channel.send(helpEmbed);
    }

    if (command === "ajuda") {
        const helpEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setAuthor('Lista de ajuda!', ' ', ' ')
            .setDescription("**Inclua o prefixo `se!` antes do comando!**")
            .addField('**Ações** (4 comandos)', '`kiss, hug, headpat, slap`', false)
            .addField('**Misc** (1 comando)', '`say`', false)
            .addField('**Bot** (3 comandos)', '`invite, ping, botinfo`', false)
            .addField('**Social** (2 comandos)', '`avatar, memberinfo`', false)
            .setFooter('Sebola, o bot');
        message.channel.send(helpEmbed);
    }

    if (command === "headpat") {
        if (message.mentions.members.size == 0) {
            const headpat1ErrEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Algo deu errado!')
                .setDescription('Parece que você esqueceu de mencionar um usuário!')
                .addField('**Maneira correta:**', 'Mencione um usuário junto ao comando!', false)
                .addField('**Exemplo:**', `se!headpat ${client.user}`, false)
                .addField('**Variáveis:**', 'se!cafuné', false)
            message.channel.send(headpat1ErrEmbed)
        }
        if (message.mentions.members.size == 1) {
            const randopat = [
                'https://cdn.discordapp.com/attachments/655895332831363092/655895552566755328/gif_5.gif',
                'https://cdn.discordapp.com/attachments/655895332831363092/655895551279366144/gif_2.gif',
                'https://cdn.discordapp.com/attachments/655895332831363092/655895493200576512/gif_6.gif',
                'https://cdn.discordapp.com/attachments/655895332831363092/655895457720958988/gif_4.gif',
                'https://cdn.discordapp.com/attachments/655895332831363092/655895456030916640/gif_1.gif',
            ]
            let imgPat = randopat[Math.floor(Math.random() * randopat.length)]
            let member = message.mentions.members.first()
            const patEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Cafuné <3', ' ', ' ')
                .setDescription(`${member.user} **recebeu um cafuné de** ${message.author}!`)
                .setImage(imgPat)
                .setTimestamp()
                .setFooter('Sebola, o bot');
            message.channel.send(patEmbed);
        }
    }

    if (command === "cafuné") {
        if (message.mentions.members.size == 0) {
            const headpatErrEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Algo deu errado!')
                .setDescription('Parece que você esqueceu de mencionar um usuário!')
                .addField('**Maneira correta:**', 'Mencione um usuário junto ao comando!', false)
                .addField('**Exemplo:**', `se!cafuné ${client.user}`, false)
                .addField('**Variáveis:**', 'se!headpat', false)
            message.channel.send(headpatErrEmbed)
        }
        if (message.mentions.members.size == 1) {
            const randopat2 = [
                'https://cdn.discordapp.com/attachments/655895332831363092/655895552566755328/gif_5.gif',
                'https://cdn.discordapp.com/attachments/655895332831363092/655895551279366144/gif_2.gif',
                'https://cdn.discordapp.com/attachments/655895332831363092/655895493200576512/gif_6.gif',
                'https://cdn.discordapp.com/attachments/655895332831363092/655895457720958988/gif_4.gif',
                'https://cdn.discordapp.com/attachments/655895332831363092/655895456030916640/gif_1.gif',
            ]
            let imgPat2 = randopat2[Math.floor(Math.random() * randopat2.length)]
            let member = message.mentions.members.first()
            const patEmbed2 = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Cafuné <3', ' ', ' ')
                .setDescription(`${member.user} **recebeu um cafuné de** ${message.author}!`)
                .setImage(imgPat2)
                .setTimestamp()
                .setFooter('Sebola, o bot')
            message.channel.send(patEmbed2)
        }
    }

    if (command === "slap") {
        if (message.mentions.members.size == 0) {
            const tapaErrEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Algo deu errado!')
                .setDescription('Parece que você esqueceu de mencionar um usuário!')
                .addField('**Maneira correta:**', 'Mencione um usuário junto ao comando!', false)
                .addField('**Exemplo:**', `se!slap ${client.user}`, false)
                .addField('**Variáveis:**', 'se!tapa', false)
            message.channel.send(tapaErrEmbed)
        }
        if (message.mentions.members.size == 1) {
            const randtapa = [
                'https://cdn.discordapp.com/attachments/655895636868333578/655895750638567465/gif_1.gif',
                'https://cdn.discordapp.com/attachments/655895636868333578/655895765821947915/gif_5.gif',
                'https://cdn.discordapp.com/attachments/655895636868333578/655895775863242776/gif_4.gif',
                'https://cdn.discordapp.com/attachments/655895636868333578/655895794800656414/gif_2.gif',
                'https://cdn.discordapp.com/attachments/655895636868333578/655895833211830282/gif_3.gif',
            ]
            let imgTapa = randtapa[Math.floor(Math.random() * randtapa.length)]
            let member = message.mentions.members.first()
            const tapaEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Oh', ' ', ' ')
                .setDescription(`${member.user} **recebeu um tapa de** ${message.author}!`)
                .setImage(imgTapa)
                .setTimestamp()
                .setFooter('Sebola, o bot')
            message.channel.send(tapaEmbed)
        }
    }

    if (command === "tapa") {
        if (message.mentions.members.size == 0) {
            const tapaErrEmbed2 = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Algo deu errado!')
                .setDescription('Parece que você esqueceu de mencionar um usuário!')
                .addField('**Maneira correta:**', 'Mencione um usuário junto ao comando!', false)
                .addField('**Exemplo:**', `se!tapa ${client.user}`, false)
                .addField('**Variáveis:**', 'se!slap', false)
            message.channel.send(tapaErrEmbed2)
        }
        if (message.mentions.members.size == 1) {
            const randtapa2 = [
                'https://cdn.discordapp.com/attachments/655895636868333578/655895750638567465/gif_1.gif',
                'https://cdn.discordapp.com/attachments/655895636868333578/655895765821947915/gif_5.gif',
                'https://cdn.discordapp.com/attachments/655895636868333578/655895775863242776/gif_4.gif',
                'https://cdn.discordapp.com/attachments/655895636868333578/655895794800656414/gif_2.gif',
                'https://cdn.discordapp.com/attachments/655895636868333578/655895833211830282/gif_3.gif',
            ]
            let imgTapa2 = randtapa2[Math.floor(Math.random() * randtapa2.length)]
            let member = message.mentions.members.first()
            const tapaEmbed2 = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Oh', ' ', ' ')
                .setDescription(`${member.user} **recebeu um tapa de** ${message.author}!`)
                .setImage(imgTapa2)
                .setTimestamp()
                .setFooter('Sebola, o bot')
            message.channel.send(tapaEmbed2)
        }
    }

    if (command === "memberinfo") {
        if (message.mentions.members.size == 0) {
            const authorinfoEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
                .setDescription(`Informações sobre ${message.author}`)
                .addField('Nickname', `${message.author.username}`, false)
                .addField('Tag (discriminator)', `#${message.author.discriminator}`, false)
                .addField('ID', `${message.author.id}`, false)
                .setFooter('Sebola, o bot')
            message.channel.send(authorinfoEmbed)
        }
        if (message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            const memberinfoEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor(`${member.user.tag}`, `${member.user.avatarURL}`)
                .setDescription(`Informações sobre ${member.user}`)
                .addField('Nickname', `${member.user.username}`, false)
                .addField('Tag (discriminator)', `#${member.user.discriminator}`, false)
                .addField('ID', `${member.user.id}`, false)
                .setFooter('Sebola, o bot')
            message.channel.send(memberinfoEmbed)
        }
    }

    if (command === "avatar") {
        if (message.mentions.members.size == 0) {
            const avatarErrEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setAuthor('Algo deu errado!')
                .setDescription('Parece que você esqueceu de mencionar um usuário!')
                .addField('**Maneira correta:**', 'Mencione um usuário junto ao comando!', false)
                .addField('**Exemplo:**', `se!avatar ${client.user}`, false)
                .addField('**Variáveis:**', 'Nenhuma', false)
            message.channel.send(avatarErrEmbed)
        }

        if (message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            let avatar = member.user.avatarURL
            let Aavatar = message.author.avatarURL
            const avatarEmbed = new Discord.RichEmbed()
                .setAuthor(`Foto de perfil de ${member.user.tag}!`)
                .setDescription(`:inbox_tray: [Clique aqui](${avatar}) para fazer o download`)
                .setImage(avatar)
                .setFooter(`Solicitado por ${message.author.tag}`, `${Aavatar}`)
            message.channel.send(avatarEmbed)
        }
    }
});

client.login(config.token);
