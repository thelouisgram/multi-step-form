/* eslint-disable react/prop-types */
import React from 'react'
import PersonalInfo from '../pages/PersonalInfo';
import { motion, AnimatePresence } from 'framer-motion';
import SelectPlan from '../pages/SelectPlan';
import AddOns from '../pages/AddOns';
import Summary from '../pages/Summary';
import ThankYou from './ThankYou';

const RightContainer = ({ currentStep, formData, setFormData, planPeriod, goBack, togglePlan, 
    setSelectedPlan, selectedPlan, isChecked, setIsChecked, selectedPlanData, setCurrentStep,
    selectedData, checkedStates, setCheckedStates, setAllAddOns, allAddOns, checkedAddsOn, 
    variants, nextPage, currentVariant, setCurrentVariant }) => {
  return (
      <div className="md:w-[680px] shadow-lg md:shadow-none bg-white md:bg-transparent rounded-[10px] md:rounded-0 py-10 px-6 md:px-28 md:pt-10 md:pb-6 md:h-full">
          {/* Personal Info form */}
          <AnimatePresence mode="wait">
              {currentStep === 0 && (
                  <motion.div
                      key="personal-info"
                      variants={variants[currentVariant]}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition="transition"
                      className="md:h-full"
                  >
                      <PersonalInfo
                          setCurrentStep={setCurrentStep}
                          formData={formData}
                          setFormData={setFormData}
                          nextPage={nextPage}
                          setCurrentVariant={setCurrentVariant}
                      />
                  </motion.div>
              )}
              {/* Select Plan form */}
              {currentStep === 1 && (
                  <motion.div
                      key="select-plan"
                      variants={variants[currentVariant]}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition="transition"
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
                          selectedData={selectedPlanData}
                          setCurrentVariant={setCurrentVariant}
                      />
                  </motion.div>
              )}
              {/* Pick Adds-On */}
              {currentStep === 2 && (
                  <motion.div
                      key="adds-on"
                      variants={variants[currentVariant]}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition="transition"
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
                          setCurrentVariant={setCurrentVariant}
                      />
                  </motion.div>
              )}
              {/* Summary */}
              {currentStep === 3 && (
                  <motion.div
                      key="summary"
                      variants={variants[currentVariant]}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition="transition"
                      className="md:h-full"
                  >
                      <Summary goBack={goBack}
                          setCurrentStep={setCurrentStep}
                          selectedPlan={selectedPlan}
                          checkedAddsOn={checkedAddsOn}
                          setCurrentVariant={setCurrentVariant} />
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
  )
}

export default RightContainer
