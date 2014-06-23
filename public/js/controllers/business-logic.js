(function(){
  window.jokes;

  // will run on page load
  $.get('/api/jokes', function(data) {
    jokes = data;
  });

  // business logic constructor function
  var BusinessLogic = function() {
    // picks a random id from the available ids in the jokes array
    this.pickRandomIdFromJokes = function() {
      var maxId = window.jokes.length;
      var idChoosen = utils.ramdomNumber(undefined, maxId);
      return idChoosen;
    };

    // 
    this.getRandJokeObject = function() {
      // the index starts at zero - so minus 1
      var id = this.pickRandomIdFromJokes() - 1;
      var jokeObj = window.jokes[id];
      return jokeObj;
    };
  };

  window.bl = new BusinessLogic();

})();