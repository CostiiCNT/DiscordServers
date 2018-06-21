exports.run = (client, message) => {
    message.channel.send('bot.ping')
      .then(msg => {
        msg.edit(`:dollar: Ping-ul Bot-ului este... **${msg.createdTimestamp - message.createdTimestamp}**! :white_check_mark: `);
      });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ping',
    description: 'Ping/Pong command. I wonder what this does? /sarcasm',
    usage: 'bot.ping'
  };
  