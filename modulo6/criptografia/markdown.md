1 -Exercício 

a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
- Salt é o metodo que gera a String aleatoria, ela é gerada apartir do cost.
- O round é a mesma coisa que cost, é o custo numerico, quanto maior mais seguro o hast gerado, usei 12 or conta da mimha maquina, quanto maior, mais sistema vai precisar para rodar o programa.

2 - Exercício

a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
- Primeiro modificamos o cadastros, ele vai gerar a senha hash para poder salvar no banco de dados e depois geramos o token.

d) No exercício da aula anterior, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.
- Pela logique que observei na aula, todo endpoint que for fazer uma verificação com a senha no banco de dados tem que ser alterado, se o token fosse gerado fora do end point, então não precisa ser alterado, caso contrario precisa.