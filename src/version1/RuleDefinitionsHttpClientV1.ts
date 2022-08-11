import { FilterParams } from "pip-services3-commons-nodex";
import { PagingParams } from "pip-services3-commons-nodex";
import { DataPage } from "pip-services3-commons-nodex";
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { IRuleDefinitionsClientV1 } from "./IRuleDefinitionsClientV1";
import { RuleV1 } from './RuleV1';

export class RuleDefinitionsHttpClientV1 extends CommandableHttpClient implements IRuleDefinitionsClientV1 {

    public constructor() {
        super('v1/rule_definitions');
    }

    public async getRules(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<RuleV1>> {
        let timing = this.instrument(correlationId, 'ruledefinitions.get_rules');

        try {
            return await this.callCommand(
                'get_rules',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getRuleById(correlationId: string, rule_id: string): Promise<RuleV1> {
        let timing = this.instrument(correlationId, 'ruledefinitions.get_rule_by_id');

        try {
            return await this.callCommand(
                'get_rule_by_id',
                correlationId,
                {
                    rule_id: rule_id
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createRule(correlationId: string, rule: RuleV1): Promise<RuleV1> {
        let timing = this.instrument(correlationId, 'ruledefinitions.create_rule');

        try {
            return await this.callCommand(
                'create_rule',
                correlationId,
                {
                    rule: rule
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateRule(correlationId: string, rule: RuleV1): Promise<RuleV1> {
        let timing = this.instrument(correlationId, 'ruledefinitions.update_rule');

        try {
            return await this.callCommand(
                'update_rule',
                correlationId,
                {
                    rule: rule
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteRuleById(correlationId: string, rule_id: string): Promise<RuleV1> {
        let timing = this.instrument(correlationId, 'ruledefinitions.update_rule');

        try {
            return await this.callCommand(
                'delete_rule_by_id',
                correlationId,
                {
                    rule_id: rule_id
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}