$(document).ready(function(){
  $("#start-button").click(function(){
// ----------------------------------------------------------------
 // declaring the value for the timer to 60 seconds
 // hide the start button and rules
    var number = 20;
    $("#start-button").on("click", start);  // starts the games 
    $("#submit").on("click", finish);  // submits answers and finishes the game
// ----------------------------------------------------------------
// functions
    function start(){
        counter = setInterval(timer, 1000);
        showMe(".question");
        hideMe("#start-button");
        hideMe(".rules");
        hideMe("#restart");
    }
    function timer(){
      number-- // decrements the timer by 1
      $("#show-number").html("<h2>Time remaining: " + number + " seconds</h2>" );
      if (number === 0){
        alert("Times Up!")
        stop(); // calls the stop function
      }
    }
    function stop(){
        clearInterval(counter); // stops the timer
        $("#results").show();
        $("#restart").show();
    }
    function finish(){
        number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
        clearInterval(counter); // stops the timer
        timer();
    }

    function restart(){
        number = 20;
        start();
    }

    function hideMe(e) {
        $(e).hide();
    }
    function showMe(e) {
        $(e).show();
    }

    start(); // calls the start function
  });
});




    function submitQuiz() {
        console.log('submitted');

    // get each answer score
        function answerScore (qName) {
            var radiosNo = document.getElementsByName(qName);

            for (var i = 0, length = radiosNo.length; i < length; i++) {
                if (radiosNo[i].checked) {
            // do something with radiosNo
                    var answerValue = Number(radiosNo[i].value);
                }
            }
            // change NaNs to zero
            if (isNaN(answerValue)) {
                answerValue = 0;
            }
            return answerValue;
        }

    // calc score with answerScore function
        var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
        console.log("CalcScore: " + calcScore); // it works!

    // function to return correct answer string
        function correctAnswer (correctStringNo, qNumber) {
            console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
            return ("Correct answer for number " + qNumber + " is: <strong>" +
                (document.getElementById(correctStringNo).innerHTML) + "</strong>");
            }

    // print correct answers if wrong
        if (answerScore('q1') === 0) {
            document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
        }
        if (answerScore('q2') === 0) {
            document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
        }
        if (answerScore('q3') === 0) {
            document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
        }
        if (answerScore('q4') === 0) {
            document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
        }

    // calculates score
        var questionCountArray = document.getElementsByClassName('question');

        var questionCounter = 0;
        for (var i = 0, length = questionCountArray.length; i < length; i++) {
            questionCounter++;
        }

    // shows score
        var showScore = "Your Score: " + calcScore +"/" + questionCounter;
    // if all correct: "Perfect!"
        if (calcScore === questionCounter) {
            showScore = showScore + "<br> <strong>Perfect!</strong>"
        };
        document.getElementById('userScore').innerHTML = showScore;
    }

$(document).ready(function() {

    $('#submitButton').click(function() {
        $(this).addClass('hide');
    });

});

