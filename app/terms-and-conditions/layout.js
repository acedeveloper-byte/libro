export const metadata = {
	title: 'Terms of Service | Librovuelos',
	description:
		'Would you like to keep the mention of ibrovuelos in all versions or generalize that too?',
};

export default function TermsLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
