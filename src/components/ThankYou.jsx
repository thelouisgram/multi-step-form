import React from 'react';
import icon from '../assets/images/icon-thank-you.svg';
import { motion, AnimatePresence } from 'framer-motion';


const ThankYou = () => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="h-full"
            >
                <div className="font-Ubuntu h-full   flex flex-col text-center justify-center gap-4 items-center">
                    <img src={icon} />
                    <h1 className="text-marineBlue font-[700] text-[32px]">Thank you!</h1>
                    <p className="text-coolGray">
                        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need
                        support, please feel free to email us at support@loremgaming.com.
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ThankYou;
