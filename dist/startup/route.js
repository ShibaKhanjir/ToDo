"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todoRoutes_1 = require("./../router/todoRoutes");
var router = /** @class */ (function () {
    function router() {
    }
    router.configRoutes = function (app) {
        app.get('/', function (req, res) { res.status(200).json({ "success": "Server is up and running" }); });
        app.use('/todo', todoRoutes_1.todoRouter);
    };
    return router;
}());
exports.router = router;
