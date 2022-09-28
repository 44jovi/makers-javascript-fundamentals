class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = false;
  }
  
  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSavingMode && this.temperature < 25) {
      this.temperature += 1;
    } else if (!this.powerSavingMode && this.temperature < 32) {
      this.temperature += 1;
    }
  }

  // implement minimum temp of 10
  down() {
    if (this.temperature > 10) {
      this.temperature -= 1;      
    }
  }

  setPowerSavingMode(onOff) {
    this.powerSavingMode = onOff;
  }

  reset() {
    this.temperature = 20;
  }
}

module.exports = Thermostat;
