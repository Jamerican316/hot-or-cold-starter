

var randomNumber = Math.floor(Math.random() * 100)+1;
var counter = 0;
$(document).ready(function(){
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//This resets the game
  	$(".new").click(function(){
  		$('#feedback').text('Make your Guess!');
  		$('#guessList').empty();
  		randomNumber = Math.floor(Math.random() * 100)+1;
  		counter = 0
  		$('#count').text(counter);
  	});

  	//
  	$("form").on("submit", function (evt){
  		evt.preventDefault();

  		//This counts the number of user guesses
  		$('#count').text(counter);
  		counter++;

  		//store users guess in variable
  		var $user_number_guess = $('#userGuess');

  		//this variable holds the vaule of user guess, which is currently a string
  		var $value_of_user_guess = $user_number_guess.val();

  		//To display the user guess history//

  		$("#guessList").append('<li>'+$value_of_user_guess+'</li>');

  		//Counts the number of guesses//


  		//Calculates the difference between random number and guessed number//
  		var difference =  Math.abs(randomNumber - parseInt($value_of_user_guess));

  		if (parseInt($value_of_user_guess) === randomNumber) {
  			$('#feedback').text('You Guess It!');
  		}if (difference >= 99) {
  			$('#feedback').text("You're ICE COLD!!");
  		}if (difference >= 50 && difference < 99) {
  			$('#feedback').text("Now you're cold...");
  		}if (difference >= 30 && difference < 50) {
  			$('#feedback').text("You're getting warmer!");
  		}if (difference >= 10 && difference < 30) {
  			$('#feedback').text("You're getting hot!");
  		}if (difference >= 5 && difference < 10) {
  			$('#feedback').text("Now you're HOT!");
  		}if (difference >= 1 && difference < 5) {
  			$('#feedback').text("You're burning up!");
  		}

  		 $user_number_guess.val('');
  	});
});


