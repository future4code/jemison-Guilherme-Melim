import { Character, performAttack } from './../src/game';
import { validateCharacter } from "../src/game";


describe("Testes validando nome", () => {
  test("Teste 1: Erro no input, digite um nome. ", () => {

    const input = { 
      name: "",
      life: 1500,
      strength: 500,
      defense: 500
    }

    const output = validateCharacter(input)
    expect(output).toBe(false)
  })

  test("Teste 2: Erro no input, personagem sem vida. ", () => {
    const input = { 
      name: "Bem 10",
      life: 0,
      strength: 500,
      defense: 500
    }

    const output = validateCharacter(input)
    expect(output).toBe(false)
  })

  test("Teste 3: Erro no input, personagem sem força. ", () => {
    const input = { 
      name: "Bem 10",
      life: 1500,
      strength: 0,
      defense: 500
    }

    const output = validateCharacter(input)
    expect(output).toBe(false)
  })

  test("Teste 4: Erro no input, personagem sem defesa. ", () => {
    const input = { 
      name: "Bem 10",
      life: 1500,
      strength: 500,
      defense: 0
    }

    const output = validateCharacter(input)
    expect(output).toBe(false)
  })

  test("Teste 5: Erro no input, personagem com vida negativa. ", () => {
    const input = { 
      name: "Bem 10",
      life: -500,
      strength: 500,
      defense: 500
    }

    const output = validateCharacter(input)
    expect(output).toBe(false)
  })

  test("Teste 5: input correto. ", () => {
    const input = { 
      name: "Bem 10",
      life: 1500,
      strength: 500,
      defense: 500
    }

    const output = validateCharacter(input)
    expect(output).toBe(true)
  })

  test("Teste 6: Atacar. ", () => {
    expect.assertions(3)

    const ValidateMock = jest.fn(()=>{
      return true
    })

    const attacker: Character = { 
      name: "Hulk",
      life: 1500,
      strength: 1000,
      defense: 800
    }

    const defender: Character  = { 
      name: "Loki",
      life: 1500,
      strength: 500,
      defense: 800
    }

    performAttack(attacker, defender, ValidateMock)
    expect(defender.life).toEqual(1300)
    expect(ValidateMock).toHaveBeenCalledTimes(2)
    expect(ValidateMock).toHaveReturnedTimes(2)
  })

  test("Teste 7: Input error, dados incorretos. ", () => {
    expect.assertions(3)

    const ValidateMock = jest.fn(()=>{
      return false
    })

    const attacker: Character = { 
      name: "Hulk",
      life: 1500,
      strength: 1000,
      defense: 800
    }

    const defender: Character  = { 
      name: "",
      life: 1500,
      strength: 500,
      defense: 800
    }

    try{
      performAttack(attacker, defender, ValidateMock)

    }catch(error:any){
      expect(error.message).toBe("Dados incorretos")
      expect(ValidateMock).toHaveBeenCalledTimes(1)
      expect(ValidateMock).toHaveReturnedTimes(1)
    }
  })

})