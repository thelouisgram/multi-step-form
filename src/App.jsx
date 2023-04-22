import React, { useState, useEffect } from 'react';
import Pagination from './components/pagination';
import PersonalInfo from './pages/PersonalInfo';
import { motion, AnimatePresence } from 'framer-motion';
import SelectPlan from './pages/SelectPlan';
import AddOns from './pages/addOns';
import data from './data/AddsOnData';
import Summary from './pages/Summary';
import ThankYou from './components/ThankYou';

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

  // Ternary to choose between monthly and yearly plan
  const selectedData = planPeriod ? data.monthly : data.yearly;

  // Hold addOns Data
  const [allAddOns, setAllAddOns] = useState(selectedData);

  // Track multiple check box, set all to false at the beginning and allow changes individually
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

  return (
    <div className='h-full md:h-[100vh]'>
      {/* Entire Page container */}
      <section id="page" className="bg-magnolia  md:px-0 pt-10 pb-10 md:pb-0 md:pt-0 w-full h-full flex justify-center md:items-center">
        {/* Content Container */}
        <div className="md:w-[980px] md:h-[600px] px-6 h-auto md:bg-white rounded-[15px] flex flex-col md:flex-row md:p-4">
          {/* Left Div Container */}
          <div className="left-container h-auto md:h-full md:w-[275px] rounded-[10px] md:pl-8 md:pt-10">
            {/* Left Container Content */}
            <div>
              <Pagination currentStep={currentStep} />
            </div>
          </div>
          {/* Right Container */}
          <div className="md:w-[680px] shadow-lg md:shadow-none bg-white md:bg-transparent rounded-[10px] md:rounded-0 py-10 px-6 md:px-28 md:pt-10 md:pb-6 md:h-full">
            {/* Personal Info form */}
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="personal-info"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="md:h-full"
                >
                  <PersonalInfo
                    setCurrentStep={setCurrentStep}
                    formData={formData}
                    setFormData={setFormData}
                  />
                </motion.div>
              )}
              {/* Select Plan form */}
              {currentStep === 1 && (
                <motion.div
                  key="select-plan"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="md:h-full"
                >
                  <SelectPlan
                    planPeriod={planPeriod}
                    goBack={goBack}
                    togglePlan={togglePlan}
                    setSelectedPlan={setSelectedPlan}
                    selectedPlan={selectedPlan}
                    setCurrentStep={setCurrentStep}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                  />
                </motion.div>
              )}
              {/* Pick Adds-On */}
              {currentStep === 2 && (
                <motion.div
                  key="adds-on"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="md:h-full"
                >
                  <AddOns
                    goBack={goBack}
                    planPeriod={planPeriod}
                    selectedData={selectedData}
                    checkedStates={checkedStates}
                    setCheckedStates={setCheckedStates}
                    setAllAddOns={setAllAddOns}
                    allAddOns={allAddOns}
                    setCurrentStep={setCurrentStep}
                  />
                </motion.div>
              )}
              {/* Summary */}
              {currentStep === 3 && (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="md:h-full"
                >
                  <Summary goBack={goBack}
                    setCurrentStep={setCurrentStep}
                    selectedPlan={selectedPlan}
                    checkedAddsOn={checkedAddsOn} />
                </motion.div>
              )}
              {/* ThankYou */}
              {currentStep === 4 && (
                <motion.div
                  key="thankyou"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="md:h-full"
                >
                  <ThankYou />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
