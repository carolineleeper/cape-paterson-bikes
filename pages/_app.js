import "../style.css";
import Header from "../components/Header";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Nav />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
