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
                
                console.log("User submitted: " + radioValueOne);
                $("#incorrectAnswers").html(incorrectAnswers);
            }
        
            else if (radioValueOne === "rightChoice") {
                correctAnswers++;
                
                console.log("User submitted: " + radioValueOne);
                $("#correctAnswers").html(correctAnswers);
                
            }

            else {
                unansweredAnswers++;
                $("#unansweredAnswers").html(unansweredAnswers);
            }
            

            if (radioValueTwo === "wrongChoice") {
                incorrectAnswers++;
                
                console.log("User submitted: " + radioValueTwo);
                $("#incorrectAnswers").html(incorrectAnswers);
            }
        
            else if (radioValueTwo === "rightChoice") {
                correctAnswers++;
                
                console.log("User submitted: " + radioValueTwo);
                $("#correctAnswers").html(correctAnswers);
                
            }

            else {
                unansweredAnswers++;
                $("#unansweredAnswers").html(unansweredAnswers);
            }

            if (radioValueThree === "wrongChoice") {
                incorrectAnswers++;
                
                console.log("User submitted: " + radioValueThree);
                $("#incorrectAnswers").html(incorrectAnswers);
            }
        
            else if (radioValueThree === "rightChoice") {
                correctAnswers++;
                
                console.log("User submitted: " + radioValueThree);
                $("#correctAnswers").html(correctAnswers);
                
            }

            else {
                unansweredAnswers++;
                $("#unansweredAnswers").html(unansweredAnswers);
            }

            if (radioValueFour === "wrongChoice") {
                incorrectAnswers++;
                
                console.log("User submitted: " + radioValueFour);
                $("#incorrectAnswers").html(incorrectAnswers);
            }
        
            else if (radioValueFour === "rightChoice") {
                correctAnswers++;
                
                console.log("User submitted: " + radioValueFour);
                $("#correctAnswers").html(correctAnswers);
                
            }

            else {
                unansweredAnswers++;
                $("#unansweredAnswers").html(unansweredAnswers);
            }

            if (radioValueFive === "wrongChoice") {
                incorrectAnswers++;
                
                console.log("User submitted: " + radioValueFive);
                $("#incorrectAnswers").html(incorrectAnswers);
            }
        
            else if (radioValueFive === "rightChoice") {
                correctAnswers++;
                
                console.log("User submitted: " + radioValueFive);
                $("#correctAnswers").html(correctAnswers);
                
            }

            else {
                unansweredAnswers++;
                $("#unansweredAnswers").html(unansweredAnswers);
            }
            

    }
}

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Main Process +-+-+-+-+-+-+-+-+-+-+-+-+-+-//
runTimer();