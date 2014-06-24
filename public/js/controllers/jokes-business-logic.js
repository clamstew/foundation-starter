(function(){

  window.jokes = [];

  // will run on page load
  $.get('/api/jokes', function(data) {
    jokes = data;
  });

  // business logic constructor function
  var BusinessLogic = function() {
    // picks a random id from the available ids in the jokes array
    this.pickRandomIdFromJokes = function() {
      var maxId = window.jokes.length;
      var idChoosen = utils.ramdomNumber(maxId);
      return idChoosen;
    };

    //
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
      if (joke && answer) {
        var newJokeObj = {
          id: id,
          joke: joke,
          answer: answer
        };
        console.log("what is the new joke object ->", newJokeObj);
        jokes.push(newJokeObj);
        bl.addJokeToServerJokes(newJokeObj);
      } else {
        $('#joke-submit-form-response').text('Make sure you entered a joke and answer!!!!!');
      }
    };

    this.addJokeToServerJokes = function(newJokeObj) {
      $.ajax({
        type: "POST",
        url: "/api/jokes/create",
        data: {'joke': newJokeObj},
        dataType: 'json',
        cache: "false",
        timeout: "7000", // 7 seconds
        success: function(data) {
          console.log("what data does my server give back", data);
          if (data['success']) {
            $("#joke-submit-form-response").text(data['message']);
            $('#new-joke-input').val('');
            $('#new-joke-answer-input').val('');
          } else {
            $("#joke-submit-form-response").text(data['message']);
          }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          $("#joke-submit-form-response").removeClass().addClass('error')
              .html("there was a " + errorThrown + "error due to a " + textStatus + "condition")
        }
      });
    };
  };

  window.bl = new BusinessLogic();

})();







