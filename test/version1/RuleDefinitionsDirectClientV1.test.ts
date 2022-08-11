
import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';

import { RuleDefinitionsMemoryPersistence } from 'service-ruledefinitions-node';
import { RuleDefinitionsController } from 'service-ruledefinitions-node';

import { RuleDefinitionsDirectClientV1 } from '../../src/version1/RuleDefinitionsDirectClientV1';
import { RuleDefinitionsClientV1Fixture } from './RuleDefinitionsClientV1Fixture';


suite('RuleDefinitionsDirectClientV1', () => {
    let persistence: RuleDefinitionsMemoryPersistence;
    let controller: RuleDefinitionsController;
    let client: RuleDefinitionsDirectClientV1;
    let fixture: RuleDefinitionsClientV1Fixture;

    setup(async () => {
        persistence = new RuleDefinitionsMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new RuleDefinitionsController();
        controller.configure(new ConfigParams());

        client = new RuleDefinitionsDirectClientV1();

        let references = References.fromTuples(
            new Descriptor('service-ruledefinitions', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-ruledefinitions', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-ruledefinitions', 'client', 'direct', 'default', '1.0'), client
        );

        controller.setReferences(references);
        client.setReferences(references);

        fixture = new RuleDefinitionsClientV1Fixture(client);

        await persistence.open(null);
    });

    teardown(async () => {
        await persistence.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCRUDOperations();
    });

    test('Get with Filters', async () => {
        await fixture.testGetwithFilters();
    });
});