const FirstForm = () => {
	return (
        <div className='h-full w-full'>
            {/* Form container */}
			<form className="font-Ubuntu h-full w-full flex flex-col justify-between">
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
								<label htmlFor="name" className="text-marineBlue text-[14px] mb-2 font-[500]">
									Name
								</label>
								<input
									id="name"
									type="text"
									placeholder="e.g. Stephen King"
									className="border-[1px] placeholder-bold placeholder-coolGray  
                                px-4 py-3 rounded-[8px] border-lightGray text-[16px] text-marineBlue font-[500]
                                focus:outline-none focus:border-marineBlue"
								/>
							</div>
                            {/* // Email Form */}
							<div className="flex flex-col mb-4">
								<label htmlFor="email" className="text-marineBlue text-[14px] mb-1 font-[500]">
									Email Address
								</label>
								<input
									id="email"
									type="email"
									placeholder="e.g. stephenking@lorem.com"
									className="border-[1px] placeholder-bold placeholder-coolGray  
                                px-4 py-3 rounded-[8px] border-lightGray text-[16px] text-marineBlue font-[500]
                                focus:outline-none focus:border-marineBlue"
								/>
							</div>
                            {/* // Number Form */}
							<div className="flex flex-col">
								<label htmlFor="number" className="text-marineBlue text-[14px] mb-1 font-[500]">
									Phone Number
								</label>
								<input
									id="number"
									type="number"
									placeholder="e.g. +1 234 567 890"
									className="border-[1px] placeholder-bold placeholder-coolGray 
                                px-4 py-3 rounded-[8px] border-lightGray text-[16px] text-marineBlue font-[500]
                                focus:outline-none focus:border-marineBlue"
								/>
							</div>
						</div>
                {/* Bottom Container */}
				<div className="flex w-full justify-end">
                    {/* Submit */}
                    <button className="px-6 rounded-[8px] py-3 bg-marineBlue hover:bg-purplishblue text-white text-[15px] font-500">
						Next Step
					</button>
				</div>
			</form>
		</div>
	);
};

export default FirstForm;
