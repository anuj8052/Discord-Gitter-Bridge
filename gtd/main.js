//G -> D

const Discord = require('discord.js');
const bot = new Discord.Client();
const https = require('https');

const roomId    =  "55a6cd165e0d51bd787b7d36";
const token     = "359d28fe94547c7c28787aad4f59b5619b119a4d";
const heartbeat = " \n";

const options = {
  hostname: 'stream.gitter.im',
  port:     443,
  path:     '/v1/rooms/' + roomId + '/chatMessages',
  method:   'GET',
  headers:  {'Authorization': 'Bearer ' + token}
};

var last = undefined;
bot.on("message", message => {
    if(message.author.bot)  return;
    const req = https.request(options, function(res) {
        res.on('data', function(chunk) {
          try{
            let msg = chunk.toString();
            msg = JSON.parse(msg);
            let sendBy = msg.fromUser.username;
            if(sendBy == "DiscordChatbot")
              return;
            let text = msg.text;
            console.log("log,hello?")
            if (msg !== heartbeat && text!= last) 
              message.channel.send(`**${sendBy}** : ${text}`);
            last = text;
          }
          catch(err){;}
        });
    });
    
    req.on('error', function(e) {
        console.log('Something went wrong: ' + e.message);
    });
      
    req.end();
});


bot.login("ODUyMzgwNDQ3NjM5MjA3OTM2.YMF_Jw.fsHEDhlgn_7yE_DMPVL1B2LL82o");


