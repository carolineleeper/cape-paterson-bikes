import { createClient } from "next-sanity";
import SEO from "../components/SEO";

const Rides = ({ rides }) => {
	return (
		<>
			<SEO title="Rides" />
			<h1 className="pageTitle">Rides</h1>
			{rides.map((ride) => (
				<div key={ride._id}>
					<h2>{ride.name}</h2>
					<p>{ride.length}km</p>
					<p>{ride.bikeType}</p>
					<p>{ride.directions}</p>
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
	const rides = await client.fetch(`*[_type == "ride"]`);

	return {
		props: {
			rides,
		},
	};
}

export default Rides;
