
function setup() {
    createCanvas(400, 400);
    noStroke();
    fill(16,67,232);
}

function draw() {
background(0);
if (mouseIsPressed) {
    fill(16,67,232)
    circle(width/2,height/2,width*0.5);
}
else {
    background(16,67,232);
    fill(0);
    circle(width/2,height/2,width*0.5);
}





}