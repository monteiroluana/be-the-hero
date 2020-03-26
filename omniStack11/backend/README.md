#### Rota/ Recurso

```
 $ npm install express
```

#### Tipo de parâmetros:  
  * Query params: parâmetros nomeados enviados na rota após "?" (filtros, paginnação)  
  * Route params: parâmetros utilizados para identificar recursos  
  * Request body: corpo da requisição, utilizado para criar ou alterar  

```
$ npm install nodemon -D (para não ter que ficar reiniciando o servidor a cada mudança => package.json -> scripts)
```

#### DB     
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()

```
$ npm install knex --save

$ npm install sqlite --save

$ npx knex init

$ npx knex migrate:make create_ongs (src/database/migrations/create_ongs)

$ npx knex migrate:latest
```

#### Cors
```
$ npm install cors --save  (determinar quem vai poder acessar essa nossa aplicação)
```


#### Commands
```
$ npm install 

$ npm start
```

### References:
http://knexjs.org/
