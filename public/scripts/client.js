/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  createTweetElement;

  const $tweet = $(`<article class="tweet">Hello world</article>`);


  // Within the client.js file, we're going to define a function createTweetElement that takes in a 
  // tweet object and is responsible for returning a tweet <article> element containing the entire HTML structure of the tweet.


// });








// notes from Andy lecture 



const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right element

// const $species = $('<h2>').text('OgSpecifies: Human'); 
// const $header = $('<header>').addClass('header'); 

// $header.append($species).append($colour); 
// shorthand for append 
// $header.append($species, $colour)


// This is a security concern 
// const $section = $(`
// <section class="body"> aksjdfl;askdjfasldkj;f </section>
// `) ;