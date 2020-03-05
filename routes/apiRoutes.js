module.exports = function(app) {

  let extractedText = {user1: '', user2: ''};
  app.get('/api/tweets/:user1/:user2', async function(req, res) {
    await client.get('statuses/user_timeline', setParams(req.params.user1), function(
      error,
      tweets,
      response
    ) {
      if (!error) {
        let textArr = tweets.map(tweet => tweet.full_text);
        let text = '';
        textArr.forEach(item => (text += ` ${item}`));
        let replace = req.params.user1;
        let re = new RegExp(replace, 'g');
        extractedText.user1 = text.toLowerCase().replace(re, '');
      }
    });
    await client.get('statuses/user_timeline', setParams(req.params.user2), function(
      error,
      tweets,
      response
    ) {
      if (!error) {
        let textArr = tweets.map(tweet => tweet.full_text);
        let text = '';
        textArr.forEach(item => (text += ` ${item}`));
        let replace1 = req.params.user2;
        let re1 = new RegExp(replace1, 'g');
        extractedText.user2 = text.toLowerCase().replace(re1, '');
        res.json(extractedText);
      }
    });
  });
