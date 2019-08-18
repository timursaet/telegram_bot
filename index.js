const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '505804275:AAFuQsOXOvxuIZ4wLT5NbsCRrx_W7J3S7pA';

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', (msg) => {
    Bot.sendMessage(msg.chat.id,`HI, "Hi как дела?, ${msg.from.first_name}"`)
    //const chatId = msg.chat.id;
    // send a message to the chat acknowledging receipt of their message
    //bot.sendMessage(chatId, msg);
})