const Discord = require("discord.js");
require('ffmpeg');
const client = new Discord.Client();
const prefix = require('./config.json');
const ytdl = require('ytdl-core');
const queue = new Map();

const antezlines = ['sipatoon','charot','nani','grabi ka hatdog','grabi ka sipat']

client.on('ready',function (){
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", async function(message) {
    let parseusername = message.author.username
    const antezlines = ['sipatoon','charot','nani','grabi ka hatdog','grabi ka sipat',`grabi ka sipat ${parseusername}, doh`]
    if(message.content !== '' && !message.author.bot && !message.content.startsWith(prefix.prefix)){
        if(message.content.startsWith("kinsa") || message.content.startsWith("kinsay")){
            message.channel.send("antez");
        }else {
            message.channel.send(antezlines[Math.floor((Math.random() * antezlines.length))]);
        }
    }
    if (!message.content.startsWith(prefix.prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    const serverQueue = queue.get(message.guild.id)
    if(command === 'sipat'){
       execute(message, serverQueue)
    }
    else if(command === 'sipatstop'){
       stop(message, serverQueue)
    }
    else if(command === 'sipatskip'){
       skip(message, serverQueue)
    }
});

async function execute(message,serverQueue){
    console.log(message.client.user)
    const args = message.content.split(" ");
    const voice = message.member.voice.channel;
    const perms = voice.permissionsFor(message.client.user);
    const songInfo = await ytdl.getInfo(args[1]);

    const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url
    };

    const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: voice,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
    };

    if(!voice){
        return message.channel.send("Grabi ka sipat! wala man ka sa music channel buddy!");
    }
    if(!perms.has("CONNECT") || !perms.has("SPEAK")){
        return message.channel.send("Bawal man ko bro!");
    }

    if(!serverQueue){

    }else {
        serverQueue.songs.push(song)
        console.log(serverQueue.songs)
        return message.channel.send(`Akong gi play ${song.title}`);
    }

    queue.set(message.guild.id,queueConstruct);
    queueConstruct.songs.push(song);

    try{
        console.log(queueConstruct.songs[0])
        let connection = await voice.join();
        queueConstruct.connection = connection;
        play(message.guild,queueConstruct.songs[0]);
    }catch (err){
        console.log(err)
        queue.delete(message.guild.id)
        return message.channel.send(err)
    }
}

function play(guild,song){
    const serverQueue = queue.get(guild.id);
    if(!song){
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Sipaton playing: **${song.title}**`);
}
function skip(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send("Grabi ka sipat! wala man ka sa music channel buddy!");
    if (!serverQueue)
        return message.channel.send("Yawa!");
    serverQueue.connection.dispatcher.end();
}
function stop(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send("Grabi ka sipat! wala man ka sa music channel buddy!");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}
client.login('NzU1NDE0NDM0NzkyNjAzNjU4.X2C8hA.1eA3xbvOkwX5SyzbUjULdscgyfM');