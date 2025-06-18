import React from "react";  
import Contact1 from "./ContactChild1";
import Contact2 from "./ContactChild2";

const Contact = () => {
    return (
       <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Page</h2>
        <p className="text-gray-700 mb-4">
            This is the Contact page of the application.
        </p>
        <Contact1 />
        <Contact2 />
        </div>
    );
}
export default Contact;
