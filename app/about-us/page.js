import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/app/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const page = () => {
	return (
		<>
			<Header />
			<Container>
				<div>
					<h1 className='my-3 fw-bold fs-2'> About us</h1>
				</div>
				<hr />
				<p>
					Librovuelos.com is a one-stop platform to book flights with different
					airlines at discounted fares. With us, you will get exclusive flight
					deals that will help you complete your travel dreams within your
					budget. So if you are a budget-oriented traveler and looking forward
					to a budget trip, then Librovuelos is your perfect pick.
				</p>

				<p>
					Our dedicated team is available all the time to help you with your
					bookings. Share your preferences, and we will craft an itinerary that
					will suit your budget and priorities. So contact us and get ready for
					a memorable experience on your way to your dream destination.&nbsp;
				</p>

				<h3 class='h4'>Why Choose Librovuelos?</h3>
				<p>
					We offer premium travel services that set us apart from other
					third-party sites. With us, you will enjoy the following
					benefits.&nbsp;
				</p>

				<h4 class='h5'>Unbeatable Deals</h4>
				<p>
					We offer countless deals and discounts to customers so they can book
					their flight tickets without any second thoughts.
				</p>

				<h4 class='h5'>Tailor-Made Packages</h4>
				<p>
					Our experts will customize a vacation package according to your
					specific travel needs and budget.
				</p>

				<h4 class='h5'>Worldwide Destinations</h4>
				<p>
					From mountains to beaches, you can book tickets to thousands of
					destinations worldwide with us.&nbsp;
				</p>

				<h4 class='h5'>24*7 Customer Service</h4>
				<p>
					Our experts are available all the time to assist you with your
					travel-related queries for a smooth travel experience.
				</p>

				<h4 class='h5'>Reliable and Trustworthy</h4>
				<p>
					We are one of the reliable online travel agencies, promising to
					provide the best services to customers.&nbsp;
				</p>

				<h3 class='h5'>Contact Us to Book Now!</h3>
				<p>
					At librovuelos.com, you get the best services for an unforgettable
					journey. Our only aim is to facilitate you with a journey of your
					liking. So what are you waiting for? Get in touch with us now to start
					planning your next trip!
				</p>

				<br />
			</Container>
			<Footer />

			<br />
		</>
	);
};

export default page;
