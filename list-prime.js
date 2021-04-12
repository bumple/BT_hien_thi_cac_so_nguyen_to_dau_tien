let num = +prompt("Số lượng");
// let n = +prompt("Nhập số");
let n = 3;
let count = 0;

while (count < num) {

    let flag = true;
    for (let i = 2; i < n; i++) {
        if (n%i === 0) {
            flag = false;
        }
    }


    if (flag === true) {
        document.write(n + " là số nguyên tố <br>");
        count++;
    } else {
        //document.write(`${n} không phải số nguyên tố <br>`);
    }
    n++;
}
