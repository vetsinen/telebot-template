require('dotenv').config();

const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN) //сюда помещается токен, который дал botFather
bot.start((ctx) => ctx.reply('Welcome, i am bot')) //ответ бота на команду /start
bot.help((ctx) => ctx.reply('Keep calm, Ill to help you')) //ответ бота на команду /help
bot.on('sticker', (ctx) => ctx.reply('thinking')) //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
bot.hears('hi', (ctx) => ctx.reply('Hey there')) // bot.hears это обработчик конкретного текста, данном случае это - "hi"
bot.launch() // запуск бота