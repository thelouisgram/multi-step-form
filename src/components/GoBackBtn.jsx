import React from 'react'

const GoBackBtn = ({goBack}) => {
  return (
        <div onClick={goBack}>
            <p className='text-[16px] font-[700] text-coolGray hover:text-marineBlue'>Go back</p>
        </div>
  )
}

export default GoBackBtn
