//global variables
//-----------------------------------------

var pinkCrystal = 0;
var purpleCrystal = 0;
var greenCrystal = 0;
var yellowCrystal = 0;

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;


//functions
//-----------------------------------------
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function () {
    //reset current score
    currentScore = 0;
    //set new target score from 19-120
    targetScore = getRandom(19, 120);
    //set different values for each crystal from 1-12
    pinkCrystal = getRandom(1, 12);
    purpleCrystal = getRandom(1, 12);
    greenCrystal = getRandom(1, 12);
    yellowCrystal = getRandom(1, 12);

    $("#pink").val(pinkCrystal);
    $("#purple").val(purpleCrystal);
    $("#green").val(greenCrystal);
    $("#yellow").val(yellowCrystal);

    //adjust html to reflect changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    //testing
    console.log("--------------------------------------");
    console.log("Target Score: " + targetScore);
    console.log("Pink: " + pinkCrystal + " | Purple: " + purpleCrystal + " | Green: " + greenCrystal + " | Yellow: " + yellowCrystal);
    console.log("--------------------------------------");



}

var checkWin = function() {
    if (currentScore === targetScore) {
        winCount++
        $("#winCount").html(winCount)
        startGame();
        console.log("You Win!")
    } else if (currentScore > targetScore) {
        lossCount++
        $("#lossCount").html(lossCount)
        startGame();
        console.log("You Lose!")
    }
    
}

var addValues = function (selector) {
    var value = selector.val();
    currentScore = Number(value) + currentScore;
    $("#yourScore").html(currentScore);
    checkWin();
    console.log(currentScore);
}





//main process
//-----------------------------------------
startGame();

$("#pink").click(function () {
    var gem = $("#pink");
    addValues(gem);

})

$("#purple").click(function () {
    var gem = $("#purple");
    addValues(gem);
})

$("#green").click(function () {
    var gem = $("#green");
    addValues(gem);
})

$("#yellow").click(function () {
    var gem = $("#yellow");
    addValues(gem);
})