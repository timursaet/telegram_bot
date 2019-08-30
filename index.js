const TelegramBot = require('node-telegram-bot-api');
const token = '505804275:AAFuQsOXOvxuIZ4wLT5NbsCRrx_W7J3S7pA';

var bot = new TelegramBot(token, {polling: true});

var notes = [];

bot.onText(/напомни (.+) в (.+)/, function (msg, match) {
    var userId = msg.from.id;
    var text = match[1];
    var time = match[2];

    notes.push({ 'uid': userId, 'time': time, 'text': text });

    bot.sendMessage(userId, 'Отлично! Я обязательно напомню, если не сдохну :)');
});

setInterval(function(){
    for (var i = 0; i < notes.length; i++) {
        const curDate = new Date().getHours() + ':' + new Date().getMinutes();
        if (notes[i]['time'] === curDate) {
            bot.sendMessage(notes[i]['uid'], 'Напоминаю, что вы должны: '+ notes[i]['text'] + ' сейчас.');
            notes.splice(i, 1);
        }
    }
}, 1000);
