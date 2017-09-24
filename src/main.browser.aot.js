"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Angular bootstrapping
 */
var platform_browser_1 = require("@angular/platform-browser");
var environment_1 = require("./app/environment");
/**
 * App Module
 * our top level module that holds all of our components.
 */
var app_module_ngfactory_1 = require("../compiled/src/app/app.module.ngfactory");
/**
 * Bootstrap our Angular app with a top level NgModule.
 */
function main() {
    return platform_browser_1.platformBrowser()
        .bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory)
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}
function _domReadyHandler() {
    document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
    main();
}
//# sourceMappingURL=main.browser.aot.js.map