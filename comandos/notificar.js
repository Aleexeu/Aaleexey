const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if(message.author.bot) return;
    if(message.channel.id === "502661109149466645") {
    if(message.content === "b!notificar") message.member.addRole("507231389608050689")
       message.channel.send(':Feliz: agora voce contém o cargo 📣 | Notificado')
    }
    
}

exports.help = {
    name: "notificar"
}
