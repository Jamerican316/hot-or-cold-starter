
var randomNumber = Math.floor(Math.random() * 100)+1;
console.log	(randomNumber);
var counter = 10;
//store users guess in variable
var $user_number_guess = $('#userGuess');
$(document).ready(function() {
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	//this the on sumbit function and receives user input
  	$("form").on("submit", function (evt){
		var $value_of_user_guess = $user_number_guess.val();
		var user_number_int = parseInt($value_of_user_guess);
		var difference =  Math.abs(randomNumber - user_number_int);evt.preventDefault();
         error(user_number_int, difference, $value_of_user_guess);
          youLose(user_number_int);
         $('feedback').empty(''); 
  		$user_number_guess.val('');
  		console.log(counter);
  	});

function error (guess, diff, val) {
	if ( guess > 100 || isNaN(guess)) {
  		alert("please enter a number between 1 and 100");
	} 
	else {
	game(guess, diff, val);
	}
}

function game(guess, diff, val) {
	counter--;
	$('#count').text(counter);
	if(guess === randomNumber) {
		$('#feedback').text('You Guess It!');
		$("form").css("display", "none");
		$("#guessList").append('<li>'+val+'</li>');
		playJokerLaugh ();
	}else if (diff >= 99) {
		$('#feedback').text("You're ICE COLD!!");
		$("#guessList").append('<li>'+val+'</li>');
		playJokerLaugh2 ();
	}else if (diff >= 50) {
		$('#feedback').text("Now you're cold...");
		$("#guessList").append('<li>'+val+'</li>');
		playJokerLaugh ();
	}else if (diff >= 30 || diff <= 49) {
		$('#feedback').text("You're getting warmer!");
		$("#guessList").append('<li>'+val+'</li>');
		playJokerLaugh ();
	}else if (diff >= 10 || diff <= 29) {
		$('#feedback').text("You're getting hot!");
		$("#guessList").append('<li>'+val+'</li>');
		playJokerLaugh2 ();
	}else if (diff >= 5 || diff <= 9) {
		$('#feedback').text("Now you're HOT!");
		$("#guessList").append('<li>'+val+'</li>');
		playJokerLaugh2 ();
	}else if (diff >= 1 || diff <= 4) {
		$('#feedback').text("You're burning up!");
		$("#guessList").append('<li>'+val+'</li>');
		playJokerLaugh2 ();
	}
}

function youLose (val) {
	if (counter === 0) {
		$('#count').text(counter);
		$('#feedback').text('YOU LOSE...');
		$("#guessList").append('<li>'+val+'</li>');
		$("form").css("display", "none");
		playJokerLaugh ();
	}
}
	//This resets the game
	$(".new").click(function(){
		$('#feedback').text('Make your Guess!');
		$('#guessList').empty();
		randomNumber = Math.floor(Math.random() * 100)+1;
		counter = 10;
		$('#count').text(counter);
		playJokerIntro ();
		$("form").css("display", "block");
	});

  	//These two funcintons clears placeholder text when input receives focus
  	$('input').focusin(function() {
		input = $(this);
		input.data('place-holder-text', input.attr('placeholder'));
		input.attr('placeholder', '');
	});

	$('input').focusout(function() {
		input = $(this);
		input.attr('placeholder', input.data('place-holder-text'));
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

