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
	],
};
