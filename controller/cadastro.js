const Usuario = require("../models/usuarios");
const Gestor = require('../models/gestor');

exports.criarGestor = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    
    const emailExistenteUsuario = await Usuario.findOne({ where: { email: email } });
    if (emailExistenteUsuario) {
      return res.status(400).json({ error: "Email já cadastrado como usuário!" });
    }

    const emailExistenteGestor = await Gestor.findOne({ where: { email: email } });
    if (emailExistenteGestor) {
      return res.status(400).json({ error: "Email já cadastrado como gestor!" });
    }

    const novoGestor = await Gestor.create({ nome, email, senha });

    res.status(201).json({ newGestorId: novoGestor.id, message: "Gestor cadastrado com sucesso" });
  } catch (error) {
    console.error('Erro ao criar gestor:', error);
    if (!res.headersSent) {
      res.status(500).json({ message: "Erro ao cadastrar Gestor" });
    }
  }
};

exports.criarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, cargo, turma } = req.body;

    const emailExistenteGestor = await Gestor.findOne({ where: { email: email } });
    if (emailExistenteGestor) {
      return res.status(400).json({ error: "Email já cadastrado como gestor!" });
    }

    const emailExistenteUsuario = await Usuario.findOne({ where: { email: email } });
    if (emailExistenteUsuario) {
      return res.status(400).json({ error: "Email já cadastrado como usuário!" });
    }

    const novoUsuario = await Usuario.create({ nome, email, senha, cargo, turma });

    res.status(201).json({ newUserId: novoUsuario.id, message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    if (!res.headersSent) {
      res.status(500).json({ message: "Erro ao cadastrar Usuário" });
    }
  }
};
