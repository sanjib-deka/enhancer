import React from "react";
import Home from "./components/Home";
import Navbar from './components/Navbar'
const App = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-200/30 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/20 blur-[150px]"></div>
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-red-100/20 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-grow flex flex-col items-center justify-center py-16 px-4">
                    <div className="text-center mb-12 max-w-3xl">
                        <h1 className="text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            AI Image <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">Enhancer</span>
                        </h1>
                        <p className="text-xl text-slate-600 font-medium">
                            Transform your low-res photos into stunning high-quality images using advanced AI technology.
                        </p>
                    </div>

                    <Home />

                    <div className="text-sm font-semibold text-slate-400 mt-12 tracking-widest uppercase">
                        Powered By Sanjib vision
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
