CREATE DATABASE IF NOT EXISTS academia DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_ai_ci;
USE academia;

CREATE TABLE professor (
  idprofessor int NOT NULL AUTO_INCREMENT,
  nome varchar(100) NOT NULL,
  PRIMARY KEY (idprofessor),
  UNIQUE KEY professor_nome_UN (nome)
);

INSERT INTO professor (nome) VALUES ('Flavio'), ('Selmini'), ('Carlos Rafael'), ('Surian'), ('Humberto'), ('Surjan'), ('Renato Mader'), ('Vince Vader');

CREATE TABLE tipo (
  idtipo int NOT NULL,
  nome varchar(50) NOT NULL,
  PRIMARY KEY (idtipo)
);

INSERT INTO tipo (idtipo, nome) VALUES (1, 'Yoga'), (2, 'Pilates'), (3, 'Spinning'), (4, 'Alongamento');

CREATE TABLE aula (
  idaula int NOT NULL AUTO_INCREMENT,
  idprofessor int NOT NULL,
  idtipo int NOT NULL,
  data datetime NOT NULL,
  PRIMARY KEY (idaula),
  UNIQUE KEY aula_data_UN (data, idprofessor),
  KEY aula_idprofessor_IX (idprofessor),
  KEY aula_idtipo_IX (idtipo),
  CONSTRAINT aula_idprofessor_IX_FK FOREIGN KEY (idprofessor) REFERENCES professor (idprofessor) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT aula_idtipo_IX_FK FOREIGN KEY (idtipo) REFERENCES tipo (idtipo) ON DELETE RESTRICT ON UPDATE RESTRICT
);
