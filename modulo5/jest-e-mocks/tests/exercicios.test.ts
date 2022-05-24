import { performAttack, performAttackWithInversionDependence, validateCharacter } from '../'
import { Character } from '../src/types/types';
import { validatorMockFalse, validatorMockTrue } from './mocks';

// describe("teste dos exercicios", () => {


//     test("deve retornar false se o name for vazio", () => {
//         const result = validateCharacter({
//           name: "",
//           life: 1500,
//           strength: 300,
//           defense: 500,
//         });
    
//         expect(result).toBe(false);
//       });


//       test("deve retornar false para vida igual a zero", () => {
//         const result = validateCharacter({
//           name: "Roberto",
//           life: 0,
//           strength: 300,
//           defense: 500,
//         });
    
//         expect(result).toBe(false);
//       });


//       test("deve retornar false para força a zero", () => {
//         const result = validateCharacter({
//           name: "Roberto",
//           life: 1500,
//           strength: 0,
//           defense: 500,
//         });
    
//         expect(result).toBe(false);
//       });


//       test("deve retornar false para defesa igual a zero", () => {
//         const result = validateCharacter({
//           name: "Roberto",
//           life: 1500,
//           strength: 300,
//           defense: 0,
//         });
    
//         expect(result).toBe(false);
//       });


//       test("deve retornar false para defesa com valor negativo", () => {
//         const result = validateCharacter({
//           name: "Roberto",
//           life: 1500,
//           strength: 300,
//           defense: -10,
//         });
    
//         expect(result).toBe(false);
//       });


//       test("verificando com as informações validas", () => {
//         const result = validateCharacter({
//           name: "Roberto",
//           life: 1500,
//           strength: 300,
//           defense: 500,
//         });
    
//         expect(result).toBe(true);
//       });

// })



describe('Exercicio 5', () => {
   
  test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttackWithInversionDependence(attacker, defender, validatorMock as any);

    console.log(defender);
    

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
   
})