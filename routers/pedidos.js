
const express = require('express');
const router = express.Router();

const pedidosControllers = require('../controller/pedidos'); 
const usuarioController = require('../controller/usuarios');


router.post('/pedidos', pedidosControllers.criarPedido);
router.get('/pedidos', pedidosControllers.listarPedidos);
router.delete('/pedidos/:id', pedidosControllers.excluirPedido);

router.get('/meus-pedidos/:userId', pedidosControllers.listarMeusPedidos);

module.exports = router;

// router.get('/:id', pedidosControllers.buscarPedidoPorId);
// router.put('/:id', pedidosControllers.atualizarPedido);