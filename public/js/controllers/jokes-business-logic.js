(function(){

  window.jokes = [];

  // will run on page load
  $.get('/api/jokes', function(data) {
    jokes = data;
  });

  // JOKES DISPLAY business logic constructor function
  var BusinessLogic = function() {
    // picks a random id from the available ids in the jokes array
    this.pickRandomIdFromJokes = function() {
      var maxId = window.jokes.length;
      var idChoosen = utils.ramdomNumber(maxId);
      return idChoosen;
    };

    // this funciton uses this.pickRandomIdFromJokes() to find an id of a joke randomly
    // this this function returns the joke object
    // or false if no the jokes array is empty (like if the api takes a second to return the data)
    this.getRandJokeObject = function() {
      if (jokes.length) {
        // the index starts at zero - so minus 1
        var id = this.pickRandomIdFromJokes() - 1;
        var jokeObj = window.jokes[id];
        return jokeObj;
      } else {
        return false;
      }
    };

    this.addJokeToLocalJokes = function(id, joke, answer) {
      var newJokeObj = {
        id: id,
        joke: joke,
        answer: answer
      };
      console.log("what is the new joke object", newJokeObj);
      // add the new joke to window.jokes
      jokes.push(newJokeObj);
      bl.addJokeToServerJokes(newJokeObj)
    };
    this.addJokeToServerJokes = function(newJokeObj) {
      $.ajax({
        type: 'POST',
        url: '/api/jokes/create',
        data: newJokeObj,
        dataType: 'json',
        cache: false,
        timeout: 7000, // seven seconds
        success: function(data)  {
          console.log("what data came back from server -> ", code);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown)  {
          $('form #response').removeClass().addClass('error')
                      .html('<p>There was an <strong>' + errorThrown +
                          '</strong> error due to a <strong>' + textStatus +
                          '</strong> condition.</p>').fadeIn('fast');
        },
        complete: function(XMLHttpRequest, status)  {
          $('form')[0].reset();
        }
      });
    };
    this.storeLocalToldJokes = function() {};
  };

  window.bl = new BusinessLogic();

})();