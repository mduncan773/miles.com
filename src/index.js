var $ = require('jquery');

$(document).ready(function(){
  var count = 0;
  var adder = $('#increment');
  var subtractor = $('#decrement');
  var reset = $('#reset');
  var counter = $('#count');

  // render initial count
  counter.html(count);

  adder.on('click',function(e){
    e.preventDefault();
    count++;
    counter.html(count);
  });

  subtractor.on('click',function(e){
    e.preventDefault();
    count--;
    counter.html(count);
  });

  reset.on('click',function(e){
    e.preventDefault();
    count = 0;
    counter.html(count);
  });
});
