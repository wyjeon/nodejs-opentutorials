var fs = require("fs");

/*
//readFileSync, 리턴 값을 준다.
console.log("A");
var result = fs.readFileSync("syntax/sample.txt", "utf8");
console.log(result);
console.log("C");
*/

//readFile, 콜백함수를 3번째 인자로 준다.
console.log("A");
fs.readFile("syntax/sample.txt", "utf8", function (err, result) {
  console.log(result);
});
console.log("C");
