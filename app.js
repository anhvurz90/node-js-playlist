console.log("hey ninjas");

setTimeout(function() {
  console.log("2 seconds have passed.");
}, 2000);

var time = 0;
setInterval(function() {
  time += 2;
  console.log(time  + " seconds have passed");
}, 2000);

var time1 = 0;
var timer = setInterval(function() {
  time1 += 3;
  console.log(time1 + " seconds have passed...");
  if (time1 > 10) {
    clearInterval(timer);
  }
}, 2000);
