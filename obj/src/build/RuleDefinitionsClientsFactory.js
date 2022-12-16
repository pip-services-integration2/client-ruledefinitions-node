"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleDefinitionsClientsFactory = void 0;
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const RuleDefinitionsDirectClientV1_1 = require("../version1/RuleDefinitionsDirectClientV1");
const RuleDefinitionsCommandableHttpClientV1_1 = require("../version1/RuleDefinitionsCommandableHttpClientV1");
const RuleDefinitionsNullClientV1_1 = require("../version1/RuleDefinitionsNullClientV1");
class RuleDefinitionsClientsFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(RuleDefinitionsClientsFactory.DirectClientDescriptor, RuleDefinitionsDirectClientV1_1.RuleDefinitionsDirectClientV1);
        this.registerAsType(RuleDefinitionsClientsFactory.CmdHttpClientDescriptor, RuleDefinitionsCommandableHttpClientV1_1.RuleDefinitionsCommandableHttpClientV1);
        this.registerAsType(RuleDefinitionsClientsFactory.NullClientDescriptor, RuleDefinitionsNullClientV1_1.RuleDefinitionsNullClientV1);
    }
}
exports.RuleDefinitionsClientsFactory = RuleDefinitionsClientsFactory;
RuleDefinitionsClientsFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor("service-ruledefinitions", "factory", "default", "default", "1.0");
RuleDefinitionsClientsFactory.DirectClientDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-ruledefinitions", "client", "direct", "*", "1.0");
RuleDefinitionsClientsFactory.CmdHttpClientDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-ruledefinitions", "client", "commandable-http", "*", "1.0");
RuleDefinitionsClientsFactory.NullClientDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-ruledefinitions", "client", "null", "*", "1.0");
//# sourceMappingURL=RuleDefinitionsClientsFactory.js.map