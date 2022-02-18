
$(document).ready(function() {

  $('textarea').keyup(function() {
    
    let characterCount = $(this).val().length,
      current = $('#current'),
      theCount = $('#the-count');
      
    current.text(140 - characterCount);
   
    if (characterCount >= 141) {
      current.css('color', '#8f0001');
      current.text(140 - characterCount);
    }
  });
});


