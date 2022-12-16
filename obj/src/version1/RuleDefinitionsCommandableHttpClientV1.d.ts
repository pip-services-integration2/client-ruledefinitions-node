import { FilterParams } from "pip-services3-commons-nodex";
import { PagingParams } from "pip-services3-commons-nodex";
import { DataPage } from "pip-services3-commons-nodex";
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { IRuleDefinitionsClientV1 } from "./IRuleDefinitionsClientV1";
import { RuleV1 } from './RuleV1';
export declare class RuleDefinitionsCommandableHttpClientV1 extends CommandableHttpClient implements IRuleDefinitionsClientV1 {
    constructor();
    getRules(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<RuleV1>>;
    getRuleById(correlationId: string, rule_id: string): Promise<RuleV1>;
    createRule(correlationId: string, rule: RuleV1): Promise<RuleV1>;
    updateRule(correlationId: string, rule: RuleV1): Promise<RuleV1>;
    deleteRuleById(correlationId: string, rule_id: string): Promise<RuleV1>;
}
