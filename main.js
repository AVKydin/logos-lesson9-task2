
// TASK2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


btn.addEventListener('click', function () {
  let leftNotebook = document.querySelector(".left-notebook");
  let div = document.createElement("div");
  div.style.display = "flex";
  div.style.justifyContent = "start";
  div.className = "taskLi";

  let p = document.createElement("p");
  let checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "checkbox";
  checkbox.style.width = "15px";
  checkbox.style.marginBottom = "15px";
  checkbox.style.marginTop = "15px";
  p.style.marginTop = "12px";
  let block = document.querySelector(".left-notebook");
  let task = document.querySelector("#task");
  let btnWarning = document.querySelector(".btn-warning");
  let warning1 = document.querySelector(".warning1");
  let btnWarning2 = document.querySelector(".btn-warning2");
  let warning2 = document.querySelector(".warning2");

console.log(warning1);

  block.appendChild(div);
  let string = document.createElement("div");
  string.style.display = "flex";
  div.appendChild(string);
    if (task.value == "") {
      warning2.style.display = "block";
      
    } else {
      newString();
  }

function newString() {
  string.append(checkbox, p);
  p.innerText = `${task.value}`;
  task.value = "";
}


  
  checkbox.onclick = function () {
    if (document.querySelectorAll(".taskLi").length < 2) {
      console.log(warning1.style.display);
      warning1.style.display = "block";
    } else {
      div.remove();

    }
    
  };

  btnWarning.onclick = function () {
    warning1.style.display = "none";
  };

  btnWarning2.onclick = function () {
    warning2.style.display = "none";
  };




})
