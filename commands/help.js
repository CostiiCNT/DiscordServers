const Discord = require ('discord.js');
exports.run = (client, message, args) => {
 
    const embed = new Discord.RichEmbed()
    .setTitle(`**Discord-Servers**`) 
    .addField('-help', 'vezi lista de comenzi')
    .addField('-ping', 'vezi ping-ul bot-ului')
    .addField('-avatar', 'vezi avatarul tau/lui')
    .addField('-rolldice', 'un joculetz.')
    .addField('-stats', 'Informatiile despre bot.')
    .addField('-botinfo', 'Info-ul despre bot (creat pe,nume bot)')
    .addField('-tempmute', 'Timp-ul cat are mute.')
    .addField('-report', 'raportezi pe cineva.')
    .addField('-say', 'comanda4fun')
    .addField('-emojify', 'comanda4fun')
    .addField('-bugreport', 'pentru a da report unui bug. (In lucru)')
    .addField('-serverinfo', 'info-ul server-ului')
    .addField('-ship', 'un joc pentru distractie (relatie)')
    .addField('-mute', 'dai mute unui membru.')
    .addField('-coinflip', 'comanda4fun.')
    .addField('-search', 'cauti ceva de pe google')
    .addField('-lockdown', 'inchizi canalul pentru cateva minute,secunde,ore,zile')
    .addField('-whois', 'despre status-ul lui, contul create pe, si numele.')
    .addField('-reverse', 'comanda4fun')
    .addField('-clap', 'comanda4fun')
    .addField('-hentaigif', 'folositi comanda pe un canal N.S.F.W')
    
         .setTimestamp()
     .setColor(0x00FFFF)
    message.author.send({embed : embed});

    message.author.send(":link: **Pentru support-ul acordat intra aici. : [https://discord.gg/VksqgM9]**");
    
 message.channel.send(":link: ***Uita-te in Privat. :hugging: !***");
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
  };
  
  exports.help = {
    name: 'help',
    description: 'Comenzile bot-ului **Discord-Servers**',
    usage: 'bot.help'
  };