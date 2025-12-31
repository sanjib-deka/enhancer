import React from "react";

const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    return (
        <div className="w-full max-w-2xl group">
            <div className="relative p-1 rounded-[2rem] bg-gradient-to-br from-yellow-400/50 to-amber-500/50 shadow-2xl transition-all duration-500 hover:shadow-yellow-500/20">
                <div className="bg-white rounded-[1.8rem] p-8 md:p-12 overflow-hidden relative">
                    {/* Decorative pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>

                    <label
                        htmlFor="fileInput"
                        className="relative z-10 block w-full cursor-pointer border-2 border-dashed border-slate-200 rounded-3xl p-10 text-center hover:border-yellow-400 hover:bg-yellow-50/30 transition-all duration-300"
                    >
                        <input
                            type="file"
                            id="fileInput"
                            className="hidden"
                            onChange={ShowImageHandler}
                            accept="image/*"
                        />
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-1">Upload your photo</h3>
                                <p className="text-slate-500 font-medium">JPEG, PNG or WebP up to 10MB</p>
                            </div>
                            <span className="mt-4 px-6 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl shadow-lg">
                                Select File
                            </span>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;