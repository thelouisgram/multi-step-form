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
              className={`border-[1px] placeholder-bold placeholder-coolGray p-3 xs:px-4 xs:py-3 text-marineBlue
							 md:rounded-[8px] text-[12px] xs:text-[16px] font-[500] focus:outline-none 
                             focus:border-marineBlue rounded-[4px]
                             ${fieldRequired.input1
                      ? 'border-strawberryRed'
                      : 'border-lightGray'}`}
          />
      </div>
  )
}

export default NameInput
