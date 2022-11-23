var stringIntersec = function(s) {
    first = s[0];
    second = s[1];
    let intersec = [];

    while (first.length && second.length) {
        if (first[0] < right[0]) {
            intersec.push(first.shift())
        } else {
            intersec.push(second.shift())
        }
    }

    return [...intersec, ...first, ...second]
}

s = [[1, 3, 4, 7, 13], [1, 2, 4, 13, 15]]
stringIntersec(s)