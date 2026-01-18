// this is where we'll work on the timer and the like. been a month between the two though, but you got this. anyway, should be simple

// * textContent will be replaed with the function
// * need do add functionality to the buttons
// * think ill be following a tutorial for this one just to get my toes wet



const display = document.getElementById("timerDis"); // setting the display
let timer = null; // initialising the timer 
let startTime = 0; // 
let elapsedTime = 0; // this is the time passed, this'll be displayed each time the timer stops
let isRunning = false; // used to determine wether the watch is runnig or not in order to pause or start

function startTimer(){

    if(!isRunning){
        startTime = Date.now()-elapsedTime;
        timer = setInterval(updateTimer, 10); // updating the display/timer every 10ms
        isRunning = true;
    }
}

function pauseTimer(){

    if(isRunning){
        clearInterval(timer); // clearing the timer stops it from updating the display
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
    
}

function resetTimer(){

    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    display.textContent = "00:00:00:00"
}

function updateTimer(){ // this will update the display

    const currentTime = Date.now(); // setting a current time to etablish out now
    elapsedTime = currentTime - startTime; // setting up our elapsed time by finging the difference between now and when we started the timer

    let hour = Math.floor(elapsedTime/(1000*60*60));
    let minute = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/1000%60);
    let miliseconds = Math.floor(elapsedTime%1000/10);

    hour = hour.toString().padStart(2, "0");
    minute = minute.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    miliseconds = miliseconds.toString().padStart(2, "0");

    display.textContent = `${hour}:${minute}:${seconds}:${miliseconds}`
}