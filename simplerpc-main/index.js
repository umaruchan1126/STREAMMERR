const
  { Client } = require('discord.js-selfbot-v13'),
  client = new Client({checkUpdate: false,}),
  reloadPresence = require("./config.js"),
  keepAlive = require('./keep_alive.js');

keepAlive();

if (!process.env.TOKEN) {
  console.error("NjA1MzMwMDgwNjc5NDYwODY1.Gqpm-h.PN_f91mhxObEhrULRqM2JMD6jZq-RDOzToLRL4");
  process.exit();
}

client.login(process.env.TOKEN);

  console.clear();
  client.on("ready", async () => {
        global.startTime = new Date();
        reloadPresence(client);
    })
