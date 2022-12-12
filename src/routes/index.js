const express = require('express');
const psicologoController = require('../controllers/psicologoController');
const pacienteController = require('../controllers/pacientesController');
const atendimentoController = require('../controllers/atendimentoController');
const routes = express.Router();

//Rotas psicologos
routes.get("/psicologos", psicologoController.listarPsicologos);
routes.get("/psicologos/:id", psicologoController.psicologoPorId);
routes.post("/psicologos", psicologoController.cadastrarPsicologo);
routes.put("/psicologos/:id", psicologoController.atualizarPsicologo);
routes.delete("/psicologos/:id", psicologoController.deletarPsicologo);

//Rotas pacientes
routes.get("/pacientes", pacienteController.listarPacientes);
routes.get("/pacientes/:id", pacienteController.pacientePorId);
routes.post("/pacientes", pacienteController.cadastrarPaciente);
routes.put("/pacientes/:id", pacienteController.atualizarPaciente);
routes.delete("/pacientes/:id", pacienteController.deletarPaciente);

//Rotas atendimentos
routes.get("/atendimentos", atendimentoController.listaratendimentos);
routes.get("/atendimentos/:id", atendimentoController.atendimentoPorId);
routes.post("/atendimentos", atendimentoController.cadastrarAtendimento);

routes.get("/", (req, res) => {
  res.send("Olá mundo!");
})

routes.post("/cadastrar", (req, res) => {
  console.log(req.body);
  res.json(req.body);
})

module.exports = routes;