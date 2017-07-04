// Calculate the pace needed to run a certain distance in a given amount of time

var distanceInput = document.getElementById("distance"),
    hoursInput = document.getElementById("hours"),
    minutesInput = document.getElementById("minutes"),
    secondsInput = document.getElementById("seconds"),
    calculateBtn = document.getElementById("calculate_btn"),
    paceText = document.getElementById("pace");

calculateBtn.addEventListener("click", function(){

    var kms = parseFloat(distanceInput.value),
        hours = parseFloat(hoursInput.value),
        minutes = parseFloat(minutesInput.value),
        seconds = parseFloat(secondsInput.value);
    
    validateInput(kms, distanceInput);
    validateInput(hours, hoursInput);
    validateInput(minutes, minutesInput);
    validateInput(seconds, secondsInput);

    var totalMinutes = hours*60+minutes+seconds/60,
        pace = totalMinutes/kms,
        paceMinutes = Math.floor(pace),
        paceSeconds = Math.round((pace-paceMinutes)*60);

    if(paceSeconds < 10)
        paceSeconds = "0" + paceSeconds;
    
    paceText.textContent = "You need to run " + paceMinutes + ":" +paceSeconds + " minutes per km";
});

function validateInput(value, input){
    if(isNaN(value)){
        input.style.borderColor = "red";
        return;
    }else input.style.borderColor = "initial";
}