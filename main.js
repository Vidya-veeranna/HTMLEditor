function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text/html", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text/html");
  var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.id = "dragedele";
  ev.target.appendChild(nodeCopy);
  editableDragEle();
}

function editableDragEle() {
  var codeDiv = document.getElementById("code");
  for (i = j = 0; i < codeDiv.childNodes.length; i++) {
    codeDiv.childNodes[i].removeAttribute("readonly");
  }
}

const btnload = document.getElementById("btnchooseFile");
const textArea = document.getElementById("chooseFile");

btnload.addEventListener("click", () => {
  textArea.click();
});
