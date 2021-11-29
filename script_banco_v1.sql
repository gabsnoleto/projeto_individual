CREATE DATABASE projectV1;
USE projectv1;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

select * from usuario;
select * from pontuacao;
create table pontuacao(
	idPontuacao int primary key auto_increment,
    fk_usuario int,
    pontos int,
    dataHora datetime,
    foreign key (fk_usuario) references usuario(id)
);
select * from pontuacao;


select u.usuario, p.pontos, DATE_FORMAT(p.dataHora,'%d/%m/%Y') as "data" from pontuacao p join usuario u on p.fk_usuario = u.id
				order by pontos desc limit 10;
