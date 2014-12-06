
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/* Generate the secret number */
  		function getRandom (){
  		var randomNumber = Math.floor(Math.random() * 101);
		}

	function newGame () {
			getRandom();
			var userGuess = $("#guessButton").val();
			if (userGuess >= (randomNumber > 50)){
				$("#feedback").append("Ice Cold!");
				$("#count").count();
				$("#guessList").append(userGuess);
      }
				else if (userGuess >= ((randomNumber >= 30) && (randomNumber <= 50)) {
					$("#feedback").append("Cold");
					$("#count").count();
					$("#guessList").append(userGuess);
				}
					else if (userGuess >= ((randomNumber >= 20) && (randomNumber <= 30)) {
						$("#feedback").append("Warm");
						$("#count").count();
						$("#guessList").append(userGuess);
					}
						else if (userGuess >= ((randomNumber >= 10) && (randomNumber <= 20)) {
						$("#feedback").append("Hot");
						$("#count").count();
						$("#guessList").append(userGuess);
					}
							else if (userGuess >= ((randomNumber >= 1) && (randomNumber <= 10)) {
							$("#feedback").append("Very hot");
							$("#count").count();
							$("#guessList").append(userGuess);
						}
				else (userGuess == randomNumber){

				}
				}
}


});


