$(document).ready(function() {
  const height = parseInt(prompt("How tall are you in inches?"));

  if (height >= 60) {
    $('.Tall').show();
    $('.Short').show();
    $('.Short').css('color', 'blue')
    $('.Tall').css('color', 'blue')
  } else {
    $('.Short').show()
    $('.Short').css('color', 'blue')
  }




});