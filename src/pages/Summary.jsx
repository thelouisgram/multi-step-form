import React, { useState } from 'react';
import Finish from '../components/Finish';

const Summary = ({ goBack, selectedPlan, setCurrentStep, checkedAddsOn }) => {

    // Render CheckedAddOns
    const addOn = checkedAddsOn.map((addOn, index) => {
        return (
            <div key={index} className='flex justify-between'>
                <p className='text-coolGray text-[14px] font-[500]'>{addOn.title}</p>
                <h4 className='text-marineBlue text-[15px]'>${addOn.price}/{addOn.periodMode}</h4>
            </div>
        )
    })

    // reduce through checkedAddOns and add all prices
    const totalAddOnPrice = checkedAddsOn.reduce((acc, addOn) => acc + addOn.price, 0);
    const totalPrice = totalAddOnPrice + selectedPlan.price

    // Submit form
    const submitForm = (event) => {
        event.preventDefault()
        setCurrentStep(prev => prev + 1)
    }

    return (
        <div className="md:h-full">
            <Finish
                submitForm={submitForm}
                selectedPlan={selectedPlan}
                goBack={goBack} totalPrice={totalPrice}
                setCurrentStep={setCurrentStep} checkedAddsOn={checkedAddsOn}
                addOn={addOn} />

        </div>
    );
};

export default Summary;
