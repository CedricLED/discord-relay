const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.js');

client.on("ready", () => {
  console.log(`ready!`);
});

client.on("message", (message) => {
  let destination = client.channels.get(config.destination);
  let sources = config.sources;
  let users = config.users;
  if (sources.includes(message.channel.id)) {
    if (message.attachments.size > 0) {
      destination.send({
        "embed": {
          "description": message.content,
          "image": {
            "url": message.attachments[0].url,
          },
          "author": {
            "name": message.author.username,
            "icon_url": message.author.displayAvatarURL,
          },
        },
      });
      return;
    } else if (message.embeds[0]) {
      if (message.embeds[0]) {
          let embedRelay = new Discord.RichEmbed();
          if (embed[0].author) {
            embedRelay.setAuthor(embed[0].author.name, embed[0].author.iconURL, embed[0].author.url);
          }
          if (embed[0].color) {
            embedRelay.setColor(embed[0].color);
          }
          if (embed[0].description) {
            embedRelay.setDescription(embed[0].description);
          }
          if (embed[0].fields[0]) {
            embed.fields.forEach((field) => {
              embedRelay.addField(field.name, field.value);
            });
          }
          if (embed[0].image) {
            embedRelay.setImage(embed[0].image);
          }
          if (embed[0].thumbnail) {
            embedRelay.setThumbnail(embed[0].thumbnail);
          }
          if (embed[0].title) {
            embedRelay.setTitle(embed[0].title);
          }
          if (embed[0].timestamp) {
            embedRelay.setTimestamp(embed[0].timestamp);
          }
          if (embed[0].url) {
            embedRelay.setURL(embed[0].url);
          }
          destination.send(embedRelay);
      }
    } else {
      destination.send({
        "embed": {
          "description": message.content,
          "author": {
            "name": message.author.username,
            "icon_url": message.author.displayAvatarURL
          }
        }
      });
      return;
    }
  }
  if (users.includes(message.author.id)) {
    if (message.attachments.size > 0) {
      destination.send({
        "embed": {
          "description": message.content,
          "image": {
            "url": message.attachments[0].url,
          },
          "author": {
            "name": message.author.username,
            "icon_url": message.author.displayAvatarURL,
          },
        },
      });
      return;
    } else if (message.embeds[0]) {
      if (message.embeds[0]) {
        message.embeds.forEach((embed) => {
          let embedRelay = new Discord.RichEmbed();
          if (embed.author) {
            embedRelay.setAuthor(embed.author.name, embed.author.iconURL, embed.author.url);
          }
          if (embed.color) {
            embedRelay.setColor(embed.color);
          }
          if (embed.description) {
            embedRelay.setDescription(embed.description);
          }
          if (embed.fields[0]) {
            embed.fields.forEach((field) => {
              embedRelay.addField(field.name, field.value);
            });
          }
          if (embed.image) {
            embedRelay.setImage(embed.image);
          }
          if (embed.thumbnail) {
            embedRelay.setThumbnail(embed.thumbnail);
          }
          if (embed.title) {
            embedRelay.setTitle(embed.title);
          }
          if (embed.timestamp) {
            embedRelay.setTimestamp(embed.timestamp);
          }
          if (embed.url) {
            embedRelay.setURL(embed.url);
          }
          destination.send(embedRelay);
        });
      }
    } else {
      destination.send({
        "embed": {
          "description": message.content,
          "author": {
            "name": message.author.username,
            "icon_url": message.author.displayAvatarURL
          }
        }
      });
      return;
    }
  }
});

client.login(config.token);
