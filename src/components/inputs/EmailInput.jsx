import React from 'react'

const EmailInput = ({ fieldRequired, formData, handleChange }) => {
  return (
      <div className="flex flex-col mb-4">
          <div className="flex justify-between items-center">
              <label htmlFor="email" className="text-marineBlue text-[15px] mb-1 font-[500]">
                  Email Address
              </label>
              {fieldRequired.input2 && (
                  <p className="text-strawberryRed font-[700] text-[13px]">This field is required</p>
              )}
          </div>
          <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. stephenking@lorem.com"
              className={`border-[1px] placeholder-bold placeholder-coolGray  
					px-4 py-3 md:rounded-[8px] border-lightGray text-[16px] text-marineBlue 
					font-[500] focus:outline-none focus:border-marineBlue rounded-[4px]
					${fieldRequired.input2 ? 'border-strawberryRed' : ''}`}
          />
      </div>
  )
}

export default EmailInput
