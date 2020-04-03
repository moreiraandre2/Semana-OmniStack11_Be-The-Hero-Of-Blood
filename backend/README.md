NODEJS
---------------------
- npm init -y cria o packages.json, pode guardar scripts, e armazenar as informações das dependencias do projeto.

- npm install express responsável pela criação das rotas e interpretação dos parâmetros na rota.


Tipos de parametros:
- Query params : Parâmentros nomeados enviados na rota, após o simbolo de ?, serve para filtros paginação
- Route params : são parametros utilizados para identificar recursos.
- Request body : corpo da requisição, resquest guarda todos os dados vindos de uma requisição, response da uma resposta ao usuário.

Driver: Select * from users;
Query Builder: KNEX - cria querys sql usando json
SQLITE BD.
npx knex init - cria um arquivo knexfile.js onde fica todas as configurações com banco de dados.

--------------------

validaçao de dados

lib celebrate(usa joy - lib de validação para javascript) - integra o joy com o express

-------------------

estudar:

padrões de código - ESLint, Previer
Autenticação JWT
Styled Components

--------------------

Test Drive Developement - TDD

lib jest - para criar teste automatizados

