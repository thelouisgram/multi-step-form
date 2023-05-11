import React, { useState } from 'react';
import NextStep from '../components/buttons/NextStep';
import NameInput from '../components/inputs/NameInput';
import EmailInput from '../components/inputs/EmailInput';
import NumberInput from '../components/inputs/NumberInput';

const PersonalInfo = ({ formData, setFormData, setCurrentStep, setCurrentVariant }) => {
	// State to track empty inputs
	const [ fieldRequired, setFieldRequired ] = useState({
		input1: false,
		input2: false,
		input3: false
	});

	// Submit function ensuring all required inputs are filled
	const submitForm = (event) => {
		event.preventDefault();
		if (!formData.name) {
			setFieldRequired({ ...fieldRequired, input1: true });
		} else if (!formData.email) {
			setFieldRequired({ ...fieldRequired, input2: true });
		} else if (!formData.phoneNumber) {
			setFieldRequired({ ...fieldRequired, input3: true });
		} else {
			setCurrentVariant("nextPage")
			setCurrentStep((prev) => prev + 1);
		}
	};

	// Pushing the form values to FormData state
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: value
			};
		});
		setFieldRequired({
			input1: false,
			input2: false,
			input3: false
		});
	};

	return (
		<div className="md:h-full  ">
			{/* Form container */}
			<form onSubmit={submitForm} className="font-Ubuntu md:h-full   flex flex-col justify-between">
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
					<NameInput fieldRequired={fieldRequired} formData={formData} handleChange={handleChange} />
					{/* Email Form */}
					<EmailInput fieldRequired={fieldRequired} formData={formData} handleChange={handleChange} />
					{/* Number Form */}
					<NumberInput fieldRequired={fieldRequired} formData={formData} handleChange={handleChange} />
				</div>
				{/* Bottom Container */}
				<div className="mt-8 flex justify-end">
					{/* Submit Button */}
					<NextStep />
				</div>
			</form>
		</div>
	);
};

export default PersonalInfo;