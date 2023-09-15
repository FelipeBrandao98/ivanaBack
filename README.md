<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

### 08-04-23

## 1 - Criado rota completa de mailer

### 08-05-23

## 1 - Habilitado Cors

## 2 - Criado regras com Pipe

### 08-12-23

## 1 - Criado rotas events e images

### 14-08-23

## 1 - Finalizado rotas de images

## 2 - Criado a relação de imagens na tabela eventos

### 16-08-23

## 1 - Acrescentado ParseIntPipe nos Controllers

## 2 - Removido Parse int das rotas

## 3 - Adição dos campos url e author na tabela image

## 4 - Renomeação da tabela Events para News, e adicionado o campo categoryId, juntamente com a tabela NewsCategory

## 5 - Adicionado função de incluir tabela de imagens e categoria na chamada GET de news

## 6 - Adicionado rota de listar news por categoria

### 18-08-23

## 1 - Adicionado tabelas Collections, CollectionsCategory, e CollectionsImage

## 2 - Adicionado CRUD de collections

## 3 - Adicionado CRUD de collectionsCategory

## 4 - Adicionado CRUD de collectionsImages

## 5 - Adicionado mecanismo de upload de imagens na rota CollectionsImage

### 19-08-23

## 1 - Adicionado rota de post para Collection

## 2 - Collections Category Finalizado, também incluído tabela collection e cover na resposta do Collection

## 3 - Collections Images finalizado

## 4 - Criado Campo CoverId e relacionamento de Images no campo cover na tabela CollectionsCategory

### 21-08-23

## 1 - Adicionado rota de listagem de fotos de coleção

## 2 - Criado a Rota de Avaliations

### 23-08-23

## 1 - Renomeado Rota de Avaliations para Comments

### 01-09-23

## 1 - Criado campos de Linguagens e Update dos DTOs e Entities

## 2 - Criado rotas de linguagens para Collections Category e Collections

### 04-09-23

## 1 - Adicionado Filtro de Rota (Interceptors) na rota Collections-Category para filtar resultador com base na linguagem

## 2 - Finalizado Rotas da aplicação

## 3 - Conserto da Rota de Comentários

### 11-09-23

## 1 - Criado a tabela de Agendamentos

## 2 - Criado Rotas de Appointment (Falta Campo de Data do Casamento)

## 3 - Adicionado Campo MerryDate na Tabela Appointment

### 15-09-23

## 1 - Adicionado método de Envio de E-mail atravéz de uma api micro-serviço criada
