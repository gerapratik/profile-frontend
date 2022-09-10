import React from "react";
import { checkIfAuthenticated } from "../utils/auth";
import { Navigate } from "react-router-dom";
const PublicRoute = ({children}) => {
  if (checkIfAuthenticated()) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoute














// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import { checkIfAuthenticated } from "../utils/auth";

// const PublicRoute = ({ component: Component, type, ...rest }) => {

//     return (
//         <Route
//             {...rest}
//             render={props => {
//                 if (checkIfAuthenticated()) {
//                     return (
//                         <Navigate replace
//                             to={{
//                                 pathname: "/",
//                                 state: {
//                                     from: props.location
//                                 }
//                             }}
//                         />
//                     );
//                 } else {
//                     return <Component {...props} />;
//                 }
//             }}
//         />
//     );
// };

// export default PublicRoute;