import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import { useFetchPilot } from '../../hooks/useFetchPilot';
import '../../Page/starship.css'
import { extractId } from '../../helpers/extractId';
import { Link } from 'react-router-dom';
const Actor = ({ item }) => {

    const { person, loadingActor } = useFetchPilot(item);
    if (loadingActor) return <Loader />
    return (
        <div>
            {person.length > 0 ?
                <div className="section">
                    <h3 className='section__header'>Pilots</h3>
                    <ul className='section__list'>
                        {person.map(({ name, height, mass, hair_color, eye_color, birth_year, gender, url }) => (
                            <li className="section__item" key={url}>
                                <Link to={`/actor/${extractId(url)}`}><p className="section__title" key={name}>{name}</p></Link>
                                <p className="section__episode_id" key={height}>Height: {height}</p>
                                <p className="section__director" key={mass}>Mass: {mass}</p>
                                <p className="section__producer" key={hair_color}>Hair color: {hair_color}</p>
                                <p className="section__release_date" key={eye_color}>Eye color: {eye_color}</p>
                                <p className="section__release_date" key={birth_year}>Birth year: {birth_year}</p>
                                <p className="section__release_date" key={gender}>Gender: {gender}</p>
                            </li>
                        ))}
                    </ul>
                </div> : null}
        </div>
    );
};
Actor.propTypes = {
    children: PropTypes.any,
    item: PropTypes.object,
}

export default Actor;