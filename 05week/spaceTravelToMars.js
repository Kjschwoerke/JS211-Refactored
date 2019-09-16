'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};
//-------------------------------------------------------------------------
// Create object constructor to use as crew template
//-------------------------------------------------------------------------

class CrewMember{
  constructor(name, job, specialSkill, ship) {
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill;
  this.ship = ship;
  }
  enterShip(shipName){
    this.ship = shipName;
    shipName.crew.push(this)
  }
}

//-------------------------------------------------------------------------
//create object constructor to use for ship template
//-------------------------------------------------------------------------

class Ship{
  constructor(name, type, ability){
  this.name = name;
  this.type = type;
  this.ability = ability;
  this.crew = [];
  }
  missionStatement(shipName){
    this.name = shipName
      if(this.crew.length === 0){
        return "Can't perform a mission yet."
      }else {
        return this.ability
      }
    
  }
  
}

//-------------------------------------------------------------------------
//Define all crew members for the mission to Mars
//-------------------------------------------------------------------------

let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry', null);
let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology', null);
let crewMember3 = new CrewMember('Janet Schwartz', 'programmer', 'technical support', null);
let crewMember4 = new CrewMember('Lucy Chang', 'mechanic', 'repair ship', null);
console.log('Crew members available for the mission to Mars:')
console.log(crewMember1)
console.log(crewMember2)
console.log(crewMember3)
console.log(crewMember4)

//-------------------------------------------------------------------------
//Define all ships for the mission to Mars
//-------------------------------------------------------------------------

let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
console.log('____________________________________________________________')
console.log('Ships available for the mission to Mars:')
console.log(mav)
console.log(hermes)



//-------------------------------------------------------------------------
//tests
//-------------------------------------------------------------------------

if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
