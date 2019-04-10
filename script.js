let Battery = function () {
    this.setEnergy = function (energy) {
        this.energy = energy
    };
    this.getEnergy = function () {
        return this.energy
    };
    this.decreaseEnergy = function () {
        if (this.energy>0) {
            this.energy--
        }
    }
};
let FlashLight = function () {
    this.status = 'OFF';
    this.battery = new Battery();
    this.power = function () {
        if (this.status === 'ON') this.status = 'OFF';
        else if (this.status === 'OFF' && this.battery.energy >0) {
            this.status = 'ON';
            this.battery.decreaseEnergy();
        }
    };
    this.light = function () {
        if (this.status === 'ON' && this.battery.getEnergy()>0) {
            this.battery.decreaseEnergy();
            return 'Lighting';
        }
        else return 'Not Lighting'
    }
};
let flash = new FlashLight();
flash.battery.setEnergy(100);
