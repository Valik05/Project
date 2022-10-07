import React from 'react';
import { useFetchStarship } from '../../hooks/useFetchStarship';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';
const Starship = ({ person }) => {
    const { starships, loadingStarships } = useFetchStarship(person)
    console.log(starships);
    if (loadingStarships) return <Loader />
    return (
        <div className="section">
            <h3 className='section__header'>Starships</h3>
            <ul className='section__list'>
                {starships.length > 0 ? starships.map(({ url, name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew}) => (
                    <li className="section__item" key={url}>
                        <p className="section__name" key={url}>{name}</p>
                        <p className="section__model" key={url}>Model: {model}</p>
                        <p className="section__manufacturer" key={url}>Manufacturer: {manufacturer}</p>
                        <p className="section__cost_in_credits" key={url}>Cost in credits: {cost_in_credits}</p>
                        <p className="section__length" key={url}>Length: {length}</p>
                        <p className="section__max_atmosphering_speed" key={url}>Max atmosphering speed: {max_atmosphering_speed}</p>
                        <p className="section__crew" key={url}>Crew: {crew}</p>
                    </li>
                )) : null}
            </ul>
        </div>
    );
};
Starship.propTypes = {
    children: PropTypes.any,
    person: PropTypes.array
};

export default Starship;