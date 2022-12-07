# Exercicio 1
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

-- a) Explique o que é uma chave estrangeira*
-- R: É uma forma de comunicação de uma tabela para outra.

-- b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
"003",
"Filme Bom",
9,
"002"
);

-- c) *Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*
-- R: Não é possivel inserir nada nessa linha, pois o ID desse filme não exite.

INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
"004",
"Filme Ok",
5,
"003"
);

-- d) *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*

ALTER TABLE Movies DROP COLUMN rating;

-- e) *Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*
-- R: Vai dar erro dizendo que a coluna não existe.

DELETE FROM Movies WHERE rating = 10;

# -- Exercicio 2

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- *a) Explique, com as suas palavras, essa tabela*
-- R: Foi criado duas colunas, onde cada coluna aceita apenas informação
--  condizente com a respectiva tabela informada.

-- *b) Crie, ao menos, 6 relações nessa tabela* 

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"001"
);

-- *c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*
-- R: Retorna dizendo que não é possivel adicionar algo que não existe na tabela REFERENCES.

-- *d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*
-- R: Código de erro: 1175. Você está usando o modo de atualização segura e tentou atualizar uma tabela
-- sem um WHERE que usa uma coluna KEY. Não é possível usar o acesso de intervalo no índice 'PRIMARY' 
-- devido à conversão de tipo ou agrupamento no campo 'id' Para desativar o modo de segurança, alterne a 
-- opção em Preferências -> Editor SQL e reconecte.

DELETE FROM Movies WHERE id = 001;

# -- Exercicio 3

SELECT * FROM Movies M INNER JOIN Rating R ON M.id = R.Movie_id;

-- *a) Explique, com suas palavras, a query acima. O que é o operador `ON`?*
-- R: Ela esta retornando todos os elementos que tenham o mesmo parametro que foi passado, no caso
-- ID da tabela Movie e Movie_id da tabela Rating, essas informações são passadas pelo ON, ele 
-- que faz a busca e comparação desses parametros. 

-- *b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*

SELECT nome, M.id, rate, R.id FROM Movies M 
JOIN Rating R ON M.id = R.movie_id WHERE R.rate > 0; 

SELECT * FROM MovieCast ;