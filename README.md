# api-lisa-usuario

projeto de api teste par seleção Ferreira Costa

## Contacts
Valois Gomes Rodrigues Neto
+5583 981017721
valoisgomes84@gmail.com

## Description
Assim como solicitado na documentação, fiz uma API em Nodejs utilizando o framework Nestjs, Nestjs é um framework que utiliza TypeScript para criar aplicações Node.js eficientes e escaláveis. Por dentro, o Nest faz uso do Express. Além de tudo ele oferece uma arquitetura fácil de usar, pois é fortemente inspirada no Angular.
Fiz uso do MongoDB, mas especificamente usando o ORM Mongoose. Um ORM é uma biblioteca de programação que facilita o uso de bancos de dados e o Mongoose, em nosso caso, é um ORM para MongoDB.
Para a parte de autenticação fiz uso da Biblioteca JWT em conjunto com Biblioteca Passport para manipulaçao da autenticação.

## Running Project
    - dev mode: npm run start:dev
    - prod mode: npm run start:prod

## Deploying application
Para fazer deploy dessa aplicação eu utilizaria o Docker, afim de criar uma imagem do meu projeto, depois utilizaria Google Cloud Platform (GCP) para subir minha imagem fazendo uso do serviço Cloud Run.