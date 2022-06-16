import { createClient } from "next-sanity";

const Rides = ({ rides }) => {
	return (
		<>
			<h1>Rides</h1>
			<ul>
				{rides.map((ride) => (
					<li key={ride._id}>{ride.name}</li>
				))}
			</ul>
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
	const rides = await client.fetch(`*[_type == "ride"]`);

	return {
		props: {
			rides,
		},
	};
}

export default Rides;
