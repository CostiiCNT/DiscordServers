const Discord = require('discord.js');
exports.run = function(client, message, args) { 
        let reason = args.slice(0).join('+');
  if (reason.length < 1) return message.channel.send(':warning: Adaugă niște argumente pentru a utiliza comanda!');   

 const embed = new Discord.RichEmbed()
 .setColor('0x961515')
 .setTitle('Rezultate:')
 .setDescription(`https://www.google.com/search?q=${reason}`)
 .setThumbnail('https://images-ext-2.discordapp.net/external/_Trta_kSVcgDOMAjaG6EijLTnVJoy9GYtI_h4QWAXG0/http/logok.org/wp-content/uploads/2015/09/Google-logo-2015-G-icon.png?width=80&height=60')
 .setFooter('Creat de - ' + message.author.username)
message.channel.sendEmbed(embed)

};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'search',
  description: 'Cauți un anumit lucru pe platforma Google.',
  usage: 'Folosește comanda "-search <argumente>" pentru a căuta un lucru!'
};