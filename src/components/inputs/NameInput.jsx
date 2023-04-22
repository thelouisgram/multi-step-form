import React from 'react'

const NameInput = ( { fieldRequired, formData, handleChange }) => {
  return (
      <div className="flex flex-col mb-4">
          <div className="flex justify-between items-center">
              <label htmlFor="name" className="text-marineBlue text-[15px] mb-2 font-[500]">
                  Name
              </label>
              {fieldRequired.input1 && (
                  <p className="text-strawberryRed font-[700] text-[13px]">This field is required</p>
              )}
          </div>
          <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Stephen King"
              className={`border-[1px] placeholder-bold placeholder-coolGray px-4 py-3 
							 rounded-[4px] md:rounded-[8px] text-[16px] font-[500] focus:outline-none 
                             ${fieldRequired.input1
                      ? 'border-strawberryRed'
                      : 'border-lightGray'}`}
          />
      </div>
  )
}

export default NameInput
