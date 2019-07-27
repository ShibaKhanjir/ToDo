"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = /** @class */ (function () {
    function router() {
    }
    router.configRoutes = function (app) {
        app.get('/', function (req, res) { res.status(200).json({ "success": "Server is up and running" }); });
    };
    return router;
}());
exports.router = router;
