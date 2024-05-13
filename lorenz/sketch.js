function setup() {
    createCanvas(800, 600, WEBGL);
    colorMode(HSB);
}

let lorenzes = new Array();
lorenzes.push(new Lorenz(0.1, 0, 0));
lorenzes.push(new Lorenz(0.1 + 0.01, 0, 0));

function draw() {
    background(0);
    translate(0, 0, -80);
    let camx = map(mouseX, 0, width, -300, 300);
    let camy = map(mouseY, 0, height, -200, 200);
    camera(camx, camy, (height / 2) / tan(PI * 30 / 180), 0, 0, 0, 0, 1, 0);
    scale(5);

    stroke(255);
    noFill();

    lorenzes.forEach(lz => lz.step());
    
    lorenzes.forEach(lz => {
        let p = lz.getVector(lz.length() - 1);
        point(p.x, p.y, p.z);
    });    
    
    let hu = 0;
    let s = 1;
    let l = lorenzes[0];
    beginShape();
    for (let i = 0; i < l.length(); i++) {
        stroke(hu, 255, 255);
        let v = l.getVector(i);
        vertex(v.x, v.y, v.z);

        hu = hu + s;
        if (hu == 0 || hu == 255) {
            s *= -1;
        }
    }
    endShape();
}