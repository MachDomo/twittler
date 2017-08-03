// Twittler Javascript

$(document).ready(function(){
  // Generates and displays initial Tweets
  updateTweets();

  // Show New Tweets Button
  $('.tweet-update').on('click', 'button', function() {
    updateTweets();
  });


});

/* Specs: 
1. Be able to show the user new tweets. Either automatically as they are created, or with a button X
2. Display Timestamps of new created tweets
3. Design the Interface
4. Clicking on a username shows that user's timeline.
*/


// SPEC 1: SHOW NEW TWEETS WITH A BUTTON
// Updates the DOM with new tweets

var updateTweets = function() {
    var $body = $('.tweet-log');
    $body.html('');
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.appendTo($body);
      index -= 1;
    }
  }; 

