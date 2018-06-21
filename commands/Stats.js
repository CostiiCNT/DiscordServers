const Discord = require('discord.js');  
  exports.run = (client, message) => {
	  const embed = new Discord.RichEmbed()
	  .setTitle('*Informatii despre bot*')
	  .setDescription(`**• Nume bot:** Discord-Servers \n**• \n**• Uptime:** ${(client.uptime)/100}`)
	  .addField('**• Memorie folosită:**', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB', true)  
	  .addField('**• Membrii în total:**', client.users.size, true)
	  .addField('**• Servere:**', client.guilds.size, true)  
	  .addField('**• Camere în total:**', client.channels.size, true)
	  .addField('**• Librărie:**', 'Discord.js v' + require('discord.js').version, true) 
    .setTimestamp()
    .setColor(0x961515)
    .setThumbnail('https://cdn.discordapp.com/avatars/442381336901189642/51fd5df20dc2e4a1fdd9711718e899f0.jpg?size=2048')
     message.channel.sendEmbed(embed)  
 
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stats',
  description: 'Informații legate despre mine!',
  usage: 'Folosește comanda "bot.stats" pentru a vedea detalii despre mine!'
};