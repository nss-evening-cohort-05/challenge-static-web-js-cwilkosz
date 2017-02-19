
var button = document.getElementById("tree");
var treeObj = {};
function inputInfo(){
  treeObj = {
    treeHeight:document.getElementById("treeHeight").value,
    treeChar:document.getElementById("treeChar").value
  }
  growTree(treeObj)
}
function growTree (treeObj) {
  
  var growTree = "";
  

  
  for (var i =0; i <treeObj.treeHeight; i ++){
    
    for (var j = 0; j<treeObj.treeHeight - (i + 1); j++){ 
      growTree +=" ";
   
    }

    for (var t = 0; t <((i * 2)+ 1); t++){
      growTree += treeObj.treeChar;
    }
    growTree+="\n";
    
  }

  
  console.log(growTree)
    
}  


button.addEventListener("click", inputInfo);

console.log(document)
document.addEventListener('keyup',function(e){
  if (e.keyCode ===13){
      inputInfo()

  }
})


