
// 

function growTree (inputInfo) {
  //value from how tall
  var treeHeight = document.getElementById("treeHeight").value;
  //value from character
  var treeChar = document.getElementById("treeChar").value;
  //add space
  var growTree = "";

  
     {for (var i =0; +<treeHeight.height; i ++)}
     
     {for (var j = 0; +<treeHeight.height - (i + 1); j++) 
         growTree +=" ";}
  
     for (var t = 0; t ((i * 2)+ 1); t++)
      growTree +="_";
    
   
console.log(growTree)
button.addEventListener("click", growTree);

}







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
//   	console.log( stackLetters) ;
//   	if ((i + 1) % 3 === 0){
//   		stackLetters +=" ";

//   	}

// }
//button.addEventListener("click");