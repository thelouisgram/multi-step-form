import React from 'react'
import GoBackBtn from './GoBackBtn'
import NextStep from './NextStep'

const AddsOn = ({ goBack, selectedData, checkedStates,
    setCheckedStates, setAllAddsOn, allAddsOn, setCurrentStep }) => {

    const toggleCheckedAddsOn = (index) => {
        const updatedAddsOn = [...allAddsOn];
        updatedAddsOn[index] = {
            ...updatedAddsOn[index],
            checked: !updatedAddsOn[index].checked,
        };
        setAllAddsOn(updatedAddsOn);
    };


    const handleCheckboxChange = (index) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);
    };

    const addOn = allAddsOn.map((addOn, index) => {
        return (
            <div key={index}
                className={`flex justify-between items-center border-[1px] px-6 py-4 rounded-[10px] 
                hover:border-purplishBlue
                ${addOn.checked ? 'border-purplishBlue bg-magnolia' :
                        ' border-lightGray bg-transparent'}`}>
                <div className='flex items-center gap-6'>
                    <input type='checkbox' checked={checkedStates[index]}
                        onClick={() => toggleCheckedAddsOn(index)}
                        onChange={() => handleCheckboxChange(index)}
                        className='w-[20px] h-[20px] cursor-pointer' />
                    <div>
                        <h3 className='font-[700] text-marineBlue'>{addOn.title}</h3>
                        <p className='text-[14px] text-coolGray'>{addOn.description}</p>
                    </div>
                </div>
                <h4 className='text-purplishBlue font-[500] text-[15px]'>
                    +${addOn.price}/{addOn.periodMode}</h4>
            </div>
        )
    })

    // Submit form
    const submitForm = (event) => {
        event.preventDefault()
        setCurrentStep(prev => prev + 1)
    }

    return (
        <div className='h-full  '>
            {/* Form container */}
            <form onSubmit={submitForm}
                className="font-Ubuntu h-full   flex flex-col justify-between">
                {/* Upper Container */}
                <div>
                    {/* Legend and form description */}
                    <div className="mb-10">
                        <legend className="text-[32px] font-Ubuntu font-bold text-marineBlue">
                            Pick add-ons</legend>
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
