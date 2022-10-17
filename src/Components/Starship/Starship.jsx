import React from 'react';
import { useFetchStarship } from '../../hooks/useFetchStarship';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';
import { extractId } from '../../helpers/extractId';
import { Link } from 'react-router-dom';
const Starship = ({ person }) => {
    const { starships, loadingStarships } = useFetchStarship(person)
    if (loadingStarships) return <Loader />
    return (
        <div>
            {starships.length > 0 ?
                <div className="section">
                    <h3 className='section__header'>Starships</h3>
                    <ul className='section__list'>
                        {starships.map(({ url, name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew }) => (
                            <li className="section__item" key={url}>
                                <Link to={`/starship/${extractId(url)}`}><p className="section__name" key={url}>{name}</p></Link>
                                <p className="section__model" key={url}>Model: {model}</p>
                                <p className="section__manufacturer" key={url}>Manufacturer: {manufacturer}</p>
                                <p className="section__cost_in_credits" key={url}>Cost in credits: {cost_in_credits}</p>
                                <p className="section__length" key={url}>Length: {length}</p>
                                <p className="section__max_atmosphering_speed" key={url}>Max atmosphering speed: {max_atmosphering_speed}</p>
                                <p className="section__crew" key={url}>Crew: {crew}</p>
                            </li>
                        ))}
                    </ul>
                </div> : null}
        </div>
    );
};
Starship.propTypes = {
    children: PropTypes.any,
    person: PropTypes.object
};

export default Starship;