import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: { template: '%s | Next 14', default: 'Next 14' },
};

const GlobalLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang='ko'>
			<body className={inter.className}>{children}</body>
		</html>
	);
};

export default GlobalLayout;
