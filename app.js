console.log("hey ninjas");

setTimeout(function() {
  console.log("2 seconds have passed.");
}, 2000);

var time = 0;
setInterval(function() {
  time += 2;
  console.log(time  + " seconds have passed");
}, 2000);
