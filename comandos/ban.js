const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send({embed: {
        description: "Você digitou b!ban, talvez precise de ajuda ?\n \nSe você for membro o comando vai ser bloqueado, agora se você é da staff, digite:\n \n b!ban @membro",
        color: 0xbc0076,
        footer: {
            "icon_url": message.author.displayAvatarURL,
            "text": "Vector | Todos os direitos reservados."
          },
        }
        })
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Infelizmente você não tem permissão!");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Desculpa mais eu acho que ele tem um cargo acima do meu, ou eu não tenho permissão.");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("BAN")
    .setColor("#bc0000")
    .addField("Usuário banido:", `${bUser} ID ${bUser.id}`)
    .addField("Staff que baniu:", `<@${message.author.id}> ID ${message.author.id}`)
    .addField("Banido no chat:", message.channel)
    .addField("Time", message.createdAt)
    .addField("Motivo:", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "punições");
    if(!incidentchannel) return message.channel.send("Não encontrei o canal #punições.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }

exports.help = {
    name: "ban"
}
