const Twitter = require('twitter');
require('dotenv').config();

const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret,
});

const setParams = param => {
  return {screen_name: param, count: 100, tweet_mode: 'extended'};
};

module.exports = function(app) {
  let extractedText = {user1: '', user2: ''};
  app.get('/api/tweets/:user1/:user2', async function(req, res) {
    await client.get(
      'statuses/user_timeline',
      setParams(req.params.user1),
      function(error, tweets, response) {
        if (!error) {
          let textArr = tweets.map(tweet => tweet.full_text);
          let text = '';
          textArr.forEach(item => (text += ` ${item}`));
          extractedText.user1 = text;
        }
      }
    );
    await client.get(
      'statuses/user_timeline',
      setParams(req.params.user2),
      function(error, tweets, response) {
        if (!error) {
          let textArr = tweets.map(tweet => tweet.full_text);
          let text = '';
          textArr.forEach(item => (text += ` ${item}`));
          extractedText.user2 = text;
          res.json(extractedText);
        }
      }
    );
  });
};
