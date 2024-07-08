"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
@(0, common_1.Injectable)()
class UsuarioService {
    create(createUsuarioDto) {
        return 'This action adds a new usuario';
    }
    findAll() {
        return `This action returns all usuario`;
    }
    findOne(id) {
        return `This action returns a #${id} usuario`;
    }
    update(id, updateUsuarioDto) {
        return `This action updates a #${id} usuario`;
    }
    remove(id) {
        return `This action removes a #${id} usuario`;
    }
}
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map