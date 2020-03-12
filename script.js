document.addEventListener('DOMContentLoaded', function() {
    var heroName = prompt("Enter hero name:", "Hero");
    var villName = prompt("Enter villain name:", "Villain");
    //Hero.name = heroName;
    //Villain.name = villName;

    let player = new Hero(heroName);
    
    var heroContainer = document.getElementById("heroContainer");
    heroContainer.innerHTML= player.render();

    let enemy = new Villain(villName);
    
    var villainContainer = document.getElementById("villainContainer");
    villainContainer.innerHTML= enemy.render();
})