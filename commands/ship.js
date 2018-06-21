const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let user1 = args[0];
if(!user1) return message.reply(":tada: **Te rog, mentioneaza 2 persoane pentru ``Ship``!**");
let user2 = args[1];
if(!user2) return message.reply("**Te rog, mentioneaza o singura persoana.**:beginner: ");

let result = Math.floor(Math.random() * 100) + 1;

message.channel.send(`❣ **MATCHMAKING** ❣\n🔻 ${user1} \n🔺 ${user2}`);

let aEmbed = new Discord.RichEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Îngrozitor.. 😭`);

let bEmbed = new Discord.RichEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Rau.. 😢`);

let ltaEmbed = new Discord.RichEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Mai rău decât mediu.. 😐`);

let nbEmbed = new Discord.RichEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Nu-i rau. 🙂`);

let pgEmbed = new Discord.RichEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Destul de bine😃`);

let goEmbed = new Discord.RichEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Bine 😄`);

let gEmbed = new Discord.RichEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Grozav 😊`);

let pEmbed = new Discord.RichEmbed()
.setColor("#ff7fd0")
.setTitle(`${result}% Frumoos. sa va tina :)) 😍`);

if(result <= 15) return message.channel.send(aEmbed)
if(result <= 30) return message.channel.send(bEmbed)
if(result <= 50) return message.channel.send(ltaEmbed)
if(result <= 60) return message.channel.send(nbEmbed)
if(result <= 70) return message.channel.send(pgEmbed)
if(result <= 80) return message.channel.send(goEmbed)
if(result <= 90) return message.channel.send(gEmbed)
if(result >= 100) return message.channel.send(pEmbed)


//with a chance of ${lol} getting ${baby} babies.
//message.channel.send(`❣ **MATCHMAKING** ❣\n🔻 ${user1} \n🔺 ${user2}`);
//message.channel.send(shipEmbed);

}
module.exports.help = {
    name: "ship"
}