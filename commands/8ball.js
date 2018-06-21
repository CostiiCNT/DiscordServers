const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    
    // Array of responses
    let responses = [
        'Desigur!',
        'Nu.',
        'Nope',
        'Poate',
        'N-am idee',
        'Sa Fii sigur',
        'Nidiodata bwaa',
        'cum zici tu'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
    
    // Form Embed
    const embed = new Discord.MessageEmbed()
        .setColor(0xffffff)
        .setFooter(fetched);
    
    // Send Embed
    message.channel.send(embed);
    
}

module.exports.help = {
    name: "8ball"
}