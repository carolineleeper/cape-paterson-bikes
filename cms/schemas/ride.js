export default {
	name: "ride",
	type: "document",
	title: "Rides",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Name",
		},
		{
			name: "rideId",
			type: "string",
			title: "Ride Number (ID)",
		},
		{
			name: "length",
			type: "number",
			title: "Length (kms)",
		},
		{
			name: "bikeType",
			type: "string",
			title: "Bike Type",
		},
		{
			name: "directions",
			type: "string",
			title: "Directions",
		},
	],
};
