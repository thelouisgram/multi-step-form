import React from 'react'

const PeriodCheckbox = ({ isChecked, onChange }) => {
  return (
    <div>
      <label title="Toggle Theme" className="switch ">
        <input checked={isChecked} onChange={onChange} type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  )
}


export default PeriodCheckbox
