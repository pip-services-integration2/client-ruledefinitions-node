import { FilterParams } from "pip-services3-commons-nodex";
import { PagingParams } from "pip-services3-commons-nodex";
import { DataPage } from "pip-services3-commons-nodex";
import { IRuleDefinitionsClientV1 } from "./IRuleDefinitionsClientV1";
import { DirectClient } from 'pip-services3-rpc-nodex';
import { RuleV1 } from './RuleV1';
export declare class RuleDefinitionsDirectClientV1 extends DirectClient<any> implements IRuleDefinitionsClientV1 {
    constructor();
    getRules(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<RuleV1>>;
    getRuleById(correlationId: string, rule_id: string): Promise<RuleV1>;
    createRule(correlationId: string, rule: RuleV1): Promise<RuleV1>;
    updateRule(correlationId: string, rule: RuleV1): Promise<RuleV1>;
    deleteRuleById(correlationId: string, rule_id: string): Promise<RuleV1>;
}
