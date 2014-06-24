(function() {

  var PresentationUI = function() {

    var joke = {};

    $(document).on("click", '#new-joke', function() {
      joke = bl.getRandJokeObject();

      if (joke) {
        $('.jokes-wrapper h3').empty().text(joke['joke']);
        $('#show-answer').show();
        $('.jokes-answer-wrapper').empty();
      } else {
        $('.jokes-wrapper h3').empty().text("No jokes are available at this time.  Try again in a few seconds...");
      }

    });

    $(document).on("click", "#show-answer", function() {
      // make sure to escape any code in your jokes and answers by using acsii characters in the yaml or db
      // since we are telling programming jokes it is a distinct possibility
      $('.jokes-answer-wrapper').html("<strong>Answer: </strong>" + joke['answer']);
    });

    $(document).on("click", "#add-new-joke-submit", function(){
      var joke = $('#new-joke-input').val()
        , answer = $('#new-joke-answer-input').val()
        , newId = jokes.length + 1
      ;
      bl.addJokeToLocalJokes(newId, joke, answer);
    });


  };

  // this runs it
  window.presentationUI = new PresentationUI();

})();