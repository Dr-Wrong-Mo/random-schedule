let randomList = [];
let weekStart = 1;

function shuffle() {
  for (let i = 0; randomList.length > 0; i++) {
    let list = document.getElementById("schedule");
    let line = document.createElement("p");
    let x = randomList.length;
    let n = Math.round(Math.random()*(x-1));

    line.innerHTML = 

      randomList.splice(n, 1) + " will present on week " + (i+1);

    list.appendChild(line);
  };
  document.getElementById("newGroup").focus();
  document.getElementById("newGroup").select();
}

function addToList(newGroup) {
  if (document.getElementById("newGroup").value === "") {
    document.getElementById("newGroup").placeholder = "must have value";
  } else {
    randomList.push(newGroup);
    document.getElementById("schedule").innerHTML = "";
    document.getElementById("groupList").innerHTML = randomList;
    document.getElementById("newGroup").value = "";
    document.getElementById("newGroup").placeholder = "";
    document.getElementById("newGroup").focus();
    document.getElementById("newGroup").select();
  }
}

function clearList() {
  document.getElementById("schedule").innerHTML = "<p></p>";
  document.getElementById("groupList").innerHTML = "";
  document.getElementById("newGroup").value = "";
  document.getElementById("newGroup").focus();
  document.getElementById("newGroup").select();
  randomList = [];
};