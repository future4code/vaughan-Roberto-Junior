### Exercicio 1

a) altera a tabela actor e deleta a coluna salary
b) altera a tabela actor e muda o nome da coluna gender para sex com varchar(8)
c) altera a tablea actor a renomeia novamente a coluna sex para gender com varchar(255)
c) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


### Exercicio 2

a) UPDATE Actor
        SET name = "Fernanda", birth_date = "1920-01-01"
        WHERE id = '003';

b) UPDATE Actor
        SET name = "JULIANA PAES"
        WHERE name = 'Juliana Paes';

   UPDATE Actor
        SET name = 'Juliana Paes'
        WHERE name = "JULIANA PAES";


c) UPDATE Actor
        SET name = 'Alterado', birth_date = "Alterado", salary = "Alterado", gender = "Alterado"
        WHERE id = "005";


d) não deu nenhum erro apenas uma mensagem que 0 arquivos foram alterados.


### Exercicio 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;


### Exercicio 4

a) SELECT MAX(salary) FROM Actor;
b) SELECT MAX(salary) FROM Actor WHERE gender = "female";
c) SELECT COUNT(gender) FROM Actor WHERE gender = "female";
d) SELECT SUM(salary) FROM Actor;

### Exercicio 5

a) faz a contagem das linhas ordenados pelo grupo gender;
b) SELECT id, name FROM Actor ORDER BY name DESC;
c) SELECT * FROM Actor ORDER BY salary ASC;
d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

### Exercicio 6

a) ALTER TABLE Movie ADD playing_limit_date VARCHAR(255);
b) ALTER TABLE Movie CHANGE rating rating FLOAT;
c) UPDATE Movie
        SET release_Date = "2022-04-05"
        WHERE id = '002';

    UPDATE Movie
        SET release_Date = "2022-01-05"
        WHERE id = '003';

d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
  nenhum tipo de erro somente não foi alterado nada.
