// tim so dau tien chia het cho 5 trong day fibonacci
let a = 0;
let b = 1;
let n
while (true) {
    n = a + b;
    if (n % 5 === 0) {
        document.write(" so dau tien chia het cho nam " + n )
        break;
    }
    a = b;
    b = n;
}