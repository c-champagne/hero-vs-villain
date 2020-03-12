class Villain extends Person {
    constructor(name) {
        super(name);
    }

    render() {
        return `
        <div id="villainImg">
            <img src="images/villain.png"/>
        </div>
        <div class ="health">Name: ${Villain.name} Health: ${Villain.health} Weapon: ${Villain.weapon}</div>
        `
    }
}