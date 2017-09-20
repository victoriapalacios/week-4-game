counter = 0
var wins = 0;
var losses = 0;
$('#wins').text(wins);
$('#losses').text(losses);

$( document ).ready(function newGame() {

  //Below is how the computer chooses the target number at random between 12 and 120
  var minNumber = 19;
  var maxNumber = 120;
  var randomTarget = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  console.log(randomTarget);
  $('#target').text(randomTarget);


  // Below is a while loop that creates an array of four numbers between
  //1 and 12 to assign to the snowflakes

  var snowflakeArray = []
  while(snowflakeArray.length < 4){
    var randomSnowflakeNumber = Math.ceil(Math.random()*12)
    if(snowflakeArray.indexOf(randomSnowflakeNumber) > -1) continue;
    snowflakeArray[snowflakeArray.length] = randomSnowflakeNumber;
  }
  console.log(snowflakeArray);


  // Below code assigns random number between 1 and 12 to each of the 4 crystals
  $( ".snowflake" ).click(function() {
    var clickedImage = $(this).attr('id');
    console.log(snowflakeArray[clickedImage]);

    // Below code adds together clicked image numbers - this is the users score
    var clickedValue = (snowflakeArray[clickedImage]);
    counter += clickedValue;
    console.log(counter);
    $('#counter').text(counter);

    // Below code is an if else statement that alerts when a player wins or goes over and looses
    if (randomTarget === counter) {
      $('#status').text('You WON :)');
      counter = 0;
      ++wins;
      $('#wins').text(wins);
      // Below ".off" removes the value of the snowflake click event so we can reattach a new value
      $( ".snowflake" ).off();
      newGame();


    }
    else if (counter >= randomTarget) {
      $('#status').text('YOU LOST :(');
      counter = 0;
      ++losses;
      $('#losses').text(losses);
      $( ".snowflake" ).off();
      newGame();
    }

  });

});
