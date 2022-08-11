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
exports.RuleDefinitionsHttpClientV1 = void 0;
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class RuleDefinitionsHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor() {
        super('v1/rule_definitions');
    }
    getRules(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'ruledefinitions.get_rules');
            try {
                return yield this.callCommand('get_rules', correlationId, {
                    filter: filter,
                    paging: paging
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getRuleById(correlationId, rule_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'ruledefinitions.get_rule_by_id');
            try {
                return yield this.callCommand('get_rule_by_id', correlationId, {
                    rule_id: rule_id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createRule(correlationId, rule) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'ruledefinitions.create_rule');
            try {
                return yield this.callCommand('create_rule', correlationId, {
                    rule: rule
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateRule(correlationId, rule) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'ruledefinitions.update_rule');
            try {
                return yield this.callCommand('update_rule', correlationId, {
                    rule: rule
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteRuleById(correlationId, rule_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'ruledefinitions.update_rule');
            try {
                return yield this.callCommand('delete_rule_by_id', correlationId, {
                    rule_id: rule_id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.RuleDefinitionsHttpClientV1 = RuleDefinitionsHttpClientV1;
//# sourceMappingURL=RuleDefinitionsHttpClientV1.js.map