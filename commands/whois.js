const Discord = require('discord.js');
exports.run = function(client, message, args) { 
         let user = message.mentions.users.first();
 if (!message.mentions.users.first()) return message.channel.send(':warning: Întâi trebuie să dai mențiune unui utilizator!');
	  const embed = new Discord.RichEmbed()
	  .setTitle('*Informatii despre* ' + user.username)
	  .setDescription(`**• Nume:** ${user.tag}\n**• ID:** ${user.id}`)
	  .addField('**• Status:**', user.presence.status, true)  
	  .addField('**• Cont Creat pe:**', user.createdAt.toLocaleString(), true)
       .setThumbnail(user.avatarURL)
    .setTimestamp()
    .setColor(0x961515)
     message.channel.sendEmbed(embed)  
 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'whois',

};