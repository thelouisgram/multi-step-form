import React from "react";

const PickAddsOn = ({
  toggleCheckedAddsOn,
  handleCheckboxChange,
  checkedStates,
  addOn,
  index,
}) => {
  return (
    // Render Individual AddOn
    <div
      className={`flex justify-between items-center border-[1px] p-2 xs:px-3 md:px-6 xs:py-4 rounded-[10px] 
                hover:border-purplishBlue
                ${
                  addOn.checked
                    ? "border-purplishBlue bg-magnolia"
                    : " border-lightGray bg-transparent"
                }`}
    >
      <div className="flex items-center gap-2 xs:gap-3 md:gap-6">
        <label className="container w-[20px] h-[20px] mr-1  rounded-[5px] flex items-center">
          <input
            type="checkbox"
            checked={checkedStates[index]}
            onClick={() => toggleCheckedAddsOn(index)}
            onChange={() => handleCheckboxChange(index)}
            className="rounded-[5px]"
          />
          <span className="checkmark"></span>
        </label>
        <div>
          <h3 className="font-[700] text-marineBlue">{addOn.title}</h3>
          <p className="text-[12px] xs:text-[14px] text-coolGray">{addOn.description}</p>
        </div>
      </div>
      <h4 className="text-purplishBlue font-[500] text-[13px] xs:text-[15px]">
        +${addOn.price}/{addOn.periodMode}
      </h4>
    </div>
  );
};

export default PickAddsOn;
