"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const usuario_module_1 = require("./usuario/usuario.module");
const produto_module_1 = require("./produto/produto.module");
@(0, common_1.Module)({
    imports: [usuario_module_1.UsuarioModule, produto_module_1.ProdutoModule],
    controllers: [app_controller_1.AppController],
    providers: [app_service_1.AppService],
})
class AppModule {
}
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map