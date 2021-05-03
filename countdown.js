var countDownDate = new Date("Sep 24, 2021 24:00:00").getTime();

var myfunc = setInterval(function() {
    // code goes here


    }, 1000)

    var now = new Date().getTime();
var timeleft = countDownDate - now;
    
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days
document.getElementById("hours").innerHTML = hours 
document.getElementById("minutes").innerHTML = minutes 
// document.getElementById("seconds").innerHTML = seconds


if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("minutes").innerHTML = ""
    // document.getElementById("seconds").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}


// progress bar
var box = document.createElement('div');

box.className = 'complete';
document.getElementById('calendarBoxContainer').appendChild(box);

for (var i = 0; i < 172; i++){
    var box = document.createElement('div');

if(i < 172 - days){
    box.className = 'complete';
    document.getElementById('calendarBoxContainer').appendChild(box);

}
else{
    box.className = 'incomplete';
    document.getElementById('calendarBoxContainer').appendChild(box);
}
}

// progress percentage

let percentage = (172 - days) /172 * 100;
document.getElementById('percent').innerHTML = `You are ${percentage.toFixed(2)}% of the way finished with Lambda School!`
console.log(percentage.toFixed(2));

