console.log("Welcome to Magic notes");
showNotes();
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj ={
    title : addTitle.value,
    text : addtxt.value
  }

  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtxt.value ="";
  addTitle.value = "";
  console.log(notesObj);
  showNotes();
});
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text }</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
  });
  let notesElm = document.getElementById('notes');
  if(notesObj.length != 0){
    notesElm.innerHTML = html;
  }
  else{
    notesElm.innerHTML = `Nothing to show!`
  }
}

function deleteNote(index){
  console.log("deleting node", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();

}

search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
  
  let inputValue = search.value.toLowerCase();
  console.log("input event fired", inputValue);
  let noteCard = document.getElementsByClassName('noteCard');
  Array.from(noteCard).forEach(function(element){
    let cardTxt = element.getElementsByTagName('p')[0].innerText;
    console.log(cardTxt);
    if(cardTxt.includes(inputValue)){
      element.style.display= "block";
    }
    else{
      element.style.display= "none";
    }
  })
})