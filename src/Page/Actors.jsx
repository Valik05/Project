import React, {useContext, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import { extractId } from '../helpers/extractId';
import useFetchActors from '../hooks/useFetchActors';
import "./actors.css"
import {SearchContext} from "../context/search-context";
const Actors = () => {
    const itemsEls = useRef([]);
    const search = useContext(SearchContext);
   const { actors, loading, next, backToTop } = useFetchActors(itemsEls, search.query);
    const navigate = useNavigate(); 
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
        {!next ? (
          <div className="btn-on-bottom">
        <button type="button" className="view_button" onClick={backToTop} >
                  BACK TO TOP
        </button>
        </div>
      ) : null}
      </ul>
        </div>
    );
};

export default Actors;