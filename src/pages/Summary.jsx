import React, { useState } from 'react';
import Finish from '../components/Finish';
import ThankYou from '../components/ThankYou';


const Summary = ({ goBack, selectedPlan, setCurrentStep, checkedAddsOn }) => {

    const [finish, setFinish] = useState(false)

    const addOn = checkedAddsOn.map((addOn, index) => {
        return (
            <div key={index} className='flex justify-between'>
                <p className='text-coolGray text-[14px] font-[500]'>{addOn.title}</p>
                <h4 className='text-marineBlue text-[15px]'>${addOn.price}/{addOn.periodMode}</h4>
            </div>
        )
    })

    const totalAddOnPrice = checkedAddsOn.reduce((acc, addOn) => acc + addOn.price, 0);
    const totalPrice = totalAddOnPrice + selectedPlan.price

    // Submit form
    const submitForm = (event) => {
        event.preventDefault()
        setFinish(true)
    }

    return (
        <div className="md:h-full  ">

            {!finish &&
                <Finish
                    submitForm={submitForm}
                    selectedPlan={selectedPlan}
                    goBack={goBack} totalPrice={totalPrice}
                    setCurrentStep={setCurrentStep} checkedAddsOn={checkedAddsOn}
                    addOn={addOn} />
            }

            {finish &&
                <ThankYou />
            }
        </div>
    );
};

export default Summary;
