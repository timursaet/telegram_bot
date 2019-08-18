const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '505804275:AAFuQsOXOvxuIZ4wLT5NbsCRrx_W7J3S7pA';

const Bot = new TelegramBot(TOKEN, {polling: true})

Bot.on('message', msg => {
    Bot.sendMessage(msg.chat.id,`HI, "Hi как дела?, ${msg.from.first_name}"`)
})