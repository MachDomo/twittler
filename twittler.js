// Twittler Javascript

$(document).ready(function(){
  // Generates and displays initial Tweets
  display.updateTweets();

  // Show New Tweets Button
  $('.tweet-update').on('click', 'button', function() {
    display.updateTweets();
  });
  
  // Shows user's timeline when username is clicked
  $('.filterByUser').on('click', function() {
    display.tweetsByUser($(this).text());
  })


});

/* Specs: 
1. Be able to show the user new tweets. Either automatically as they are created, or with a button X
2. Display Timestamps of new created tweets X
3. Design the Interface
4. Clicking on a username shows that user's timeline. X
*/



var display = {
  updateTweets : function() {
    var $body = $('.tweet-log');
    $body.html('');
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<br>' + '<div class="tweet container">'  + '@' +  '<a href=# class="filterByUser">' + tweet.user + '</a>' + ': ' + tweet.message + '<br>' + '['+ tweet.created_at + ']' + '</div>' );
      
      $tweet.appendTo($body);
      index -= 1;
    }
    this.resetUserFilter();
  },
  tweetsByUser : function(user) {
    var $body = $('.tweet-log');
    $body.html('');
    var index = streams.users[user].length - 1;
    while(index >= 0){
      var tweet = streams.users[user][index];
      var $tweet = $('<br>' + '<div class="tweet container">' + '@' + '<a href=# class="filterByUser">' + tweet.user + '</a>' + ': ' + tweet.message + '<br>' + '['+ tweet.created_at + ']' + '</div>');
      $tweet.appendTo($body);
      index -= 1;
    }
    this.resetUserFilter();
  },
  resetUserFilter : function() {
    $('.filterByUser').on('click', function() {
    display.tweetsByUser($(this).text());
    })
  }
} 

