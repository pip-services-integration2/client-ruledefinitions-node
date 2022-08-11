import { FilterParams } from "pip-services3-commons-nodex";
import { PagingParams } from "pip-services3-commons-nodex";
import { Descriptor } from "pip-services3-commons-nodex";
import { DataPage } from "pip-services3-commons-nodex";

import { IRuleDefinitionsClientV1 } from "./IRuleDefinitionsClientV1";
import { DirectClient } from 'pip-services3-rpc-nodex';
import { RuleV1 } from './RuleV1';

export class RuleDefinitionsDirectClientV1 extends DirectClient<any> implements IRuleDefinitionsClientV1 {

    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor('service-ruledefinitions', 'controller', '*', '*', '1.0'));
    }

    public async getRules(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<RuleV1>> {
        let timing = this.instrument(correlationId, 'ruledefinitions.get_rules');

        try {
            return await this._controller.getRules(correlationId, filter, paging);
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
            return await this._controller.getRuleById(correlationId, rule_id);
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
            return await this._controller.createRule(correlationId, rule);
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
            return await this._controller.updateRule(correlationId, rule);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteRuleById(correlationId: string, rule_id: string): Promise<RuleV1> {
        let timing = this.instrument(correlationId, 'ruledefinitions.delete_rule_by_id');
        
        try {
            return await this._controller.deleteRuleById(correlationId, rule_id);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}