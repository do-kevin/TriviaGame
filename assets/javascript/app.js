alert("JavaScript is linked");


//Variables
var number = 5;
var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswers = 0;

var radioValue;

// Functions

// var radioValue = $("input[name='choice']").val();


$("input[type='radio']").click(function() {
    radioValue = $("input[name=choice]:checked").val();
    console.log(radioValue);
});





//=============================== Timer =============================================//
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
        if(radioValue === "wrongChoice"){
            incorrectAnswers++;
            
            console.log("User submitted: " + radioValue);
            $("#incorrectAnswers").html(incorrectAnswers);
        }
    
        else if(radioValue === "rightChoice"){
            correctAnswers++;
            
            console.log("User submitted: " + radioValue);
            $("#correctAnswers").html(correctAnswers);
            
        }
    }
}



// Main Process
runTimer();