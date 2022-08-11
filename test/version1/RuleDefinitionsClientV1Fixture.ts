const assert = require('chai').assert;

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';

import { IRuleDefinitionsClientV1 } from '../../src/version1/IRuleDefinitionsClientV1';
import { RuleV1 } from '../../src/version1/RuleV1';
import { RulePriorityV1 } from '../../src/version1/RulePriorityV1';

export class RuleDefinitionsClientV1Fixture {
    private _client: IRuleDefinitionsClientV1;

    RULE1: RuleV1 = {
        id: '1',
        name: 'name 1',
        group: 'Group 1',
        action: 'copy',
        condition: 'condition 1',
        priority: RulePriorityV1.High,
        description: null,
        params: { param1: '123' },
        disabled: false
    };

    RULE2: RuleV1 = {
        id: '2',
        name: 'name 2',
        group: 'Group 1',
        action: 'delete',
        condition: 'condition 2',
        priority: RulePriorityV1.Low,
        description: null,
        params: { param1: '2443' },
        disabled: false
    };

    RULE3: RuleV1 = {
        id: '3',
        name: 'name 3',
        group: 'Group 2',
        action: 'create',
        condition: 'condition 1',
        priority: RulePriorityV1.Medium,
        description: null,
        params: { param1: '2345' },
        disabled: true
    };

    constructor(persistence) {
        assert.isNotNull(persistence);
        this._client = persistence;
    }

    public async testCRUDOperations() {
        let rule1: RuleV1;

        // Create one rule
        let rule = await this._client.createRule(null, this.RULE1);

        assert.isObject(rule);
        assert.equal(rule.id, this.RULE1.id);
        assert.equal(rule.name, this.RULE1.name);
        assert.equal(rule.group, this.RULE1.group);

        rule1 = rule;

        // Create another rule
        rule = await this._client.createRule(null, this.RULE2);

        assert.isObject(rule);
        assert.equal(rule.id, this.RULE2.id);
        assert.equal(rule.name, this.RULE2.name);
        assert.equal(rule.group, this.RULE2.group);

        // Create yet another rule
        rule = await this._client.createRule(null, this.RULE3);
        
        assert.isObject(rule);
        assert.equal(rule.id, this.RULE3.id);
        assert.equal(rule.name, this.RULE3.name);
        assert.equal(rule.group, this.RULE3.group);

        // Get all rules
        let page = await this._client.getRules(
            null,
            new FilterParams(),
            new PagingParams()
        );

        rule1 = page.data[0];

        // Update the rule
        rule1.name = 'Updated Name 1';

        rule = await this._client.updateRule(null, rule1);

        assert.isObject(rule);
        assert.equal(rule.name, 'Updated Name 1');
        assert.equal(rule.id, rule1.id);

        // Delete rule
        await this._client.deleteRuleById(null, rule1.id);

        // Try to get delete rule
        rule = await this._client.getRuleById(null, rule1.id);

        assert.isNull(rule || null);
    }

    public async testGetwithFilters() {
        // Create one rule
        let rule = await this._client.createRule(null, this.RULE1);

        assert.isObject(rule);
        assert.equal(rule.id, this.RULE1.id);
        assert.equal(rule.name, this.RULE1.name);
        assert.equal(rule.group, this.RULE1.group);

        // Create another rule
        rule = await this._client.createRule(null, this.RULE2);

        assert.isObject(rule);
        assert.equal(rule.id, this.RULE2.id);
        assert.equal(rule.name, this.RULE2.name);
        assert.equal(rule.group, this.RULE2.group);

        // Create yet another rule
        rule = await this._client.createRule(null, this.RULE3);

        assert.isObject(rule);
        assert.equal(rule.id, this.RULE3.id);
        assert.equal(rule.name, this.RULE3.name);
        assert.equal(rule.group, this.RULE3.group);

        // Get rules filtered by group
        let rules = await this._client.getRules(
            null,
            FilterParams.fromValue({
                group: 'Group 1'
            }),
            new PagingParams()
        );

        assert.isObject(rules);
        assert.lengthOf(rules.data, 2);

        // Get rules filtered by search
        rules = await this._client.getRules(
            null,
            FilterParams.fromValue({
                search: '2'
            }),
            new PagingParams()
        );

        assert.isObject(rules);
        assert.lengthOf(rules.data, 2);

        // Get rules filtered by priority
        rules = await this._client.getRules(
            null,
            FilterParams.fromValue({
                priority: RulePriorityV1.Medium
            }),
            new PagingParams()
        );

        assert.isObject(rules);
        assert.lengthOf(rules.data, 1);

        // Get rules filtered by priority range
        rules = await this._client.getRules(
            null,
            FilterParams.fromValue({
                min_priority: RulePriorityV1.Medium,
                max_priority: RulePriorityV1.High
            }),
            new PagingParams()
        );

        assert.isObject(rules);
        assert.lengthOf(rules.data, 2);

        // Get rules filtered by action
        rules = await this._client.getRules(
            null,
            FilterParams.fromValue({
                action: 'delete'
            }),
            new PagingParams()
        );

        assert.isObject(rules);
        assert.lengthOf(rules.data, 1);
    }
}
