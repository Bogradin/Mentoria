var s = [[1, 3, 4, 7, 13], [1, 2, 4, 13, 15]];
var first = s[0];
var second = s[1];

var order = function(s) {
    
    let orderedString = [];

    while (first.length && second.length) {
        if (first[0] < second[0]) {
            orderedString.push(first.shift())
        } else {
            orderedString.push(second.shift())
        }
    }

    return [...orderedString, ...first, ...second]
}

var intersec = function(s) {

    let orderedString = order(s);
    let intersec = [];

    for (let i = 0; i < orderedString.length; i++){
        for (let j = 0; j < orderedString.length; j++){
            if (orderedString[i] = orderedString[j] && i < j) {
                intersec.push(orderedString[i])
            }
            if (i > j) {
                break
            }
        }
    }
    return intersec
}