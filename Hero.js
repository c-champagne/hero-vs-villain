class Hero extends Person {
    constructor(name) {
        super(name);
    }

    render() {
        return `
        <div id="heroImg">
            <img src="images/hero.gif"/>
        </div>
        <div class ="info">Name: ${Hero.name} Health: ${Person.health} Weapon:${Person.weapon}</div>
        `
    }
}