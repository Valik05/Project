import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import { extractId } from '../helpers/extractId';
import useFetchActors from '../hooks/useFetchActors';
import "./actors.css"
const Actors = () => {
    const itemsEls = useRef([])
    const { actors, loading } = useFetchActors(itemsEls)
    const navigate = useNavigate();
    
  if (loading) return <Loader />
  const handleClick = (url) => {
   const id = extractId(url)
    navigate(`/actor/${id}`)
  }
    return (
        <div>
      <ul style={{ color: 'white' }} className="actor-list">
        {actors.map(({name, url}) => {
            return <li key={name} className="actor-item" onClick={() => handleClick(url)}>{name}</li>
        })}
        <div ref={itemsEls}></div>
        {loading ? <Loader /> : null}
      </ul>
        </div>
    );
};

export default Actors;