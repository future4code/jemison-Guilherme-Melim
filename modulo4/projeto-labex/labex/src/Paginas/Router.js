import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdmHome } from './AdmHome/AdmHomePage';
import { ApplicFormes } from './ApplicForm/ApplicFormPage';
import { CreatTrip } from './CreatTrip/CreatTripPage';
import { Erro } from './Erro';
import {Home} from './Home/HomePage'
import { ListTrips } from './ListTrips/ListTripsPage';
import { Login } from './Login/LoginPage';
import { TripDetails } from './TripDetails/TripDetailsPage';

// rotas
export function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <Home /> } />
            <Route path='trips/list' element={<ListTrips/>} />
            <Route path='trips/application' element={<ApplicFormes/>}/>
            <Route path='login' element={<Login/>} />
            <Route path='admin/trips/list' element={<AdmHome/>} />
            <Route path='admin/trips/creat' element={<CreatTrip/>} />
            <Route path='admin/trips/:id' element={<TripDetails/>} />
            <Route path='*' element={<Erro/>}/>
        </Routes>
    </BrowserRouter>
  );
}