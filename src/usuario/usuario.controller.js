"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
@(0, common_1.Controller)('usuario')
class UsuarioController {
    usuarioService;
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    @(0, common_1.Post)()
    create(
    @(0, common_1.Body)()
    createUsuarioDto) {
        return this.usuarioService.create(createUsuarioDto);
    }
    @(0, common_1.Get)()
    findAll() {
        return this.usuarioService.findAll();
    }
    @(0, common_1.Get)(':id')
    findOne(
    @(0, common_1.Param)('id')
    id) {
        return this.usuarioService.findOne(+id);
    }
    @(0, common_1.Patch)(':id')
    update(
    @(0, common_1.Param)('id')
    id, 
    @(0, common_1.Body)()
    updateUsuarioDto) {
        return this.usuarioService.update(+id, updateUsuarioDto);
    }
    @(0, common_1.Delete)(':id')
    remove(
    @(0, common_1.Param)('id')
    id) {
        return this.usuarioService.remove(+id);
    }
}
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map