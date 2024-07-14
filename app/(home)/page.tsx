import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
	title: 'Home',
};

const HomePage: NextPage = () => {
	return (
		<main>
			<h1>Hello, World</h1>
		</main>
	);
};

export default HomePage;
