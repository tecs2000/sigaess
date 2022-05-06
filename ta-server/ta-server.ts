import express = require('express');
import bodyParser = require("body-parser");

import {Aluno} from '../common/aluno';
import {CadastroDeAlunos} from './cadastrodealunos';
import { CadastroDeProfs } from './cadastrodeprofs';
import { Professor } from '../common/professor';
import { CadastroDeCadeiras } from './cadastrodecadeiras';
import { Cadeira } from '../common/cadeiras';

var taserver = express();

var allowCrossDomain = function(req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

taserver.use(allowCrossDomain);

taserver.use(express.json());

// Requisições de aluno

var alunos: CadastroDeAlunos = new CadastroDeAlunos();

taserver.get('/alunos', function (req, res) {
  var aluno: string = JSON.stringify(alunos.getAlunos());
  res.send(aluno);
})

taserver.post('/aluno', function (req: express.Request, res: express.Response) {
  var aluno: Aluno = <Aluno> req.body; //verificar se é mesmo Aluno!
  aluno = alunos.criar(aluno);
  if (aluno) {
    res.send({"success": "O aluno foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser cadastrado"});
  }
})

taserver.put('/aluno', function (req: express.Request, res: express.Response) {
  var aluno: Aluno = <Aluno> req.body;
  aluno = alunos.atualizar(aluno);
  if (aluno) {
    res.send({"success": "O aluno foi atualizado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser atualizado"});
  }
})

// Requisições de Professor

var profs: CadastroDeProfs = new CadastroDeProfs();

taserver.get('/professores', function (req, res) {
  var professor: string = JSON.stringify(profs.getprofessors());
  res.send(professor);
})

taserver.post('/professor', function (req: express.Request, res: express.Response) {
  var professor: Professor = <Professor> req.body; //verificar se é mesmo professor!
  professor = profs.criar(professor);
  if (professor) {
    res.send({"success": "O professor foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O professor não pode ser cadastrado"});
  }
})

taserver.put('/professor', function (req: express.Request, res: express.Response) {
  var professor: Professor = <Professor> req.body;
  professor = profs.atualizar(professor);
  if (professor) {
    res.send({"success": "O professor foi atualizado com sucesso"});
  } else {
    res.send({"failure": "O professor não pode ser atualizado"});
  }
})

// Requisições de Cadeiras

var cadeiras: CadastroDeCadeiras = new CadastroDeCadeiras();

taserver.get('/cadeiras', function (req, res) {
  console.log("I receave a /cadeiras get");
  var result_cadeiras: string = JSON.stringify(cadeiras.getCadeiras());
  res.send(result_cadeiras);
})

taserver.post('/cadeira', function (req: express.Request, res: express.Response) {
  // Lembrar de colocar pra ele retornar a string do criar 
  // cadeira para quando dá errado
  console.log("I receave a /cadeira post");
  var cadeira: Cadeira | string = <Cadeira> req.body;
  console.log(cadeira);
  cadeira = cadeiras.criar(cadeira);
  if (cadeira) {
    res.send({"success": "O cadeira foi cadastrada com sucesso"});
  } else {
    res.send({"failure": "O cadeira não pode ser cadastrada"});
  }
})

taserver.put('/cadeira', function (req: express.Request, res: express.Response) {
  console.log("I receave a /cadeira put")
  var cadeira: Cadeira = <Cadeira> req.body;
  cadeira = cadeiras.atualizar(cadeira);
  if (cadeira) {
    res.send({"success": "O cadeira foi atualizada com sucesso"});
  } else {
    res.send({"failure": "O cadeira não pode ser atualizada"});
  }
})

taserver.get('/departamentos', function (req: express.Request, res: express.Response) {
  var departamentos: string = JSON.stringify(cadeiras.getDepartamentos());
  res.send(departamentos);
})

taserver.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
