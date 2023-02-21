const condition = document.getElementsByClassName("condition")[0];
const inputBox = document.getElementById("inputValue");
const addToDo = document.getElementById("addToDo");

const date = document.getElementById("date");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const time = document.getElementById("time");
const minute = document.getElementById("minute");

function inputValueChange() {
  var inputValue = document.getElementById("inputValue").value;
  if (inputValue.length > 0) {
    condition.style.display = "block";
  } else {
    condition.style.display = "none";
  }
}

addToDo.addEventListener("click", function () {
  var div = document.createElement("div");
  var span = document.createElement("span");
  var span2 = document.createElement("span");
  var span3 = document.createElement("span");
  var span4 = document.createElement("span");
  var check_btn = document.createElement("input");
  var list = document.createElement("span");
  var br = document.createElement("br");

  check_btn.setAttribute("type", "checkbox");

  var modify = document.createElement("input");
  modify.type = "button";
  modify.value = "수정";
  modify.style =
    "float:right; border:0px; background-color: transparent; font-size:13px;";
  var del = document.createElement("input");
  del.type = "button";
  del.value = "삭제";
  del.style =
    "float:right; border:0px; background-color: transparent; font-size:13px;";

  if (!inputBox.value) alert("내용을 입력해 주세요!");
  if (!date.value) alert("요일을 선택해주세요!");
  if (!startTime.value || !endTime.value) alert("시간을 입력해주세요!");
  else {
    var toDoList = document.getElementById(`${date.value}`);
    span.innerText = startTime.value;
    span2.innerText = endTime.value;
    span3.innerText = time.value || "0";
    span4.innerText = minute.value || "0";
    list.innerText = inputBox.value;

    toDoList.append(div);

    div.append(
      check_btn,
      list,
      br,
      del,
      modify,
      "예정 시간 : ",
      span,
      " ~ ",
      span2,
      " (",
      span3,
      "시간",
      span4,
      "분 일찍 출발하세요.",
      ")"
    );

    inputBox.value = "";
    date.value = "";
    startTime.value = "";
    endTime.value = "";
    (time.value = ""), (minute.value = "");
    condition.style.display = "none";
  }

  check_btn.addEventListener("click", function () {
    list.style.textDecoration = check_btn.checked ? "line-through" : "none";
  });

  modify.addEventListener("click", function () {
    list.innerText = "";
    var modInput = document.createElement("input");
    modInput.type = "text";
    modInput.id = "modInput";
    var modInBtn = document.createElement("input");
    modInBtn.type = "button";
    modInBtn.value = "수정";

    list.append(modInput, modInBtn);

    modInBtn.addEventListener("click", function () {
      var modIn = document.getElementById("modInput");
      list.innerText = modIn.value;
    });
  });

  del.addEventListener("click", function () {
    if (!confirm("정말로 삭제하시겠습니까?")) {
      return false;
    } else {
      div.remove();
    }
  });
});

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
