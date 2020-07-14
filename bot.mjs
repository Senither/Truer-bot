
import { Client } from 'discord.js'
const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
  if (message.mentions.users.has(client.user.id)) {
    message.reply('True!');
  }
})

client.login(process.argv.pop())
