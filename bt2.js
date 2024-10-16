let temperature = +prompt("Nhiệt độ hiện tại của bạn");
for (let i = 1; i <= temperature; i++) {
    if (i === temperature) {
        if (i > 100) {
            alert("yeu cau giam nhiet do")

        } else if (i < 20) {
            alert("yeu cau tang nhiet do")
        } else {
            alert("nhiet do tot hay duy tri")
        }
    }
}
