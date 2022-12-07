const {Client, GatewayIntentBits, EmbedBuilder, Permissions} = require ('discord.js')

const prefix = 's!'

const client = new Client({ intents: [GatewayIntentsBit.Guilds, GatewayIntentsBit.GuildMessages, GatewayIntentBits.MessageContent]});

client.on("ready", () => {
    console.log("Hello World");

    client.user.setActivity(`Made By Phantom#7014 | s!`, { type: "WATCHING" });

})
client.on("messageCreate", (message) => {
     if(!message.content.startsWith(prefix) || message.author.bot) return;

     const args = message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLocaleLowerCase() ;

     //message array
     
     const messageArray = message.content.split(" ");
     const argument = messageArray.slice()
     const cmd = messageArray[0];
     //COMMANDS

    //test command
    if (commmand = "Credits") {
        message.channel.send("I'm Made By Phantom !")
    }



















})
client.login("paste your bot token here");
