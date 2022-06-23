import "../style.css";
import Header from "../components/Header";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Nav />
			<div className="pageContent">
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
