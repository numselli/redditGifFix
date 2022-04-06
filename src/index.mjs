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
bot.on("error", (error)=>{
    console.log(error)
    console.log("an error has occurred")
})

// when a message is coreated
bot.on("messageCreate", message=>{
    if (message.author.bot) return;
    if (message.content.includes("preview.redd.it")){
        const prams = message.content.replace("preview.redd.it", "i.redd.it").split("?")
        const anythingElse = prams[1].split(" ")
        anythingElse.shift()
        message.channel.createMessage(`${prams[0]} ${anythingElse.join(" ")}`)
    }
})

// connect bot to discord
bot.connect()
