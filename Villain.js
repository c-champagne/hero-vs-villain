class Villain extends Person {
    constructor(name) {
        super(name);
    }

    render() {
        return `
        <div id="villainImg">
            <img src="images/villain.png"/>
        </div>
        <div class ="info"><h2>Name: ${this.name}</h2> <div id="villainHealth"><h3>Health: ${this.health}</h3></div> <h3>Weapon: ${this.weapon.name}</h3></div>
        `
        //Same error, villain info not rendering.  Changed Villain.name to this.name, etc.
    }
}