"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function main() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['debug', 'error', 'warn', 'log']
    });
    await app.listen(5000);
    console.log('Listening on', await app.getUrl());
}
main();
//# sourceMappingURL=main.js.map