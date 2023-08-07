const bulbasaur = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
  modifiers: {
    weakness: ["fire, ice", "flying", "psychic"],
    resistances: ["water", "grass", "electric", "fighter"],
  },
};
const charmander = {
  name: "Charmander",
  type: "fire",
  ability: {
    primary: "Blaze",
    hidden: "Solar Power",
  },
  stats: {
    hp: 39,
    attack: 52,
    deffense: 43,
    speed: 65,
  },
  moves: ["Growl", "Scratch", "Flamethrower", "Dragon Breath"],
  modifiers: {
    weakness: ["water", "ground", "rock"],
    resistances: ["fire", "ice", "grass", "steal"],
  },
};
const squirtle = {
  name: "Squirtle",
  type: "water",
  ability: {
    primary: "Torrent",
    hidden: "Rain Dish",
  },
  stats: {
    hp: 44,
    attack: 48,
    deffense: 50,
    speed: 43,
  },
  moves: ["Tackle", "Tail Whip", "Water Gun", "Hydro Pump"],
  modifiers: {
    weakness: ["electric", "grass"],
    resistances: ["water", "fire", "ice", "steel"],
  },
};

const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod",
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
  modifiers: {
    weakness: ["ground"],
    resistances: ["electric", "flying", "water", "steel"],
  },
};

/*getMoves()
Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos */
let getMoves = (pokemon) =>{ return pokemon.moves}
 

console.log("los movimientos de squirtle" ,getMoves(squirtle));
/*getPrimaryAbility()
Crear una función getPrimaryAbility que tome como argumento un pokémon y devuelva la habilidad primaria
 */

let getPrimaryAbility=(pokemon)=>{return pokemon.ability.primary};

console.log(`la habilidad primaria de pikachu es :` ,getPrimaryAbility(pikachu));

/*getWeaknesses()
Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil */
let getWeaknesses=(pokemon)=> { return pokemon.modifiers.weakness}
console.log("pikachu es debil contra los tipo :" ,getWeaknesses(pikachu));

/*
getResistances()
Crear una función getResistances que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil */

let getResistances=(pokemon) =>{ return pokemon.modifiers.resistances};
console.log("Squirtle es resistente contra los tipo ",getResistances(squirtle));

/*resistsType()
Crear una función resistsType que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo
 */

let resistsType=(pokemon,movimiento)=>{return pokemon.modifiers.resistances.includes(movimiento.type)}

console.log("Squirtle es resistente a electric:",resistsType(squirtle, "electric"));
/*resistsMove()
Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo, p. ej.: { name: "Rain dance", type: "water" } */
let resistsMove=(pokemon,movimiento)=>   {
    return pokemon.modifiers.resistances.includes(movimiento.type)
     }

let movimiento={ name :`Rain dance`, type:`water`}
let movimiento1 = { name: "electric shock" ,type:"electric" };
console.log("Squirtle resite el ataque "+Object.values(movimiento),resistsMove(squirtle,movimiento));
console.log("Squirtle resite el ataque " +Object.values(movimiento1), resistsMove(squirtle, movimiento1))
/*isWeakAgainst()
Crear una función isWeakAgainst que tome como argumento un objeto con dos propiedades, attacker=ATACANTE y attacked=ATACADA, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es débil frente al tipo de pokémon que lo ataca */
let isWeakAgainst=(attacker,attacked)=>{return  attacked.modifiers.weakness.includes(attacker.type)}

console.log("Squirtle es debil si lo ataca pikachu?",isWeakAgainst(pikachu, squirtle));

console.log("Pikachu es debil si lo ataca Squirtle?",isWeakAgainst( squirtle,pikachu));


/* isStrongAgainst()
Crear una función isStrongAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es resistente al tipo de pokémon que lo ataca*/
let isStrongAgainst=(attacker,attacked)=>{return attacked.modifiers.resistances.includes(attacker.type)};
console.log("Squirtle resiste si lo ataca pikachu?",isStrongAgainst(pikachu, squirtle));

console.log("Pikachu resiste si lo ataca Squirtle?",isStrongAgainst(squirtle, pikachu));

/*addAbility()
Crear una función addAbility que tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada */
let addAbility=(pokemon,habilidad)=>{
 let newPokemon={...pokemon}
 if(habilidad.primary){
  newPokemon.ability.primary=habilidad.primary
 }

 if(habilidad.secundary){
  newPokemon.ability.secundary=habilidad.secundary
 }
 return newPokemon;
  
}
let habilidad= {secundary:"Discharge"}
console.log(addAbility(pikachu,habilidad))
console.log(pikachu)
/* addMove()
Crear una función addMove que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado*/
let addMove=(pokemon,movimiento)=>{
  return{
    ...pokemon,
    moveCopy:[...pokemon.moves,movimiento]
}
}
 let movimiento2 = "final attack";
console.log("el nuevo movimiento de charmander es",addMove(charmander,movimiento2))

/*removeMove()
Crear una función removeMove que tome como argumentos un pokémon y un movimiento, elimine dicho movimiento de su lista y devuelva el pokémon con el movimiento agregado */

let removeMove=(pokemon,movimiento)=>{  let {moves, ...rest}=pokemon
removerMovimiento =moves.filter(move=> move!==movimiento)
return{...rest, moves:removerMovimiento}
}
let remover=removeMove(charmander,"Dragon Breath")
console.log(remover.moves)
/*Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
2, si el pokémon atacado es débil (weakness) contra el tipo del pokémon que ataca
0,5, si el pokémon atacado es resistente (resistances) contra el tipo del pokémon que ataca
1, si no es débil ni resistente
 */
let getAttackModifier=(attacker,attacked)=>{
  if(attacked.modifiers.weakness.includes(attacker.type)){
    return 2;
  }else if(attacked.modifiers.resistances.includes(attacker.type)){
    return 0.5;
  }else{
    return 1;
  }
}
console.log(getAttackModifier(pikachu,squirtle))
console.log(getAttackModifier(bulbasaur,charmander))
/*getAttackLog()

Crear una función getAttackLog, que tome como argumento un objeto con las siguientes propiedades:
{
    attacker: "Squirtle",
    attacked: "Pikachu",
    move: "Water Gun",
    damage: 12,
    modifier: "weak" // otros valores: "resistant", "normal"
} 

Y que devuelve un string con la siguiente plantilla:

`${attacker} used ${move}! ${attacked} lost ${damage} HP!`
Por ejemplo:

"Squirtle used Water Gun! Pikachu lost 12 HP!"
Si el pokémon es débil contra el tipo de su atacante, se debe agregar It's super effective!, si es resistente, se debe agregar It's not very effective!, por ejemplo:

"Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
*/

let getAttackLog = (attacker, attacked, damage) => {
let { name: attackerName, moves } = attacker;
let { name: attackedName } = attacked;

  let effectiveness = getAttackModifier(attacker, attacked);
 let isSuperEffective = effectiveness > 1;

  let move = moves[Math.floor(Math.random() * moves.length)];

  let mensaje = `${attackerName} used ${move}! ${attackedName} lost ${damage} HP!!`;
    if(isSuperEffective) { 
     mensaje=mensaje + " It's super effective!" 
     }else{mensaje =mensaje+ " not super effective"
  };

  return mensaje;
};

console.log(getAttackLog(pikachu, squirtle));
console.log(getAttackLog(squirtle,pikachu));

/*calculateDamage()
Crear una función calculateDamage que tome como un argumento un objeto con la siguientes propiedades
attack es el ataque del pokémon que ataca
defense es la defensa del pokémon siendo atacado
modifier el modificador del daño según el tipo del atacante y del atacado y devuelva el daño ocasionado. El daño se calcula con la siguiente fórmula:
0.5 * attack * (attack / defense) * modifier */
let calculateDamage = (attack, defense, modifier) => {
  let atacar = attack.stats.attack;
  let defensa = defense.stats.deffense;
  modifier = getAttackModifier(attack, defense);
  let danio = 0.5 * atacar * (atacar / defensa) * modifier;
  return danio;
};
console.log(calculateDamage(pikachu,squirtle));
/* battle()
Crear un función battle que tome como argumentos dos pokémons. La función debe simular una batalla y devolver el resultado de la misma. Las reglas de la misma son:
Por ronda, cada pokémon ataca al contrario
Comienza atacando el pokémon con más velocidad (speed)
La batalla termina cuando la vida (hp, hit points, puntos de golpe) de un pokémon llega a 0 o menos
El daño se obtiene con la función calculateDamage y se resta a la vida del pokémon atacado
Se tiene que guardar un registro o historial del ataque en cada turno, usando lo que devuelve la función getAttackLog
El movimiento se elige de forma aleatoria en cada ataque
El objeto que debe devolver como resultado debe seguir la siguiente estructura:
{
    rounds: 1,
    results: {
        winner: {
            name: "Pikachu",
            hp: 12 // vida restante
        },
        losser: {
            name: "Squirtle",
            hp: 0
        }
    },
    history: [
        "Squirtle used Water Gun! Pikachu lost 12 HP!", 
        "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
    ]
} 
   ;
*/    



let battle =(pokemon1,pokemon2)=>{
  let resultado={
    winner:null,
    loser:null,
    
  }
  let history=[];
  let rounds=0;
  
  while(pokemon1.stats.hp>0 && pokemon2.stats.hp>0){
    let attacker;
    let attacked;

    if(pokemon1.stats.speed > pokemon2.stats.speed){
      attacker=pokemon1;
      attacked=pokemon2;


    }else{
      attacker=pokemon2
      attacked=pokemon1
    }
     let damage = calculateDamage(attacker, attacked);
     attacked.stats.hp -= damage;

     history.push(getAttackLog(attacker,attacked,damage))
     rounds++;
     if(attacked.stats.hp <= 0){
      resultado.winner=attacker;
      resultado.loser=attacked

     }
     if(resultado.winner){
      break
     }
      [pokemon1,pokemon2]=[pokemon2,pokemon1]
     }
     
  return {
    rounds: rounds,
    results: {
      winner: {
        name: resultado.winner.name,
        hp: resultado.winner.stats.hp,
      },
      loser: {
        name: resultado.loser.name,
        hp: resultado.loser.stats.hp,
      },
    },
    history: history,
  };
};





  
  

  

console.log(battle(charmander,bulbasaur))
console.log(battle(squirtle,pikachu))