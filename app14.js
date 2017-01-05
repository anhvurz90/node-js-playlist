var fs = require("fs");
var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
var myWriteStream = fs.createWriteStream("writeMe.txt");

myReadStream.on("data", function(chunk) {
  console.log("New chunk received:\n" + chunk);
  myWriteStream.write(chunk);
});
