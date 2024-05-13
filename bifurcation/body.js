class Body {

    static G = 1;

    constructor(x, y, vx, vy, mass) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.mass = mass;
    }

    calculateAttraction(other) {
        let dx = other.x - this.x;
        let dy = other.y - this.y;
        let d = sqrt(dx * dx + dy * dy);
        d = max(1, d)
        let force = (Body.G * this.mass * other.mass) / (d * d);
        force = max(0.5, min(50, force));
        let theta = atan2(dy, dx);
        let fx = cos(theta) * force;
        let fy = sin(theta) * force;
        return [fx, fy];
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }
}