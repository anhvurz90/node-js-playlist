var fs = require("fs");

var myReadStream = fs.createReadStream("readMe.txt", "utf8");
var myWriteStream = fs.createWriteStream("writeMe16.txt");

myReadStream.pipe(myWriteStream);
