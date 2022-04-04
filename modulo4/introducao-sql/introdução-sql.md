### Exercicio 1

a) varchar é do tipo string com 255 caracters
b) SHOW DATABASES  exibe o banco de dados que estamos trabalhando SHOW TABLES exibe as tabelas desse banco
c) DESCRIBE Actor exibe as descrições da tabela actor


## Exercicio 2

a)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
)

b)Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	|| a chave primária esta duplicada
c)Error Code: 1136. Column count doesn't match value count at row 1 || as colunas não correspondem aos valores

   INSERT INTO Actor (id, name, salary, birth_date, gender)    // código correto
        VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
);

d)Error Code: 1364. Field 'name' doesn't have a default value || o campo nome não tem um valor padrão

   INSERT INTO Actor (id, name, salary, birth_date, gender)    //código correto
        VALUES(
        "004",
        "Alguem",
        400000,
        "1949-04-18", 
        "male"
);

e)Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 || valor de data incorreto

    INSERT INTO Actor (id, name, salary, birth_date, gender)  // código correto
            VALUES(
            "005", 
            "Juliana Paes",
            719333.33,
            "1979-03-26", 
            "female"
);


### Exercicio 3

a) SELECT * from Actor WHERE gender = "female";
b) SELECT salary from Actor WHERE name = "Tony Ramos";
c) SELECT * from Actor WHERE gender = "invalid"; || não retornou nada !
d) SELECT id, name, salary from Actor WHERE salary < 500000;
e) Error Code: 1054. Unknown column 'nome' in 'field list' || não encontrou a coluna nome na lista

   SELECT id, name from Actor WHERE id = "002";   //código correto

### Exercicio 4

SELECT * FROM Actor WHERE name LIKE "A%" OR name LIKE "J%" AND salary > 300000;

a) seleciona todas as colunas da tabela actor onde o name comece com A ou J e o salario seja superior a 300000;
b) SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
c) SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";
d) SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

### Exercicio 5

a)CREATE TABLE Movie (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL UNIQUE,
        synopsis TEXT NOT NULL,
        release_Date DATE NOT NULL,
        rating INT NOT NULL
);

//cria uma tabela movie, com uma id do tipo string com chave primaria, title do tipo string não pode ser nulo e será unica, sinopse do tipo text não pode ser nulo
  TEXTé usado para grandes pedaços de dados de string. Se o comprimento do campo exceder um determinado limite, o texto será armazenado fora da linha. 
//data do tipo date que não pode ser nulo e nota do tipo inteiro que tambem não pode ser nulo


### Exercicio 6

a) SELECT id, title, rating FROM Movie WHERE id = "003";
b) SELECT * FROM Movie WHERE title = "Cidade de Deus";
c) SELECT id, title, synopsis FROM Movie WHERE rating >= 7;


### Exercicio 7

a) SELECT * FROM Movie WHERE title LIKE "%vida%";
b) SELECT * FROM Movie WHERE title LIKE "%vida%" OR synopsis LIKE "%vida%";
c) SELECT * FROM Movie WHERE release_Date < "2022/04/04";
d) SELECT * FROM Movie WHERE (title LIKE "%animada%" OR synopsis LIKE "%animada%") AND (release_Date < "2022/04/04") AND (rating > 7);


