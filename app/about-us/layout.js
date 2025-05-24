import "../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export const metadata = {
  title: "About Librovuelos | Find Cheap Copa Airlines Flights",
  description: "Librovuelos is a third-party booking platform that helps you plan an itinerary within your budget. Find cheaper fares and book your flights today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
