
var button = document.getElementById("tree");
var treeObj = {};
function inputInfo(){
  treeObj = {
    treeHeight:document.getElementById("treeHeight").value,
    treeChar:document.getElementById("treeChar").value
  }
  //console.log(treeObj)
  growTree(treeObj)
}
function growTree (treeObj) {
  //console.log("tree")
  //value from how tall
  //var treeHeight = document.getElementById("treeHeight").value;
  //value from character
  //var treeChar = document.getElementById("treeChar").value;
  //add space
  var growTree = "";
  //console.log("treeHeight",inputInfo.treeHeight)

  
  for (var i =0; i <treeObj.treeHeight; i ++){
    //console.log("inside1loop")
    for (var j = 0; j<treeObj.treeHeight - (i + 1); j++){ 
      growTree +=" ";
    //  console.log("inside2nd4loop")
    }

    for (var t = 0; t <((i * 2)+ 1); t++){
      growTree += treeObj.treeChar;//treechar goes here
    }
    growTree+="\n";
    //console.log(growTree)made many trees
  }

  
  console.log(growTree)
    
}  

//console.log(growTree)
button.addEventListener("click", inputInfo);

console.log(document)
document.addEventListener('keyup',function(e){
  if (e.keyCode ===13){
      inputInfo()

  }
})



//keyCode :===13 if (cipher_char === from_char)
// //{
//    result = result + to_char;
//    x++;
// } 


// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree



//1. A key that specifies the height of the pine tree.
//1. The value for the height of the tree should be from user input in a `<input type="text">` field in the DOM.
//1. A key that specifies which character to use to build the pine tree.
//1. The character to use should be from user input in a `<input type="text">` field in the DOM.

// for (var i =0; i<alphabet.length; i++){
//     stackLetters += alphabet[i]
//    console.log( stackLetters) ;
//    if ((i + 1) % 3 === 0){
//      stackLetters +=" ";

//    }

// }
//button.addEventListener("click");