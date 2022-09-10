import React from "react";
import { checkIfAuthenticated } from "../utils/auth";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({children}) => {
  if (!checkIfAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute

// import React from "react";
// import { Routes,Route, Navigate } from "react-router-dom";
// import { checkIfAuthenticated } from "../utils/auth";

// const ProtectedRoute = ({ component: Component, type, ...rest }) => {

//     return (

//         <Route
//             {...rest}
//             render={props => {
//                 if (checkIfAuthenticated()) {
//                     return <Component {...props} />;
//                 } else {
//                     return (
//                         <Navigate replace
//                             to={{
//                                 pathname: "/login",
//                                 state: {
//                                     from: props.location
//                                 }
//                             }}
//                         />
//                     );
//                 }
//             }}
//         />

//     );
// };

// export default ProtectedRoute;
