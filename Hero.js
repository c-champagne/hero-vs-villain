class Hero extends Person {
    constructor(name) {
        super(name);
    }

    render() {
        return `
        <div id="heroImg">
            <img src="images/hero.gif"/>
        </div>
        <div class ="info">Name: ${this.name} Health: ${this.health} Weapon:${this.weapon.name}</div>  
        `
        // Hero info not being rendered correctly.  Solved by changing Hero.name to this.name, etc.
    }
}