const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setGame(`I run for 24/7, Unless updates needed`);
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});

var prefix = 'n!';
function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

 const cmdFiles = await readdir("./commands/");
  client.log("log", `Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
