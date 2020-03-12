//document.addEventListener('DOMContentLoaded', function() {
    let heroName = prompt("Enter hero name:", "Hero");
    let villName = prompt("Enter villain name:", "Villain");
    //Hero.name = heroName;
    //Villain.name = villName;

    let player = new Hero(heroName);
    player.equipWeapon(new Weapon("Sword"));
    
    let heroContainer = document.getElementById("heroContainer");
    heroContainer.innerHTML= player.render();

    let enemy = new Villain(villName);
    enemy.equipWeapon(new Weapon("Excessive debt"));

    let villainContainer = document.getElementById("villainContainer");
    villainContainer.innerHTML= enemy.render();
//})  Removed EventListener for page load... seemed excessive.  Needed to move script.js into <body> tag


let heroAttack = document.getElementById("heroAttack");
let villainAttack = document.getElementById("villainAttack");

heroAttack.addEventListener("click", function () {
    player.attack(enemy);
    var villainHealth = enemy.health;
    document.getElementById("villainHealth").innerHTML=`<h3>Health: ${villainHealth}</h3>`;
    if (enemy.health <= 0) {
        document.getElementById("messageContainer").innerHTML = `<h1>Congratulations!  Your hero won!</h1>`;
    }

})

villainAttack.addEventListener("click", function() {
    enemy.attack(player);
    var heroHealth = player.health;
    document.getElementById("playerHealth").innerHTML=`<h3>Health: ${heroHealth}</h3>`;
    if (player.health <= 0) {
        document.getElementById("messageContainer").innerHTML = `<h1> Oh no!  Evil has won!</h1>`;
    }
})