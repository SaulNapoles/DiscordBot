const Discord = require("discord.js");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
  if(message.content.startsWith("!Hola")) {
     message.channel.send("Hola bienvenido al servidor!");
   }
 
 });
 
 client.login("TokenDeMiBot");