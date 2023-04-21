import React from 'react'

const PeriodCheckbox = ({ isChecked, onChange }) => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        <div className="slider"></div>
        <div className="slider-card">
          <div className="slider-card-face slider-card-front"></div>
          <div className="slider-card-face slider-card-back"></div>
        </div>
      </label>
    </div>
  )
}


export default PeriodCheckbox
