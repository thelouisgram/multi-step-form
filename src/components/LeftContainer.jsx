import React from 'react'
import Pagination from './pagination'

const LeftContainer = ({currentStep}) => {
  return (
      <div className="left-container h-auto md:h-full md:w-[275px] rounded-[10px] md:pl-8 md:pt-10">
          {/* Left Container Content */}
          <div>
              <Pagination currentStep={currentStep} />
          </div>
      </div>
  )
}

export default LeftContainer
