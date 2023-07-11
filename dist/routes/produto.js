"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produto_1 = require("../controllers/produto");
const router = (0, express_1.Router)();
router.get('/', produto_1.getProducts);
router.get('/:id', produto_1.getProduct);
router.delete('/:id', produto_1.deleteProduct);
router.post('/', produto_1.postProduct);
router.put('/:id', produto_1.updateProduct);
exports.default = router;
