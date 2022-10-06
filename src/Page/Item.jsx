import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Films from '../Components/Films/Films';
import Loader from '../Components/Loader/Loader';
import Starship from '../Components/Starship/Starship';
import { useFetchActor } from '../hooks/useFetchActor';
import './Item.css'
const Item = () => {
    const { id } = useParams();
    const { person, loading, error } = useFetchActor(id)
   
    if (loading) return <Loader />

    const { name, height, mass, hair_color, eye_color, gender, birth_year } = person;
    return (
        <div className='details'>
            <div className="actor">
                <h3>{name}</h3>
                <div className="actor__details">
                    <div>
                        <p className="actor__detail">Height: {height}</p>
                        <p className="actor__detail">Mass: {mass}</p>
                        <p className="actor__detail">Hair color: {hair_color}</p>
                    </div>
                    <div>
                        <p className="actor__detail">Eye color: {eye_color}</p>
                        <p className="actor__detail">Birth year: {birth_year}</p>
                        <p className="actor__detail">Gender: {gender}</p>
                    </div>
                </div>
            </div>
            <Starship person={person}/>
            <Films person={person}/>
        </div>
    );
};

export default Item;