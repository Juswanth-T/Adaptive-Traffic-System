// import React, { useState, useRef, useEffect } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import "./animation.css";
// import logo from "./asset/logo.webp";

// const API_KEY = process.env.REACT_APP_API_KEY;

// function GenAIComponent() {
//   const [file, setFile] = useState(null);
//   const [resultText, setResultText] = useState("");
//   const [errorText, setErrorText] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [imageSrc, setImageSrc] = useState(null);

//   const prompt =
//     "Based on the number of people in the image say how much time should I on traffic red signal (As a traffic police) and why?";

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setFile(file);

//       const reader = new FileReader();

//       reader.onloadend = () => {
//         setImageSrc(reader.result);
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   const genAI = new GoogleGenerativeAI(API_KEY);

//   const handleSubmit = async () => {
//     if (imageSrc) {
//       setIsLoading(true);
//       try {
//         const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
//         const imageParts = await Promise.all([fileToGenerativePart(file)]);
//         const result = await model.generateContent([prompt, ...imageParts]);
//         const response = await result.response;
//         const text = response.text();
//         setResultText(text);
//       } catch (error) {
//         console.error("Error:", error);
//         setErrorText(error);
//       } finally {
//         setIsLoading(false);
//       }
//     } else alert("No image uploaded, try again!");
//   };

//   const fileToGenerativePart = async (file) => {
//     const base64EncodedDataPromise = new Promise((resolve) => {
//       const reader = new FileReader();
//       reader.onloadend = () => resolve(reader.result.split(",")[1]);
//       reader.readAsDataURL(file);
//     });
//     return {
//       inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
//     };
//   };

//   return (
//     <div className="  h-screen bg-gradient-to-r from-violet-200 to-pink-200 text-white p-4">
//       <div className="w-full">
//         <div className="flex items-center mb-4">
//           <img
//             className="rounded-full w-[3rem] h-[3rem]"
//             alt="logo"
//             src={logo}
//           />
//           <h2 className="text-2xl text-black font-bold ml-4">
//             Adaptive traffic light system
//           </h2>
//         </div>
//         <div className="flex  mx-auto items-center justify-center h-[60vh] bg-gradient-to-r from-violet-300 to-pink-300  shadow-ring p-4 rounded-lg shadow-lg w-[70vw]">
//           {!imageSrc && (
//             <label
//               htmlFor="ImageInput"
//               className="mb-1 p-3 rounded-md bg-blue-500 text-white cursor-pointer"
//             >
//               Choose Image
//             </label>
//           )}

//           <input
//             id="ImageInput"
//             type="file"
//             onChange={handleFileChange}
//             className="hidden"
//           />
//           {imageSrc && (
//             <img
//               src={imageSrc}
//               className=" flex h-[55vh] w-[55vw]  object-contain"
//             />
//           )}

//           {imageSrc && (
//             <div className="">
//               <button
//                 onClick={handleSubmit}
//                 className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 Submit
//               </button>
//             </div>
//           )}
//         </div>

//           <div className=" mt-5 mx-auto bg-gradient-to-r from-violet-300 to-pink-300 shadow-lg p-4  rounded-lg w-[75vw] h-[26vh] flex items-center justify-center ">
//             {!isLoading && (
//               <p className="text-lg text-black font-bold">{resultText}</p>
//             )}
//           {isLoading && (
//               <div className="flex gap-5 items-center justify-center ">

//                 <div className=" text-black font-bold text-2xl">Loading</div>
//                 <div className="loader"></div>

//               </div>
//             )}
//           {!isLoading && resultText==="" &&  (
//             <div  className="text-black font-bold text-2xl">
//               Results will be displayed here 😊
//             </div>
//           )}
//             {errorText && <p className="text-lg text-red ">{errorText}</p>}

//           </div>

//       </div>
//     </div>
//   );
// }

// export default GenAIComponent;


import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react";
import logo from "./asset/logo.webp";
function Layout() {
    const [imageSrc, setImageSrc] = useState([]);
    const [imageParts,setImageParts] =  useState([]);
    const [errorText, setErrorText] = useState("");
    const [resultText, setResultText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [trafficLightData, setTrafficLightData] = useState([]);
    const prompt = "4 images at the junction of road are given, each representing a unique direction and the images are synchronised to the same time instance. Give the duration (in seconds) of red/yellow/green light to be shown. Return answer as JSON -> ['image_number' : '', 'red_duration' : '', 'yellow_duration' : '','green_duration' : ''] "
    const API_KEY = process.env.REACT_APP_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);


    useEffect (()=>{
     if(resultText) setTrafficLightData(JSON.parse(resultText));
    },[resultText])
  


    const handleSubmit = async () => {
 
        setIsLoading(true);
        try {
          const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
          const result = await model.generateContent([prompt,imageParts,
          ]);
          const response = await result.response;
          const text = response.text();
          setResultText(text);
        } catch (error) {
          console.error("Error:", error);
          setErrorText(error);
        } finally {
          setIsLoading(false);
        }
      } 


    const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageSrc((prevImageSrc) => [...prevImageSrc, reader.result]);
      };
      reader.readAsDataURL(file);
    }
    try {
      const generativePart = await fileToGenerativePart(file);
      setImageParts((prevImageParts) => [...prevImageParts, generativePart]);
    } catch (error) {
      console.error("Error handling file change:", error);
      alert("Error, Please retry again");
    }
    console.log(imageParts);
  };
  const rest = [1,2,3,4]

  const fileToGenerativePart = async (file) => {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  };





  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <div className="flex items-center  py-4 px-6 mb-4">
        <h1 className="text-3xl font-bold text-blue-500">
          Adaptive traffic light system
        </h1>
        <div className="flex items-center ml-[13rem] gap-4">
          <img
            className="rounded-full w-[3rem] h-[3rem]"
            alt="logo"
            src={logo}
          />
          <img
            className="rounded-full w-[3rem] h-[3rem]"
            alt="logo"
            src={logo}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

      {resultText ==='' && rest.map((index) =>(
        
          <div key={index-1} className="rounded-lg p-4 shadow-md border border-indigo-600">
          <div className="bg-gradient-to-r from-blue-300 to-blue-400 h-64 w-full  rounded-lg p-4 shadow-md">

          {!imageSrc[index-1] && (
              <label
                htmlFor={`ImageInput${index-1}`}
                className="mb-1 p-3 rounded-md bg-blue-500 text-white cursor-pointer"
              >
                Choose Image
              </label>
            )}
            <input
              id={`ImageInput${index-1}`}
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
            {imageSrc[index-1] && (
              <img src={imageSrc[index-1]} 
              className="w-full h-full rounded-lg"
              alt={`Traffic Light ${index + 1}`} />
            )}

          </div>
          <div className="bg-gray-100 p-4">
            <div className="flex gap-9">
              <h3 className="text-center text-xl font-bold">Red </h3>
              <span className="text-lg ">: {isLoading ? 'Loading...':'Null'} </span>
            </div>
            <div className="flex gap-3">
              <h3 className="text-center text-xl font-bold">Yellow </h3>
              <span className="text-lg ">: {isLoading ? 'Loading...':'Null'}  </span>
            </div>
            <div className="flex gap-4">
              <h3 className="text-center text-xl font-bold">Green </h3>
              <span className="text-lg ">: {isLoading ? 'Loading...':'Null'} </span>
            </div>
          </div>
        </div>
      )
    
      )}


      {resultText && trafficLightData.map((light, index) => (
        <div key={index} className="rounded-lg p-4 shadow-md border border-indigo-600">
          <div className="bg-gradient-to-r from-blue-300 to-blue-400 h-64 w-full rounded-lg p-4 shadow-md">
          {imageSrc[index] && (
              <img src={imageSrc[index]}
                className="w-full h-full rounded-lg"
               alt={`Traffic Light ${index + 1}`} />
          )}
          </div>
          <div className="bg-gray-100 p-4">
            <div className="flex gap-9">
              <h3 className="text-center text-xl font-bold">Red </h3>
              <span className="text-lg ">: {isLoading ? 'Loading...' : ` ${light.red_duration} seconds`}</span>
            </div>
            <div className="flex gap-3">
              <h3 className="text-center text-xl font-bold">Yellow </h3>
              <span className="text-lg ">: {isLoading ? 'Loading...' : ` ${light.yellow_duration} seconds`} </span>
            </div>
            <div className="flex gap-4">
              <h3 className="text-center text-xl font-bold">Green </h3>
              <span className="text-lg ">: {isLoading ? 'Loading...' : ` ${light.green_duration} seconds`}</span>
            </div>
          </div>
        </div>
      ))}


        
    </div>
    <div className="flex justify-center p-10">
    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800" onClick={handleSubmit}>Submit</button>
    </div>

      <footer className="mt-[80px] py-4 px-6 bg-gray-200 text-center">
        <p>&copy; 2024 Caliche</p>
      </footer>
    </div>
  );
}

export default Layout;
