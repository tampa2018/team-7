
var postID = 0;

function addPost() {
  postID++;
  var html = '<b>NEW POST</b>';
  addDiv('w3-col l8 s12', 'card' + postID, 'w3-card-4 w3-margin w3-white');
  addDiv('card' + postID, 'container' + postID, 'w3-container');
  addElement('container' + postID, 'div', 'post-' + postID, html);
}

function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementsByClassName(parentId)[0];
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function addDiv(parentId, elementID, classID){
    var div = document.createElement("div");
    div.setAttribute('id', elementID);
    div.class = classID;
    var p = document.getElementsByClassName(parentID)[0];
    alert("I am alert");
    p = document.getElementByID(parentID);
    p.appendChild(div);
}
