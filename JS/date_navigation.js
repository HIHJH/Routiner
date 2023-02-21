//이번주 날짜 표시
var currentDate = new Date();
var theYear = currentDate.getFullYear();
var theMonth = currentDate.getMonth();
var theDate = currentDate.getDate();
var theDay = currentDate.getDay();
var thisWeek = [];

for (var i = 1; i < 8; i++) {
  var resultDay = new Date(theYear, theMonth, theDate + (i - theDay));
  var mm = Number(resultDay.getMonth()) + 1;
  var dd = resultDay.getDate();

  thisWeek[i] = mm + "/" + dd;
}

var weekDate = document.getElementsByClassName("weekDate");

for (var j = 0; j < 7; j++) {
  weekDate[j].innerText = thisWeek[j + 1];
}

// circle 클릭하면 view 이동하는 기능

var circle = document.getElementsByClassName("circle");

/*
1. showRout의 자식 노드로 접근 & 반복문으로 구현하려 했으나 오류

var showRout = document.getElementsByClassName("showRout");
for(var k=0; k<7; k++){
  circle[k].addEventListener("click", function(){
    showRout.childNodes[k].scrollIntoView({behavior: "smooth"});
  })
}

2. class명 'box'로 통일하여 구현하려 했으나 오류

var box = document.getElementsByClassName("box");
for(var k=0; k<7; k++){
  circle[k].addEventListener("click", function(){
    box[k].scrollIntoView({behavior: "smooth"});
  })
}
*/

//일단 각각 ID로 접근하여 구현
circle[0].addEventListener("click", function () {
  var Mon = document.getElementById("Mon");
  Mon.scrollIntoView({ behavior: "smooth" });
});
circle[1].addEventListener("click", function () {
  var Tue = document.getElementById("Tue");
  Tue.scrollIntoView({ behavior: "smooth" });
});
circle[2].addEventListener("click", function () {
  var Wed = document.getElementById("Wed");
  Wed.scrollIntoView({ behavior: "smooth" });
});
circle[3].addEventListener("click", function () {
  var Thur = document.getElementById("Thur");
  Thur.scrollIntoView({ behavior: "smooth" });
});
circle[4].addEventListener("click", function () {
  var Fri = document.getElementById("Fri");
  Fri.scrollIntoView({ behavior: "smooth" });
});
circle[5].addEventListener("click", function () {
  var Sat = document.getElementById("Sat");
  Sat.scrollIntoView({ behavior: "smooth" });
});
circle[6].addEventListener("click", function () {
  var Sun = document.getElementById("Sun");
  Sun.scrollIntoView({ behavior: "smooth" });
});
