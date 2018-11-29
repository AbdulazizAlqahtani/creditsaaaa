const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "476460414629183490"; // ايدي السررفر
var channel = "516904167248494602";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo ,#u,Hazard , Relo , ')
    },305);
})

client.login(process.env.BOT_TOKEN);
