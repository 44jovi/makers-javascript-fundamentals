const Thermostat = require('./thermostat');

beforeEach(() => {
  thermostat = new Thermostat();
});

describe('thermostat', () => {
  it('#getTemperature returns 20', () => {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('#getTemperature returns changed temperature after #up and #down', () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22);
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('#setPowerSavingMode(true) - maximum temperature to 25', () => {
    thermostat.setPowerSavingMode(true);

    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('#setPowerSavingMode(false) - maximum temperature to 32', () => {
    thermostat.setPowerSavingMode(false);

    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toEqual(32);
  });

  it('#down cannot reduce temperature below 10', () => {
    expect(thermostat.getTemperature()).toEqual(20);
    
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.down();
    }

    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('#reset - sets temperature to 20', () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });
});
