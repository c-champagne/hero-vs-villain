class Hero extends Person {
    constructor(name) {
        super(name);
    }

     render() {
        return `
        <div id="heroImg">
            <img src="images/hero.gif"/>
        </div>
        <div class ="info"><h2>Name: ${this.name}</h2> <div id="playerHealth"><h3>Health: ${this.health}</h3></div> <h3>Weapon: ${this.weapon.name}</h3></div>  
        `
        // Hero info not being rendered correctly.  Solved by changing Hero.name to this.name, etc.
    }
} 