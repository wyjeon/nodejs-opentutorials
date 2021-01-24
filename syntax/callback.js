/*
function a() {
  console.log("A");
}
*/

//익명함수, js에서 함수는 값이다
var a = function () {
  console.log("A");
};

function slowfunc(callback) {
  callback();
}

slowfunc(a);
