const { render } = require("express/lib/response")

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]





$(() => {

  const $tweetcontainer = $('#tweetcontainer')

  const createTweetElement = function(inputData) {

  const $picture = $(`<img src="${inputData.user.avatars}">`);

  const $avatars = $($picture).addClass('avatars');
  const $name = $('<div>').text(`${inputData.user.name}`).addClass('name');
  const $handle = $('<div>').text(`${inputData.user.handle}`).addClass('handle lightcolor');
  const $user = $('<header>').addClass('user tweetheader');
  $user.append($avatars, $name, $handle);
  
  //create body 
  const $text = $('<div>').text(`${inputData.content.text}`).addClass('text');
  const $content = $('<section>').addClass('content tweetmain');
  $content.append($text);
  
  // create footer
    let $timeAgo = timeago.format(inputData.created_at);  

  const $created_at = $('<div>').text($timeAgo).addClass('created_at margin-top');
  
  const $icons1 = $(`<i class="fa-solid fa-flag icon">`).addClass('right margin-top')
  const $icons2 = $(`</i><i class="fa-solid fa-retweet icon"></i>`).addClass('margin-top')
  const $icons3 = $(`<i class="fa-regular fa-heart icon"></i>`).addClass('margin-top')
  const $tweetfooter = $('<footer>').addClass('tweetfooter smallfont');
  $tweetfooter.append($created_at, $icons1, $icons2, $icons3);
  
  
  // create artcle
  
  const $tweetarticle = $('<article>').addClass('tweetData articlebox');
    $tweetarticle.append($user, $content, $tweetfooter)

  // create section
  const $tweetbox = $('<section>').addClass('tweets')
    $tweetbox.append($tweetarticle)
   
    return $tweetbox

  }
  

  const renderTweets = function(tweets) {
    for (let tweet of tweets) 
     let $returnValue = createTweetElement(tweet)
     $tweetcontainer.append($returnValue)
    }

    renderTweets(data);

    console.log(renderTweets(data);
});




/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const inputData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}





$(() => {


  const createTweetElement = function(inputData) {

  const $picture = $(`<img src="${inputData.user.avatars}">`);

  const $avatars = $($picture).addClass('avatars');
  const $name = $('<div>').text(`${inputData.user.name}`).addClass('name');
  const $handle = $('<div>').text(`${inputData.user.handle}`).addClass('handle lightcolor');
  const $user = $('<header>').addClass('user tweetheader');
  $user.append($avatars, $name, $handle);
  
  //create body 
  const $text = $('<div>').text(`${inputData.content.text}`).addClass('text');
  const $content = $('<section>').addClass('content tweetmain');
  $content.append($text);
  
  // create footer
    let $timeAgo = timeago.format(inputData.created_at);  

  const $created_at = $('<div>').text($timeAgo).addClass('created_at margin-top');
  
  const $icons1 = $(`<i class="fa-solid fa-flag icon">`).addClass('right margin-top')
  const $icons2 = $(`</i><i class="fa-solid fa-retweet icon"></i>`).addClass('margin-top')
  const $icons3 = $(`<i class="fa-regular fa-heart icon"></i>`).addClass('margin-top')
  const $tweetfooter = $('<footer>').addClass('tweetfooter smallfont');
  $tweetfooter.append($created_at, $icons1, $icons2, $icons3);
  
  
  // create artcle
  
  const $tweetarticle = $('<article>').addClass('tweetData articlebox');
    $tweetarticle.append($user, $content, $tweetfooter)

  // create section
  const $tweetbox = $('<section>').addClass('tweets')
    $tweetbox.append($tweetarticle)
  
  const $tweetcontainer = $('#tweetcontainer')
 
  $tweetcontainer.append($tweetbox)
  }
  

  const $tweet = createTweetElement(inputData);


  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like





});






