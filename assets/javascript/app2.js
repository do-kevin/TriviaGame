//============================ Global Variables ===========================//
var number = 15;
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
$("input[type='radio']").click(function () {
    radioValueOne = $("input[name='choice1']:checked").val();
});

$("input[type='radio']").click(function () {
    radioValueTwo = $("input[name='choice2']:checked").val();
});

$("input[type='radio']").click(function () {
    radioValueThree = $("input[name='choice3']:checked").val();
});

$("input[type='radio']").click(function () {
    radioValueFour = $("input[name='choice4']:checked").val();
});

$("input[type='radio']").click(function () {
    radioValueFive = $("input[name='choice15']:checked").val();
});

//+-+-+-+-+-+-+-+-+-+-+-+-+-+- Timers +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-//
function runTimer1() {
    number = 15;
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredAnswers = 0
    clearInterval(intervalId);
    intervalId = setInterval(timerDown1, 1000);
    $(".questionTwo").hide();
    $(".questionThree").hide();
    $(".questionFour").hide();
    $(".questionFive").hide();
    $("#results").hide();
    $(".questionOne").fadeIn();
}

function runTimer2() {
    clearInterval(intervalId);
    intervalId = setInterval(timerDown2, 1000);
    $(".questionOne").fadeOut();
    $(".questionThree").hide();
    $(".questionFour").hide();
    $(".questionFive").hide();
    $(".questionTwo").fadeIn();
}

function runTimer3() {
    clearInterval(intervalId);
    intervalId = setInterval(timerDown3, 1000);
    $(".questionOne").hide();
    $(".questionTwo").fadeOut();
    $(".questionFour").hide();
    $(".questionFive").hide();
    $(".questionThree").fadeIn();
}

function runTimer4() {
    clearInterval(intervalId);
    intervalId = setInterval(timerDown4, 1000);
    $(".questionOne").hide();
    $(".questionThree").fadeOut();
    $(".questionTwo").hide();
    $(".questionFive").hide();
    $(".questionFour").fadeIn();
}

function runTimer5() {
    clearInterval(intervalId);
    intervalId = setInterval(timerDown5, 1000);
    $(".questionOne").hide();
    $(".questionThree").hide();
    $(".questionFour").fadeOut();
    $(".questionTwo").hide();
    $(".questionFive").fadeIn();
}

//+-+-+-+-+-+-+-+-+-+-+-+-+-+- Time Stopper +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-//
function stopTimer() {
    clearInterval(intervalId);
}
//+-+-+-+-+-+-+-+-+-+-+-+-+-+- Timer Downs +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-//
function timerDown1() {
    number--;
    $("#timeRemaining").html(number);

    if (number === 0) {
        stopTimer();

        if (radioValueOne === "wrongChoice") {
            incorrectAnswers++;
            $("#incorrectAnswers").html(incorrectAnswers);
            $("#theAnswer1").html("<h4>Q1 Answer: Eyes</h4>");
        }

        else if (radioValueOne === "rightChoice") {
            correctAnswers++;
            $("#correctAnswers").html(correctAnswers);

        }

        else {
            unansweredAnswers++;
            $("#unansweredAnswers").html(unansweredAnswers);
        }
        setTimeout(number = 15, 5000);
        setTimeout(runTimer2(), 5000);
    }
}

function timerDown2() {
    number--;
    $("#timeRemaining").html(number);

    if (number === 0) {
        stopTimer();

        if (radioValueTwo === "wrongChoice") {
            incorrectAnswers++;
            $("#incorrectAnswers").html(incorrectAnswers);
            $("#theAnswer2").html("<h4>Q2 Answer: Akira Kurosawa</h4>");
        }

        else if (radioValueTwo === "rightChoice") {
            correctAnswers++;
            $("#correctAnswers").html(correctAnswers);

        }

        else {
            unansweredAnswers++;
            $("#unansweredAnswers").html(unansweredAnswers);
        }
        setTimeout(number = 15, 5000);
        setTimeout(runTimer3(), 5000);
    }
}

function timerDown3() {
    number--;
    $("#timeRemaining").html(number);

    if (number === 0) {
        stopTimer();

        if (radioValueThree === "wrongChoice") {
            incorrectAnswers++;
            $("#incorrectAnswers").html(incorrectAnswers);
            $("#theAnswer3").html("<h4>Q3 Answer: Greed</h4>");
        }

        else if (radioValueThree === "rightChoice") {
            correctAnswers++;
            $("#correctAnswers").html(correctAnswers);

        }

        else {
            unansweredAnswers++;
            $("#unansweredAnswers").html(unansweredAnswers);
        }
        setTimeout(number = 15, 5000);
        setTimeout(runTimer4(), 5000);
    }
}

function timerDown4() {
    number--;
    $("#timeRemaining").html(number);

    if (number === 0) {
        stopTimer();

        if (radioValueFour === "wrongChoice") {
            incorrectAnswers++;
            $("#incorrectAnswers").html(incorrectAnswers);
            $("#theAnswer4").html("<h4>Q4 Answer: Nonlinear Storytelling</h4>");
        }

        else if (radioValueFour === "rightChoice") {
            correctAnswers++;
            $("#correctAnswers").html(correctAnswers);

        }

        else {
            unansweredAnswers++;
            $("#unansweredAnswers").html(unansweredAnswers);
        }
        setTimeout(number = 15, 5000);
        setTimeout(runTimer5(), 5000);
    }
}

function timerDown5() {
    number--;
    $("#timeRemaining").html(number);

    if (number === 0) {
        stopTimer();

        if (radioValueFive === "wrongChoice") {
            incorrectAnswers++;
            $("#incorrectAnswers").html(incorrectAnswers);
            $("#theAnswer5").html("<h4>Q5 Answer: Filmmaking & Storytellingg</h4>");
        }

        else if (radioValueFive === "rightChoice") {
            correctAnswers++;
            $("#correctAnswers").html(correctAnswers);

        }

        else {
            unansweredAnswers++;
            $("#unansweredAnswers").html(unansweredAnswers);
        }
        $("#results").fadeIn();
    }
}

function restartButton() {
    runTimer1();
    $(".theAnswers").empty();
}

//=============================== Main Process ============================//
runTimer1();