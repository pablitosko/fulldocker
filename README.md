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


## Executando o Reposit??rio

```bash
# running
$ docker compose up -d

# Observa????es
?? poss??vel tamb??m subir somemte um servi??o do docker compose. Por exemplo: 

$ docker compose up -d grafana

```

## Ferramentas Utilizadas e Plugadas

```bash
Dentro deste projeto, procurei mesclar ferramentas e pr??ticas que podem nos ajudar no dia-a-dia. Abaixo estarei relacionando de forma simples e objetiva o que foi utilizado:

# ELK - Elasticsearch / Logstash / Kibana / Filebeat
Utilizei a stack ELK para capturar os logs gerados da aplica????o no container. Esses logs ser??o processados e apresentados no Kibana.

# Prometheus
Estou utilizando o Prometheus para captura de m??tricas. Neste caso, adicionei dentro do c??digo dos 2 projetos um exemplo simples de como capturar essas m??tricas.

# Grafana
O Grafana ir?? nos auxiliar na apresenta????o das m??tricas geradas pelo Prometheus. ?? um software bem completo e atende muito bem a demonstra????o de pain??is.

# Monorepo
Estou utilizando o conceito de Monorepo neste projeto, por??m realizei algumas modifica????es em rela????o a pr??tica sugerida dentro da documenta????o do NestJS. Resumindo, eu n??o unifiquei, por exemplo, o package.json dos projetos, pois no conceito de microsservi??o, na minha opini??o, cada projeto ter?? suas bibliotecas e depend??ncias que de fato ser??o utilizadas.

# Projeto dockerizado
Como voc?? pode ver, o projeto est?? totalmente dockerizado.

```

## Falando de C??digo...

```bash
Neste projeto eu procurei adicionar algumas coisinhas no c??digo.

# Padr??o de Projeto: Factory Method e Repository Pattern
Conforme a estrutura de pastas, eu dividi o servi??os, m??dulos, interfaces, etc. No c??digo, procurei utilizar o padr??o Factory Method e Repository Pattern. Segue o link com os detalhes:

https://refactoring.guru/design-patterns/factory-method

# SOLID
Procurei escrever os c??digos utilizando os princ??pios do SOLID. 

# gRPC
Neste projeto eu implementei um exemplo simples e funcional de como utilizar a comunica????o gRPC. 
O server-gRPC ser?? o projeto First-Consumer e o client-gRPC ser?? o projeto Main-Receiver. Resumindo...voc?? acionar?? a rota do Main-Receiver(existe um controller separado para isso) para que ele acione o First-Consumer.

# Microsservi??o
Apesar da simplicidade do c??digo, neste exemplo podemos ver a comunica????o dos 2 servi??os via gRPC. Isso pode ser aplicado no dia-a-dia da forma que for necess??ria.

# Debug
Conforme o launch.json do projeto, caso seja necess??rio, ele j?? est?? pronto para realizar o debug da aplica????o rodando dentro do pr??prio container. 
Para fazer isso, basta a aplica????o estar no ar, acessar a aba "Run and Debug" do VSCode, selecionar qual servi??o deseja debugar e dar um play. Inclusive, ?? poss??vel debugar os 2 servi??os existentes ao mesmo tempo!

# hot reload
Caso seja feita qualquer mudan??a no projeto, basta salvar o arquivo alterado que a pr??pria aplica????o ir?? reiniciar e aplicar a altera????o. Isso foi feito para os dois projetos.

```