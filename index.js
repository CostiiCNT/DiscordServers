const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const tokenfile = ("./token.json")
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("https://discord.gg/VksqgM9","-Help for more", {type: "LISTENING"});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});

bot.login('NDQyMzgxMzM2OTAxMTg5NjQy.Dc-BWQ.0r4G-pODxdqZNjyDSQT5LGLygDM')

bot.on('message', message => {
  if (message.content === '/owner') {
      Promise.all([
          message.react('😎'),
          message.react('🤑'),
      ])
          .catch(() => console.error('One of the emojis failed to react.'))
      var embedserverinfo = new Discord.RichEmbed()
      .setTitle(" OWNERSHIP-UL SERVER-ULUI ESTE: ")
          .addField(message.guild.owner)
          .setColor('#ff000')
           message.channel.send(embedserverinfo);
  }
  })