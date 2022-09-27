import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import PrivateRoutes from './PrivateRoutes';

const Starships = lazy(() => import('../Page/Starships'))
const Main = lazy(() => import('../Page/Main'))
const Actors = lazy(() => import('../Page/Actors'))


const MainRoutes = () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path='/main' element={<Main />}/>
            <Route path='/*' element={<Navigate to="/main" />}/>
            <Route path="/starships" element={(
            <PrivateRoutes>
                    <Starships />
                </PrivateRoutes>
                )}/>
            <Route path="/actors" element={(
                <PrivateRoutes>
                    <Actors />
                </PrivateRoutes>
            )}/>
        </Routes>
    </Suspense>
)

export default MainRoutes;