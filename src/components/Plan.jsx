import React from 'react';

const Plan = ({ planPeriod, handlePlanClick, selectedPlan, plan, index }) => {
    // Rendered plan component
    return (
        <div
            onClick={() => handlePlanClick(index)}
            className={`h-auto w-[140px] 
                border-[1px]  p-4 rounded-[8px]
                font-Ubuntu hover:border-purplishblue cursor-pointer 
                 ${selectedPlan === plan ? 'border-purplishblue bg-alabaster' : 'border-lightGray bg-transparent'}`}
        >
            <div className="mb-10">
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
