import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage'
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage'
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export default function Router(){
    return(
        <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<HomePage />}/>
              <Route exact path='/trips/list' element={<ListTripsPage />}/>
              <Route exact path='/trips/application' element={<ApplicationFormPage />}/>
              <Route exact path='/login' element={<LoginPage />}/>
              <Route exact path='/admin/trips/list' element={<AdminHomePage />}/>
              <Route exact path='/admin/trips/create' element={<CreateTripPage />}/>
              <Route exact path='/admin/trips/details/:id' element={<TripDetailsPage />}/>
              <Route path='*' element={<ErrorPage />}/>
          </Routes>
        </BrowserRouter>
    )
}