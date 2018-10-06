
//Adding posts

var postID = 0;

function addPost() {
  postID++;
  addDiv('w3-col l8 s12', 'card' + postID, 'w3-card-4 w3-margin w3-white');
  addDiv('card' + postID, 'container' + postID, 'w3-container');
  addElement('container' + postID, 'h3', 'title-' + postID, '<b>NEW POST</b>');
  addElement('container' + postID, 'h5', 'description-' + postID, 'Title description, <span class="w3-opacity">April 20, 2018</span>');
  addDiv('card' + postID, 'container 2' + postID, 'w3-container');
  addElement('container 2' + postID, 'p', 'paragraph-' + postID, 'This is a paragraph');
  addDiv('container 2' + postID, 'row' + postID, 'w3-row');
  addDiv('row' + postID, 'button' + postID, 'w3-col m8 s12');
  addElement('button' + postID, 'button')
  addDiv('row' + postID, 'col' + postID, 'w3-col m4 w3-hide-small');
  addElement('col' + postID, 'p', 'comments- + postID', '<span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-tag">0</span></span>');
}

function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function addButton(parentId){
  var button = document.createElement('button');
  button.setAttribute('class', "w3-button w3-padding-large w3-white w3-border");
  var image = document.createElement('img')
  image.setAttribute('src', 'Images\like.jpg');
  image.setAttribute('alt', 'Header');
  image.setAttribute('width', '30');
  button.setAttribute('img')
}

function addDiv(parentId, elementID, classID){
    var div = document.createElement('div');
    div.setAttribute('id', elementID);
    div.setAttribute('class', classID);
    var p = document.getElementsByClassName(parentId)[0];
    if (p == undefined){
      p = document.getElementById(parentId);
    }
    p.appendChild(div);

}

//Rearranging Posts

function reArrange(){
  var arr = [2,1,0];
  var wrapper = document.getElementsByClassName("w3-col l8 s12");
  var items = wrapper[0].children;
  var arr;
  for (let i = 0; i < items.length; i++){
    arr[i] = parseInt(items[i].childNodes[1].childNodes[1].childNodes[0].childNodes[0].value);
  }
  var elements = document.createDocumentFragment();

  arr.forEach(function(idx) {
      elements.appendChild(items[idx].cloneNode(true));
  });

  wrapper[0].innerHTML = null;
  wrapper[0].appendChild(elements);
}
