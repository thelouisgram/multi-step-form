import React from 'react';

const Plan = ({ planPeriod, handlePlanClick, selectedPlan, plan, index }) => {
    // Rendered plan component
    return (
        <div
            onClick={() => handlePlanClick(index)}
            className={`md:h-auto md:w-[140px] flex md:flex-col gap-3 md:gap-0 items-center md:items-start
                border-[1px]  p-4 rounded-[8px]
                font-Ubuntu hover:border-purplishBlue cursor-pointer 
                 ${selectedPlan === plan ? 'border-purplishBlue bg-magnolia' : 'border-lightGray bg-transparent'}`}
        >
            <div className="md:mb-10 flex items-center">
                <img src={plan.image} className="w-[36px] h-[36px]" />
            </div>
            <div>
                <h3 className="text-marineBlue font-[700] text-[16px]">{plan.plan}</h3>
                <p className="text-[14px] text-coolGray font-[500]">
                    ${plan.price}/{plan.periodMode}
                </p>
                {!planPeriod && <p className="text-marineBlue text-[14px]">{plan.freePeriod}</p>}
            </div>
        </div>
    );
}

export default Plan;
