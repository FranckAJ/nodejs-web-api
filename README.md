# Node.js RESTful API
#### A RESTful API built with Node.js, Babel and PostgresSQL
API with CRUD, authentication and autorization of users.

###Libraries and tools used
* npm - to managment of dependicies and tasks
* Babel - Compile code from ES2015
* Express - server and routing
* Knex - SQL query builder
* Bookshelf - ORM
* Json Web Token (JWT) - authentication based in token
* Express JWT - Authorization of tokens-based endpoint requests
* Joi - Validation of JSON parameters
* Gulp - Task executor


###USAGE
This project depends on a postgres database that must be accessible, you can change the connection details in `config/db.js`.

* clone this repository;
* Inside the project directory, perform the steps:
1. Use command line `npm update` to download modules of project.
2. Use command line `npm run knex migrate:lates` to create tables in BD.
3. Use command line `gulp` to compile project from ES2015.
* In directory `dist`, use command line `node app.js` to started local server.
* Open browser in `http://localhost:3000/api/` to check the status of the API.

###Unit an Integrations Testing 
in progress...


