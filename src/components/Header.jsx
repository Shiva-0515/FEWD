// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="text-white fixed top-0 w-full shadow z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//         <h1 className="text-2xl text-center font-bold">My WebSite</h1>
//         <nav>
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:underline">Home</Link></li>
//             <li><Link to="/About" className="hover:underline">About</Link></li>
//             <li><Link to="/Contact" className="hover:underline">Contact</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 py-2 my-2">
        <h1 className="">My WebSite</h1>
      <nav>
        <ul className="flex justify-between py-4 my-4">
          <li><a href="/Home" >Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;