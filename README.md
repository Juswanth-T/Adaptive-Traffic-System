# How to open it locally?

## Give the following commands sequentially
(npm stands for Node Package Manager, and therefore you need Node.js installed before you can run npm commands.Follow this and install the latest version.)
- npm i
- npm install @google/generative-ai
- npm start

Once you have given these commands a new tab would have opened in your browser, from there you can use this react application.

## Adaptive Traffic Light System

This application utilizes the Google Generative AI service to analyze images and provide information about traffic light durations. Here's an overview of the key features and functionalities:

### State Management

The component uses the `useState` hook to manage various states, including:
- `imageSrc`: An array holding the source URLs of selected images.
- `imageParts`: An array storing generative parts of the selected images.
- `errorText`: Stores any error messages that may occur during the image analysis.
- `resultText`: Holds the result text obtained from the Google Generative AI service.
- `isLoading`: Indicates whether the component is in a loading state.
- `trafficLightData`: Stores parsed traffic light data obtained from the result text.

### Google Generative AI Integration

- The component initializes the Google Generative AI service using an API key.
- It sets a default prompt related to traffic light analysis.

### useEffect for ResultText Update

- Utilizes the `useEffect` hook to parse and update the `trafficLightData` state whenever `resultText` changes.

### Handling File Changes

- Implements `handleFileChange` to handle file input changes, updating `imageSrc` and `imageParts` accordingly.

### Displaying Traffic Light Information

- Renders a grid of cards for each traffic light scenario, displaying images and associated durations for red, yellow, and green lights.
- If `isLoading` is true, it displays "Loading..." for each duration.

### Submit Button

- Provides a "Submit" button triggering the `handleSubmit` function to initiate image analysis.

### Footer

- Displays a simple footer with a copyright notice.

### Usage

1. Choose four video frames each from 4 different recordings representing different directions at the same time instance.
2. Click the "Submit" button to trigger the analysis process.
3. Observe real-time analysis results, including red, yellow, and green light durations for each scenario.


This application serves as the user interface for interacting with the adaptive traffic light system, offering a visual representation of the analyzed traffic light scenarios and their corresponding durations.
