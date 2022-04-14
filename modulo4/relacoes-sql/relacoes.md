### Exercicio 1

a) é uma chave que liga duas colunas fazendo o relacionamento entre duas tabelas;

b) INSERT INTO Rating (id, comment, rate, movie_id)
        VALUES(
        "001",
        "Muito Bom , Gostei bastante",
        8.5,
        "002"
);

c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`vaughan-21713016-roberto-junior`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
// não é possivel adicionar por conta da chave estrangeira que não existe

d)  ALTER TABLE Movie DROP COLUMN rating;

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`vaughan-21713016-roberto-junior`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
// não é pessivel deletar pois possui uma relação com outra tabela (chave estrangeira)


### Exercicio 2

a) cria uma tabela chamada movieCast com 2 colunas movie_id e actor_id as duas tem chave estrangeira referenciando as tabelas Movie e Actor;
b) INSERT INTO MovieCast 
        VALUES("002","003");
        INSERT INTO MovieCast 
        VALUES("003","005");
        INSERT INTO MovieCast 
        VALUES("002","004");
        INSERT INTO MovieCast 
        VALUES("004","003");
        INSERT INTO MovieCast 
        VALUES("002","005");

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`vaughan-21713016-roberto-junior`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`));
// falha na constraint da chave estrangeira

d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`vaughan-21713016-roberto-junior`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
// falha ao deletar por uma restrição de chave estrangeira


### Exercicio 3

SELECT * FROM Movie 
JOIN Rating 
ON Movie.id = Rating.movie_id;

a) seleciona a tabela movie faz a junção com Rating onde tem relação de igual entre os iD;

b) SELECT Movie.id, title, rate FROM Movie 
         JOIN Rating 
         ON Movie.id = Rating.movie_id;
