import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';

import { RuleDefinitionsMemoryPersistence } from 'service-ruledefinitions-node';
import { RuleDefinitionsController } from 'service-ruledefinitions-node';
import { RuleDefinitionsHttpServiceV1 } from 'service-ruledefinitions-node';

import { RuleDefinitionsHttpClientV1 } from '../../src/version1/RuleDefinitionsHttpClientV1';
import { RuleDefinitionsClientV1Fixture } from './RuleDefinitionsClientV1Fixture';

suite('RuleDefinitionsHttpClientV1', () => {
    let persistence: RuleDefinitionsMemoryPersistence;
    let controller: RuleDefinitionsController;
    let service: RuleDefinitionsHttpServiceV1;
    let client: RuleDefinitionsHttpClientV1;
    let fixture: RuleDefinitionsClientV1Fixture;

    setup(async () => {
        persistence = new RuleDefinitionsMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new RuleDefinitionsController();
        controller.configure(new ConfigParams());

        let httpConfig = ConfigParams.fromTuples(
            'connection.protocol', 'http',
            'connection.port', 3000,
            'connection.host', 'localhost'
        );

        service = new RuleDefinitionsHttpServiceV1();
        service.configure(httpConfig);

        client = new RuleDefinitionsHttpClientV1();
        client.configure(httpConfig);

        let references = References.fromTuples(
            new Descriptor('service-ruledefinitions', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-ruledefinitions', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-ruledefinitions', 'service', 'http', 'default', '1.0'), service,
            new Descriptor('service-ruledefinitions', 'client', 'http', 'default', '1.0'), client
        );
        controller.setReferences(references);
        service.setReferences(references);
        client.setReferences(references);

        fixture = new RuleDefinitionsClientV1Fixture(client);

        await persistence.open(null);
        await service.open(null);
        await client.open(null);
    });

    teardown(async () => {
        await client.close(null);
        await service.close(null);
        await persistence.close(null);
    });
    
    test('CRUD Operations', async () => {
        await fixture.testCRUDOperations();
    });

    test('Get with Filters', async () => {
        await fixture.testGetwithFilters();
    });

});