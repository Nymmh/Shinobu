const imdb = require('imdb-api');

module.exports = {
  desc: "Search for either a movie or serie on imdb.",
  usage: "<movie/serie>",
  aliases: [],
  cooldown: 5,
  guildOnly: true,
  task(bot, msg, suffix) {
    if (!suffix) return 'wrong usage';
    imdb.get(suffix).then(movie => {
      bot.createMessage(msg.channel.id, {
        content: ``,
        embed: {
          color: 0xf4ce11,
          type: `rich`,
          author: {
            name: `${movie.title}`,
            icon_url: ``
          },
          description: `${movie.plot}`,
          url: `${movie.imdburl}`,
          image: {
            url: `${movie.poster}`
          },
          fields: [{
              name: `Rated:`,
              value: `${movie.rated}`,
              inline: true
            },
            {
              name: `Runtime:`,
              value: `${movie.runtime}`,
              inline: true
            },
            {
              name: `Languages:`,
              value: `${movie.languages}`,
              inline: true
            },
            {
              name: `Awards:`,
              value: `${movie.awards}`,
              inline: true
            },
            {
              name: `Rating:`,
              value: `${movie.rating}`,
              inline: true
            },
            {
              name: `Type:`,
              value: `${movie.type}`,
              inline: true
            },
            {
              name: `Genres:`,
              value: `${movie.genres}`,
              inline: false
            },
            {
              name: `Released:`,
              value: `${movie.released}`,
              inline: false
            }
          ],
          footer: {
            icon_url: `https://b.catgirlsare.sexy/xgTw.png`,
            text: `All information is provided by imdb`
          }
        }
      }).catch(err => {
        bot.createMessage(msg.channel.id, {
          content: ``,
          embed: {
            color: 0xff0000,
            author: {
              name: ``,
              url: ``,
              icon_url: ``
            },
            description: `${err}`,
            fields: [{
              name: `For support join:`,
              value: `https://discord.gg/Vf4ne5b`,
              inline: true
            }]
          }
        });
      });
    }).catch(err => {
      bot.createMessage(msg.channel.id, {
        content: ``,
        embed: {
          color: 0xff0000,
          author: {
            name: ``,
            url: ``,
            icon_url: ``
          },
          description: `${err}`,
          fields: [{
            name: `For support join:`,
            value: `https://discord.gg/Vf4ne5b`,
            inline: true
          }]
        }
      });
    });
  }
};