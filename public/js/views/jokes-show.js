(function(){

  // bb views
  var JokeShowView = Backbone.View.extend({
    events: {
      "click #new-joke": "renderJoke",
      "click #show-answer": "showAnswer"
    },
    renderJoke: function(e) {
      var randomjoke = _.sample( this.collection.toJSON() );
      this.$el.find('.jokes-wrapper h3').text(randomjoke['joke']);
      this.$el.find('.jokes-answer-wrapper').html(randomjoke['answer']);
      this.$el.find('#show-answer').show();
      this.$el.find('.jokes-answer-wrapper').hide();
    },
    showAnswer: function() {
      this.$el.find('.jokes-answer-wrapper').show();
    }
  });
  window.jokeShowView = new JokeShowView({
    el: "#panel2-1",
    collection: jokes
  });
})();