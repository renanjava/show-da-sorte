"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const common_1 = require("@nestjs/common");
@(0, common_1.Controller)('produto')
class ProdutoController {
    produtoService;
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    @(0, common_1.Post)()
    create(
    @(0, common_1.Body)()
    createProdutoDto) {
        return this.produtoService.create(createProdutoDto);
    }
    @(0, common_1.Get)()
    findAll() {
        return this.produtoService.findAll();
    }
    @(0, common_1.Get)(':id')
    findOne(
    @(0, common_1.Param)('id')
    id) {
        return this.produtoService.findOne(+id);
    }
    @(0, common_1.Patch)(':id')
    update(
    @(0, common_1.Param)('id')
    id, 
    @(0, common_1.Body)()
    updateProdutoDto) {
        return this.produtoService.update(+id, updateProdutoDto);
    }
    @(0, common_1.Delete)(':id')
    remove(
    @(0, common_1.Param)('id')
    id) {
        return this.produtoService.remove(+id);
    }
}
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=produto.controller.js.map