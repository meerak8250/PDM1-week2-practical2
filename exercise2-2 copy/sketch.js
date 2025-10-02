let half=25
let x=0
let y=0


function setup() {
createCanvas(400,400);

}

function draw() {
 background(0);   
fill(255);
x=mouseX
y=mouseY
rectMode(CENTER);

if(x<25){
    x=25

} else if(x>375){
    x=375
} else if(y<25){
    y=25
} else if(y>375){
    y=375
}
square(x,y,50);






}