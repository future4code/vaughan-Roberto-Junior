import { Character } from "./src/types/types";


export const validateCharacter = (input: Character): boolean => {
    if (
      !input.name ||
      input.life === undefined || 
      input.strength === undefined ||
      input.defense === undefined
    ) {
      return false;
    }
  
    if (input.life <=0 || input.strength <=0 || input.defense <=0) {
      return false;
    }
  
    return true;
  };



  export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };


  //esta função possui inversão de dependências que permite receber uma função como parâmetro
  export const performAttackWithInversionDependence = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };

  let person1 = {
    name: "Roberto",
    life: 1500,
    strength: 300,
    defense: 30,
  }

  let person2 = {
    name: "Beatriz",
    life: 1550,
    strength: 200,
    defense: 20,
  }

  performAttack(person1, person2)

  console.log(person2);
  
  