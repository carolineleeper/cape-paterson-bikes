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

const Calendar = ({ monthlySchedule }) => {
	return (
		<>
			<h1>Calendar</h1>
			{monthlySchedule.map((schedule) => (
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
			))}
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
