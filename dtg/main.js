// G -> D

const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on("message", message => {
    if(message.author.bot) return;
    let mes = `**${message.author.username}**: ${message.content.toString()}`;
    if(message.author.username == "GitterToDiscordBot")
        return;
    mes = mes.replace(/'/g, "\\'").replace(/"/g, '\\"');
    require('child_process').exec(`curl -X POST -i -H "Content-Type: application/json" -H "Accept: application/json" -H "Authorization: Bearer 359d28fe94547c7c28787aad4f59b5619b119a4d" "https://api.gitter.im/v1/rooms/55a6cd165e0d51bd787b7d36/chatMessages" -d '{"text":${JSON.stringify(mes)}}'
    `, (a, b, c)=>{console.log(b); console.log("done");});
 
});


bot.login("ODUyNDAxMzAxNjA5MzgxODk4.YMGSkw.9yPJO0csGz8mbsCi6-LtkksMY4M");
