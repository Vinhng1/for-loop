// tinh tong 20 so dau tien cua day fibonacci
let a = 0;
let b = 1;
let n
let total = a + b
for (let i = 3; i < 20; i++) {
    n = a + b;
    total += n;
    a = b;
    b = n;
}
document.write(total);