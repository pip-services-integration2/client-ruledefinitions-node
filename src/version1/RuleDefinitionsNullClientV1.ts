import { FilterParams } from "pip-services3-commons-nodex";
import { PagingParams } from "pip-services3-commons-nodex";
import { DataPage } from "pip-services3-commons-nodex";

import { IRuleDefinitionsClientV1 } from "./IRuleDefinitionsClientV1";
import { RuleV1 } from './RuleV1';


export class RuleDefinitionsNullClientV1 implements IRuleDefinitionsClientV1 {
    public async getRules(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<RuleV1>> {
        return new DataPage<RuleV1>();
    }
    public async getRuleById(correlationId: string, rule_id: string): Promise<RuleV1> {
        return null;
    }
    public async createRule(correlationId: string, rule: RuleV1): Promise<RuleV1> {
        return null;
    }
    public async updateRule(correlationId: string, rule: RuleV1): Promise<RuleV1> {
        return null;
    }
    public async deleteRuleById(correlationId: string, rule_id: string): Promise<RuleV1> {
        return null;
    }
}