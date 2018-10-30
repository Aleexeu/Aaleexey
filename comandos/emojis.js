const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    let emojis = message.guild.emojis.map(a => a).join(' ')
    let servernome = message.guild.name
    let servericone = message.guild.iconURL
    let cor = '#ffffff'

    let emojiembed = new Discord.RichEmbed()
    .setColor(cor)
    .setAuthor(`Emojis do Servidor - ${servernome}`, servericone)
    .setDescription(`${emojis}`)

    message.channel.send(emojiembed);
}

exports.help = {
    name: "emojis"
}