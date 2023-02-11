class Car {
    constructor(title, model, color, maxSpeed, speed){
        this.title = title;
        this.model = model;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.speed = speed;
    }

    _currentSpeed = 120;
    currentSpeed(){
        console.log(`Current Speed: ${this._currentSpeed}`);
    }
    gas(){
        if(this._currentSpeed >= this.maxSpeed){
            console.log(`Max speed on car ${this.title} ${this.model}: ${this.maxSpeed}`);
        }else {
            this._currentSpeed -= this.speed;
            this.currentSpeed();
        }
    }
}
const bmw = new Car('BMW', 'X7', 'black', 320, 20);
bmw.gas();
bmw.gas();
bmw.gas();
bmw.gas();
bmw.gas();
bmw.gas();

console.log(gas);