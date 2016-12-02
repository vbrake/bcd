//instalar com 'npm install json-sql' ou adicionar ao package.json

//exemplo de criação de sql query
var sql = jsonSql.build({
    type: 'select',
    table: 'filtro_disciplinas_horario'
});

sql.query
// select * from "filtro_disciplinas_horario";
