import { Tamagotchi } from './../src/tama.js';

describe('Tamagotchi', function() {
  var newTama;

  beforeEach(function() {
    newTama = new Tamagotchi("Jake");
    jasmine.clock().install();
    newTama.setFood();
    newTama.setPlay();
    newTama.setSleep();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 50, a play level of 20, a sleep level of 60, and an age of 0 when it is created', function() {
    expect(newTama.name).toEqual("Jake");
    expect(newTama.foodLevel).toEqual(40);
    expect(newTama.playLevel).toEqual(20);
    expect(newTama.sleepLevel).toEqual(60);
    expect(newTama.age).toEqual(0);
  });

  it('should have a food level of 30 after 10001 milliseconds', function() {
    jasmine.clock().tick(10001);
    expect(newTama.foodLevel).toEqual(30);
  });

  it('should die of starvation if the food level drops below zero', function() {
    jasmine.clock().tick(40001);
    expect(newTama.didItDieStarvation()).toEqual(true);
  });

  it('should increase food level by 10 if it is fed', function() {
    jasmine.clock().tick(30000);
    newTama.feed();
    expect(newTama.foodLevel).toEqual(20);
  });

});
