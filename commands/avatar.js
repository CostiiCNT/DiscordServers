const Discord = require('discord.js');
exports.run = (client, message, args) => {

    const user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.send(":warning: **Please mention a member!**")

    const embed = new Discord.RichEmbed()
     .setTitle("Your avatar!")
     .addField("Link Avatar", '[Click!](' + user.avatarURL + ')', true)
     .setThumbnail(user.avatarURL)
     .setTimestamp()
     .setFooter(message.author.username)
     .setColor(0x00FFFF)
    message.channel.send({embed : embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
  };
  
  exports.help = {
    name: 'avatar',
    description: 'Your avatar.',
    usage: '-avatar'
  };