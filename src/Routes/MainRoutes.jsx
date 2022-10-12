import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import StarshipItem from '../Page/StarshipItem';
import PrivateRoutes from './PrivateRoutes';

const Starships = lazy(() => import('../Page/Starships'))
const Main = lazy(() => import('../Page/Main'))
const Actors = lazy(() => import('../Page/Actors'))
const Item = lazy(() => import('../Page/Item'))
const Planets = lazy(() => import('../Page/planets'))

const Planet = lazy(() => import('../Page/Planet/Planet'))

const MainRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/*" element={<Navigate to="/main" />} />
      <Route
        path="/starships"
        element={
          <PrivateRoutes>
            <Starships />
          </PrivateRoutes>
        }
      />
      <Route
        path="/actors"
        element={
          <PrivateRoutes>
            <Actors />
          </PrivateRoutes>
        }
      />
      <Route
        path="/starships"
        element={
          <PrivateRoutes>
            <Starships />
          </PrivateRoutes>
        }
      />
      <Route
        path="/planets"
        element={
          <PrivateRoutes>
            <Planets />
          </PrivateRoutes>
        }
      />
      <Route
        path="/planet/:id"
        element={
          <PrivateRoutes>
            <Planet />
          </PrivateRoutes>
        }
      />
      <Route
        path="/actor/:id"
        element={
          <PrivateRoutes>
            <Item />
          </PrivateRoutes>
        }
      />
      <Route
        path="/starship/:id"
        element={
          <PrivateRoutes>
            <StarshipItem />
          </PrivateRoutes>
        }
      />
    </Routes>
  </Suspense>
)

export default MainRoutes;