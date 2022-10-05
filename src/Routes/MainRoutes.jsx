import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import Item from '../Page/Item';
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
            <Route path="/actor/:id" element={(
                <PrivateRoutes>
                    <Item />
                </PrivateRoutes>
            )}/>
        </Routes>
    </Suspense>
)

export default MainRoutes;