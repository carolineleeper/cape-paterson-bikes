import { FaRoute } from "react-icons/fa";

export default {
	name: "ride",
	type: "document",
	title: "Rides",
	icon: FaRoute,
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
	preview: {
		select: {
			title: "name",
			subtitle: "length",
		},
		prepare(selection) {
			const { title, subtitle } = selection;
			return {
				title: title,
				subtitle: subtitle + "km",
			};
		},
	},
};
