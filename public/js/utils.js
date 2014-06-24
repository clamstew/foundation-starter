(function(){

  var Utils = function() {

    this.ramdomNumber = function(max, min){
      // max is the highest randome number - it starts at 0
      // then 10 tells it to cut off the number before the decimal point and round down
      // the 1 adds one in case it gets 0 and rounds down
      return parseInt(Math.random() * max, 10) + 1;
    };

  };

  window.utils = new Utils();
})();