"use strict";

// Create a new list item when clicking on the "Add" button//
function add() {
  var newLi = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var newText = document.createTextNode(inputValue);
  newLi.appendChild(newText);
  if (inputValue === "") {
    alert("you most write something");
  } else {
    document.getElementById("ul").appendChild(newLi);
  }

  document.getElementById("input").value = "";
 

  var deleteIcon = document.createElement("i");
  deleteIcon.className = "far fa-trash-alt";

  newLi.appendChild(deleteIcon);
  var close = document.getElementsByClassName("far fa-trash-alt");
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      var div = this.parentElement;
      div.style.display = "none";
    });
  }

  var editIcon = document.createElement("i");
  editIcon.className = "far fa-edit";

  newLi.appendChild(editIcon); //blow here edit function

  var edit = document.getElementsByClassName("far fa-edit");

  for (let i = 0; i < edit.length; i++) {
    edit[i].onclick = function (e) {
      let div = e.target.parentElement.firstChild.nodeValue;

      document.getElementById("input").value = div;
      input.focus();
      input.select();
      let addtaskbtn = document.getElementById("myBtn");
      let savetaskbtn = document.getElementById("savemyBtn");

      addtaskbtn.style.display = "none";
      savetaskbtn.style.display = "block";

      let savemyBtn = document.getElementById("savemyBtn");
      savemyBtn.onclick = function () {
        let Ul = document.getElementById("ul");
        Ul.children[i].firstChild.nodeValue =
          document.getElementById("input").value;
        addtaskbtn.style.display = "block";
        savetaskbtn.style.display = "none";
        document.getElementById("input").value = "";
      }; ///edit list here//
    };
  }
}



//add text when push on ENTER key
let input = document.getElementById("input");
input.onkeyup = function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    document.getElementById("myBtn").click();
  }
};

// Create a "close" button and append it to each list item
var ul = document.getElementById("ul");
var myList = document.getElementsByTagName("li");
for (var i = 0; i < myList.length; i++) {
  var deleteIcon = document.createElement("i");
  deleteIcon.className = "far fa-trash-alt";

  myList[i].appendChild(deleteIcon);
}

var close = document.getElementsByClassName("far fa-trash-alt");
for (var i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function () {
    var div = this.parentElement;

    div.style.display = "none";
  });
}



for (var i = 0; i < myList.length; i++) {
  var editIcon = document.createElement("i");
  editIcon.className = "far fa-edit";

  myList[i].appendChild(editIcon);
}

var edit = document.getElementsByClassName("far fa-edit");
for (let i = 0; i < edit.length; i++) {
  edit[i].onclick = function (e) {
    let div = e.target.parentElement.firstChild.nodeValue;

    document.getElementById("input").value = div;
    input.focus();
    input.select();
    let addtaskbtn = document.getElementById("myBtn");
    var savetaskbtn = document.getElementById("savemyBtn");

    addtaskbtn.style.display = "none";
    savetaskbtn.style.display = "block"; //enter here edit

    let saveBtn = document.getElementById("savemyBtn");
    saveBtn.onclick = function () {
      let ul = document.getElementById("ul");

      ul.children[i].firstChild.nodeValue =
        document.getElementById("input").value;
      addtaskbtn.style.display = "block";
      savetaskbtn.style.display = "none";

      document.getElementById("input").value = "";
    };
  };
}




/*anyother write in form//
     var di = div.replace(div,document.getElementById('input').value);
    e.target.parentElement.firstChild.nodeValue = di;*/
