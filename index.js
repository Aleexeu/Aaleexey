const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

bot.on('guildMemberAdd', member => 
    member.addRole("502577773605421056")
);

bot.on('guildMemberAdd', member => {
    if (member.guild.id !== "502572122015662092") return;
    let avatar = member.user.avatarURL
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(avatar)
        .setTitle("** <a:2795_BongoCatHyper:505917212779872258> bem-vindo**")
        .addField('Bem vindo(a)!', `Bem vindo(a) ${member} Ao servidor :)`)
        .setFooter(`Membro que entrou no server: ${member}`)
        .addField('Você é o membro de numero:', member.guild.memberCount)
        .setDescription("Obrigado por entrar leia as regras e seja feliz!")
        .setTimestamp()
    bot.channels.get('502580899657809944').send({embed})});

fs.readdir("./comandos", (err, files) => {
    if(err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f,i) => {
        let props = require(`./comandos/${f}`);
        console.log(`comando ${f} carregado com sucesso.`)
        bot.commands.set(props.help.name, props);
    });
});

bot.on('ready', () => {
    console.log(`O bot ${bot.user.username} ficou online com sucesso.`)
    bot.user.setActivity("😺  Ajudando pessoas! 😺 ", {type: "PLAYING"});
});

bot.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;

    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if(arquivocmd) arquivocmd.run(bot,message,args);
});

bot.login(process.env.BOT_TOKEN);
