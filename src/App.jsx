import React, { useState, useEffect } from 'react';
import Pagination from './components/pagination';
import PersonalInfo from './components/PersonalInfo';
import { motion, AnimatePresence } from 'framer-motion';
import SelectPlan from './components/SelectPlan';
import AddsOn from './components/AddsOn';
import data from './components/AddsOnData';
import Summary from './components/Summary';

export default function App() {
    // Track page
    const [ currentStep, setCurrentStep ] = useState(0);

    // Plan Period State; where true is monthly
    const [ planPeriod, setPlanPeriod ] = useState(true);

    // Personal info form State
    const [ formData, setFormData ] = useState({
      name: '',
      email: '',
      phoneNumber: ''
    });

    // Track checkbox state i.e plan period checkbox to keep its previous appearance on change of page
    const [ isChecked, setIsChecked ] = useState(false);

    // Select Plan form state; empty array at the start
    const [ selectedPlan, setSelectedPlan ] = useState(null);

    // Ternary to choose between monthly and yearly plan
    const selectedData = planPeriod ? data.monthly : data.yearly;

    // Hold AddsOn Data
    const [ allAddsOn, setAllAddsOn ] = useState(selectedData);

    // Track multiple check box, set all to false at the beginning and allow changes individually
    const [ checkedStates, setCheckedStates ] = useState(selectedData.map(() => false));

    // Update varieties on change of plan period
    useEffect(
      () => {
        // Change allAddsOn content based on plan period
        setAllAddsOn(selectedData);
        // Change addsOn checkboxes:checked back to false on change of plan period
        setCheckedStates(selectedData.map(() => false));
      },
      [ selectedData ]
    );

    // Toggle plan between Monthly and Yearly; true is monthly
    const togglePlan = () => {
      setPlanPeriod((prev) => !prev);
    };

    // Go back one page
    const goBack = () => {
      setCurrentStep((prev) => prev - 1);
    };

    const [checkedAddsOn, setCheckedAddsOn] = useState([]);

    const filterAddsOn = () => {
      const filteredAddsOn = allAddsOn.filter(addsOn => addsOn.checked === true);
      setCheckedAddsOn(filteredAddsOn);
    };

    // Call filterAddsOn when the component mounts
    useEffect(() => {
      filterAddsOn();
    }, [allAddsOn]);
    
    return (
      <div>
        {/* Entire Page container */}
        <section id="page" className="bg-magnolia w-full h-[100vh] flex md:justify-center md:items-center">
          {/* Content Container */}
          <div className="w-[980px] h-[600px] bg-white rounded-[15px] flex p-4">
            {/* Left Div Container */}
            <div className="left-container h-full w-[275px] rounded-[10px] pl-8 pt-10">
              {/* Left Container Content */}
              <div>
                <Pagination currentStep={currentStep} />
              </div>
            </div>
            {/* Right Container */}
            <div className="w-[680px] px-28 pt-10 pb-6 h-full">
              {/* Personal Info form */}
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div
                    key="personal-info"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="h-full"
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
                    className="h-full"
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
                    className="h-full"
                  >
                    <AddsOn
                      goBack={goBack}
                      planPeriod={planPeriod}
                      selectedData={selectedData}
                      checkedStates={checkedStates}
                      setCheckedStates={setCheckedStates}
                      setAllAddsOn={setAllAddsOn}
                      allAddsOn={allAddsOn}
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
                    className="h-full"
                  >
                    <Summary goBack={goBack} 
                      setCurrentStep={setCurrentStep} 
                      selectedPlan={selectedPlan}
                      checkedAddsOn={checkedAddsOn }/>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    );
  }
