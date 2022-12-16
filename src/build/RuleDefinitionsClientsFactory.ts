import { Factory } from 'pip-services3-components-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';

import { RuleDefinitionsDirectClientV1 } from '../version1/RuleDefinitionsDirectClientV1';
import { RuleDefinitionsCommandableHttpClientV1 } from '../version1/RuleDefinitionsCommandableHttpClientV1';
import { RuleDefinitionsNullClientV1 } from '../version1/RuleDefinitionsNullClientV1';


export class RuleDefinitionsClientsFactory extends Factory {
	public static Descriptor = new Descriptor("service-ruledefinitions", "factory", "default", "default", "1.0");
	public static DirectClientDescriptor = new Descriptor("service-ruledefinitions", "client", "direct", "*", "1.0");
	public static CmdHttpClientDescriptor = new Descriptor("service-ruledefinitions", "client", "commandable-http", "*", "1.0");
	public static NullClientDescriptor = new Descriptor("service-ruledefinitions", "client", "null", "*", "1.0");

	constructor() {
		super();
		this.registerAsType(RuleDefinitionsClientsFactory.DirectClientDescriptor, RuleDefinitionsDirectClientV1);
		this.registerAsType(RuleDefinitionsClientsFactory.CmdHttpClientDescriptor, RuleDefinitionsCommandableHttpClientV1);
		this.registerAsType(RuleDefinitionsClientsFactory.NullClientDescriptor, RuleDefinitionsNullClientV1);
	}

}
