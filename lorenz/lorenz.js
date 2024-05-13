class Lorenz {
    ρ = 28;
    σ = 10;
    β = 8 / 3;
    points = new Array();

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.dt = 0.005;
    }

    step() {
        let dx = (this.σ * (this.y - this.x)) * this.dt;
        let dy = (this.x * (this.ρ - this.z) - this.y) * this.dt;
        let dz = (this.x * this.y - this.β * this.z) * this.dt;
        this.x = this.x + dx;
        this.y = this.y + dy;
        this.z = this.z + dz;

        this.points.push(new p5.Vector(this.x, this.y, this.z));
    }

    length() {
        return this.points.length;
    }

    getVector(i) {
        return this.points[i];
    }

}