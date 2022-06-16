export default {
	name: "monthlySchedule",
	type: "document",
	title: "Monthly Schedules",
	fields: [
		{
			title: "Month",
			name: "month",
			type: "date",
			options: {
				dateFormat: "MMM YYYY",
				calendarTodayLabel: "Today",
			},
		},
		{
			title: "Rides",
			name: "rides",
			type: "array",
			of: [
				{
					title: "Ride",
					name: "ride",
					type: "object",
					fields: [
						{
							name: "dateTime",
							type: "datetime",
							title: "Date/Time",
							options: {
								dateFormat: "DD MMM YYYY",
								timeFormat: "HH:mm",
								timeStep: 15,
								calendarTodayLabel: "Today",
							},
						},
						{ name: "rideId", type: "number", title: "Ride number (ID)" },
						{ name: "details", type: "string", title: "Details" },
					],
				},
			],
		},
	],
};
