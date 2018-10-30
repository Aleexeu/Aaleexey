const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    let gAvatar = message.guild.iconURL;
    let embed = new Discord.RichEmbed()

    .setColor("RANDOM")
    .setDescription(`Oi, eu sou o ${bot.user.username}! Aqui está meus comandos.\n \n \n|Administrador|:\n \nb!ban [PARA BANIR UM MEBRO QUE NÃO ENTÁ OBEDECENDO AS REGRAS].\n \nb!say [PARA ENVIAR UMA MENSAGEM].\n \nb!kick [PARA CHUTAR A PESSOA PRA FORA DO SERVIDOR DISCORD].\n \nb!tempmute [@usuário 10s/10h/10d motivo].\n \n \n|MEMBROS|:\n \nb!help [PARA VOCÊ VER MEUS COMANDOS].\n \nb!serverinfo [PARA VOCÊ VER AS INFORMAÇÕES DO SERVIDOR DISCORD].\n \nb!memes [EM DESENVOLVIMENTO].\n \nb!fakemsg [PARA CRIAR UMA MENSAGEM FAKE DE ALGUÉM].\n \nb!ping [PARA VER O PING DO BOT].\n \nb!criador [PARA SABER QUEM ESTÁ ME DESENVOLVENDO/CRIO].\n \nb!time [PARA VER QUANTO TEMPO EU ESTOU ONLINE].\n \nb!sugestão [PARA ENVIAR UMA SUGESTÃO].\n \nb!avatar [PARA VER O SEU AVATAR OU AVATAR DE OUTRA PESSOA].\n \nb!userinfo [PARA SABER AS INFORMAÇÕES DO PLAYER].\n \n \nO bot ainda está em desenvolvimento então temos poucos comandos.`)

    message.author.send(embed);
    message.reply('**olhe na sua DM** :wink:');
}

exports.help = {
    name: "help"
}
