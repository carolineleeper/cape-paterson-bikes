import { createClient } from "next-sanity";

const formatMonth = (value) => {
	const date = new Date(value);
	const month = date.toLocaleString("default", { month: "short" });
	const year = date.toLocaleString("default", { year: "numeric" });
	return month + " " + year;
};

const formatDate = (value) => {
	const date = new Date(value);
	return date.toDateString().slice(0, -5);
};

const filterMonthlySchedule = (schedule) => {
	const currentMonth = schedule.find((month) => {
		const currentDate = new Date();
		const scheduleMonth = new Date(month.month);

		return scheduleMonth.getMonth() === currentDate.getMonth();
	});

	const lastMonth = schedule.find((month) => {
		const currentDate = new Date();
		const scheduleMonth = new Date(month.month);

		return scheduleMonth.getMonth() === currentDate.getMonth() - 1;
	});

	const nextMonth = schedule.find((month) => {
		const currentDate = new Date();
		const scheduleMonth = new Date(month.month);

		return scheduleMonth.getMonth() === currentDate.getMonth() + 1;
	});

	return { currentMonth, lastMonth, nextMonth };
};

const Calendar = ({ monthlySchedule }) => {
	const { lastMonth, currentMonth, nextMonth } = filterMonthlySchedule(monthlySchedule);

	return (
		<>
			<h1>Calendar</h1>
			<div>
				<h2>{lastMonth ? formatMonth(lastMonth.month) : null}</h2>
			</div>
			<div>
				<h2>{currentMonth ? formatMonth(currentMonth.month) : null}</h2>

				{/* {currentMonth.map((schedule) => (
					<div key={schedule._id}>
					<h2>{formatMonth(schedule.month)}</h2>
					<h3>Rides</h3>
					{schedule.rides.map((ride) => (
						<>
						<p>{formatDate(ride.dateTime)}</p>
						<p>{ride.rideName}</p>
						<p>{ride.details}</p>
						</>
						))}
						</div>
					))} */}
			</div>
			<div>
				<h2>{nextMonth ? formatMonth(nextMonth.month) : null}</h2>
			</div>
		</>
	);
};

const client = createClient({
	projectId: "xbdplrfb",
	dataset: "production",
	apiVersion: "2022-06-16",
	useCdn: false,
});

export async function getStaticProps() {
	const monthlySchedule = await client.fetch(`*[_type == "monthlySchedule"]`);

	return {
		props: {
			monthlySchedule,
		},
	};
}

export default Calendar;
