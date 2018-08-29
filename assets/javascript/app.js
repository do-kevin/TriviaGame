//+-+-+-+-+-+-+-+-+-+-+-+-+-+- Global Variables+-+-+-+-+-+-+-+-+-+-+-+-+-+-//
var number = 10;
var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredAnswers = 0;

var radioValueOne;
var radioValueTwo;

//+-+-+-+-+-+-+-+-+-+-+-+-+-+- Functions +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-//


// `:checked` checks if the radio input has been selected
$("input[type='radio']").click(function() {
    radioValueOne = $("input[name='choice1']:checked").val();
});

$("input[type='radio']").click(function() {
    radioValueTwo = $("input[name='choice2']:checked").val();
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

        // Attempt to get it to reset
        // setInterval(function(){ 
        //     number = 10;
        //     runTimer();
        // }, 3000);

    //    for (i = 0; i < 1; i++) {
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

            else // if (radioValueOne === false || radioValueTwo === false) {
                unansweredAnswers++;
                $("#unansweredAnswers").html(unansweredAnswers);
            // }

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

            else // if (radioValueOne === false || radioValueTwo === false) {
                unansweredAnswers++;
                $("#unansweredAnswers").html(unansweredAnswers);
            // }
    //    }
    }
}



//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Main Process +-+-+-+-+-+-+-+-+-+-+-+-+-+-//
runTimer();