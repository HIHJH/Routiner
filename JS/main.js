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
  var list = document.createElement("h4");
  
  var modify = document.createElement("input");
  modify.type = "button";
  modify.value = "수정";
  modify.style = "float:right; border:0px; background-color: transparent; font-size:13px;";
  var del = document.createElement("input");
  del.type = "button";
  del.value = "삭제";
  del.style = "float:right; border:0px; background-color: transparent; font-size:13px;";

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

    toDoList.append(
      div
    )

    div.append(
      list,
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

  list.addEventListener("click", function () {
    list.style.textDecoration = "line-through";
  });

  modify.addEventListener("click", function() {
    list.innerText="";
    var modInput = document.createElement("input");
    modInput.type = "text";
    modInput.id = "modInput";
    var modInBtn = document.createElement("input");
    modInBtn.type = "button";
    modInBtn.value = "수정";
    
    list.append(
    modInput,
    modInBtn
    );

    modInBtn.addEventListener("click", function(){
      var modIn = document.getElementById("modInput");
      list.innerText = modIn.value;
      /*
      밑줄 지우기 기능 오류
      list.style.textDecoration = "none";
      */
    });    
  })

  del.addEventListener("click", function(){
    if(!confirm('정말로 삭제하시겠습니까?')){
      return false;
    }
    else{
      div.remove();
    }
  })
});


