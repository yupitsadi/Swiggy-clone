import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// const RestrauntCard = ({restaurant})=>{
//   const {name, cuisines, cloudinaryImageId, avgRating} = restaurant.info;
//     return(
//         <div className="card">
//             <img src={IMG_URl + cloudinaryImageId}/>
//             <h3>{name}</h3>
//             <h4>{cuisines.join(", ")}</h4>
//             <h4>{avgRating} stars</h4>
//         </div>
//     );
// };

// const Body = () => {
//   return (
//       <div className="resturant-list">
//           {RestrauntList.map((restaurant, index) => (
//               <RestrauntCard key={index} restaurant={restaurant}/>
//           ))}
//       </div>
//   );
// };

function Footer() {
  return (
    <>
    </>
  );
};

const AppLayout = () =>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);