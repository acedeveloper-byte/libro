import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaEnvelope, FaPhoneVolume } from 'react-icons/fa';

const Page = () => {
	return (
		<>
			<Header />

			<div className='container mt-5 mb-5'>
				<h1 className='text-center mb-4 fs-2'>Contact Us</h1>
				<hr />

				<div className='row my-5 g-4'>
					{/* Left Column - Contact Info */}
					<div className='col-md-6'>
						<div className='border rounded p-4 text-center shadow-sm '>
							<div className='mb-3'>
								<FaHome
									size={40}
									className='bg-dark text-white p-2 rounded-circle'
								/>
							</div>
							<h5 className='fw-bold'>Address</h5>
							<p>222 NE 44TH ST MIAMI, FL 33138</p>
						</div>

						<div className='border rounded p-4 text-center shadow-sm mt-4'>
							<div className='mb-3'>
								<FaEnvelope
									size={40}
									className='bg-dark text-white p-2 rounded-circle'
								/>
							</div>
							<h5 className='fw-bold'>Email Address</h5>
							<p>support@librovuelos.com</p>
						</div>

						<div className='border rounded p-4 text-center shadow-sm mt-4'>
							<div className='mb-3'>
								<FaPhoneVolume
									size={40}
									className='bg-dark text-white p-2 rounded-circle'
								/>
							</div>
							<h5 className='fw-bold'>Phone Number</h5>
							<p>
								<a
									href='tel:+1-833-543-8024 '
									className='text-decoration-none text-dark'>
									+1-833-543-8024
								</a>
							</p>
						</div>
					</div>

					{/* Right Column - Contact Form */}
					<div className='col-md-6'>
						<div className='card shadow-sm p-4 h-100'>
							<form>
								<div className='mb-3'>
									<label
										htmlFor='name'
										className='form-label'>
										Full Name
									</label>
									<input
										type='text'
										className='form-control'
										id='name'
										placeholder='Enter your name'
									/>
								</div>

								<div className='mb-3'>
									<label
										htmlFor='email'
										className='form-label'>
										Email address
									</label>
									<input
										type='email'
										className='form-control'
										id='email'
										placeholder='name@example.com'
									/>
								</div>

								<div className='mb-3'>
									<label
										htmlFor='subject'
										className='form-label'>
										Subject
									</label>
									<input
										type='text'
										className='form-control'
										id='subject'
										placeholder='Enter subject'
									/>
								</div>

								<div className='mb-3'>
									<label
										htmlFor='message'
										className='form-label'>
										Message
									</label>
									<textarea
										className='form-control'
										id='message'
										rows='4'
										placeholder='Your message...'></textarea>
								</div>

								<button
									type='submit'
									className='btn btn-primary w-100'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Page;
