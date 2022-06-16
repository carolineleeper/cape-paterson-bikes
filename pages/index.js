import Head from "next/head";
import { createClient } from "next-sanity";

const Home = ({ rides }) => {
	return (
		<>
			<Head>
				<title>Cape Paterson Bikes</title>
				<meta name="description" content="Bike riding group in Cape Paterson" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
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

export default Home;
