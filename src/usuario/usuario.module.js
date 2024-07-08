"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModule = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./usuario.service");
const usuario_controller_1 = require("./usuario.controller");
@(0, common_1.Module)({
    providers: [usuario_controller_1.UsuarioController, usuario_service_1.UsuarioService],
})
class UsuarioModule {
}
exports.UsuarioModule = UsuarioModule;
//# sourceMappingURL=usuario.module.js.map