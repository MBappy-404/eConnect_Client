import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/Auth';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import { ThreeCircles, RotatingLines } from 'react-loader-spinner';
import { FaArrowLeft, FaLongArrowAltLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const About = () => {
	const { user } = useContext(AuthContext);
	const { register, formState: { errors }, handleSubmit } = useForm();
	const navigate = useNavigate()
	const [loading, setLoading] = useState()
	const [loading2, setLoading2] = useState()

	// load users data 
	const { data: users = [], refetch } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			setLoading(true)
			const res = await fetch('https://e-somaz-server.vercel.app/users');
			const data = await res.json();
			setLoading(false)
			return data;
		}
	})

	// handle back 
	const handleBack = () => {
		navigate('/profile')
	}

	// update user info 
	const handleUpdate = (data) => {

		setLoading2(true)
		const image = data.image[0];
		//   update without image 
		let savedPhoto = users.filter(users => { return users.email === user?.email }).map(eUser => eUser.updatedPhoto)
		let photo = savedPhoto[0]
		// console.log(photo[0]);
		if (!data.image[0]) {
			const updatedInfo = {
				image: photo,
				updatedEmail: data.email,
				updatedName: data.name,
				bio: data.bio,
				phone: data.phone,
				college: data.college,
				work: data.work,
				address: data.address,
				facebook: data.facebook,
				twitter: data.twitter,
				instagram: data.instagram
			}

			//   console.log(post);
			fetch(`https://e-somaz-server.vercel.app/user?email=${user?.email}`, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(updatedInfo)
			})
				.then(res => res.json())
				.then(data => {
					// console.log(data);
					if (data.acknowledged || data.matchedCount) {
						toast.success("Your info update successfully")
						setLoading2(false)
						navigate("/profile")
						refetch()
					}

				})
		}
		// update with image 
		const formData = new FormData();
		formData.append('image', image);
		console.log(formData);
		//    upload image bb 
		fetch("https://api.imgbb.com/1/upload?key=f2c11278b0c7405521c7d060f7caf053", {
			method: 'POST',
			body: formData
		})
			.then(res => res.json())
			.then(imageData => {
				// console.log(imageData);
				if (imageData.success) {
					const updatedInfo = {
						image: imageData.data.url,
						updatedEmail: data.email,
						updatedName: data.name,
						bio: data.bio,
						phone: data.phone,
						college: data.college,
						work: data.work,
						address: data.address,
						facebook: data.facebook,
						twitter: data.twitter,
						instagram: data.instagram

					}
					//   console.log(post);
					fetch(`https://e-somaz-server.vercel.app/user?email=${user?.email}`, {
						method: 'PUT',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(updatedInfo)
					})
						.then(res => res.json())
						.then(data => {
							console.log(data);
							if (data.acknowledged || data.matchedCount) {
								toast.success("Your info update successfully")
								setLoading2(false)
								navigate("/profile")
								refetch()
							}

						})
				}
			})

	}
	return (
		<div className='px-2 flex justify-center'>
			<div className=" mx-auto py-10 md:py-5 w-full md:w-[750px] lg:w-[500px]">
				<h1 className='text-2xl font-bold mb-5 text-center text-blue-600 mt-10 md:mt-0 '>Update Your Info</h1>
				{
					loading ? <div className='flex justify-center mt-40 pb-60'>
						<ThreeCircles
							height="80"
							width="80"
							color="#6693F5"
							wrapperStyle={{}}
							wrapperclassName=""
							visible={true}
							ariaLabel="three-circles-rotating"
							outerCircleColor=""
							innerCircleColor=""
							middleCircleColor=""
						/>
					</div> :

						<>
							{
								users.filter(users => { return users.email === user?.email }).map(eUser =>

									<form key={eUser._id} className='bg-white px-10 py-10 m-auto rounded-2xl' onSubmit={handleSubmit(handleUpdate)} >
										<div className="relative z-0 mb-6 w-full group">
											<input defaultValue={eUser.updatedEmail ? eUser.updatedEmail : user.email} type="email" {...register("email", {})} className="block py-2.5 px-0 w-full text-sm text-gray-600 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

											<label for="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
										</div>
										<div className="relative z-0 mb-6 w-full group">
											<input defaultValue={eUser.updatedName ? eUser.updatedName : user.displayName} type="text" {...register("name", {})} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-600 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

											<label for="floating_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
										</div>
										<div className="relative z-0 mb-6 w-full group">
											<input defaultValue={eUser.bio} type="text" {...register("bio", {})} id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-600 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />

											<label for="floating_repeat_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bio</label>
										</div>
										<div className="grid xl:grid-cols-2 xl:gap-6">
											<div className="relative z-0 mb-6 w-full group">
												<input defaultValue={eUser.address} type="text" {...register("address", {})} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-600 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

												<label for="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
											</div>
											<div className="relative z-0 mb-6 w-full group">
												<input defaultValue={eUser.college} type="text" {...register("college", {})} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-600 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

												<label for="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">University/College</label>
											</div>
										</div>
										<div className="grid xl:grid-cols-2 xl:gap-6">
											<div className="relative z-0 mb-6 w-full group">
												<input defaultValue={eUser.phone} type="text" {...register("phone", {})} id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-600 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

												<label for="floating_phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
											</div>
											<div className="relative z-0 mb-6 w-full group">
												<input defaultValue={eUser.work} type="text" {...register("work", {})} id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-600 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />

												<label for="floating_company" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company/Work place</label>
											</div>
											<div className="relative z-0 mb-6 w-full group">
												<input defaultValue={eUser.facebook} type="text" {...register("facebook", {})} id="floating_facebook" className="block py-2.5 px-0 w-full text-sm text-gray-600 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

												<label for="floating_facebook" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Facebook Profile URL</label>
											</div>
											<div className="relative z-0 mb-6 w-full group">
												<input defaultValue={eUser.instagram} type="text" {...register("instagram", {})} id="floating_instagram" className="block py-2.5 px-0 w-full text-sm text-gray-600 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

												<label for="floating_instagram" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instagram Profile URL</label>
											</div>
											<div className="relative z-0 mb-6 w-full group">
												<input defaultValue={eUser.twitter} type="text" {...register("twitter", {})} id="floating_twitter" className="block py-2.5 px-0 w-full text-sm text-gray-600 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

												<label for="floating_twitter" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Twitter Profile URL</label>
											</div>
											<div className="relative z-0 mb-6 w-full  group">
												<input type="file" {...register("image", {})} id="floating_photo"
													className="block cursor-pointer mt-2 py-2.5 px-0 w-full text-sm text-gray-600 font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />

												<label for="floating_photo" className="absolute cursor-pointer  text-[17.5px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6">Update Profile Photo</label>
											</div>

										</div>
										{/* submit  buttons */}
										<div className='flex justify-between'>
											<button type='button' onClick={handleBack} className="py-2 text-center cursor-pointer rounded-full bg-blue-400 hover:bg-blue-500 transition-colors mt-5 text-white font-bold w-28 md:w-32">
											Not Now 
											</button>
											{
												// loader 
												loading2 ? <button className="py-2 rounded-full bg-blue-400 hover:bg-blue-500 flex cursor-not-allowed justify-center transition-colors mt-5 text-white font-bold  w-28 md:w-32">
													<RotatingLines
														strokeColor="white"
														strokeWidth="5"
														animationDuration="0.75"
														width="24"
														visible={true}
													/>
												</button> :
													<button type='submit' className="py-2 rounded-full bg-blue-400 hover:bg-blue-500 transition-colors mt-5 text-white font-bold
													 w-28 md:w-32">
														Submit
													</button>
											}
										</div>
									</form>
								)
							}
						</>
				}
			</div>
		</div>
	);
};

export default About;