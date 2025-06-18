import React from "react";
import Home1 from "./HomeChild1";
import Home2 from "./HomeChild2";

const Home = () => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Home Page</h2>
            <p className="text-gray-700 mb-4">
                This is the home page of our application.
            </p>
            <Home1 />
            <Home2 />
        </>
    );
}
export default Home;