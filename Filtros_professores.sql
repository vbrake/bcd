#Filtro dos professores#

drop view if exists filtro_disciplinas_professores;

CREATE VIEW filtro_disciplinas_professores AS
SELECT  MinistradoresDasDisciplinas.professor
  FROM MinistradoresDasDisciplinas
  inner join Professor
  on MinistradoresDasDisciplinas.professor = Professor.id
  WHERE Professor.nome = 'Roberto Nobrega';

select * from filtro_disciplinas_professores;
