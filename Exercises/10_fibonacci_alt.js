const getFibonacci = function fibonacci(n){
    n = parseInt(n, 10);
        if (n < 0){
            return "OOPS"
        }
        else if (n <= 1)
            return n;
        else{
            let a = 0;
            let b = 1;
            let c = n;
            for(let i = 2; i <= n; i++) {
                c = a + b;
                 a = b;
                 b = c;
            }
            return c;
    }
}