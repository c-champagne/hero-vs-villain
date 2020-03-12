class Villain extends Person {
    constructor(name) {
        super(name);
    }

    render() {
        return `
        <div id="villainImg">
            <img src="images/villain.png"/>
        </div>
        <div class ="health">Name: ${this.name} Health: ${this.health} Weapon: ${this.weapon.name}</div>
        `
        //Same error, villain info not rendering.  Changed Villain.name to this.name, etc.
    }
}