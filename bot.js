const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: `meu criador jogado no vaso/ Nitroo#4025`, type: 1, url: 'https://www.youtube.com/yRecky'} });
    console.log('Logado');
});
bot.on('message', message => {
    if (message.content.startsWith('!!twitter')){
        message.channel.send('Twitter:  https://twitter.com/RedeDarknes');
    }
});
bot.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
let args = message.content.split(" ").slice(1);
if(cmd === '!!anuncio'){
    if(!message.member.hasPermissions("BAN_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
    const args = message.content.split(" ").slice(1);
    const prefix = '/'
    message.delete()
    if (!args.slice(0).join(' ')) return message.channel.send('test')
    message.channel.send({embed:{
        'description':args.slice(0).join(' ')
        ,'color':message.member.highestRole.color,
        "thumbnail":{
            }
        }
    }
    )
}
    if (message.content === `!!serverinfo`)) {
    // npm i moment --save
    const moment = require("moment")
    moment.locale("pt-BR")
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    let bot = message.guild.members.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
    let cargos = message.guild.roles.map(a => a).join(", ")
        const embed = new Discord.RichEmbed()
        .setTitle(`Informações do servidor ${message.guild.name}`)
        .setColor("#FF0000")
        .addField('Dono', `<@${message.guild.owner.id}>`)
        .addField('Criado em:', moment(message.guild.createdAt).format('LLLL'))
        .addField("ID", message.guild.id)
        .addField(`Membros [${totalmembros}]`, `Online: ${online}\nAusente: ${ausente}\n Ocupado: ${ocupado}\n Offline: ${offline}\n Bots: ${bot}`)
        .addField(`Canais [${canaistexto+canaisvoz}]`, `Texto: ${canaistexto}\n Voz: ${canaisvoz}`)
        .addField(`Cargos [${message.guild.roles.size}]`, cargos)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed)
}
});
bot.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
let args = message.content.split(" ").slice(1)
    if(cmd === '!!ban'){
        const args = message.content.split(" ").slice(1);
        var razao = args.slice(1).join(" ")
            var membro = message.mentions.members.first();
            if(!message.member.hasPermissions("BAN_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
            if(!membro) return message.reply("você não mencinou ninguém")
            if(!membro.bannable) return message.reply("Você não pode banir essa pessoa")
            if(razao.length < 1) return message.reply("Coloque um motivo!")
            membro.ban()
            message.channel.send(`O membro ${membro.user.username} foi banido do servidor.\nMotivo: ${razao}`)
      }
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
