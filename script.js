
var postID = 0;

function addPost() {
  postID++;
  var html = '<b>NEW POST</b>';
  addElement('w3-row', 'h3', 'post-' + postID, html);
}

function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    alert("I am alert");
    var p = document.getElementsByClassName(parentId)[0];
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}
