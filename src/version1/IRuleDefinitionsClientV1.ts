import { DataPage } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';

import { RuleV1 } from './RuleV1';

export interface IRuleDefinitionsClientV1 {
    getRules(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<RuleV1>>;

    getRuleById(correlationId: string, rule_id: string): Promise<RuleV1>;

    createRule(correlationId: string, rule: RuleV1): Promise<RuleV1>;

    updateRule(correlationId: string, rule: RuleV1): Promise<RuleV1>;

    deleteRuleById(correlationId: string, rule_id: string): Promise<RuleV1>;
}
