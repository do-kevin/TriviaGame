//+-+-+-+-+-+-+-+-+-+-+-+-+-+- Global Variables+-+-+-+-+-+-+-+-+-+-+-+-+-+-//
var number = 45;
var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredAnswers = 0;

var radioValueOne;
var radioValueTwo;
var radioValueThree;
var radioValueFour;
var radioValueFive;

//+-+-+-+-+-+-+-+-+-+-+-+-+-+- Functions +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-//

// `:checked` checks if the radio input has been selected
$("input[type='radio']").click(function() {
    radioValueOne = $("input[name='choice1']:checked").val();
});

$("input[type='radio']").click(function() {
    radioValueTwo = $("input[name='choice2']:checked").val();
});

$("input[type='radio']").click(function() {
    radioValueThree = $("input[name='choice3']:checked").val();
});

$("input[type='radio']").click(function() {
    radioValueFour = $("input[name='choice4']:checked").val();
});

$("input[type='radio']").click(function() {
    radioValueFive = $("input[name='choice5']:checked").val();
});

// Timer
function runTimer() {
    // Clears timer set. This is placed in the beginning to prevent multiple instances.
    clearInterval(intervalId);
    // Triggers timerDown function every 1000 milliseconds. 
    intervalId = setInterval(timerDown, 1000);
    $("#results").hide();
}

function stopTimer() {
    clearInterval(intervalId);
}
    

function timerDown() {
    number--;
    $("#timeRemaining").html(number);

    if(number === 0) {
        stopTimer();

            if (radioValueOne === "wrongChoice") {
                incorrectAnswers++;
                $("#incorrectAnswers").html(incorrectAnswers);
            }
        
            else if (radioValueOne === "rightChoice") {
                correctAnswers++;
                $("#correctAnswers").html(correctAnswers);
                
            }

            else {
                unansweredAnswers++;
                $("#unansweredAnswers").html(unansweredAnswers);
            }
            

            if (radioValueTwo === "wrongChoice") {
                incorrectAnswers++;
                $("#incorrectAnswers").html(incorrectAnswers);
            }
        
            else if (radioValueTwo === "rightChoice") {
                correctAnswers++;
                $("#correctAnswers").html(correctAnswers);
                
            }

            else {
                unansweredAnswers++;
                $("#unansweredAnswers").html(unansweredAnswers);
            }

            if (radioValueThree === "wrongChoice") {
                incorrectAnswers++;
                $("#incorrectAnswers").html(incorrectAnswers);
            }
        
            else if (radioValueThree === "rightChoice") {
                correctAnswers++;
                $("#correctAnswers").html(correctAnswers);
                
            }

            else {
                unansweredAnswers++;
                $("#unansweredAnswers").html(unansweredAnswers);
            }

            if (radioValueFour === "wrongChoice") {
                incorrectAnswers++;
                $("#incorrectAnswers").html(incorrectAnswers);
            }
        
            else if (radioValueFour === "rightChoice") {
                correctAnswers++;
                $("#correctAnswers").html(correctAnswers);
                
            }

            else {
                unansweredAnswers++;
                $("#unansweredAnswers").html(unansweredAnswers);
            }

            if (radioValueFive === "wrongChoice") {
                incorrectAnswers++;
                $("#incorrectAnswers").html(incorrectAnswers);
            }
        
            else if (radioValueFive === "rightChoice") {
                correctAnswers++;
                $("#correctAnswers").html(correctAnswers);
                
            }

            else {
                unansweredAnswers++;
                $("#unansweredAnswers").html(unansweredAnswers);
            }
            
            setTimeout($("#results").fadeIn(), 46000);
    }
}

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Main Process +-+-+-+-+-+-+-+-+-+-+-+-+-+-//
runTimer();