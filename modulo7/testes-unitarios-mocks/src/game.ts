
export interface Character {
  name: string
  life: number
  strength: number
  defense: number
}

export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
		input.life === undefined || 
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false
  }

  if (input.life <=0 || input.strength <=0 || input.defense <=0) {
    return false
  }

  return true
}

// Com a injeção de dependência, não vamos precisar importar a função, vamos apenas passar como parâmetro.
export const performAttack = (
  attacker: Character, 
  defender:Character, 
  validator:(input:Character)=>boolean)=>{

  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Dados incorretos");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }

  if (attacker.strength < defender.defense) {
    return ("Força insuficiente.")
  }


  // Devemos criar o mock da função performAttack, será feito nela o teste, mas quem vai validar vai ser a validateCharacter.
      
  const ValidateMockTrue = jest.fn(()=>{
    return false
  })

  const ValidateMockFalse = jest.fn(()=>{
    return false
  })
}