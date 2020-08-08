
import Discord from 'discord.js-light'
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
  if (message.mentions.users.has(client.user.id)) {
    message.reply('True!');
  }
})

client.login(process.argv.pop())
