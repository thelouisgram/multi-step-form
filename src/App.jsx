import React, { useState } from "react"
import Pagination from "./components/pagination"
import PersonalInfo from "./components/PersonalInfo"
import { motion, AnimatePresence } from "framer-motion"
import SelectPlan from "./components/SelectPlan"
import AddsOn from "./components/AddsOn"


export default function App() {
  // Track page
  const [currentStep, setCurrentStep] = useState(0)

  // Plan Period State
  const [planPeriod, setPlanPeriod] = useState(true)

  // Personal info form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  })

  // Track checkbox state
  const [isChecked, setIsChecked] = useState(false);


  // Select Plan form state
  const [selectedPlan, setSelectedPlan] = useState(null)

  // Toggle plan between Monthly and Yearly
  const togglePlan = () => {
    setPlanPeriod(prev => !prev)
  }

  // Go back one page
  const goBack = () => {
    setCurrentStep(prev => prev - 1)
  }

  return (
    <>
      {/* Entire Page container */}
      <section id='page' className="bg-magnolia w-full h-[100vh] flex md:justify-center md:items-center">
        {/* Content Container */}
        <div
          className="w-[980px] h-[600px] bg-white rounded-[15px] flex p-4">
          {/* Left Div Container */}
          <div className='left-container h-full w-[275px] rounded-[10px] pl-8 pt-10'>
            {/* Left Container Content */}
            <div>
              <Pagination currentStep={currentStep} />
            </div>
          </div>
          {/* Right Container */}
          <div className="w-[680px] px-28 pt-10 pb-6 h-full">
            {/* Personal Info form */}
            <AnimatePresence mode='wait'>
              {currentStep === 0 &&
                <motion.div
                  key="personal-info"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="h-full"
                >
                  <PersonalInfo
                    setCurrentStep={setCurrentStep}
                    formData={formData}
                    setFormData={setFormData}
                  />
                </motion.div>}
              {/* Select Plan form */}
              {currentStep === 1 &&
                <motion.div
                  key="select-plan"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="h-full"
                >
                  <SelectPlan
                    planPeriod={planPeriod} goBack={goBack} togglePlan={togglePlan}
                    setSelectedPlan={setSelectedPlan} selectedPlan={selectedPlan}
                    setCurrentStep={setCurrentStep} isChecked={isChecked} setIsChecked={setIsChecked}
                  />
                </motion.div>}
              {currentStep === 2 &&
                <motion.div
                  key="adds-on"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="h-full"
                >
                  <AddsOn goBack={goBack} planPeriod={planPeriod} />
                </motion.div>}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
