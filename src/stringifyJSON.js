// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  return process(obj);
};

var process = function(item) {

    // deal with null
    if ( item === null ) { return 'null'; }

    var t = typeof item;
    // return primitive types
    if ( t === 'string' ) { return '\"' + item + '\"'; }
    if ( t === 'boolean' || t === 'number' ) { return item.toString(); }

    // unwrap array
    if ( item.constructor === Array ) {
        // start an empty array
        var outArr = '[';
        // process each item in the array
        for (var i=0; i<item.length; i++) {
            if (i>0) { outArr += ','; }
            outArr = outArr + process(item[i]);
        }
        outArr += ']';
        return outArr;
    }

    // unwrap hash
    if ( item.constructor === Object ) {
        var outObj = '{',
            first = true;
        for (var key in item) {
            // skip functions and undefined
            if (typeof item[key] === ('function' || 'undefined')) {
                return '{}';
            }
            if ( !first ) { outObj += ','; }
            first = false;
            outObj += '\"' + key + '\":';
            outObj = outObj + process(item[key]);
        }
        outObj += '}';
        return outObj;
    }

    // catch all oops
    return '{}';

};

