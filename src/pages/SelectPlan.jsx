import React, { useEffect } from 'react'
import NextStep from '../components/buttons/NextStep'
import data from '../data/SelectPlanData'
import PeriodCheckbox from '../components/PeriodCheckbox'
import Plan from '../components/Plan'
import GoBackBtn from '../components/buttons/GoBackBtn'

const SelectPlan = ({ planPeriod, goBack, togglePlan, setSelectedPlan,
    selectedPlan, setCurrentStep, isChecked, setIsChecked }) => {

    // Ternary to choose between monthly and yearly data
    const selectedData = planPeriod ? data.monthly : data.yearly;

    // Setting Selected Plan to the first of any plan period selected
    useEffect(() => {
        setSelectedPlan(selectedData[0]);
    }, [selectedData]);

    // Function to set the selected plan to whatever div is clicked
    const handlePlanClick = (index) => {
        setSelectedPlan(selectedData[index]);
    };

    //  Map through Data and render respective plans
    const plan = selectedData.map((plan, index) => {
        return (
            <Plan key={index} planPeriod={planPeriod} selectedPlan={selectedPlan}
                selectedData={selectedData} handlePlanClick={handlePlanClick} plan={plan} index={index}
            />
        )
    })

    // Submit form
    const submitForm = (event) => {
        event.preventDefault()
        setCurrentStep(prev => prev + 1)
    }


    // Function to handle checkbox changes
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        togglePlan();
    };


    return (
        <div className='md:h-full  '>
            {/* Form container */}
            <form onSubmit={submitForm}
                className="font-Ubuntu md:h-full   flex flex-col justify-between">
                {/* Upper Container */}
                <div>
                    {/* Legend and form description */}
                    <div className="mb-10">
                        <legend className="text-[32px] font-Ubuntu font-bold
                         text-marineBlue">Select your plan</legend>
                        <p className="text-coolGray text-[16px] font-Ubuntu">
                            You have the option of monthly or yearly billing.
                        </p>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between mb-8'>
                        {plan}
                    </div>

                    <div className='  p-3 flex justify-center gap-3                                                                                                              font-[500] text-[15px]
                   bg-magnolia rounded-[10px]'>
                        <h2 className={`${planPeriod ? 'text-marineBlue' : 'text-coolGray'}`}>Monthly</h2>
                        <PeriodCheckbox isChecked={isChecked} onChange={handleCheckboxChange} />
                        <h2 className={`${!planPeriod ? 'text-marineBlue' : 'text-coolGray'}`}>Yearly</h2>
                    </div>

                </div>
                <div className='flex justify-between items-center font-Ubuntu mt-8 md:mt-0 cursor-pointer'>
                    <GoBackBtn goBack={goBack} />
                    <NextStep />
                </div>
            </form>
        </div>
    )
}

export default SelectPlan
