export const metadata = {
	title: 'Terms of Service | Librovuelos',
	description:
		'Would you like to keep the mention of ibrovuelos in all versions or generalize that too?',
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
