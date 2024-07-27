import Container from '@/components/Container';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
	title: 'Home',
};

const HomePage: NextPage = () => {
	return <Container />;
};

export default HomePage;
