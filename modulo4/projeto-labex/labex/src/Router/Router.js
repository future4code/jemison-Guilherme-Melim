import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdmHome } from '../Paginas/AdmHome/AdmHomePage';
import { ApplicFormes } from '../Paginas/ApplicForm/ApplicFormPage';
import { CreatTrip } from '../Paginas/CreatTrip/CreatTripPage';
import { Erro } from './Erro';
import {Home} from '../Paginas/Home/HomePage'
import { ListTrips } from '../Paginas/ListTrips/ListTripsPage';
import { Login } from '../Paginas/Login/LoginPage';
import { TripDetails } from '../Paginas/TripDetails/TripDetailsPage';

// rotas
export function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <Home /> } />
            <Route path='trips/list' element={<ListTrips/>} />
            <Route path='/trips/list/trips/application' element={<ApplicFormes/>}/>
            <Route path='login' element={<Login/>} />
            <Route path='admin/trips/list' element={<AdmHome/>} />
            <Route path='admin/trips/creat' element={<CreatTrip/>} />
            <Route path='admin/trips/:id' element={<TripDetails/>} />
            <Route path='*' element={<Erro/>}/>
        </Routes>
    </BrowserRouter>
  );
}