debugger;
const form = document.forms.hero;
form.addEventListener('submit', makeHero, false);

function makeHero(event){
    debugger;
    event.preventDefault();

    const hero = {};

    hero.name = form.heroName.value;
    hero.heroRealName = form.realName.value;
    hero.category = form.category.value;

    hero.powers = [];
    for(let i = 0; i < form.powers.length; i++){
        if(form.powers[i].checked){
            hero.powers.push(form.powers[i].value);
        }
    }

    alert(JSON.stringify(hero));
    return hero;
}