const run = module.exports.run = async (client, msg, args) => {
    const info = [
        '__ServerInfo__',
        '',
        'Fire is in a few discord guilds!',
        '',
        `• is in **${client.guilds.size}** guilds.`,
        `• is monitoring **${client.channels.size}** channels.`,
        `• is playing with **${client.users.size}** other users.`
    ].join('\n');
    msg.channel.send(info);
}

module.exports.help = {
  name: "botinfo"
}