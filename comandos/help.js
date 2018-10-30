const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    let gAvatar = message.guild.iconURL;
    let embed = new Discord.RichEmbed()

    .setColor("RANDOM")
    .setDescription(`Oi, eu sou o ${bot.user.username}! Aqui está meus comandos.\n \n \n|Administrador|:\n \n!ban [PARA BANIR UM MEBRO QUE NÃO ENTÁ OBEDECENDO AS REGRAS].\n \n!say [PARA ENVIAR UMA MENSAGEM].\n \n!kick [PARA CHUTAR A PESSOA PRA FORA DO SERVIDOR DISCORD].\n \n!tempmute [@usuário 10s/10h/10d motivo].\n \n \n|MEMBROS|:\n \n!help [PARA VOCÊ VER MEUS COMANDOS].\n \n!serverinfo [PARA VOCÊ VER AS INFORMAÇÕES DO SERVIDOR DISCORD].\n \n!memes [EM DESENVOLVIMENTO].\n \n!fakemsg [PARA CRIAR UMA MENSAGEM FAKE DE ALGUÉM].\n \n!ping [PARA VER O PING DO BOT].\n \n!criador [PARA SABER QUEM ESTÁ ME DESENVOLVENDO/CRIO].\n \n!time [PARA VER QUANTO TEMPO EU ESTOU ONLINE].\n \n!sugestão [PARA ENVIAR UMA SUGESTÃO].\n \n!avatar [PARA VER O SEU AVATAR OU AVATAR DE OUTRA PESSOA].\n \n!userinfo [PARA SABER AS INFORMAÇÕES DO PLAYER].\n \n \nO bot ainda está em desenvolvimento então temos poucos comandos.`)

    message.author.send(embed);
    message.reply('Enviei meus comando via DM.\n\nEnviado com: sucesso.');
}

exports.help = {
    name: "help"
}
