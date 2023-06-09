import React from 'react';
import GoBackBtn from './buttons/GoBackBtn';
import Confirm from './buttons/Confirm';


const Finish = ({ submitForm, selectedPlan, goBack, totalPrice, setCurrentStep, checkedAddsOn, addOn, setCurrentVariant }) => {
    return (
        
                <div className="md:h-full">
                    {/* Form container */}
                    <form onSubmit={submitForm} className="font-Ubuntu md:h-full   flex flex-col justify-between">
                        {/* Upper Container */}
                        <div>
                            {/* Legend and form description */}
                            <div className="mb-6 xs:mb-10">
                                <legend className="text-[24px] xs:text-[32px] font-Ubuntu font-bold text-marineBlue">
                                    Finishing up
                                </legend>
                                <p className="text-coolGray text-[14px] xs:text-[16px] font-Ubuntu">
                                    Double-check everything looks OK before confirming.
                                </p>
                            </div>
                            <div>
                                <div className="flex flex-col p-3 xs:p-6 mb-6 rounded-[5px]
                            xs:rounded-[10px] bg-magnolia">
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="flex flex-col ">
                                            <h2 className="font-[700] text-marineBlue">
                                                {selectedPlan.plan} ({selectedPlan.frequency})
                                            </h2>
                                            <p
                                                onClick={() => {
                                                    setCurrentStep(1),
                                                    setCurrentVariant=("goBack")
                                                }}
                                                className="text-coolGray text-[14px] xs:text-[14px] underline cursor-pointer
                                 hover:text-purplishBlue"
                                            >
                                                Change
                                            </p>
                                        </div>
                                        <h3 className="text-marineBlue text-[14px] xs:text-[16px]
                            font-[700]">
                                            ${selectedPlan.price}/{selectedPlan.periodMode}
                                        </h3>
                                    </div>
                                    {checkedAddsOn.length > 0 && (
                                        <div className="border-t-[1px] border-lightGray
                           mt-6 pt-6 gap-2 flex flex-col">
                                            {addOn}
                                        </div>
                                    )}
                                </div>

                                <div className="px-3 xs:px-6 flex justify-between items-center">
                                    <h2 className="text-coolGray text-[13px] xs:text-[15px]">Total (per {selectedPlan.duration})</h2>
                                    <h2 className="text-purplishBlue text-[18px] xs:text-[24px] font-[700]">
                                        +${totalPrice}/{selectedPlan.periodMode}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* Bottom Container */}
                        <div className="flex justify-between items-center  mt-10 md:mt-0 font-Ubuntu cursor-pointer">
                            <GoBackBtn goBack={goBack} />
                            <Confirm />
                        </div>
                    </form>
                </div>
    );
};

export default Finish;
