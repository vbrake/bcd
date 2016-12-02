//instalar com 'npm install json-sql' ou adicionar ao package.json

//exemplo de sql build
var sqlbuild = jsonSql.build({
    type: 'select',
    table: 'filtro_disciplinas_horario'
});

sqlbuild.query
// select * from "filtro_disciplinas_horario";

//exemplo de sql insert
var sqlinsert = jsonSql.build({
    type: 'insert',
    table: 'users',
    values: {
        name: 'John',
        lastname: 'Snow',
        age: 24,
        gender: 'male'
    }
});

sqlinsert.query
// insert into users (name, lastname, age, gender) values ($p1, $p2, 24, $p3);

sqlinsert.values
// { p1: 'John', p2: 'Snow', p3: 'male' }
