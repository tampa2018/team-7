
//Adding posts
var posts = [];
var postID = 0;
//populate Array
function populateArray(){
  this.posts = defaultPosts();
}

function deft() {
  return this.posts[0].text;
}

function addPost(title, description, paragraph) {
  postID++;
  console.log(title, description, paragraph);
  var d = new Date();
  addDiv('w3-col l8 s12', 'card' + postID, 'w3-card-4 w3-margin w3-white');
  addDiv('card' + postID, 'container' + postID, 'w3-container');
  addElement('container' + postID, 'h3', 'title-' + postID, '<b>' + title + '</b>');
  addElement('container' + postID, 'h5', 'description-' + postID, description +  '<span class="w3-opacity"> April 20, 2018</span>');
  addDiv('card' + postID, 'container 2' + postID, 'w3-container');
  addElement('container 2' + postID, 'p', 'paragraph-' + postID, paragraph);
  addDiv('container 2' + postID, 'row' + postID, 'w3-row');
  addDiv('row' + postID, 'button' + postID, 'w3-col m8 s12');
  addButton('button' + postID);
  addDiv('row' + postID, 'col' + postID, 'w3-col m4 w3-hide-small');
  addElement('col' + postID, 'p', 'comments- + postID', '<span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-tag">0</span></span>');
}

function newPost(){
  addElement('submit', 'submithead', 'h2', 'User Post');
  addElement('submit', 'form', 'form', '<h2>User post</h2><form action="/action_page.php">Name:<br><input type="text" name="Name" value=""><br>Tags:<br><input type="text" name="Tags" value=""><br><br>Post:<br><textarea name="Post" cols="40" rows="5"></textarea><br><br><p><button type = "button" class="newpost" onClick="makeNewPost()"><b>Submit</b></button></p>');
}

function makeNewPost(){
  var t = document.getElementById('form').elements[0].value;
  var d = document.getElementById('form').elements[1].value;
  var p = document.getElementById('form').elements[2].value;
  addPost(t, d, p);
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
  button.setAttribute('onClick', 'like(this);');
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

  for (let i = 0; i < items.length; i++){
    elements.appendChild(items[i]);
  }

  wrapper[0].innerHTML = null;
  wrapper[0].appendChild(elements);
}

function like(button){
    //if (button.pressed != true || button.top == true){
    //if (button.pressed != true){
      button.value++;
      //button.pressed = true;
    //}
    button.children[1].innerHTML = '<b>' + button.value + '</b>';
    reArrange();
}


