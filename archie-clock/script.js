var earlyMorning = 3;
var wakeupTime = 5;
var breakfast = 6;
var secondBreakfast = 8;
var napTime = 11;
var noon = 12;
var lunchTime = 13;
var afternoon = 15;
var dinnerTime = 17;
var evening = 18;
var night = 21;


var time = new Date().getHours();

//var isAdviceTime = false;

//var archieAdviceButton = document.getElementById("archieAdviceButton");
var wakeupTimeSelector = document.getElementById("wakeupTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");


var updateClock = function() {
  var archiePic = document.getElementById("archie");
  var message = document.getElementById("timeEvent");
  var messageText;
  var image = "img/4teethhappy.jpg";

  if(time == earlyMorning) {
    image = "img/rocketshirt.jpg";
    messageText = "HIIIIII MAMA!!!";
  } else if(time == wakeupTime) {
    image = "img/bluesteel.jpg";
    messageText = "Good Morning!!!";
  } else if(time == breakfast) {
    image = "img/sexywithclothes.jpg";
    messageText = "Hey girl...";
  } else if(time == secondBreakfast) {
    image = "img/vegetables.jpg";
    messageText = "Feed me, then let's go outside!";
  } else if(time == lunchTime) {
    image = "img/boogersandeggs.jpg";
    messageText = "I's hungry!!!";
  } else if(time == napTime) {
    image = "img/yardShot.jpg";
    messageText = "Sweet sleep.";
  } else if(time == afternoon) {
    image = "img/dadDeck.jpg";
    messageText = "Check out these buns!";
  } else if(time == dinnerTime) {
    image = "img/papagiggles.jpg";
    messageText = "Feed me, mama!";
  } else if(time == evening) {
    image = "img/tubShot.jpg";
    messageText = "The last hurrah!";
  } else if(time == night) {
    image = "img/sexypose.jpg";
    messageText = "What on earth are you doing awake???";
  } else {
    messageText = "Good day!";
  }

  message.innerText = messageText;
  archie.src = image;

  showCurrentTime();
};


var showCurrentTime = function() {
  var clock = document.getElementById('clock');
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  if(hours >= noon) {
    meridian = "PM";
  } if(hours > noon) {
    hours = hours -12;
  } if(minutes < 10) {
    minutes = "0" + minutes;
  } if(seconds < 10) {
    seconds = "0" + seconds;
  }
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
    clock.innerText = clockTime;
};


updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


/*var adviceEvent = function () {
  if(isAdviceTime === false) {
    isAdviceTime = true;
    time = adviceTime;
    archieAdviceButton.innerText = "Advice Time!";
    archieAdviceButton.style.backgroundColor = "#f4c242";
  } else {
    isAdviceTime = false;
    time = new Date().getHours();
    archieAdviceButton.innerText = "No soup for you!";
    archieAdviceButton.style.backgroundColor = "#AAA";
  }
};
*/

var wakeupEvent = function() {
  wakeupTime = wakeupTimeSelector.value;
};
var lunchEvent = function() {
  lunchTime = lunchTimeSelector.value;
};
var napEvent = function() {
  napTime = napTimeSelector.value;
};

//archieAdviceButton.addEventListener('click', adviceEvent);
wakeupTimeSelector.addEventListener('change', wakeupEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
