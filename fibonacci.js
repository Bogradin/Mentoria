function fib(n) {
    var x;
    var answer = 0;
    if (n > 2){
        answer = fib(n-1) + fib(n-2);
        n = n - 1;
    }
    else if (n != 0){
        return 1
    }
    return answer
}