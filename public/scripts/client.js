/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const $avatars = $(`<i class="fa-solid fa-crow"></i>`).addClass('avatars');
  const $name = $('<div>').text(`Ms. Crow`).addClass('name');
  const $handle = $('<div>').text('@CrowFacts').addClass('handle lightcolor');
  const $user = $('<header>').addClass('user tweetheader');
  $user.append($avatars, $name, $handle);
  
  //create body 
  const $text = $('<div>').text(`Tweet written from input above.`).addClass('text');
  const $content = $('<section>').addClass('content tweetmain');
  $content.append($text);
  
  // create footer
  const $created_at = $('<div>').text('1 year ago').addClass('created_at margin-top');
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
  
});






