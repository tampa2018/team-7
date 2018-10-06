
//Adding posts

var postID = 0;

function addPost(title, description, paragraph) {
  postID++;
  var d = new Date();
  addDiv('w3-col l8 s12', 'card' + postID, 'w3-card-4 w3-margin w3-white');
  addDiv('card' + postID, 'container' + postID, 'w3-container');
  addElement('container' + postID, 'h3', 'title-' + postID, '<b>' + title + '</b>');
  addElement('container' + postID, 'h5', 'description-' + postID, 'Title description, <span class="w3-opacity">April 20, 2018</span>');
  addDiv('card' + postID, 'container 2' + postID, 'w3-container');
  addElement('container 2' + postID, 'p', 'paragraph-' + postID, 'This is a paragraph');
  addDiv('container 2' + postID, 'row' + postID, 'w3-row');
  addDiv('row' + postID, 'button' + postID, 'w3-col m8 s12');
  addButton('button' + postID);
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
  button.setAttribute('onClick', 'like(this)');
  button.setAttribute('value', '0');
  var image = document.createElement('img')
  image.setAttribute('src', 'Images\\like.jpg');
  image.setAttribute('alt', 'Header');
  image.setAttribute('width', '30');
  image.setAttribute('height', '30');
  button.appendChild(image);
  var likes = document.createElement('p');
  likes.innerHTML = '<b>0</b>';
  button.appendChild(likes);
  var p = document.getElementById(parentId);
  p.appendChild(button);
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
  var wrapper = document.getElementsByClassName("w3-col l8 s12");
  var items = Array.prototype.slice.call(wrapper[0].children);
  items.sort(function(a,b){return b.children[1].children[1].children[0].children[0].value - a.children[1].children[1].children[0].children[0].value});
  var elements = document.createDocumentFragment();

  for(let i = 0; i < items.length; i++){
    elements.appendChild(items[i]);
  }

  wrapper[0].innerHTML = null;
  wrapper[0].appendChild(elements);
}

function like(button){
    //if (button.pressed != true || button.top == true){
      button.value++;
      //button.pressed = true;
    //}
    button.children[1].innerHTML = '<b>' + button.value + '</b>';
    reArrange();
}
