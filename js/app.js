
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
  		playJokerIntro ();
  	});

  	//These two funcintons clears placeholder text when input receives focus
  	$('input').focusin(function() {
		input = $(this);
		input.data('place-holder-text', input.attr('placeholder'))
		input.attr('placeholder', '');
		instructions ();
	});

	$('input').focusout(function() {
		input = $(this);
		input.attr('placeholder', input.data('place-holder-text'));
	});

  	//this the on sumbit function and receives user input
  	$("form").on("submit", function (evt){
  		evt.preventDefault();


  		//This counts the number of user guesses
		counter++;
 	 	$('#count').text(counter);
  		

  		//store users guess in variable
  		var $user_number_guess = $('#userGuess');

  		//this variable holds the vaule of user guess, which is currently a string
  		var $value_of_user_guess = $user_number_guess.val();

  		//To display the user guess history//
  		$("#guessList").append('<li>'+$value_of_user_guess+'</li>');
		

  		//Calculates the difference between random number and guessed number//
  		var difference =  Math.abs(randomNumber - parseInt($value_of_user_guess));

		
					if (parseInt($value_of_user_guess) === randomNumber) {
			  			$('#feedback').text('You Guess It!');
			  			playJokerLaugh ();
			  		}if (difference >= 99) {
			  			$('#feedback').text("You're ICE COLD!!");
			  			playJokerLaugh ();
			  		}if (difference >= 50 && difference < 99) {
			  			$('#feedback').text("Now you're cold...");
			  			playJokerLaugh ();
			  		}if (difference >= 30 && difference < 50) {
			  			$('#feedback').text("You're getting warmer!");
			  			playJokerLaugh ();
			  		}if (difference >= 10 && difference < 30) {
			  			$('#feedback').text("You're getting hot!");
			  			playJokerLaugh2 ();
			  		}if (difference >= 5 && difference < 10) {
			  			$('#feedback').text("Now you're HOT!");
			  			playJokerLaugh2 ();
			  		}if (difference >= 1 && difference < 5) {
			  			$('#feedback').text("You're burning up!");
			  			playJokerLaugh2 ();
		  			}
  		 $user_number_guess.val('');
  	});
});

function playJokerIntro () {
  $('#hello-ladies-and-gents')[0].volume = 0.5;
  $('#hello-ladies-and-gents')[0].load();
  $('#hello-ladies-and-gents')[0].play();
}

function playJokerLaugh () {
  $('#joker-laugh')[0].volume = 0.5;
  $('#joker-laugh')[0].load();
  $('#joker-laugh')[0].play();
}

function playJokerLaugh2 () {
  $('#joker-laugh2')[0].volume = 0.5;
  $('#joker-laugh2')[0].load();
  $('#joker-laugh2')[0].play();
}

function instructions () {
  $('#instructions')[0].volume = 0.5;
  $('#instructions')[0].load();
  $('#instructions')[0].play();
}
