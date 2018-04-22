import { Tamagotchi } from './../src/tama.js';

describe('Tamagotchi', function() {
  var newTama;

  beforeEach(function() {
    newTama = new Tamagotchi("Jake");
    jasmine.clock().install();
    newTama.setFood();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 50 when it is created', function() {
    expect(newTama.name).toEqual("Jake");
    expect(newTama.foodLevel).toEqual(50);
  });

  it('should have a food level of 40 after 10001 milliseconds', function() {
    jasmine.clock().tick(10001);
    expect(newTama.foodLevel).toEqual(40);
  });

  it('should die if the food level drops below zero', function() {
    jasmine.clock().tick(50000);
    expect(newTama.didItDie()).toEqual(true);
  });

  it('should increase food level by 10 if it is fed', function() {
    jasmine.clock().tick(40000);
    newTama.feed();
    expect(newTama.foodLevel).toEqual(20);
  });

});
