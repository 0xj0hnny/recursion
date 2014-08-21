// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var result = []; 
  //check if document.body contains elemet with className
  if(document.body.classList.contains(className)){
  	result.push(document.body);
  }

  //check if other level of the DOM contains the element with the className
  var checkChild = function(node){
  	var child = node.childNodes;
  	if(child.length > 0){
  		for(var i = 0; i < child.length; i++){
  			if(child[i] instanceof HTMLElement && child[i].classList.contains(className)){
  				result.push(child[i]);
  			}
  			checkChild(child[i]);
  		}
  	}
  };

  checkChild(document.body);
  return result; 
};