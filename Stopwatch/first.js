let hour = 0
let minute = 0
let second = 0
let milisec = 0

let timer = false //this is saying that if the clock is active or not. if the value is false the it's not active. if the value is true then the clock is running

function start(){
   timer = true
   stopWatch() 
}
function stop(){
    timer = false
}
function reset(){
    timer = false
    hour = 0
    minute = 0
    second = 0
    milisec = 0

    document.getElementById("hr").innerHTML = "00" 
    document.getElementById("min").innerHTML = "00"
    document.getElementById("sec").innerHTML = "00"
    document.getElementById("ms").innerHTML = "00"
}

function stopWatch(){
    if(timer == true){
        milisec = milisec + 1

        if(milisec == 100){
            second += 1
            milisec = 0
        }
        if(second == 60){
            minute += 1
            second = 0
        }
        if(minute == 60){
            hour += 1
            minute = 0
            second = 0
        }
        let hrStr = hour
        let minStr = minute
        let secStr = second
        let msStr = milisec

        if(hour <10){
            hrStr = "0" + hrStr
        }
        if(minute <10){
            minStr = "0" + minStr
        }
        if(second <10){
            secStr = "0" + secStr
        }
        if(milisec <10){
            msStr = "0" + msStr
        }

        document.getElementById("hr").innerHTML = hrStr
        document.getElementById("min").innerHTML = minStr
        document.getElementById("sec").innerHTML = secStr
        document.getElementById("ms").innerHTML = msStr
        setTimeout("stopWatch()",10)  
    }
}