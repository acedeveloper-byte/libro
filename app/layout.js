import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Book Flights | Librovuelos',
	description:
		'Find exclusive deals on flight bookings and make affordable reservations. Call Librovuelos for deals, and travel for less!',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='google-site-verification'
					content='pVaLl6JmQ2N5KO858MA28ltPiCr0tP-w1kRoS5ayX3Y'
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
