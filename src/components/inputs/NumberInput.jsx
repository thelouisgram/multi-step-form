import React from 'react'

const NumberInput = ({ fieldRequired, formData, handleChange }) => {
  return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <label htmlFor="number" className="text-marineBlue text-[15px] mb-1 font-[500]">
                    Phone Number
                </label>
                {fieldRequired.input3 && (
                    <p className="text-strawberryRed font-[700] text-[13px]">This field is required</p>
                )}
            </div>
            <input
                id="number"
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="e.g. +1 234 567 890"
                className={`border-[1px] placeholder-bold placeholder-coolGray 
					px-4 py-3 md:rounded-[8px] border-lightGray text-[16px] text-marineBlue 
					font-[500] focus:outline-none focus:border-marineBlue rounded-[4px]
					${fieldRequired.input3 ? 'border-strawberryRed' : ''}`}
            />
        </div>
  )
}

export default NumberInput
