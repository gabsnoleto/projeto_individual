create DATABASE projectV1;
USE projectv1;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	usuario VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);


CREATE TABLE pontuacao(
	idPontuacao int primary key auto_increment,
	ponto int
)auto_increment= 1;

CREATE TABLE classificacao(
	idClas int primary key auto_increment,
    fk_usuario int,
    fk_ponto int,
    dataHora datetime,
    foreign key (fk_usuario) references usuario(id),
    foreign key (fk_ponto) references pontuacao(idPontuacao)
) auto_increment=1;
select * from pontuacao;

insert into pontuacao(ponto) values
	(10),(20),(30),(40),
    (50),(60),(70),(80),(90),
    (100);
    
    select * from pontuacao;
    
select u.nome , po.ponto, date_format(c.dataHora, '%d/%m/%y') as "dataHora" from classificacao c
		join usuario u on u.id = c.fk_usuario
        join pontuacao po on po.idPontuacao = c.fk_ponto
        group by ponto order by ponto desc limit 10;

select * from usuario;
select * from pontuacao;



select u.usuario , p.pontos "pontos", DATE_FORMAT(p.dataHora,'%d/%m/%Y') as "data" from pontuacao p join usuario u on p.fk_usuario = u.id
				order by pontos desc limit 10;
                
select p.idade as "idade",
	   count(p.descricao) as "Quantidade Usuarios"
       from usuario u
       join pontuacao p 
       on p.fk_usuario = u.id group by p.pontos;



