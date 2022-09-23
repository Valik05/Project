import React, { useRef } from 'react';
import Loader from '../Components/Loader/Loader';
import useFetchActors from '../hooks/useFetchActors';
import "./actors.css"
const Actors = () => {
    const itemsEls = useRef([])
    const { actors, loading } = useFetchActors(itemsEls)
   
    
  if (loading) <Loader />
  
    return (
        <div>
      <ul style={{ color: 'white' }} className="actor-list">
        {actors.map((item) => {
            return <li key={item.name} className="actor-item">{item.name}</li>
        })}
        <div ref={itemsEls}></div>
        {loading ? <Loader /> : null}
      </ul>
        </div>
    );
};

export default Actors;