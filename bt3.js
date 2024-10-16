// hien thi ra 20 so trong day fibonacci
let a = 0;
let b = 1;
let n
document.write(a + "<br>");
document.write(b + "<br>");
for (let i = 2; i < 20; i++) {
    n = a + b
    document.write(n + "<br>")
    a = b;
    b = n;
}
