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
			<div
				key={lastMonth ? lastMonth._id : null}
				// className={lastMonth ? monthlyScheduleContainer : monthlyScheduleContainerHidden}
			>
				<h2>{formatMonth(lastMonth.month)}</h2>
				{lastMonth.rides.map((ride) => (
					<>
						<p>{formatDate(ride.dateTime)}</p>
						<p>{ride.rideName}</p>
						<p>{ride.details}</p>
					</>
				))}
			</div>
			<div
				key={currentMonth ? currentMonth._id : null}
				// className={currentMonth ? monthlyScheduleContainer : monthlyScheduleContainerHidden}
			>
				<h2>{formatMonth(currentMonth.month)}</h2>
				{currentMonth.rides.map((ride) => (
					<>
						<p>{formatDate(ride.dateTime)}</p>
						<p>{ride.rideName}</p>
						<p>{ride.details}</p>
					</>
				))}
			</div>
			<div
				key={nextMonth ? nextMonth._id : null}
				// className={nextMonth ? monthlyScheduleContainer : monthlyScheduleContainerHidden}
			>
				<h2>{formatMonth(nextMonth.month)}</h2>
				{nextMonth.rides.map((ride) => (
					<>
						<p>{formatDate(ride.dateTime)}</p>
						<p>{ride.rideName}</p>
						<p>{ride.details}</p>
					</>
				))}
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
