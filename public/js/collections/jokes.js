(function() {
  var Jokes = Backbone.Collection.extend({
    url: '/api/jokes',
    model: Joke,
  });
  window.jokes = new Jokes();
  jokes.fetch();

  // jokes.create({
  //   joke: "Who wrote Othello?",
  //   answer: "William Shakespeare"
  // });
})();
