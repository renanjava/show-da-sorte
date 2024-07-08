"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoModule = void 0;
const common_1 = require("@nestjs/common");
const produto_service_1 = require("./produto.service");
const produto_controller_1 = require("./produto.controller");
@(0, common_1.Module)({
    controllers: [produto_controller_1.ProdutoController],
    providers: [produto_service_1.ProdutoService],
})
class ProdutoModule {
}
exports.ProdutoModule = ProdutoModule;
//# sourceMappingURL=produto.module.js.map