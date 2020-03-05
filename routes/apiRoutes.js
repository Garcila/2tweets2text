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
    });
  });
