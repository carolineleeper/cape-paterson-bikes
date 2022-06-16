// import styles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
	return (
		<nav>
			<div>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/rides">
					<a>Rides</a>
				</Link>
				<Link href="/calendar">
					<a>Calendar</a>
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
