import './App.css';
import AdminBooking from './component/AdminBooking';
import BookingHist from './component/BookingHist';
import AdminNavbar from './component/AdminNavbar';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import AddTour from './component/AddTour';
import { ToastContainer } from 'react-toastify';
import LogIn from './component/LogIn';
import Reviews from './component/Reviews';

function App() {
  return (
    <>
    <Switch>
      <React.Fragment>
        <AdminNavbar/>
        <ToastContainer/>
        <Route exact path ="/"><AdminBooking/></Route>
        <Route exact path ="/update/:id"><AddTour/></Route>
        <Route exact path ="/bookings"><BookingHist/></Route>
        <Route exact path ="/addtour"><AddTour/></Route>
        <Route exact path ="/login"><LogIn/></Route>
        <Route exact path ="/review"><Reviews/></Route>
      </React.Fragment>
    </Switch>
    </>
  );
}

export default App;
