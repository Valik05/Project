import React from 'react';
import { useParams } from 'react-router-dom';
import Films from '../../Components/Films/Films';
import Loader from '../../Components/Loader/Loader';
import { useFetchImg } from '../../hooks/useFetchImg';
import { useFetchPlanet } from '../../hooks/useFetchPlanet';
import './Planet.css'
const Planet = () => {
    const { id } = useParams()
    const { planet, loading } = useFetchPlanet(id)
    const { img, error, loadingImg } = useFetchImg(id, 'planets')
    
    if(loading) return <Loader/>
    return (
      <div className="details">
        <div className="details__image">
          {loadingImg ? (
            <Loader />
          ) : !error ? (
            <img style={{ width: '400px' }} src={img} alt="" />
          ) : (
            <img
              src="https://star-wars-clone.netlify.app/static/media/default.cc7f977f0b8c8f9ec1da.jpg"
              alt=""
            />
          )}
        </div>
        <div className="actor">
          <h3>{planet.name}</h3>
          <div className="actor__details">
            <div>
              <p className="actor__detail">Climate: {planet.climate}</p>
              <p className="actor__detail">diameter: {planet.diameter}</p>
            </div>
            <div>
              <p className="actor__detail">
                rotation period: {planet.rotation_period}
              </p>
            </div>
          </div>
        </div>
        <Films item={planet} />
      </div>
    )
};

export default Planet;