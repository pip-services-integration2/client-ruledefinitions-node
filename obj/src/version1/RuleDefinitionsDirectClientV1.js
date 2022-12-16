"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleDefinitionsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class RuleDefinitionsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor('service-ruledefinitions', 'controller', '*', '*', '1.0'));
    }
    getRules(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'ruledefinitions.get_rules');
            try {
                let res = yield this._controller.getRules(correlationId, filter, paging);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getRuleById(correlationId, rule_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'ruledefinitions.get_rule_by_id');
            try {
                let res = yield this._controller.getRuleById(correlationId, rule_id);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    createRule(correlationId, rule) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'ruledefinitions.create_rule');
            try {
                let res = yield this._controller.createRule(correlationId, rule);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    updateRule(correlationId, rule) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'ruledefinitions.update_rule');
            try {
                let res = yield this._controller.updateRule(correlationId, rule);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteRuleById(correlationId, rule_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'ruledefinitions.delete_rule_by_id');
            try {
                let res = yield this._controller.deleteRuleById(correlationId, rule_id);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.RuleDefinitionsDirectClientV1 = RuleDefinitionsDirectClientV1;
//# sourceMappingURL=RuleDefinitionsDirectClientV1.js.map