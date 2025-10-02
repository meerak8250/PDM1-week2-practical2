function setup() {
    createCanvas(400, 400);
    noStroke();
    fill(255, 0, 150);
    background(0);
}

function draw() {
    
    if (mouseIsPressed) {
        //circle(width / 2, height / 2, width * 0.8);
      circle(random(0,300),random(0,400),random(10,100));
    }
    if (keyIsPressed) {
    background(0);

    }   
        
    }
