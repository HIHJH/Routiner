const condition = document.getElementsByClassName("condition")[0];
const inputBox = document.getElementById("inputValue");
const addToDo = document.getElementById("addToDo");

const date = document.getElementById("date");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const time = document.getElementById("time");
const minute = document.getElementById("minute");

// 일정 입력하면 조건창 뜨도록
function inputValueChange() {
  var inputValue = document.getElementById("inputValue").value;
  condition.style.display = inputValue.length > 0 ? "block" : "none";
}

// 일정 추가, 체크, 수정, 삭제
addToDo.addEventListener("click", function () {
  var div = document.createElement("div");
  var check_btn = document.createElement("input");
  var todo = document.createElement("span");
  var scheduled_time = document.createElement("span");
  var duration = document.createElement("span");
  var br = document.createElement("br");

  check_btn.type = "checkbox";

  var modify = document.createElement("input");
  modify.type = "button";
  modify.value = "수정";
  StyleBtn(modify);

  var del = document.createElement("input");
  del.type = "button";
  del.value = "삭제";
  StyleBtn(del);

  if (!inputBox.value) alert("내용을 입력해 주세요!");
  if (!date.value) alert("요일을 선택해주세요!");
  if (!startTime.value || !endTime.value) alert("시간을 입력해주세요!");
  else {
    var toDoList = document.getElementById(`${date.value}`);
    todo.innerText = inputBox.value;
    scheduled_time.innerText = `예정 시간 : ${startTime.value} ~ ${endTime.value}`;
    duration.innerText = `(${time.value || "0"}시간 ${
      minute.value || "0"
    }분 일찍 출발하세요.)`;

    toDoList.append(div);
    div.append(check_btn, todo, br, del, modify, scheduled_time, duration);

    Initialize([inputBox, date, startTime, endTime, time, minute]);
    condition.style.display = "none";
  }

  check_btn.addEventListener(
    "click",
    () =>
      (todo.style.textDecoration = check_btn.checked ? "line-through" : "none")
  );

  modify.addEventListener("click", () => {
    todo.innerText = "";
    var modInput = document.createElement("input");
    modInput.type = "text";
    modInput.id = "modInput";
    var modInBtn = document.createElement("input");
    modInBtn.type = "button";
    modInBtn.value = "수정";

    todo.append(modInput, modInBtn);

    modInBtn.addEventListener("click", function () {
      var modIn = document.getElementById("modInput");
      todo.innerText = modIn.value;
    });
  });

  del.addEventListener("click", () => {
    if (!confirm("정말로 삭제하시겠습니까?")) {
      return false;
    } else {
      div.remove();
    }
  });
});

// 초기화
function Initialize(elements) {
  return elements.map((el) => (el.value = ""));
}

// 버튼 스타일
function StyleBtn(btn) {
  return (btn.style =
    "float:right; border:0px; background-color: transparent; font-size:13px;");
}
