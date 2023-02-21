var currentDate = new Date();
var theYear = currentDate.getFullYear();
var theMonth = currentDate.getMonth();
var theDate = currentDate.getDate();
var theDay = currentDate.getDay();
var weekDate = document.getElementsByClassName("weekDate");

for (var i = 1; i < 8; i++) {
  var resultDay = new Date(theYear, theMonth, theDate + (i - theDay));
  var month = Number(resultDay.getMonth()) + 1;
  var day = resultDay.getDate();

  weekDate[i - 1].innerText = month + "/" + day;
}

// circle 클릭하면 view 이동하는 기능

var circle = document.getElementsByClassName("circle");
var showRout = document.querySelector(".showRout");

for (var k = 0; k < 7; k++) {
  circle[k].addEventListener("click", function () {
    showRout.childNodes[k].scrollIntoView({ behavior: "smooth" });
  });
}
