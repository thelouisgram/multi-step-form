import React from 'react'
import GoBackBtn from './GoBackBtn'
import NextStep from './NextStep'
import data from './AddsOnData'

const AddsOn = ({ goBack, planPeriod }) => {

    // Ternary to choose between monthly and yearly data
    const selectedData = planPeriod ? data.monthly : data.yearly;

    const addOn = selectedData.map((addOn, index) => {
        return (
            <div key={index}
                className='flex justify-between items-center border-[1px] border-lightGray px-6 py-4 rounded-[10px]'>
                <div className='flex items-center gap-6'>
                    <input type='checkbox' 
                        className='w-[20px] h-[20px] cursor-pointer text-lightGray rounded-[10px]  '/>
                    <div>
                        <h3 className='font-[700] text-marineBlue'>{addOn.title}</h3>
                        <p className='text-[14px] text-coolGray'>{addOn.description}</p>
                    </div>
                </div>
                <h4 className='text-purplishblue font-[400] text-[15px]'>+${addOn.price}/{addOn.periodMode}</h4>
            </div>
        )
    })
    return (
        <div className='h-full w-full'>
            {/* Form container */}
            <form
                className="font-Ubuntu h-full w-full flex flex-col justify-between">
                {/* Upper Container */}
                <div>
                    {/* Legend and form description */}
                    <div className="mb-10">
                        <legend className="text-[32px] font-Ubuntu font-bold text-marineBlue"> Pick add-ons</legend>
                        <p className="text-coolGray text-[16px] font-Ubuntu">
                            Add-ons help enhance your gaming experience.
                        </p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        {addOn}
                    </div>

                </div>
                <div className='flex justify-between items-center font-Ubuntu cursor-pointer'>
                    <GoBackBtn goBack={goBack} />
                    <NextStep />
                </div>
            </form>
        </div>
    )
}

export default AddsOn
