import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import ride from "./ride";
import monthlySchedule from "./monthlySchedule";

export default createSchema({
	name: "default",
	types: schemaTypes.concat([ride, monthlySchedule]),
});
