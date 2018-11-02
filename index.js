const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

bot.on('guildMemberAdd', member => 
    member.addRole("476927204845027348")
);

bot.on('guildMemberAdd', member => {
    if (member.guild.id !== "476923523617783808") return;
    let avatar = member.user.avatarURL
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(avatar)
        .setTitle("** <a:Rainbow:497431261657432065> bem-vindo**")
        .addField('Bem vindo(a)!', `Bem vindo(a) ${member} Ao servidor :)`)
        .setTimestamp()
    bot.channels.get('501021782787227648').send({embed})

});

bot.on("guildMemberRemove", async member => {
    if (member.guild.id !== "476923523617783808") return;
    let avatar = member.user.avatarURL
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(avatar)
        .addField('Saida!', `Um biscoitinho saiu, nick dele é ${member}, espero que ele volte.`)
        .setTimestamp()
    bot.channels.get('501021782787227648').send({embed})

});

fs.readdir("./comandos", (err, files) => {
    if(err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f,i) => {
        let props = require(`./comandos/${f}`);
        console.log(`comando ${f} carregado com sucesso.`)
        bot.commands.set(props.help.name, props);
    });
});

bot.on("message", async message => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return; {
  if (message.content.startsWith('https://discord.gg/')) {
        message.delete();
        return message.channel.send(`
<a:Alerta:501028184641241108> Alerta, o ${message.author} está tentando divulgar outro grupo discord! 
<a:Alerta:501028184641241108>`);
        
    }
  } 

});

bot.on('ready', () =>{
    let status = [
        {name: '🍪 Ajuda?│b!help', type: 'STREAMING', url: 'https://twitch.tv/biscoito'},
        {name: '🍪 as músicas do SrBiscoito', type: 'LISTENING'},
        {name: '🍪 BISCOITO PARA 260 PESSOAS', type: 'PLAYING'},
        {name: '🍪 videos do SrBiscoito', type: 'WATCHING'},
        {name: 'b!help |🍪 Estou sendo desennvolvido pelo SenhorBiscoito#6339', type: 'WATCHING'},
      ];
      
      //STREAMING = Transmitindo
      //LISTENING = Ouvindo
      //PLAYING = Jogando
      //WATCHING = Assistindo
      
        function setStatus() {
            let randomStatus = status[Math.floor(Math.random() * status.length)];
            bot.user.setPresence({game: randomStatus});
        }
      
        setStatus();
        setInterval(() => setStatus(), 10000);  //10000 = 10Ms = 10 segundos
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
