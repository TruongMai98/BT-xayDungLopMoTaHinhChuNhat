function Rectangle(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
}


function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}


function createRectangle(rect) {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let color = getRandomColor();
    ctx.fillStyle = color;
    ctx.fillRect(rect.x, rect.y, rect.width, rect.width);
    document.write("Chieu rong: " + rect.width + " inch" + "<br>");
    document.write("Chieu dai: " + rect.height + " inch");
}

function perimeterOfRectangle(rect) {
    return ("Chu vi: " + rect.height * rect.width / 2)+ " inch2";
}

function areaRectangle(rect) {
    return ("Dien tich: " + rect.height * rect.width) + " inch2";
}

let rectangle1 = new Rectangle(10, 10, 300, 400);
createRectangle(rectangle1);
// document.getElementById("result").innerHTML = perimeterOfRectangle(rectangle1);
// document.getElementById("result1").innerHTML = areaRectangle(rectangle1);
document.write("<br>" + perimeterOfRectangle(rectangle1));
document.write("<br>" + areaRectangle(rectangle1));