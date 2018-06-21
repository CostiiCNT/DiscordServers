const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {

  let replies = ["1", "2", "3", "4","Error Occured","Teapa Fraiere!","https://discord.gg/VksqgM9","MORI."]

  let result = Math.floor((Math.random() * replies.length));

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#0aff0a")
  .addField("Rāspuns..", replies[result]);

  message.channel.send(ballembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "rolldice",
  category: "Miscelaneous",
  description: "Role the dice and get a number",
  usage: "rolldice"
};