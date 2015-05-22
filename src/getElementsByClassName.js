// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    // your code here
    outArr = [];
    explore(document.body, className);
    return outArr;
};

var explore = function(node, selector, accum){

    checkClass(node, selector);

    for (var i=0; i<node.childNodes.length; i++) {
        checkClass(node.childNodes[i], selector);
        if (node.childNodes[i].childElementCount) {
            explore(node.childNodes[i], selector);
        }
    }
};

var checkClass = function(node, selector){
    if ( node.classList ) {
        if ( node.classList.contains(selector) ) {
            outArr.push(node);
        }
    }
};