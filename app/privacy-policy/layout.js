export const metadata = {
	title: 'Our Privacy Policy | Librovuelos',
	description:
		'Read the detailed Privacy Policy to know how we collect, use, and share your information for booking purposes.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
			</body>
		</html>
	);
}
