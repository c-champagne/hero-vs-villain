

//needs to have name string, health set to 100, weapon null
//method of equipWeapon(weapon)
//method of attack(person)

class Person {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapon = null;
    }
    equipWeapon(weapon) {
        this.weapon = weapon;
    }

    attack(person) {
        //person.health -= randomdamage
    }

}