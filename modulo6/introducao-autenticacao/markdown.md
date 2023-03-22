1. Exercicio 1

*Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
> Concordo, fazer um ID com string dificulta a probabilidade de ser hackeado e tem mais combinações do que apenas com numeros.

*b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 
> Criar na pasta serve, LEMBRETE
~~~javascript
import { v4 } from "uuid"

export function generateId(): string {
    return v4();
  }

~~~





2. Exercicio 2

~~~javascript
import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
~~~

*O que a linha as string faz? Por que precisamos usar ela ali?
> Ela está ali pois é a "chave/senha" para se fazer o token, e o as está confirmando que aquela "chave/senha" é uma string.

*Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.
> Criar na pasta serve, LEMBRETE

~~~javascript
// PASTA SERVE ==============================================
import * as jwt from "jsonwebtoken";

  const expiresIn = "1min";
  const generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

// PASTA TYPE ============================================
type AuthenticationData = {
  id: string;
}
~~~


