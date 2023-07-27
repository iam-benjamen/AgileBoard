// import firebase from "firebase/compat/app";
// import React from "react";
// import { Route, RouteProps } from "react-router-dom";

// interface PrivateRouteProps extends RouteProps{
//     isAuthenticated:boolean,
//     authenticatedPath:string
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({...rest }) => {
//     const currentUser = firebase.auth().currentUser;

//     return ( 
//         <Route
//         {...rest}
//         render={(props) => currentUser? <Component {...props/>:<Redirect/>}
//         />
//      );
// }
 
// export default PrivateRoute;