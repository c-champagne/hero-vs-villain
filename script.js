//document.addEventListener('DOMContentLoaded', function() {
    let heroName = prompt("Enter hero name:", "Hero");
    let heroWeapon = prompt("Enter hero weapon:", "Sword");
    let villName = prompt("Enter villain name:", "Villain");
    let villWeapon = prompt("Enter villain weapon:", "Sword");
    //Hero.name = heroName;
    //Villain.name = villName;

    let player = new Hero(heroName);
    player.equipWeapon(new Weapon(heroWeapon));
    
    let heroContainer = document.getElementById("heroContainer");
    heroContainer.innerHTML= player.render();

    let enemy = new Villain(villName);
    enemy.equipWeapon(new Weapon(villWeapon));

    let villainContainer = document.getElementById("villainContainer");
    villainContainer.innerHTML= enemy.render();
//})  Removed EventListener for page load... seemed excessive.  Needed to move script.js into <body> tag


let heroAttack = document.getElementById("heroAttack");
let villainAttack = document.getElementById("villainAttack");

function fightComment() {
    let commentNum = Math.floor(Math.random() * 7);
    let fightMessages = [
        "Not the face!",
        "Ooo, that's gotta hurt!",
        "A good shot!",
        "A direct hit!",
        "Bam!",
        "Pow!",
        "What a hit!",
    ];
    document.getElementById("messageContainer").innerHTML = `<h1>${fightMessages[commentNum]}</h1>`;

}


heroAttack.addEventListener("click", function () {
    player.attack(enemy);
    var villainHealth = enemy.health;
    document.getElementById("villainHealth").innerHTML=`<h3>Health: ${villainHealth}</h3>`;
    fightComment();
    if (player.health <= 0) {
        document.getElementById("messageContainer").innerHTML = `<h1>Your hero is too weak to fight!</h1>`;
        document.getElementById("villainHealth").innerHTML=`<h3>Health: Unharmed! </h3>`;
    }
    else if (enemy.health <= 0) {
        document.getElementById("messageContainer").innerHTML = `<h1>Congratulations!  Your hero won!</h1>`;
        document.getElementById("villainHealth").innerHTML=`<h3>Health: Defeated! </h3>`;
    }
})

villainAttack.addEventListener("click", function() {
    enemy.attack(player);
    var heroHealth = player.health;
    document.getElementById("playerHealth").innerHTML=`<h3>Health: ${heroHealth}</h3>`;
    fightComment();
    if (enemy.health <= 0) {
        document.getElementById("messageContainer").innerHTML = `<h1>The villian is too weak to fight!</h1>`;
        document.getElementById("playerHealth").innerHTML=`<h3>Health: Unharmed! </h3>`;
    }
    else if (player.health <= 0) {
        document.getElementById("messageContainer").innerHTML = `<h1> The villain has won!</h1>`;
        document.getElementById("playerHealth").innerHTML=`<h3>Health: Defeated! </h3>`;
    }
})