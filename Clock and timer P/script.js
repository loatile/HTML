const timeDis = document.getElementById("timeDis")
const countdownDis = document.getElementById("countdownDis")

function updateClock(){
    const now = new Date()
    timeDis.textContent = now.toLocaleTimeString()
}
setInterval(updateClock, 1000)
updateClock()
function updateCountdown(){
    const now = new Date() // what time is it now? this establishes our starting point
    const midnight = new Date() // creates a copy of now which will be useful later

// welcome to later. the time for midnight has now been set. 
// whole process of setting the initial value of midnight is so we can treet it like an actual timer to be manipulated later
// you see, in order for now and midnight to interact, they both have to me times
    midnight.setHours(24, 0, 0, 0) 
    

    const diff = midnight - now // this is the time between now and midnight

// setting the actual values for each of the times

    const hour = Math.floor(diff / (1000 * 60 * 60));
    const minute = Math.floor((diff / (1000 * 60)) % 60);
    const second = Math.floor((diff / 1000) % 60);

// the actual display
    countdownDis.textContent = `${hour}h: ${minute}m: ${second}s`
}
setInterval(updateCountdown, 1000)
updateCountdown()