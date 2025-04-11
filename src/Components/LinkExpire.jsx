import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router';

const LinkExpire = ({ setValue, navigateTo }) => {
    const [closing, setClosing] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const timer = setTimeout(() => {
            handleClose(); // Auto-close after 3 seconds
        }, 5000);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleClose = () => {
        if (closing) return; // Prevent multiple calls
        setClosing(true);
        setTimeout(() => {
            setValue(false);
            navigate(navigateTo);
        }, 300);
    };


    return (
        <div className={`fixed top-0 left-0 z-50 w-screen h-screen bg-[rgba(0,0,0,0.5)] modal-overlay ${closing ? 'hide' : ''}`}>
            <div className="w-full h-full flex justify-center items-center px-3">
                <div className={`w-[600px] bg-white h-[395px] relative overflow-hidden rounded-3xl modal-content ${closing ? 'hide' : ''}`}>
                    <div className="bottom-[calc(100%-125px)] absolute w-[850px] h-[850px] rounded-full bg-circle overflow-hidden z-[0]"></div>
                    <div className="bottom-[calc(100%-118px)] right-[calc(100%-250px)] absolute w-[400px] h-[400px] rounded-full bg-circle overflow-hidden z-[0]"></div>
                    <div className="w-full h-full flex justify-center py-15 absolute top-0 left-0">
                        <div className='flex flex-col items-center h-auto'>
                            <div className="right-icon font-bold w-[110px] h-[110px] bg-primary rounded-full flex justify-center items-center text-6xl text-white">
                                <IoCloseSharp />
                            </div>
                            <h3 className='mt-6 text-[30px] font-semibold'>Oops, This Link Is Expired!</h3>
                            <p className='text-[#7B7B7B] my-1'>This URL is not valid anymore.</p>

                            <button
                                onClick={handleClose}
                                className='mt-5 bg-primary rounded-md px-5 py-2 text-white text-[18px] font-semibold tracking-wider'>
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkExpire;
