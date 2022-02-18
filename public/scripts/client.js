
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
    const $tweetContainer = $('.tweetcontainer');
    $tweetContainer.empty();

    for (let tweet of tweets)  {
     let $returnValue = createTweetElement(tweet)
     $tweetcontainer.prepend($returnValue)
    }
return $tweetContainer
};


// get info from tweets
const loadTweets = function() {
  $.ajax ({
    url: '/tweets',
    method: 'GET'
  }).then((tweets) => {
  renderTweets(tweets);
})
}
// run
loadTweets();

$('#error1').hide();
$('#error2').hide();

// event listener for tweets
$('#submitTweet').on('submit', function (event) {
  event.preventDefault();

  // length errors
  const tweetLength = $('#tweet_text').val().length;
  $('#error1').hide();
$('#error2').hide();

    if (tweetLength <= 0) {
      $('#error2').hide();
      $('#error1').slideDown();
      }
    
    if (tweetLength > 140) {
      $('#error1').hide();
      $('#error2').slideDown();
    }
else {
  $('.counter').val('140');

  // seralize the info from input
  $('#error1').hide();
$('#error2').hide();
  const data = $(this).serialize();
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: data
    }).then(() => {
      $('#tweet_text').val('').focus();
      loadTweets(); })
    }
})

});