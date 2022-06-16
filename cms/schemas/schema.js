import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import ride from "./ride"; // import the file you just made

export default createSchema({
	name: "default",
	types: schemaTypes.concat([
		ride, // add the document type to this array
	]),
});
