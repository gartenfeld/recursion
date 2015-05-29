// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

    var output = [],

        explore = function (node) {
            for (var i=0; i<node.childNodes.length; i++) {
                check(node.childNodes[i]);
                if (node.childNodes[i].childElementCount) {
                    explore(node.childNodes[i]);
                }
            }
        },

        check = function (node) {
            if ( node.classList && node.classList.contains(className) ) {
                output.push(node);
            }
        };

    check(document.body);
    explore(document.body);

    return output;

};