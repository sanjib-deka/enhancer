import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const ImagePreview = ({ loading, status, uploaded, enhanced }) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (status === "Success" && enhanced) {
      setShowNotification(true);
      const timer = setTimeout(() => setShowNotification(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [status, enhanced]);

  const downloadImage = () => {
    if (!enhanced) return;
    const link = document.createElement("a");
    link.href = enhanced;
    link.download = "enhanced_image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-12 relative">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-24 right-8 z-[100] animate-bounce-in">
          <div className="bg-slate-900 border border-slate-700 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm">Image Enhanced!</p>
              <p className="text-slate-400 text-xs text-nowrap">Your image is ready for download.</p>
            </div>
            <button onClick={() => setShowNotification(false)} className="text-slate-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Original Image Card */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white border border-slate-200 rounded-[2.2rem] overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-xl">
            <div className="px-8 py-5 border-b border-slate-100 flex items-center justify-between">
              <span className="font-bold text-slate-400 text-sm tracking-widest uppercase">Input</span>
              <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-500 rounded-full">Original</span>
            </div>
            <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center overflow-hidden">
              {uploaded ? (
                <img
                  src={uploaded}
                  alt="Original Upload"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="text-slate-300 flex flex-col items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-medium">Waiting for upload...</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Image Card */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white border border-amber-100 rounded-[2.2rem] overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-2xl">
            <div className="px-8 py-5 border-b border-amber-50 flex items-center justify-between">
              <span className="font-bold text-amber-500 text-sm tracking-widest uppercase">Output</span>
              <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 rounded-full animate-pulse">AI Enhanced</span>
            </div>
            <div className="aspect-[4/3] bg-amber-50/30 flex items-center justify-center overflow-hidden">
              {enhanced && !loading ? (
                <div className="relative w-full h-full group/enhanced">
                  <img
                    src={enhanced}
                    alt="Enhanced Output"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover/enhanced:scale-105"
                  />
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover/enhanced:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={downloadImage}
                      className="px-6 py-3 bg-slate-900 text-white font-bold rounded-2xl shadow-2xl flex items-center gap-2 hover:bg-slate-800 transform hover:-translate-y-1 transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </button>
                  </div>
                </div>
              ) : loading ? (
                <Loading status={status} />
              ) : (
                <div className="text-amber-200 flex flex-col items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="font-medium text-amber-300/50">Enhanced preview here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;