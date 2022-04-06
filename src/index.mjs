// import the required packages 
import Eris from "eris";
import {token} from '/config/config.mjs'

// create discord bot client
const bot = new Eris(token, {
    intents:[
        "guilds",
        "guildMessages"
    ]
})

// handle ready and error event 
bot.on("ready", ()=>{
    console.log("bot is ready")
})
bot.on("error", ()=>{
    console.log("an error has occurred")
})

// when a message is coreated
bot.on("messageCreate", message=>{
    // if the message is from a bot, end the function
    if (message.author.bot) return;

    // if the message has a reddit link
    if (message.content.includes("preview.redd.it")){
        // replace preview with i
        const prams = message.content.replace("preview.redd.it", "i.redd.it").split("?")
        
        // take out anything after the ? in the url
        const anythingElse = prams[1].split(" ")
        anythingElse.shift()
        
        // send a message with the original message content and the modified url to the channel
        message.channel.createMessage(`${prams[0]} ${anythingElse.join(" ")}`)
        .catch(error=>{})
    }
})

// connect bot to discord
bot.connect()
