import React, { useState, useEffect } from 'react';
import data from './data/AddsOnData';
import planData from './data/SelectPlanData';
import RightContainer from './components/RightContainer';
import LeftContainer from './components/LeftContainer';

export default function App() {
  // Track page displayed
  const [currentStep, setCurrentStep] = useState(0);

  // Plan Period State; where true === monthly
  const [planPeriod, setPlanPeriod] = useState(true);

  // Personal info form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  // Track checkbox state i.e plan period checkbox to keep its previous appearance on change of page
  const [isChecked, setIsChecked] = useState(false);

  // Select Plan form state; empty array at the start
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Ternary to choose between monthly and yearly AddOns 
  const selectedData = planPeriod ? data.monthly : data.yearly;

  // Ternary to choose between monthly and yearly PLAN
  const selectedPlanData = planPeriod ? planData.monthly : planData.yearly

  // Hold all addOns Data
  const [allAddOns, setAllAddOns] = useState(selectedData);

  // Track multiple check box in the addOns, set all to false at the beginning and allow changes individually
  const [checkedStates, setCheckedStates] = useState(selectedData.map(() => false));

  // Update varieties on change of plan period
  useEffect(
    () => {
      // Change allAddOns content based on plan period
      setAllAddOns(selectedData);
      // Change addOns checkboxes:checked back to false on change of plan period
      setCheckedStates(selectedData.map(() => false));
    },
    [selectedData]
  );

  // Toggle plan between Monthly and Yearly; true === monthly
  const togglePlan = () => {
    setPlanPeriod((prev) => !prev);
  };

  // Go back one page
  const goBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // State for checked addOns
  const [checkedAddsOn, setCheckedAddsOn] = useState([]);

  // Filtering checked addOn to a new array
  const filterAddsOn = () => {
    const filteredAddsOn = allAddOns.filter(addOns => addOns.checked === true);
    setCheckedAddsOn(filteredAddsOn);
  };

  // Call filterAddsOn when the component mounts
  useEffect(() => {
    filterAddsOn();
  }, [allAddOns]);

  // Set default PLAN on load
  useEffect(
    () => {
      setSelectedPlan(selectedPlanData[0]);
    },
    [selectedData]
  );

  return (
    <div className='h-full md:h-[100vh]'>
      {/* Entire Page container */}
      <section id="page" className="bg-magnolia  md:px-0 pt-10 pb-10 md:pb-0 md:pt-0 w-full h-full flex justify-center md:items-center">
        {/* Content Container */}
        <div className="md:w-[980px] md:my-10 md:h-[600px] px-6 h-auto md:bg-white 
        rounded-[15px] flex flex-col md:flex-row md:p-4">
          {/* Left Div Container */}
          <LeftContainer currentStep={currentStep} />
          {/* Right Container */}
          <RightContainer 
            setCurrentStep={setCurrentStep}
            formData={formData}
            setFormData={setFormData}
            planPeriod={planPeriod}
            goBack={goBack}
            togglePlan={togglePlan}
            setSelectedPlan={setSelectedPlan}
            selectedPlan={selectedPlan}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            selectedData={selectedPlanData}
            currentStep={currentStep} 
            selectedPlanData={selectedPlanData } 
            checkedStates={checkedStates}
            setCheckedStates={setCheckedStates}
            setAllAddOns={setAllAddOns}
            allAddOns={allAddOns}
            checkedAddsOn={checkedAddsOn}/>
        </div>
      </section>
    </div>
  );
}
