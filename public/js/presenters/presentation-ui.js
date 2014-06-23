(function() {

  var PresentationUI = function() {

    var joke = {};

    $(document).on("click", '#new-joke', function() {
      joke = bl.getRandJokeObject();
      console.log("id - ", joke['id']);
      console.log("joke - ", joke['joke']);
      console.log("answer - ", joke['answer']);

      $('.jokes-wrapper').empty().text(joke['joke']);

      $('#show-answer').show();
      $('.jokes-answer-wrapper').empty();

    });

    $(document).on("click", "#show-answer", function() {
      console.log("this.joke - ", joke);
      $('.jokes-answer-wrapper').html("<strong>Answer:</strong>" + joke['answer']);
    });


  };

  // this runs it
  window.presentationUI = new PresentationUI();

})();