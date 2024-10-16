let sum = 0; // khoi tao bien tong
let count = 0; // khoi tao bien dem so luong chia het cho 7
for (let i = 0; count < 30; i++) {
    if (i % 7 === 0) {
        sum += i
        count++;
    }
}
document.write(sum + "<br>");