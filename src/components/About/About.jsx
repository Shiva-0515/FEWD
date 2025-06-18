import React from "react";
import About1 from "./AboutChild1";
import About2 from "./AboutChild2";

const About = () => {
    return (
        <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">About Page</h2>
        <p className="text-gray-700 mb-4">
            This is the About page of the application.
        </p>
        <About1 />
        <About2 />
        </div>
    );
    }
export default About;

// const About