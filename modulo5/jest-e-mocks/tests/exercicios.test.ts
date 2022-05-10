import { validateCharacter } from "../src";

describe("teste dos exercicios", () => {


    test("deve retornar false se o name for vazio", () => {
        const result = validateCharacter({
          name: "",
          life: 1500,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });


      test("deve retornar false para vida igual a zero", () => {
        const result = validateCharacter({
          name: "Roberto",
          life: 0,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });


      test("deve retornar false para força a zero", () => {
        const result = validateCharacter({
          name: "Roberto",
          life: 1500,
          strength: 0,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });


      test("deve retornar false para defesa igual a zero", () => {
        const result = validateCharacter({
          name: "Roberto",
          life: 1500,
          strength: 300,
          defense: 0,
        });
    
        expect(result).toBe(false);
      });


      test("deve retornar false para defesa com valor negativo", () => {
        const result = validateCharacter({
          name: "Roberto",
          life: 1500,
          strength: 300,
          defense: -10,
        });
    
        expect(result).toBe(false);
      });


      test("verificando com as informações validas", () => {
        const result = validateCharacter({
          name: "Roberto",
          life: 1500,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(true);
      });


})

