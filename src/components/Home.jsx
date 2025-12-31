import ImageUpload from "./UploadImage.jsx";
import ImagePreview from "./ImagePreview.jsx";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhanceImageApi";

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setloading] = useState(false);
    const [status, setStatus] = useState("");

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setEnhancedImage(null); // Clear previous
        setloading(true);
        setStatus("Starting");

        try {
            const enhancedURL = await enhancedImageAPI(file, (newStatus) => {
                setStatus(newStatus);
            });
            setEnhancedImage(enhancedURL);
            setloading(false);
            setStatus("Success");
        } catch (error) {
            console.log(error);
            setloading(false);
            setStatus("Error");
            alert("Error while enhancing the image. Please try again later.");
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="flex justify-center mb-16">
                <ImageUpload UploadImageHandler={UploadImageHandler} />
            </div>

            <ImagePreview
                loading={loading}
                status={status}
                uploaded={uploadImage}
                enhanced={enhancedImage?.image}
            />
        </div>
    );
};

export default Home;