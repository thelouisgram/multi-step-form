import { useState } from "react"
import Pagination from "./components/pagination"
import FirstForm from "./components/FirstForm"


export default function App() {
  const [ currentStep, setCurrentStep ] = useState(0)

  return (
    <>
      {/* Entire Page container */}
      <section id='page' className="bg-lightBlue w-full h-[100vh] flex md:justify-center md:items-center">
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
          {/* Right Div Container */}
          <div className="px-28 pt-10 pb-6 h-full">
            {currentStep === 0 && <FirstForm setCurrentStep={setCurrentStep}/>}
          </div>
        </div>
      </section>
    </>
  )
}