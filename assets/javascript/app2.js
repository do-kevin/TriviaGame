//============================ Global Variables ===========================//
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

//================================ Functions ================================//

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

//+-+-+-+-+-+-+-+-+-+-+-+-+-+- Timers +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-//
function runTimer1() {
    clearInterval(intervalId);
    intervalId = setInterval(timerDown1, 1000);
}

function runTimer2() {
    clearInterval(intervalId);
    intervalId = setInterval(timerDown2, 1000);
}

function runTimer3() {
    clearInterval(intervalId);
    intervalId = setInterval(timerDown3, 1000);
}

function runTimer4() {
    clearInterval(intervalId);
    intervalId = setInterval(timerDown4, 1000);
}

function runTimer5() {
    clearInterval(intervalId);
    intervalId = setInterval(timerDown5, 1000);
}

//+-+-+-+-+-+-+-+-+-+-+-+-+-+- Time Stoppers +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-//
function stopTimer() {
    clearInterval(intervalId);
}
    
//+-+-+-+-+-+-+-+-+-+-+-+-+-+- Timer Downs +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-//
function timerDown1() {
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
        setTimeout(number = 45, 5000);
        setTimeout(runTimer2(), 5000);
    }
}

function timerDown2() {
    number--;
    $("#timeRemaining").html(number);

    if(number === 0) {
        stopTimer();

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
            setTimeout(number = 45, 5000);
            setTimeout(runTimer3(), 5000);
    }
}

function timerDown3() {
    number--;
    $("#timeRemaining").html(number);

    if(number === 0) {
        stopTimer();

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
            setTimeout(number = 45, 5000);
            setTimeout(runTimer4(), 5000);
    }
}

function timerDown4() {
    number--;
    $("#timeRemaining").html(number);

    if(number === 0) {
        stopTimer();

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
            setTimeout(number = 45, 5000);
            setTimeout(runTimer5(), 5000);
    }
}

function timerDown5() {
    number--;
    $("#timeRemaining").html(number);

    if(number === 0) {
        stopTimer();

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
    }
}

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Main Process +-+-+-+-+-+-+-+-+-+-+-+-+-+-//
runTimer1();