import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Booking from "./components/Booking/Booking";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import CheckoutRoom from "./components/CheckoutRoom/CheckoutRoom";
import SignUp from "./components/SignUp/SignUp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [booking, setBooking]=useState({
    name:"",
    about:"",
    isBooking:false,
    id:""     
  })
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, booking, setBooking]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/booking/:bookingId">
          <Booking/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/notFound">
          <NotFound />
        </Route>
        <PrivateRoute path="/checkoutRoom">
          <CheckoutRoom/>
        </PrivateRoute>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
