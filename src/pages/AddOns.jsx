import React from 'react';
import GoBackBtn from '../components/buttons/GoBackBtn';
import NextStep from '../components/buttons/NextStep';
import PickAddsOn from '../components/PickAddsOn';

const AddOns = ({ goBack, checkedStates, setCheckedStates, setAllAddOns, allAddOns, setCurrentStep }) => {

    // Function changes the checked value in the allAddOns State
    const toggleCheckedAddsOn = (index) => {
        const updatedAddsOn = [...allAddOns];
        updatedAddsOn[index] = {
            ...updatedAddsOn[index],
            checked: !updatedAddsOn[index].checked
        };
        setAllAddOns(updatedAddsOn);
    };

    // Storing saved Checked states of all checkboxes
    const handleCheckboxChange = (index) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);
    };

    // Map through AddOns
    const addOn = allAddOns.map((addOn, index) => {
        return (
            <PickAddsOn
                key={index}
                toggleCheckedAddsOn={toggleCheckedAddsOn}
                handleCheckboxChange={handleCheckboxChange}
                checkedStates={checkedStates}
                addOn={addOn} index={index}
            />
        );
    });

    // Submit form
    const submitForm = (event) => {
        event.preventDefault();
        setCurrentStep((prev) => prev + 1);
    };

    return (
        <div className="md:h-full  ">
            {/* Form container */}
            <form onSubmit={submitForm} className="font-Ubuntu md:h-full   flex flex-col justify-between">
                {/* Upper Container */}
                <div>
                    {/* Legend and form description */}
                    <div className="mb-10">
                        <legend className="text-[32px] font-Ubuntu font-bold text-marineBlue">Pick add-ons</legend>
                        <p className="text-coolGray text-[16px] font-Ubuntu">
                            Add-ons help enhance your gaming experience.
                        </p>
                    </div>
                    {/* Display Rendered AddOns */}
                    <div className="flex flex-col gap-4">{addOn}</div>
                </div>
                {/* Lower Container */}
                <div className="flex justify-between items-center mt-10 md:mt-0 font-Ubuntu cursor-pointer">
                    <GoBackBtn goBack={goBack} />
                    <NextStep />
                </div>
            </form>
        </div>
    );
};

export default AddOns;