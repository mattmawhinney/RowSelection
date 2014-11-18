$(function() {
  // Handler for .ready() called.
  $('button').click(function() {
    //http://api.jquery.com/parent/
    //http://api.jquery.com/toggleclass/
    $(this).parent().parent().toggleClass("red")
  });
});