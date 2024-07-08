"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const common_1 = require("@nestjs/common");
@(0, common_1.Injectable)()
class ProdutoService {
    create(createProdutoDto) {
        return 'This action adds a new produto';
    }
    findAll() {
        return `This action returns all produto`;
    }
    findOne(id) {
        return `This action returns a #${id} produto`;
    }
    update(id, updateProdutoDto) {
        return `This action updates a #${id} produto`;
    }
    remove(id) {
        return `This action removes a #${id} produto`;
    }
}
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=produto.service.js.map