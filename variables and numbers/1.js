let x1 = 2;
let y1 = 3;

let x2 = 10;
let y2 = 5;

function calcSquare(x1, y1, x2, y2) {
    let cathetus1 = Math.abs(x1 - x2);
    let cathetus2 = Math.abs(y1 - y2);
    let square = cathetus1 * cathetus2;
    console.log(square);
}

calcSquare(x1, y1, x2, y2);