import React from "react";

const Loading = ({ status = "Processing" }) => {
    return (
        <div className="flex flex-col justify-center items-center h-full gap-8 p-12">
            <div className="relative">
                {/* Outer Ring */}
                <div className="w-24 h-24 rounded-full border-4 border-slate-100 border-t-yellow-400 animate-spin"></div>

                {/* Inner Pulse */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-full animate-ping"></div>
                </div>

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>

            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-800 animate-pulse">{status}...</h3>
                <p className="text-slate-500 font-medium">Sit tight, our AI is working its magic.</p>
            </div>
        </div>
    );
};

export default Loading;