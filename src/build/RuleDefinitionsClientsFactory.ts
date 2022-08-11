import { Factory } from 'pip-services3-components-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';

import { RuleDefinitionsDirectClientV1 } from '../version1/RuleDefinitionsDirectClientV1';
import { RuleDefinitionsHttpClientV1 } from '../version1/RuleDefinitionsHttpClientV1';
import { RuleDefinitionsNullClientV1 } from '../version1/RuleDefinitionsNullClientV1';


export class RuleDefinitionsClientsFactory extends Factory {
	public static Descriptor = new Descriptor("service-ruledefinitions", "factory", "default", "default", "1.0");
	public static DirectClientDescriptor = new Descriptor("service-ruledefinitions", "client", "direct", "*", "1.0");
	public static HttpClientDescriptor = new Descriptor("service-ruledefinitions", "client", "http", "*", "1.0");
	public static NullClientDescriptor = new Descriptor("service-ruledefinitions", "client", "null", "*", "1.0");

	constructor() {
		super();
		this.registerAsType(RuleDefinitionsClientsFactory.DirectClientDescriptor, RuleDefinitionsDirectClientV1);
		this.registerAsType(RuleDefinitionsClientsFactory.HttpClientDescriptor, RuleDefinitionsHttpClientV1);
		this.registerAsType(RuleDefinitionsClientsFactory.NullClientDescriptor, RuleDefinitionsNullClientV1);
	}

}
