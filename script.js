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