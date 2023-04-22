import React, { useState } from "react";
import NextStep from "./NextStep";

const PersonalInfo = ({ formData, setFormData, setCurrentStep }) => {

	const [fieldRequired, setFieldRequired] = useState({
		input1: false,
		input2: false,
		input3: false,
	});

	const submitForm = (event) => {
		event.preventDefault()
		if (!formData.name) {
			setFieldRequired({ ...fieldRequired, input1: true });
		}
		else if (!formData.email) {
			setFieldRequired({ ...fieldRequired, input2: true });
		}
		else if (!formData.phoneNumber) {
			setFieldRequired({ ...fieldRequired, input3: true });
		} else {
			setCurrentStep((prev => prev + 1))
		}
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: value
			}
		})
		setFieldRequired({
			input1: false,
			input2: false,
			input3: false,
		});
	}

	return (
		<div className='h-full  '>
			{/* Form container */}
			<form
				onSubmit={submitForm}
				className="font-Ubuntu h-full   flex flex-col justify-between">
				{/* Upper Container */}
				<div>
					{/* Legend and form description */}
					<div className="mb-10">
						<legend className="text-[32px] font-Ubuntu font-bold text-marineBlue">Personal Info</legend>
						<p className="text-coolGray text-[16px] font-Ubuntu">
							Please provide your name, email address, and phone number.
						</p>
					</div>
					{/* Form inputs */}
					{/* Name form */}
					<div className="flex flex-col mb-4">
						<div className='flex justify-between items-center'>
							<label htmlFor="name" className="text-marineBlue text-[15px] mb-2 font-[500]">
								Name
							</label>
							{fieldRequired.input1 && <p className='text-strawberryRed font-[700] text-[13px]'>This field is required</p>}
						</div>
						<input
							id="name"
							name='name'
							type="text"
							value={formData.name}
							onChange={handleChange}
							placeholder="e.g. Stephen King"
							className="border-[1px] placeholder-bold placeholder-coolGray  
									px-4 py-3 rounded-[8px] border-lightGray text-[16px] text-marineBlue 
									font-[500] focus:outline-none focus:border-marineBlue"
						/>
					</div>
					{/* // Email Form */}
					<div className="flex flex-col mb-4">
						<div className='flex justify-between items-center'>
							<label htmlFor="email" className="text-marineBlue text-[15px] mb-1 font-[500]">
								Email Address
							</label>
							{fieldRequired.input2 && <p className='text-strawberryRed font-[700] text-[13px]'>This field is required</p>}
						</div>
						<input
							id="email"
							type="email"
							name='email'
							value={formData.email}
							onChange={handleChange}
							placeholder="e.g. stephenking@lorem.com"
							className="border-[1px] placeholder-bold placeholder-coolGray  
                                	px-4 py-3 rounded-[8px] border-lightGray text-[16px] text-marineBlue 
									font-[500] focus:outline-none focus:border-marineBlue"
						/>
					</div>
					{/* // Number Form */}
					<div className="flex flex-col">
						<div className='flex justify-between items-center'>
							<label htmlFor="number" className="text-marineBlue text-[15px] mb-1 font-[500]">
								Phone Number
							</label>
							{fieldRequired.input3 && <p className='text-strawberryRed font-[700] text-[13px]'>This field is required</p>}
						</div>
						<input
							id="number"
							type="number"
							name='phoneNumber'
							value={formData.phoneNumber}
							onChange={handleChange}
							placeholder="e.g. +1 234 567 890"
							className="border-[1px] placeholder-bold placeholder-coolGray 
									px-4 py-3 rounded-[8px] border-lightGray text-[16px] text-marineBlue 
									font-[500] focus:outline-none focus:border-marineBlue"
						/>
					</div>
				</div>
				{/* Bottom Container */}
				<div className="flex   justify-end">
					{/* Submit Button */}
					<NextStep />
				</div>
			</form>
		</div>
	);
};

export default PersonalInfo;
