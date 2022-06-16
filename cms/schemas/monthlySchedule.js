import { FaBicycle, FaCalendarAlt } from "react-icons/fa";

export default {
	name: "monthlySchedule",
	type: "document",
	title: "Monthly Schedules",
	icon: FaCalendarAlt,
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
					icon: FaBicycle,
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
						{ name: "rideName", type: "string", title: "Ride name" },
						{ name: "details", type: "string", title: "Details" },
					],
					preview: {
						select: {
							title: "dateTime",
							subtitle: "rideName",
						},
						prepare(selection) {
							const { title, subtitle } = selection;
							return {
								title: new Date(title).toDateString().slice(0, -5),
								subtitle,
							};
						},
					},
				},
			],
		},
	],
	preview: {
		select: {
			title: "month",
		},
		prepare(selection) {
			const { title } = selection;

			const formatDate = (value) => {
				let date = new Date(value);
				const month = date.toLocaleString("default", { month: "short" });
				const year = date.toLocaleString("default", { year: "numeric" });
				return month + " " + year;
			};

			return {
				title: formatDate(title),
			};
		},
	},
};
